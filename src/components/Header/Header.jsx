

import React, { useContext, useEffect } from 'react'
import Nav from './Nav'
import { BlogPostsContext } from '../../context/blogPostsContext';

function Header() {

  const [isLoading, data, isError, fetchData] = useContext(BlogPostsContext);

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <header className='bg-white shadow-sm sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between px-8 py-4'>
        <div className="logo bg-cyan-300 w-10 h-auto">
          <h1>Logo</h1>
        </div>

        <Nav/>
    </header>
  )
}

export default Header