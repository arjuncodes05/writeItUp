import React, { useContext } from 'react'
import Intro from '../components/Intro'
import BlogPostCard from '../components/BlogPostCard.jsx'
import { BlogPostsContext } from '../context/blogPostsContext.jsx'
import { Link } from 'react-router-dom';
import Popup from '../components/Popup/Popup.jsx';
// import config from '../Appwrite/config.js';
import noBlogs from "../assets/noBlogs.jpg"

function Home() {

  const [isLoading, data, isError, fetchData] = useContext(BlogPostsContext);
  const featuredBlogs = data?.slice(0, 5)
  

  return (
    <div className=''>
        <Intro/>        
        <div className='md:px-8 sm:px-4 px-2 py-4 bg-secondary w-full flex flex-col justify-center items-center'>
          {
            data && (
              data.map((post) => {
                return <BlogPostCard key={post.$id} post={post} />
              })
            )
          }
          {
            data && data.length < 1 && (
              <div className='bg-white h-[245px] md:h-[295px] p-4 mt-4 opacity-40 w-full flex flex-col items-center'>
                <img className='sm:h-40 h-40 mb-2' src={noBlogs} alt="" />
                <h2 className='text-xl text-gray-500 text-center font-bold'>No Blogs yet.</h2>
              </div>
            )
          }
          { 
            data && data.length > 0 && (       
            <div className='w-full flex justify-end items-end mt-2'>
              <Link className='text-end rounded-md p-2 bg-cyan-500 hover:bg-cyan-600 font-semibold text-white' to="/blogs/all">Read More</Link>
            </div>)
          }
        </div>
  </div>
  )
}

export default Home