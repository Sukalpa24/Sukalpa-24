import { useState ,useEffect } from "react";
import React  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const combooffer = [
    {
        id:1,
        name : "Coding Combo offers",
        Register:"169",
        anchor : "https://forms.gle/V1pkdyhWuu3FfdLV8"
    },
    {
        id:2,
        name : "Idea Tank Combo offers",
        Register:"169",
        anchor : "https://forms.gle/V1pkdyhWuu3FfdLV8"
    },
    {
        id:3,
        name : "Hackthon Combo offers",
        Register:"199",
        anchor : "https://forms.gle/xwPEjLN9AJdSyaJQ8"
    },
]

function Combo_offres() {
    const[isMobile,setisMobile] = useState(false);
    const[screensize,setscreensize] = useState(window.innerWidth)
  
    useEffect(() => {
      AOS.init({ duration: 1000 });
      checkmobile()
      setscreensize(window.innerWidth)
    });
  
  const checkmobile =() =>{
    if(window.innerWidth <= 600){
      setisMobile(true)
      setscreensize(window.innerWidth)
    }
    else{
      setisMobile(false)
      setscreensize(window.innerWidth)
      }
  }
  
  window.addEventListener('resize',()=>{
    checkmobile()
    setscreensize(window.innerWidth)
  })

  return (
    <div className={`flex  justify-center items-center  flex-col text-center  ${isMobile?'mt-20':'h-[80vh]'} text-white`}>
        <h2 className={`text-[#fca311] ${isMobile?'text-4xl':'text-5xl'}  font-bold`}>COMBO OFFERS</h2>
        <div className='grid gap-16 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
        {
            combooffer.map((res)=>(
                <div className={`bg-[#1b263d] p-4 rounded-xl ${isMobile?'':'w-96'} `}>
                    <h2 className='font-mono text-xl'>{res.name}</h2>
                    <h3 className='font-bold text-cyan-400'>Registration Fee : {res.Register}/-</h3>
                    <button className='bg-[#a78bfa] text-black font-semibold p-2  mt-5 rounded-xl'>
                       <a href={res.anchor}></a> Get Register</button>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default Combo_offres;
