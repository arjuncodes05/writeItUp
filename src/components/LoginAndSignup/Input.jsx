import React from 'react'

function Input({value, setValue, id, label, type}) {
  return (
    <div className='flex flex-col gap-1 py-2 bg-primary px-4'>
        <label className='font-semibold' htmlFor={id}>{label}</label>
        <input value={value} onChange={(e) => setValue(e.target.value)} className='px-2 border-2 rounded-md p-2 outline-none' id={id} type={type} placeholder={`Enter your ${label}`} />
    </div>
  )
}

export default Input