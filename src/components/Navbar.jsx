import React from 'react'
import { useState } from 'react'
import {HiMenu} from 'react-icons/hi'

const Navbar = () => {

    const [nav,setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        if(!nav){
            document.body.style.overflow = 'hidden'

        }else{
            document.body.style.overflow = 'scroll'
        }
    }


  return (
    <div className='absolute w-full flex justify-between p-4 items-center '>
        <h1 className='text-white font-bold text-2xl z-20 '>Smit - The Travel Guider</h1>
        <HiMenu onClick={handleNav} className='z-20 cursor-pointer text-white' size={25}/>
        <div className={nav ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/80 px-4 py-7 flex-col z-10':'absolute top-0 h-screen w-full left-[-100%] ease-in duration-500 z-10'}>
            <ul className='flex flex-col w-full h-full justify-center items-center'>
                <li className='font-bold text-3xl p-8'>Home</li>
                <li className='font-bold text-3xl p-8'>Destinations</li>
                <li className='font-bold text-3xl p-8'>Reservations</li>
                <li className='font-bold text-3xl p-8'>Amenities</li>
                <li className='font-bold text-3xl p-8'>Rooms</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar