import { useState ,useEffect } from "react";
import React  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const combooffer = [
    {
        id:1,
        name : "Code Clash and Tech maze",
        Register:"169",
        anchor : ""
    },
    {
        id:2,
        name : "(Code Clash OR Tech maze) and Engineers Eye",
        Register:"169",
        anchor : ""
    },
    {
        id:3,
        name : "Ideathon and (Code Clash OR Tech maze OR Engineers Eye)",
        Register:"199",
        anchor : ""
    },
    {
        id:4,
        name : "Hackathon and (Engineers Eye OR Tech maze)",
        Register:"249",
        anchor : ""
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
    <div className={`flex  justify-center  flex-col text-center items-center h-full ${isMobile?'p-3':''} text-white`}>
        <h2 className='text-[#fca311] text-5xl font-bold'>COMBO OFFERS</h2>
        <div className='grid gap-16 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        {
            combooffer.map((res)=>(
                <div className='bg-[#1b263d] p-4 rounded-xl w-96'>
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
