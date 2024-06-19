import React, { useEffect, useState } from 'react';
import img from '../assets/GMU.jpg';
import Shreyank from '../assets/Coordinates/Shreyank.jpg'
import Sahana from '../assets/Coordinates/Sahana.jpg'
import Chinmaie from '../assets/Coordinates/Chinmaie.jpg'
import Deepak from '../assets/Coordinates/Deepak.jpg'
import Jeevan from '../assets/Coordinates/Jeevan.jpg'
import Poorvi from '../assets/Coordinates/Poorvi.jpg'
import Suhail from '../assets/Coordinates/Suhail.jpg'
import Prajwal from '../assets/Coordinates/Prajwal.jpg'
import Shravana from '../assets/Coordinates/Shravana.jpg'
import Pooja from '../assets/Coordinates/Pooja.jpg'
import Skanda from '../assets/Coordinates/Skanda.jpg'
import Srujan from '../assets/Coordinates/Srujan.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const collection = [
  {
    id: 1,
    Title: 'CODE CLASH',
    Name1: 'Prajwal KR',
    Photo1: Prajwal,
    Name2: 'JEEVAN M',
    Photo2: Jeevan,
  },
  {
    id: 2,
    Title: 'IDEATHON',
    Name1: 'CHINMAIE C',
    Photo1: Chinmaie,
    Name2: 'Shravana GS',
    Photo2: Shravana,
  },
  {
    id: 3,
    Title: 'HACKATHON',
    Name1: 'SHREYANK',
    Photo1: Shreyank,
    Name2: 'Skanda',
    Photo2: Skanda,
  },
  {
    id: 4,
    Title: 'CODE COLLAB',
    Name1: 'POORVI VH',
    Photo1: Poorvi,
    Name2: 'SUHAIL',
    Photo2: Suhail,
  },
  {
    id: 5,
    Title: 'ENGINEERS EYE',
    Name1: 'SAHANA M',
    Photo1: Sahana,
    Name2: 'POOJA P',
    Photo2: Pooja,
  },
  {
    id: 6,
    Title: 'ESPORTS',
    Name1: 'DEEPAK D',
    Photo1: Deepak,
    Name2: 'SRUJAN KS',
    Photo2: Srujan,
  },
];

function Coordinates() {
  const [informationIndex, setInformationIndex] = useState(0);
  const [information, setInformation] = useState(collection[0]);
  const [slide, setSlide] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(true);
      setTimeout(() => {
        setInformationIndex((prevIndex) => (prevIndex + 1) % collection.length);
        setSlide(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setInformation(collection[informationIndex]);
  }, [informationIndex]);

  return (
    <div className={` ${isMobile?'py-16 px-1':'h-screen'}  bgg flex flex-col justify-center items-center z-[-1] ${isMobile?'':''}  `}>
    <h2 className='text-[#49e244] text-3xl p-1 font-bold'>EVENT COORDINATERS </h2>
    <div className={` ${isMobile?'w-full':'w-10/12'}  min-h-96 flex flex-col justify-center items-center`}>

    {/* <h2 className='text-white text-5xl mb-14 font-bold border rounded-[300px] bg-opacity-60 bg-black px-20 py-4'>EVENT COORDINATES</h2> */}
      
      <div className={` ${isMobile?'w-full p-2':'w-8/12 py-8'}  mb-10  z-[1] opacity-90 rounded-xl inset-0.5 bg-[transparent] drop-shadow-xl relative  backdrop-blur-xl  `}>
        <h2 className="text-white text-3xl font-semibold  text-center mb-5">{information.Title}</h2>
      
        <div className="flex justify-center items-center space-gap-70">

          <div className=" text-center rounded-lg flex justify-center items-center flex-col ml-3 p-2">
            <img className={` rounded-md ${isMobile?' w-36 h-36':' w-48 h-48'}`} src={information.Photo1} alt="" />
            <h3 className='text-white text-2xl font-bold mt-5'>{information.Name1}</h3>
            <h4 className='text-white font-semibold '>Event Co-ordinator</h4>
          </div>

          <div className={` rounded-lg text-center ${isMobile?'ml-5':'ml-28'}  flex justify-center items-center flex-col  p-2`}>
            <img className={` rounded-md ${isMobile?' w-36 h-36':' w-48 h-48'}`} src={information.Photo2} alt="" />
            <h3 className='text-white text-2xl font-bold mt-5'>{information.Name2}</h3>
            <h4 className='text-white font-semibold '>Event Co-ordinator</h4>   
          </div>
          
        </div >
      </div>
    </div>
  </div>
  );
}

export default Coordinates;
