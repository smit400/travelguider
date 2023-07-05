import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className=' left-0 top-0 w-full h-screen object-cover' src='https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg' alt='/'/>
        <div className='bg-black/25 absolute top-0 left-0 w-full h-screen'></div>
        <div className='absolute top-0 w-full h-full text-white flex flex-col justify-center'>
            <div className='md:left-10 max-w-[1100px] m-auto absolute p-4'>
                <p>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl '>Beaches & Gateways</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Find and Book your next trip here.
        
                </p>
                <button className='bg-white text-black hover:bg-black hover:text-white'>Book now</button>
            </div>
        </div>
        <div/>
    </div>
  )
}

export default Hero