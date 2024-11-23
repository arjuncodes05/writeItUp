import React, { useEffect, useState } from 'react';
import RTE from '../components/Tinymce/RTE';
import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostInDB from '../Appwrite/posts';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


export default function CreateBlog() {

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('')
  const [initialValue, setInitialValue] = useState("")
  const [thumbnail, setThumbnail] = useState()
  const [category, setCategory] = useState('Select a category');
  const [content, setContent] = useState('<H1>Hello World</h1>')

  const navigate = useNavigate();

  const handleEditorChange = (newContent) => {
    setContent(newContent);    
  };

  // let {postId} = useParams()
  const ifUpdate = useLocation()
  let [initialState, setInitialState] = useState('');
  useEffect(() => {
    if(ifUpdate.pathname.includes('/update/')){
      const {state: {initialState}} = ifUpdate
      setTitle(initialState.title)
      setCategory(initialState.category)
      setInitialValue(initialState.content)
      setInitialState(initialState);
    }
  }, [])

  const handleCategroy = (e) => {
    setCategory(e.target.value)
    setIsOpen(false)
  }

  const handleSubmitPost = async (e) => {
    e.preventDefault()    

    let response = ''

    if(ifUpdate.pathname.includes('/update/')){
      if(thumbnail){
        const {$id: imageId} = await PostInDB.uploadImage(thumbnail) 
        response = await PostInDB.updatePost(initialState.$id, {title, category, content, imageId})
      } else {
        response = await PostInDB.updatePost(initialState.$id, {title, category, content})
      }
    } else if(ifUpdate.pathname.includes('/create/new')) {
        const {$id: imageId} = await PostInDB.uploadImage(thumbnail) 
        response = await PostInDB.createPost(title, category, content, imageId)
      }
    navigate('/blog', {state: {postData: response}})
  }


  return (
    <div className='p-8 bg-primary'>
      <form onSubmit={(e) => handleSubmitPost(e)} action="" className='flex flex-col justify-center gap-3'>
        <div className='flex flex-col font-semibold'>
          <label className='text-md' htmlFor="title">Title</label>
          <input onChange={(e) => setTitle(e.target.value)} value={title} className='border-2 rounded-md p-2' type="text" placeholder='Enter a title' />
        </div>
        <hr />
        <div className='flex flex-col gap-2 font-semibold'>
          <label className='text-md' htmlFor="thumbnail">Thumbnail {ifUpdate.pathname.includes('/update/') && <span className='text-sm ml-2 text-red-500'>(skip this if you don't want to change the image)</span> }</label>
          <input
             accept="image/png, image/jpg, image/jpeg, image/gif"
            onChange={(e) => setThumbnail(e.target.files[0])
            } className='w-60 md:w-4/12 bg-white p-2 border-2' type="file" name="" id="thumbnail" />
        </div>

        <hr />

        <div className='font-semibold flex flex-col gap-2 w-60 md:w-4/12'>
          <label onClick={() => setIsOpen(!isOpen)} className='text-md border-2 p-2 bg-white flex items-center justify-between rounded-md ' htmlFor="category">Category {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faChevronDown} /> }</label>
          {
            isOpen && (
              <div onClick={(e) => handleCategroy(e)} className='flex flex-col w-full bg-white rounded-lg overflow-hidden'>
              <input type='button' className='px-4 py-2 border w-full text-start' value='Education'/>
              <input type='button' className='px-4 py-2 border w-full text-start' value='Technology'/>
              <input type='button' className='px-4 py-2 border w-full text-start' value='Entertainment'/>
              <input type='button' className='px-4 py-2 border w-full text-start' value='Other'/>
            </div>
            )
          }
          <p className='bg-white border-2 rounded-md p-2 outline-none'>{category}</p>
        </div>

        <RTE handleEditorChange={handleEditorChange} initialValue={initialValue} />

        <div>
          <button className='bg-blue-500 font-semibold text-white hover:bg-blue-600 p-2 rounded-lg'>Publish Blog</button>
        </div>
      </form>
    </div>
  );
}