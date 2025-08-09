import React from 'react'

const Nav = () => {
  return (
    <div className='h-10 py-10 bg-[#00000000] px-8 w-full flex items-center justify-between'>
        <div className=' h-20 w-20 '>
            <img className='h-full w-full' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        </div>
        <div className='text-white gap-4 flex'>
        <button className='px-8 py-1.5 border-gray-400 rounded-md border'>a  </button>
        <button className='px-6 py-2 rounded-lg bg-[#e50914] font-semibold '>Sign in</button>
        </div>
    </div>
  )
}

export default Nav