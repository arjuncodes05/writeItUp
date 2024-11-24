

import React, { useContext, useEffect } from 'react'
import { BlogPostsContext } from '../context/blogPostsContext';
import BlogPostCard from '../components/BlogPostCard';
import noBlogs from "../assets/noBlogs.jpg"
import loading2 from "../assets/loading2.gif"

function Blogs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [isLoading, data, isError, fetchData] = useContext(BlogPostsContext);


  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className='md:px-8 sm:px-4 px-2 py-4 min-h-remaining bg-secondary w-full flex flex-col justify-center items-center'>
        {
          isLoading && <img src={loading2} alt="" />
        }
        {
          !isLoading && data.length > 0 ? (
            data.map((post) => {
              return <BlogPostCard key={post.$id} post={post} />
            })
          ) : data.length === 0 && (
            <div className='bg-white p-4 opacity-40'>
              <img className='sm:h-80 h-40 mb-2' src={noBlogs} alt="" />
              <h2 className='text-xl text-gray-500 text-center font-bold'>No Blogs yet.</h2>
            </div>
          )
        }
        {
          isError && <h1 className='p-2 text-lg font-semibold'>Something went wrong...</h1>
        }
    </div>
  )
}

export default Blogs