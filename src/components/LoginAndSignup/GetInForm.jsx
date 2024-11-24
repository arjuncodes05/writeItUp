
import React, { useContext, useState } from 'react'
import Input from './Input'
import Button from "./Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {useLocation, useNavigate } from 'react-router-dom'
import authService from '../../Appwrite/AuthService'
import { AuthContext } from '../../context/authContext'

function GetInForm() {
  const {pathname} =   useLocation() 
  const navigate = useNavigate()
  const [isUser, setIsUser] = useContext(AuthContext)

  async function deleteSession(){
    const a = await authService.signout()
    console.log(a);
    
  }

  deleteSession();
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(pathname === '/signup'){
        const user = await authService.createAccount(email, password, username)
        console.log(user);        
        if(user){
            setIsUser(user)
            navigate(`/user/${user.$id}`)
        }
    } else if(pathname === '/login'){
        const session = await authService.login(email, password)
        console.log(session);
        if(session){
            const user = await authService.getUser()
            console.log("user: ", user);
            
            setIsUser(user)
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
                <Button text={pathname === '/signup' ? 'Signup' : 'Login'} />
            </form>
        </div>
    </div>
  )
}

export default GetInForm