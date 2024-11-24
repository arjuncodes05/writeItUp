import React, { useContext, useEffect, useState } from 'react'
import authService from '../Appwrite/AuthService'
import noImg from "../assets/noImg.png"
import { useNavigate } from 'react-router-dom';
import { BlogPostsContext } from '../context/blogPostsContext';
import { AuthContext } from '../context/authContext';
import BlogPostCard from "../components/BlogPostCard.jsx"
import noBlogs from "../assets/noBlogs.jpg"

function Dashboard() {

  const [isLoading, data, isError, fetchData] = useContext(BlogPostsContext)
  console.log(data);
  
  const [isUser, setIsUser] = useContext(AuthContext)
  const [myPosts, setMyPosts] = useState([])

  useEffect(() => {
    const filteredPosts = data?.filter((post) => post.authorId === isUser.$id)
    if(filteredPosts){
      setMyPosts(filteredPosts)
    }
  }, [data])

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault()
    const response = await authService.signout();
    console.log(response);
    if(response){
      setIsUser(null)
      navigate('/')
    }
  }

  return (
    <div className='flex flex-col min-h-remaining justify-center items-center gap-4 bg-primary'>
      <div className='flex flex-col sm:flex-row sm:justify-between items-center w-[600px] sm:h-[300px] m-2'>
        <div className='h-[150px] aspect-square border-2 rounded-full p-2 bg-secondary'>
          <img src={noImg} alt="" />
        </div>
        <div className='w-4/6 flex flex-col gap-1 justify-center items-center sm:items-start'>
          <h1 className='text-2xl font-semibold cursor-pointer'>{isUser.name}</h1>
          <h2 className='font-semibold cursor-pointer'>{isUser.email}</h2>
          <p className='cursor-pointer'>Total Blogs: {myPosts.length}<span></span></p>
          <div className='w-full flex flex-col sm:flex-row justify-start items-center gap-4 py-2 mt-4 bg-primary'>
            <button onClick={() => navigate('/create/new')} className=' text-center rounded-md p-2 bg-cyan-500 hover:bg-cyan-600 font-semibold text-white'>Create Post</button>
            <button onClick={handleLogout} className=' text-center rounded-md p-2 bg-cyan-500 hover:bg-cyan-600 font-semibold text-white'>Logout</button>
          </div>
        </div>
      </div>
      <div className='md:px-8 sm:px-4 px-2 py-4 bg-secondary w-full flex flex-col flex-1 items-center'>
        <h1 className='cursor-pointer text-center text-lg sm:text-2xl font-bold p-2 bg-cyan-500 text-white'>My Blogs</h1>
        {
          myPosts.length > 0 ? (
            myPosts.map((post) => {
              return <BlogPostCard key={post.$id} post={post} />
            })
          ) : (
            <div className='bg-white p-4 mt-4 opacity-40 w-full flex flex-col items-center'>
              <img className='sm:h-40 h-40 mb-2' src={noBlogs} alt="" />
              <h2 className='text-xl text-gray-500 text-center font-bold'>No Blogs yet.</h2>
            </div>
          )

        }
    </div>
    </div>
  )
}

export default Dashboard