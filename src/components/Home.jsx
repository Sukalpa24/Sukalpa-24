import React,{useState,useEffect} from 'react';
import '../index.css';
import GMU from '../assets/GMU.jpg';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tshirt from '../assets/Tshirt.jpg';
import Combo from '../assets/Backgrounds/WhatsApp_Image_2024-06-21_at_11.10.43_ca0acab6-removebg-preview.png'
import BPA from '../assets/Bpa.jpg'
import { Link } from 'react-router-dom';

const data = [
  {
    id:1,
    name:"",
    links : "https://gmu.ac.in/public/sukalpa24/"
  },
  {
    id:1,
    name:"codeclash",
    links : "https://forms.gle/kdJaKnXpN66VHjLP7"
  },
  {
    id:2,
    name:"hackathon",
    links : "https://forms.gle/Fp5Bu7gUFkf99ZnSA"
  },
  {
    id:3,
    name:"ideatank",
    links : "https://forms.gle/iFL3JJxNFhYpsQ8D8"
  },
  {
    id:4,
    name:"techmaze",
    links : "https://forms.gle/psYXAXjiwAaXVTsk6"
  },
  {
    id:5,
    name:"engineerseye",
    links : "https://forms.gle/kxRxiEm5MLsTZh2N6"
  },
  {
    id:6,
    name:"esports",
    links : "https://forms.gle/35Qza6AMVpsnGU758"
  },

]

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

const handledropdown = (e) =>{
    e.preventDefault();
    const values = e.target.value
    const clickeddata = data.find((res) => res.name === values) ;
    if (clickeddata) {
      window.open(clickeddata.links, '_blank');
    }
}
 
window.addEventListener('resize',()=>{
  checkmobile()
  setscreensize(window.innerWidth)
})
  return (
    <div className="Home-background h-screen timebgg flex flex-col items-center justify-center text-white relative ">
  <div className={`text-center ${isMobile?'':''} `}>
  <p data-aos="fade-in" data-aos-delay={200} className={` text-lg ${isMobile?'mt-28':'-mt-10'} sm:text-2xl text-[#49e244] `}>STATE LEVEL TECHNICAL FEST</p>
    <h1 data-aos="fade-in" className={` ${isMobile?'text-[2.7rem]':'text-7xl'} font-bold mt-3 `}>&lt; SUKALPA-24 /&gt;</h1>
    <div className="mt-5">
      <p className="text-lg sm:text-xl mb-4 font-semibold">Powered by</p>
      <div className="flex justify-center space-x-8">
        <div className="text-center">
          
          <img src={GMU} alt="GMU Logo" className="w-14 rounded-full mx-auto" />
          <p data-aos="fade-up" className={`mt-2 ${isMobile?'text-lg':'text-xl'}  font-bold`}>Information Science and Engineering </p>
          <p data-aos="fade-up" className='font-semibold text-gray-300 text-2xl'>GM University</p>
        </div>
      </div>
      <div data-aos="fade-in" className={` ${isMobile?'':'-mt-5'}  p-10`}>
        <h3 data-aos="zoom-in" className={`font-mono ${isMobile?'text-lg':'text-xl'}  mb-5`}>See you at GMU on 1st and 2nd of July (^_^)⁠</h3>
        <p className="text-lg sm:text-xl mb-2">In Collaboration with</p>
        <div className="flex justify-center space-x-8">
          <img src={Tshirt} alt="Google Developer " className="h-12 sm:h-16 rounded-3xl" />
          <img src={BPA} alt="Bpa lab" className="h-12 sm:h-16 rounded-3xl" />
        </div>
        <h2 className={` ${isMobile?'mt-8':''} font-bold text-[#fca311] text-3xl text-center`}>
          <Typewriter
            words={['HACKATHON', 'CODE CLASH', 'IDEA TANK', 'TECH MAZE', 'ENGINEERS EYE', 'ESPORTS']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={100} 
            deleteSpeed={30} 
            delaySpeed={1000}
          />
    </h2>
      </div>
      <div className='flex flex-col justify-center'>

          {/* <a href="https://forms.gle/7a35UkxrcgLNV8u3A" target='_blank'><button className="-mt-9">
            Get Register
        </button></a> */}
        <div>
       <select name="" id=""  className='Glitch-button'  onChange={(e)=>handledropdown(e)}>
            <option className='bg-[#0d0f16]' value="">GET REGISTER</option>
            <option className='bg-[#0d0f16]' target="_blank" value="codeclash">CODE CLASH</option>
            <option className='bg-[#0d0f16]' target="_blank" value="hackathon">HACKATHON</option>
            <option className='bg-[#0d0f16]' target="_blank" value="ideatank">IDEA TANK</option>
            <option className='bg-[#0d0f16]' target="_blank" value="techmaze">TECH MAZE</option>
            <option className='bg-[#0d0f16]' target="_blank" value="engineerseye">ENGINEERS EYE</option>
            <option className='bg-[#0d0f16]' target="_blank" value="esports">E-SPORTS</option>
        </select> 
      </div>
        <Link to="/combo">
      <button
        type="submit"
        className={`combo ${isMobile ? '' : 'absolute top-48 right-56'} 
          animate-scale animate-blink  text-white font-bold py-2 px-4 rounded`}
      >
        <img className={` ${isMobile?'w-16':' w-40'}`} src={Combo} alt="" />
      </button>
    </Link>
      </div>
    </div>
  </div>
</div>
  );
};

export default Home;


