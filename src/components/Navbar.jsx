import React, { useEffect, useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { IoIosContact } from "react-icons/io";
import {Link } from 'react-scroll'


function Navbar() {

  const [isMobile , setisMobile] = useState(false)
  const [handlenavbar , sethandlenavbar] = useState(false)
  const[isdark,setisdark] = useState(true)

    useEffect(()=>{
        AOS.init({duration:2000})
        checkmobile()
    })

    window.addEventListener('resize',()=>{
        checkmobile()
    })

    const checkmobile =() =>{
        if(window.innerWidth <= 600){
          setisMobile(true)
        }
        else{
          setisMobile(false)
        }
    }

    const handleDropdownToggle = () =>{
       sethandlenavbar(!handlenavbar)
    }

  return (
    <>
    <div className={`sticky top-0 bg-black bg-opacity-90 z-30 overflow-x-hidden shadowclass h-16 flex flex-row text-center ${isMobile?'w-full':'w-full'} ${isMobile?'hidden':'block'} ${isdark?' text-white':'bg-white text-black border border-red-600'}     `}>
      <div className='flex w-3/12 flex-row justify-around '> 
        <h2 className={` mt-3 ${isdark?'text-white':'text-black'} font-bold first-letter:text-[#49e244] text-3xl`} ><a href="#">SUKALPA</a> </h2>
      </div>

      <ul className={`flex w-8/12 ml-auto mt-5 items-center flex-row justify-around h-2/6 font-medium  `}>
        <li  data-aos-delay={100} className='text-gray-200 cursor-pointer text-lg underline-animation'> <Link smooth to='home'>Home</Link> </li>
        <li  data-aos-delay={200} className=' cursor-pointer text-lg underline-animation'><Link smooth  to='events'>Events</Link></li>
        <li  data-aos-delay={300} className=' cursor-pointer text-lg underline-animation'><Link smooth  to='timeline'>Timeline</Link></li>
        <li  data-aos-delay={400} className=' cursor-pointer text-lg underline-animation'><Link smooth to='about'>About</Link></li>
        <li  data-aos-delay={500} className=' cursor-pointer text-lg underline-animation'><Link smooth to='contact'>Contact</Link></li>
      </ul>
    </div>
     
    <div className={`fixed top-0 z-20 h-16 bg-black bg-opacity-90  w-full  ${isMobile ?'block':'hidden'}  `} >
      <div className='flex flex-row justify-between px-6 items-center'>
      <h2 className='text-white text-2xl font-bold ml-2 first-letter:text-[#49e244] mt-3'>SUKALPA</h2>
      <button className="dropbtn text-white text-3xl mr-2  mt-3" onClick={handleDropdownToggle}>{handlenavbar?'✕':'☰'}</button>
    </div>
     
    <div  className={`dropdown-content sticky  rounded-b-2xl ${handlenavbar ?'block':'hidden'} text-white bg-opacity-90 bg-black`}>
      <ul className=' font-bold text-center  p-2 '>
      <li className='hover:text-white cursor-pointer   rounded-md px-2 py-1 mt-1 transition duration-[0.1s] ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-[#49e244] underline'><Link smooth to='home'>Home</Link>  </li>
      <Link smooth to='events'><li className='hover:text-white cursor-pointer border border-gray-600 rounded-md px-2 py-1 mt-1.5 transition duration-[0.1s] ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-[#49e244]'>Events</li></Link>
      <Link smooth to='timeline'><li className='hover:text-white cursor-pointer border border-gray-600 rounded-md px-2 py-1 mt-1.5 transition duration-[0.1s] ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-[#49e244]'>Timeline</li></Link>
      <Link smooth to='about'><li className='hover:text-white cursor-pointer border border-gray-600 rounded-md px-2 py-1 mt-1.5 transition duration-[0.1s] ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-[#49e244]'>About</li></Link>
      <Link smooth to='contact'><li className='hover:text-white cursor-pointer border border-gray-600 rounded-md px-2 py-1 mt-1.5 transition duration-[0.1s] ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-[#49e244]'> Contact</li></Link>
      </ul>
    </div>
    </div>
    </>
  );
}

export default Navbar;
