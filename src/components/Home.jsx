import React,{useState,useEffect} from 'react';
import '../index.css';
import GMU from '../assets/GMU.jpg';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tshirt from '../assets/Tshirt.jpg';

function Home (){
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

window.addEventListener('resize',()=>{
  checkmobile()
  setscreensize(window.innerWidth)
})
  return (
    <div className="Home-background h-screen timebgg flex flex-col items-center justify-center text-white relative ">
  <div className="text-center ">
  <p data-aos="fade-in" data-aos-delay={200} className={` text-lg ${isMobile?'mt-10':'-mt-10'} sm:text-2xl text-[#49e244] `}>STATE LEVEL TECHNICAL FEST</p>
    <h1 data-aos="fade-in" className={` ${isMobile?'text-4xl':'text-7xl'} font-bold mt-3 `}>&lt; SUKALPA-24 /&gt;</h1>
    <div className="mt-5">
      <p className="text-lg sm:text-xl mb-4 font-semibold">Powered by</p>
      <div className="flex justify-center space-x-8">
        <div className="text-center">
          
          <img src={GMU} alt="GMU Logo" className="w-14 rounded-full mx-auto" />
          <p data-aos="fade-up" className="mt-2 text-xl font-bold">Information Science and Engineering </p>
          <p data-aos="fade-up" className='font-semibold text-gray-300 text-2xl'>GM University</p>
        </div>
      </div>
      <div data-aos="fade-in" className={` ${isMobile?'':'-mt-5'}  p-10`}>
        <h3 data-aos="zoom-in" className={`font-mono  text-xl mb-5`}>See you at GMU on 1st and 2nd of July (^_^)⁠</h3>
        <p className="text-lg sm:text-xl mb-2">In Collaboration with</p>
        <div className="flex justify-center space-x-8">
          <img src={Tshirt} alt="Google Developer " className="h-12 sm:h-16 rounded-3xl" />
          {/* <img src="/path-to-your-oscode-logo.png" alt="OS Code " className="h-12 sm:h-16" /> */}
        </div>
        <h2 className={` ${isMobile?'mt-8':''} font-bold text-[#fca311] text-3xl text-center`}>
          <Typewriter
            words={['HACKATHON', 'CODE CLASH', 'IDEATHON', 'CODE COLLAB', 'ENGINEERS EYE', 'ESPORTS']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={100} 
            deleteSpeed={30} 
            delaySpeed={1000}
          />
    </h2>
      </div>
      <a href="https://forms.gle/kuNMr3wjh1iHQzJEA" target='_blank'><button className="Glitch-button -mt-9">
        Get Register
    </button></a>
    </div>
  </div>
</div>
  );
};

export default Home;
