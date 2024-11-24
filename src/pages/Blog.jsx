import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import parse from 'html-react-parser';
import PostInDB from '../Appwrite/posts';
import noImg from "../assets/noImg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/authContext';

function Blog() {
   const {state: {postData}} =  useLocation()
   const [isUser, setIsUser] = useContext(AuthContext)

   console.log("ok- ", isUser.$id === postData.authorId);
   

   useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleDelete = async () => {
    const response =await PostInDB.deletePost(postData.$id)
    console.log(response);
    
    if(response){
      // navigate
    }
  }
   
  return (
    <div className='bg-secondary min-h-screen flex p-4 sm:p-8 justify-center'>
        <div className='lg:w-8/12 sm:w-11/12 w-12/12 h-full p-8 flex flex-col gap-5 bg-white'>

            {
              isUser.$id === postData.authorId &&
              <div className='w-full sm:text-sm text-xs flex sm:justify-end justify-center items-center gap-4 text-white'>
                <Link to={`/update/${postData.$id}`} state={{initialState: postData}} className='p-2 bg-cyan-600 hover:bg-cyan-700 rounded-sm '><FontAwesomeIcon icon={faPenToSquare} />Edit</Link>
                <button onClick={handleDelete} className='p-2 bg-cyan-600 hover:bg-cyan-700 rounded-sm'><FontAwesomeIcon icon={faTrashCan} /> Delete</button>
              </div>
            }

            <div className='sm:text-3xl text-2xl text-center font-bold border-b-2 pb-5'>
                <h1>{postData.title}</h1>
            </div>
            <div className='lg:w-10/12 flex items-center justify-center w-full min-w-[250px] max-h-96 m-auto overflow-hidden'>
                {
                  postData.imageId ?
                    <img className='object-contain' src={PostInDB.getFilePreview(postData.imageId)} alt="" />
                     : <img className='h-40 opacity-20' src={noImg} alt="" />
                }
            </div>

            {/* <div className="prose" dangerouslySetInnerHTML={{ __html: postData.content }} /> */}
            <div className="prose max-w-none border-t-2 pt-10">
              {parse(postData.content)}
            </div>
        </div>
    </div>
  )
}

export default Blog