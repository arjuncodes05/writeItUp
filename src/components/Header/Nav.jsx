import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


function NavLinks(){
    return (
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/blogs/all'>Blogs</NavLink>
            <NavLink to='/create/new'>New Blog</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
        </>
    )
}


function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => setIsOpen(!isOpen)

    const menu = <FontAwesomeIcon icon={faBars} />
    const cross = <FontAwesomeIcon icon={faXmark} />

  return (
    <>
        <nav className='sm:w-7/12 md:w-3/6 lg:w-2/5 flex justify-end'>
            <div className='hidden sm:flex justify-between w-full'>
                <NavLinks/>
            </div>

            <div className='sm:hidden'>
                <button onClick={toggleNavbar}>{isOpen ? cross : menu}</button>
            </div>
        </nav>
        {
            isOpen && (
                <div className='flex flex-col items-center basis-full pt-3 mt-3 border-t border-slate-200'>
                    <NavLinks/>
                </div>
            )
        }
    </>
  )
}

export default Nav