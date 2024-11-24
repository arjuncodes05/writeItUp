
import React, { useContext, useState } from 'react'
import Input from './Input'
import Button from "./Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {Link, useLocation, useNavigate } from 'react-router-dom'
import authService from '../../Appwrite/AuthService'
import { AuthContext } from '../../context/authContext'

function GetInForm() {
  const {pathname} =   useLocation() 
  const navigate = useNavigate()
  const [isUser, setIsUser] = useContext(AuthContext)
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    
    if(pathname === '/signup'){
        const user = await authService.createAccount(email, password, username)       
        if(user){
            setIsUser(user)
            setLoading(false)
            navigate(`/user/${user.$id}`)
        }
    } else if(pathname === '/login'){
        const session = await authService.login(email, password)
        if(session){
            const user = await authService.getUser()
            setIsUser(user)
            setLoading(false)
            navigate(`/user/${user.$id}`)
        }
    }
  }
  
  return (
    <div className='w-full bg-secondary h-screen flex flex-col justify-center items-center'>
        <div className='sm:w-[500px] w-5/6 bg-primary rounded-lg overflow-hidden border shadow-lg hover:scale-[1.005]'>
            <div className='flex flex-col justify-center gap-2 items-center min-h-40 bg-cyan-800  text-secondary text-4xl'>
                <div className='flex justify-center items-center border-2 rounded-full w-20 h-16 p-10'>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <h1 className='text-2xl'>{pathname === '/signup' ? 'Signup' : 'Login'}</h1>
            </div>
            <form onSubmit={handleSubmit} className='m-4 p-4'>
                {
                    pathname === '/signup' && <Input value={username} setValue={setUsername} id='name' label ='Name' type='text' />
                }
                <Input value={email} setValue={setEmail} id='email' label ='Email' type='text' />
                <Input value={password} setValue={setPassword} id='password' label ='Password' type='password' />
                <Button text={pathname === '/signup' ? (loading ? 'Signing up...' : 'Signup') : (loading ? 'Logging in...' : 'Login')} />
            </form>
        </div>
    </div>
  )
}

export default GetInForm