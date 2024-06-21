import React from 'react';
import Sumanth from '../assets/Coordinates/Sumanth.jpg'
import Prajwal from '../assets/Coordinates/Prajwal.jpg'
import { useEffect,useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

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
    <div className={`bg-black text-white ${isMobile?'h-full':'p-8'}  `}>
      <p className={`h-1 ${isMobile?'flex-row':''} bg-white w-full `}></p>
      <div className={`flex flex-col lg:flex-row items-center ${isMobile?'justify-center':'justify-between'} `}>
        <div className=" mt-10 lg:w-1/2 text-white">
          {/* <h1 className=''>GM Institue of Technology , Davangere</h1> */}

           <iframe
            className={`${isMobile?'flex-row rounded-e-full':'rounded-e-full'}`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.1582366041966!2d75.8822236745708!3d14.47560158012582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba2f6e51325245%3A0x9b42a50b7155a708!2sGM%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1718610539451!5m2!1sen!2sin" 
            width="80%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="GM  University"
          ></iframe> 
          
          
        </div>
        <div className="lg:w-full mt-8 lg:mt-0 lg:ml-1 ">

          <div className="flex flex-col space-y-10">
            <div className=''>
                <h1 className={` ${isMobile?'text-2xl':'text-3xl'}  font-mono p-2 text-center `} >Design and Developed by</h1>
            </div>
            
            <div className={`flex min-h-60 ${isMobile?'flex-col justify-between':'flex-row justify-around'}   items-center`}>
            <div className="flex items-center space-x-5">
              <img src={Sumanth} alt="Person" className="rounded-full w-24 h-24 "/>
              <div>
                <h2 className="text-2xl font-bold">Sumanth SV</h2>
                <p className="flex items-center">
                </p>
                <p className="flex items-center">
                  <span className="font-medium">Phone: </span>
                  <a href="tel:+918123113412" className="ml-2">+91-8123113412</a>
                </p>
                <div className="flex space-x-4 mt-4">
                    {/* <a href="https://sumanthsv.github.io/ssv_site/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <svg fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 6h-4V4c0-1.1-.9-2-2-2H10C8.9 2 8 2.9 8 4v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 0H10V4h4v2zm6 12H4V8h16v10zm-6-4v-2h-4v2H8v-4h8v4h-2z"/>
                    </svg>

                  </a> */}
                  <a href="https://www.linkedin.com/in/sumanth-sv-3b1507221/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M20.45 3H3.55C3.247 3 3 3.247 3 3.55v16.9C3 20.753 3.247 21 3.55 21h16.9c.303 0 .55-.247.55-.55V3.55c0-.303-.247-.55-.55-.55zM8.455 18.205H5.796v-7.61h2.659v7.61zm-1.329-8.694a1.545 1.545 0 11-.001-3.09 1.545 1.545 0 01.001 3.09zm11.265 8.694h-2.658v-3.877c0-.925-.018-2.115-1.29-2.115-1.29 0-1.487 1.007-1.487 2.05v3.942H9.944v-7.61h2.553v1.04h.036c.355-.673 1.223-1.39 2.515-1.39 2.69 0 3.186 1.77 3.186 4.072v3.888z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/sumanth_sv_04/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.259.057 2.017.275 2.49.465.587.228 1.013.503 1.456.947.444.443.72.869.947 1.455.19.475.409 1.234.465 2.491.058 1.265.07 1.646.07 4.85 0 3.204-.012 3.585-.07 4.85-.057 1.259-.275 2.017-.465 2.49-.228.587-.503 1.013-.947 1.456-.443.444-.869.72-1.455.947-.475.19-1.234.409-2.491.465-1.265.058-1.646.07-4.85.07-3.204 0-3.585-.012-4.85-.07-1.259-.057-2.017-.275-2.49-.465-.587-.228-1.013-.503-1.456-.947-.444-.443-.72-.869-.947-1.455-.19-.475-.409-1.234-.465-2.491-.058-1.265-.07-1.646-.07-4.85 0-3.204.012-3.585.07-4.85.057-1.259.275-2.017.465-2.49.228-.587.503-1.013.947-1.455.443-.444.869-.72 1.455-.947.475-.19 1.234-.409 2.491-.465 1.265-.058 1.646-.07 4.85-.07zm0-2.163c-3.257 0-3.667.014-4.947.073-1.28.058-2.158.272-2.917.578-.78.313-1.437.735-2.091 1.389-.655.655-1.076 1.311-1.39 2.092-.306.758-.52 1.636-.578 2.917C2.014 8.333 2 8.743 2 12c0 3.257.014 3.667.073 4.947.058 1.28.272 2.158.578 2.917.313.78.735 1.437 1.39 2.091.655.655 1.311 1.076 2.092 1.39.758.306 1.636.52 2.917.578 1.28.058 1.69.073 4.947.073 3.257 0 3.667-.014 4.947-.073 1.28-.058 2.158-.272 2.917-.578.78-.313 1.437-.735 2.091-1.39.655-.655 1.076-1.311 1.39-2.092.306-.758.52-1.636.578-2.917.058-1.28.073-1.69.073-4.947 0-3.257-.014-3.667-.073-4.947-.058-1.28-.272-2.158-.578-2.917-.313-.78-.735-1.437-1.39-2.091-.655-.655-1.311-1.076-2.092-1.39-.758-.306-1.636-.52-2.917-.578-1.28-.058-1.69-.073-4.947-.073zM12 5.838a6.163 6.163 0 100 12.327 6.163 6.163 0 000-12.327zm0 10.163a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Repeat the above block for additional contacts */}
            <div className={ `${isMobile?'':''}flex items-center space-x-5`}>
              <img src={Prajwal} alt="Person" className="rounded-full w-24 h-24 "/>
              <div>
                <h2 className="text-2xl font-bold">Prajwal KR</h2>
                <p className="flex items-center">
                  {/* <span className="font-medium">3rd Year, </span> */}
                  {/* <p className="ml-2">ISE Dept</p> */}
                </p>
                <p className="flex items-center">
                  <span className="font-medium">Phone: </span>
                  <a href="tel:+919019986049" className="ml-2">+91-7899274216</a>
                </p>
                {/* <p className="flex items-center">
                  <span className="font-medium">Email: </span>
                  <a href="mailto:sumanthsv04@gmail.com" className="ml-2">prajwalkr07@gmail.com</a>
                </p> */}
                <div className="flex space-x-4 mt-4">
                    {/* <a href="https://sumanthsv.github.io/ssv_site/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <svg fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 6h-4V4c0-1.1-.9-2-2-2H10C8.9 2 8 2.9 8 4v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 0H10V4h4v2zm6 12H4V8h16v10zm-6-4v-2h-4v2H8v-4h8v4h-2z"/>
                    </svg>

                  </a> */}
                  <a href="https://www.linkedin.com/in/prajwal-kr-49732727b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M20.45 3H3.55C3.247 3 3 3.247 3 3.55v16.9C3 20.753 3.247 21 3.55 21h16.9c.303 0 .55-.247.55-.55V3.55c0-.303-.247-.55-.55-.55zM8.455 18.205H5.796v-7.61h2.659v7.61zm-1.329-8.694a1.545 1.545 0 11-.001-3.09 1.545 1.545 0 01.001 3.09zm11.265 8.694h-2.658v-3.877c0-.925-.018-2.115-1.29-2.115-1.29 0-1.487 1.007-1.487 2.05v3.942H9.944v-7.61h2.553v1.04h.036c.355-.673 1.223-1.39 2.515-1.39 2.69 0 3.186 1.77 3.186 4.072v3.888z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/prajwal_kr07/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.259.057 2.017.275 2.49.465.587.228 1.013.503 1.456.947.444.443.72.869.947 1.455.19.475.409 1.234.465 2.491.058 1.265.07 1.646.07 4.85 0 3.204-.012 3.585-.07 4.85-.057 1.259-.275 2.017-.465 2.49-.228.587-.503 1.013-.947 1.456-.443.444-.869.72-1.455.947-.475.19-1.234.409-2.491.465-1.265.058-1.646.07-4.85.07-3.204 0-3.585-.012-4.85-.07-1.259-.057-2.017-.275-2.49-.465-.587-.228-1.013-.503-1.456-.947-.444-.443-.72-.869-.947-1.455-.19-.475-.409-1.234-.465-2.491-.058-1.265-.07-1.646-.07-4.85 0-3.204.012-3.585.07-4.85.057-1.259.275-2.017.465-2.49.228-.587.503-1.013.947-1.455.443-.444.869-.72 1.455-.947.475-.19 1.234-.409 2.491-.465 1.265-.058 1.646-.07 4.85-.07zm0-2.163c-3.257 0-3.667.014-4.947.073-1.28.058-2.158.272-2.917.578-.78.313-1.437.735-2.091 1.389-.655.655-1.076 1.311-1.39 2.092-.306.758-.52 1.636-.578 2.917C2.014 8.333 2 8.743 2 12c0 3.257.014 3.667.073 4.947.058 1.28.272 2.158.578 2.917.313.78.735 1.437 1.39 2.091.655.655 1.311 1.076 2.092 1.39.758.306 1.636.52 2.917.578 1.28.058 1.69.073 4.947.073 3.257 0 3.667-.014 4.947-.073 1.28-.058 2.158-.272 2.917-.578.78-.313 1.437-.735 2.091-1.39.655-.655 1.076-1.311 1.39-2.092.306-.758.52-1.636.578-2.917.058-1.28.073-1.69.073-4.947 0-3.257-.014-3.667-.073-4.947-.058-1.28-.272-2.158-.578-2.917-.313-.78-.735-1.437-1.39-2.091-.655-.655-1.311-1.076-2.092-1.39-.758-.306-1.636-.52-2.917-.578-1.28-.058-1.69-.073-4.947-.073zM12 5.838a6.163 6.163 0 100 12.327 6.163 6.163 0 000-12.327zm0 10.163a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            </div>
            </div>
            <div>
              
            </div>
            
            
      </div>
      </div>
      <div className={`flex ${isMobile?'flex-col mt-10':'flex-row'} justify-center items-center `}>
        <p className='mt-3  text-center mb-1 font-bold '>CopyRight © 2024 All Right Reserved</p>
      </div>
      </div>
  );
};

export default Contact;
