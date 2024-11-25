import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import parse from 'html-react-parser';
import PostInDB from '../Appwrite/posts';
import noImg from "../assets/noImg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/authContext';

function Blog() {
   const {state: {postData}} =  useLocation()
   const [isUser, setIsUser] = useContext(AuthContext)

   const navigate = useNavigate();

   useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleDelete = async () => {
    const response =await PostInDB.deletePost(postData.$id)
    if(response){
      navigate(`/user/${postData.authorId}`)
    }
  }
   
  return (
    <div className='bg-secondary min-h-screen flex p-4 sm:p-8 justify-center'>
        <div className='lg:w-8/12 sm:w-11/12 w-12/12 h-full p-8 flex flex-col gap-5 bg-white'>

            {
              isUser && isUser.$id === postData.authorId &&
              <div className='w-full sm:text-sm text-xs flex sm:justify-end justify-center items-center gap-4 text-white'>
                <Link to={`/update/${postData.$id}`} state={{initialState: postData}} className='p-2 bg-cyan-600 hover:bg-cyan-700 rounded-sm '><FontAwesomeIcon icon={faPenToSquare} />Edit</Link>
                <button onClick={handleDelete} className='p-2 bg-cyan-600 hover:bg-cyan-700 rounded-sm'><FontAwesomeIcon icon={faTrashCan} /> Delete</button>
              </div>
            }

            <div className='font-bold border-b-2 pb-5'>
              <div className='sm:text-3xl text-2xl text-start mb-4 cursor-default'>
                <h1>{postData.title}</h1>
              </div>
              <div>
                <p className='text-sm text-red-500 cursor-default'>Author: {postData.authorName}</p>
              </div>
            </div>
            <div className='lg:w-10/12 flex items-center justify-center w-full min-w-[250px] max-h-96 m-auto overflow-hidden'>
                {
                  postData.imageId ?
                    <img className='object-contain' src={PostInDB.getFilePreview(postData.imageId)} alt="" />
                     : <img className='h-40 opacity-20' src={noImg} alt="" />
                }
            </div>

            {/* <div className="prose" dangerouslySetInnerHTML={{ __html: postData.content }} /> */}
            <div className="prose max-w-none border-t-2 pt-10 cursor-default">
              {parse(postData.content)}
            </div>
        </div>
    </div>
  )
}

export default Blog
