

import React, { useContext, useEffect } from 'react'
import { BlogPostsContext } from '../context/blogPostsContext';
import BlogPostCard from '../components/BlogPostCard';

function Blogs() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // const lastPostIndex = currentPage * postPerPage;
  // const firstPostIndex = lastPostIndex - postPerPage;

  const [isLoading, data, isError, fetchData] = useContext(BlogPostsContext);

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className='md:px-8 sm:px-4 px-2 py-4 bg-secondary w-full flex flex-col justify-center items-center'>
        {
          data && (
            data.map((post) => {
              return <BlogPostCard key={post.$id} post={post} />
            })
          )
        }
    </div>
  )
}

export default Blogs