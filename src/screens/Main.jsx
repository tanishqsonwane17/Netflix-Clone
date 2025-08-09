import React from 'react'
import Nav from '../components/Nav'

const Main = () => {
  return (
    <main className='relative h-screen w-full bg-black'>
      <Nav/>
      
      <img 
        className='h-1/2 w-full object-cover' 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg" 
        alt="" 
      />

      <div className="absolute top-20 inset-0 bg-black opacity-80"></div>
    </main>
  )
}

export default Main
