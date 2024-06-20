import React from 'react'
import { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {

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
    <div className={`text-white w-full bg-opacity-50 ${isMobile?'p-4 h-fit':'p-5 h-fit'}    text-center  z-[10]`}>
    <div className="leading-7 ">
      <h2 className="text-5xl font-bold ">About Us</h2>
      <p className={` font-mono ${isMobile?'text-center p-3 mt-6':'text-start   p-10 w-8/12`'} text-md mx-auto`} >
      The department, established in 2001 with an intake of 60 students, is equipped with necessary infrastructure and laboratory facilities. It strives for excellence in student performance, teacher-student relationships, quality education, research motivation, and instilling human qualities. Laboratories cover areas like Computing, Systems Programming, Networking, and more. The active Forum EXOTIC supports student development through technical workshops and encourages extracurricular activities. Extensive placement training enhances employability. Faculty are engaged in research, and students consistently achieve excellent results, with some becoming university toppers. Alumni work in reputed multinational companies in application development and research.
            </p>
            <h2 className=" font-mono text-2xl ">SUKALPA</h2>
            <p className={` font-mono ${isMobile?'text-center p-3 mt-6':'text-start   p-10 w-8/12`'} text-md mx-auto`}>Sukalpa, an annual event, attracts over 500 participants with a mix of technical and non-technical games, offering exciting prizes. Participants compete in coding challenges, robotics contests, quizzes, and creative arts, fostering innovation and collaboration. It provides a platform for students and professionals to showcase skills, learn, and network, reflecting the community's passion and organizers' dedication.</p>
    </div>
  </div>
  )
}
export default About;