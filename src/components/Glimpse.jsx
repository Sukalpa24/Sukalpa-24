import React, { useEffect, useRef, useState } from 'react';
import g1 from '../assets/Events/g1.jpg'
import g2 from '../assets/Events/g2.jpg'
import g3 from '../assets/Events/g3.jpg'
import g4 from '../assets/Events/g4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const images = [
    g1,g2,g3,g4,
]

const Glimpse = () => {
  
  const[isMobile,setisMobile] = useState(false);

  const[screensize,setscreensize] = useState(window.innerWidth);

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

    const galleryRef = useRef(null);

    useEffect(() => {
      const gallery = galleryRef.current;
      let scrollAmount = 0;
  
      const scrollGallery = () => {
        if (gallery) {
          scrollAmount += 2; 
  
          if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
            scrollAmount = 0; 
          }
  
          gallery.scrollLeft = scrollAmount;
        }
      };
  
      const interval = setInterval(scrollGallery, 20);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className=' shd_about bg-black'>
    <div className=' justify-center  items-center flex flex-col p-10'>
        <h2 className=' text-5xl  font-bold text-blue-500 mb-5'>GLIMPSE of <span className='text-white'>SUKALPA</span> 2023</h2>
    <div className="overflow-hidden w-10/12 ">
      <div
        className="flex space-x-4 rounded-lg p-5 shadow-inner shadow-black"
        ref={galleryRef}
        style={{ whiteSpace: 'nowrap', overflowX: 'hidden' }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="inline-block w-72 h-48  rounded-lg"
          />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Glimpse;

