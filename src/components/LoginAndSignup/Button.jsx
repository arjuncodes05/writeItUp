import React from 'react'
import { Link } from 'react-router-dom'

function Button({text}) {



  return (
    <div className='w-full flex flex-col justify-center items-center gap-1 py-2 mt-4 px-4 bg-primary'>
        <button className='w-full text-center rounded-md p-2 bg-cyan-500 hover:bg-cyan-600 font-semibold text-white'>{text}</button>
        <div className='flex flex-col justify-center items-center border-b hover:border-blue-500'>
            <p>{text === 'Signup' || text === 'Signing up' ? <Link to='/login'>Already have an account?</Link> : <Link to='/signup'>Don't have an account?</Link> }</p>
        </div>
        <div className='flex flex-col justify-center items-center border-b hover:border-blue-500'>
            <Link className='' to='/' >Continue without an account</Link>
        </div>
    </div>
  )
}

export default Button