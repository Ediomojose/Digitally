import React from 'react'

interface Props{
    value:string;
}

const Button = ({value}:Props) => {
    
  return (
    <>
    <button type="button" title='Login' className='rounded-md bg-natural-orchid py-2 px-6 font-interExtraBold text-natural-white text-sm hover:-translate-y-1 hover:scale-110 hover:bg-natural-orchid/75 duration-300'>{value || 'Get Started'}</button>
    </>
  )
}

export default Button