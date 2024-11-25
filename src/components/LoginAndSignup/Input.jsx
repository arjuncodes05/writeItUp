import React from 'react'

function Input({value, setValue, id, label, type, error, setError}) {
  const handleChange = (e) => {
    let removeErrorOf = error[0]
    setError({...error, removeErrorOf: ''}),
    setValue(e.target.value)
  }
  return (
    <div className='flex flex-col gap-1 sm:py-2 py-1 bg-primary px-4'>
        <label className='font-semibold' htmlFor={id}>{label}</label>
        <input value={value} onChange={handleChange} className='px-2 border-2 rounded-md p-2 outline-none' id={id} type={type} placeholder={`Enter your ${label}`} />
        <p className='min-h-5 text-sm font-semibold text-red-500'>{error[id]}</p>
    </div>
  )
}

export default Input