import React ,{useEffect,useState}from 'react';
import '../index.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Prizes = () => {
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
  useEffect(()=>{
    AOS.init({duration:1000})
    
})
  return (
    <div className={``}>
    <div className={`${isMobile?'w- ml-2':'p-20'} flex justify-center items-center `}>
    <div className="  text-center ">
      <div className= "  bg-gray-800  p-8 rounded-lg shadow-lg text-white">
        <div className="mb-8">
          <div data-aos="fade-in" data-aos-delay={200} className="text-2xl font-semibold mb-4">GRAND PRIZE POOL OF</div>
          <div data-aos="zoom-in" className={`${isMobile?'text-6xl font-bold':''}text-9xl font-bold text-green-500`}>₹ 50,000</div>
        </div>
      </div>
    </div>
  </div>
  </div>
  

  );
}

export default Prizes;
