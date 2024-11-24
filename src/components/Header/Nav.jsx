import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../context/authContext'


function NavLinks(){

    const [isUser, setIsUser] = useContext(AuthContext)
    const navigate = useNavigate();

    function handleNavigate(e){
        e.preventDefault()
        if(!isUser){
            alert('NO user')
            return 
        }
        navigate('/create/new')
    }

    return (
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/blogs/all'>Blogs</NavLink>
            <NavLink className={({isActive}) => isActive ? '' : '' } onClick={handleNavigate}>New Blog</NavLink>
            {
                isUser ? <NavLink to={`/user/${isUser.$id}`}>Dashboard</NavLink> :
                <NavLink to='/login'>Login/Signup</NavLink>
            }
                
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
                <div className='flex sm:hidden flex-col items-center basis-full pt-3 mt-3 border-t border-slate-200'>
                    <NavLinks/>
                </div>
            )
        }
    </>
  )
}

export default Nav