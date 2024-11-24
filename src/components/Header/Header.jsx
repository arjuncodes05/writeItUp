

import React, { useContext, useEffect } from 'react'
import Nav from './Nav'
import { BlogPostsContext } from '../../context/blogPostsContext';
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

function Header() {

  const [isLoading, data, isError, fetchData] = useContext(BlogPostsContext);

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <header className='bg-white shadow-sm sticky top-0 z-[20] mx-auto flex flex-wrap w-full items-center justify-between lg:px-16 px-8 py-2'>
        <Link to='/' className="w-20 h-12">
          <img src={logo} alt="" />
        </Link>

        <Nav/>
    </header>
  )
}

export default Header