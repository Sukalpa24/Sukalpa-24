import React, { useEffect,useState } from 'react';
import '../index.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useLocation, useParams } from 'react-router-dom';


const Eventpage = ({toggle}) => {

  const[isMobile,setisMobile] = useState(false);

  const[screensize,setscreensize] = useState(window.innerWidth)

  useEffect(() => {
    AOS.init({ duration:0 });
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

  const [data, setData] = useState({}); 
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  useEffect(() => {
    if (location.state) {
      setData(location.state.data);       
    }
  }, [location.state]); 

  useEffect(()=>{
    AOS.init({duration:0})
})

  return (
    <div className=' text-white  flex flex-col items-center text-center mt-10 p-6'>
      
    <div className=' rounded-lg p-5 text-center shadow-lg w-full max-w-3xl'>
      <h2 data-aos="zoom-in" data-aos-delay={0} className='text-5xl font-bold text-[#fca311]'>{data?.title ? data.title : 'Event'}</h2>
      <h3 data-aos="fade-out" className='text-3xl font-mono mt-5 text-green-400'>REGISTRATION FEE: &#x20B9;{data?.price?data.price:'__'}</h3>
      <a href={data?.form ?data.form:'__'} target='_blank'><button id="reg" className='text-white bg-green-400 p-3 rounded-xl m-10'>Register</button></a>
      
      <h3 data-aos="fade-right" data-aos-delay={0}  className='text-start text-xl mt-5 font-semibold'>RULES:</h3>
      <ul className='mt-5 list-disc list-inside text-start'>
        {
          data?.Rules?.map((res)=>(
            <li className='mb-2'>
              {res}
          </li>
          ))
        }
      </ul>
      <div className='text-white p-5  rounded-lg shadow-lg'>
        <h2  className=' font-bold text-3xl'>Event Coordinators</h2>
      <div className={`flex ${isMobile?'flex-col justify-around':'flex-row justify-around gap-10'}   items-center`}>
        <div className='p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-bold'>{data?.Coordinator1}</h2>
          <a href={`tel:${data?.Coordinator1_ph? data.Coordinator1_ph :'+912345678900'}`} className="ml-2">{data?.Coordinator1_ph ? data.Coordinator1_ph:'__'}</a>
        </div>
        <div className='p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-bold'>{data?.Coordinator2?data.Coordinator2:'Name'}</h2>
          <a href={`tel:${data?.Coordinator2_ph ? data.Coordinator1:'00000'}`} className="ml-2">{data?.Coordinator2_ph?data.Coordinator2_ph:'+91123456789'}</a>
        </div>
      </div>
      </div>
    </div>
  </div>
  );
};

export default Eventpage;