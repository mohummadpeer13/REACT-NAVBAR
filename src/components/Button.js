import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#550a53] text-white font-[Poppins] font-bold py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button
