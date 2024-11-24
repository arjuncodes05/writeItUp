import React from 'react'
import Done from "../../assets/Done.gif"

function Popup({message = 'Success', status, className}) {
  return (
    <div className={`${className} h-[100px] bg-red-100 rounded-sm border-2 flex justify-center items-center gap-2 fixed left-1/2 translate-x-[-50%] bottom-10 shadow-lg`}>
        {
          status === 'failure' ? '😊' :
          <img className='w-10' src={Done} alt="" />
        }
        <p>{message}</p>
    </div>
  )
}

export default Popup