import React, { useContext } from 'react'
import Intro from '../components/Intro'
import BlogPostCard from '../components/BlogPostCard.jsx'
import { BlogPostsContext } from '../context/blogPostsContext.jsx'
import { Link } from 'react-router-dom';
// import config from '../Appwrite/config.js';

function Home() {

  const [isLoading, data, isError, fetchData] = useContext(BlogPostsContext);
  const featuredBlogs = data?.slice(0, 5)
  

  return (
    <div className=''>
        <Intro/>        
        {/* <div className='p-8 bg-secondary'> */}
        <div className='md:px-8 sm:px-4 px-2 py-4 bg-secondary w-full flex flex-col justify-center items-center'>
          {
            data && (
              data.map((post) => {
                return <BlogPostCard key={post.$id} post={post} />
              })
            )
          }
          <div className='w-full flex justify-end'>
            <Link className='text-end rounded-md p-2 bg-cyan-500 hover:bg-cyan-600 font-semibold text-white' to="/blogs/all">Read More</Link>
          </div>
        </div>
  </div>
  )
}

export default Home