import React from 'react'
import { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sunil_kumar from '../assets/Governs/Sunil_kumar.jpg'
import Maheshappa from '../assets/Governs/MAheshappa.jpg'
// import VJS from '../assets/Governs/VJS.jpg'
import Shankapal from '../assets/Governs/Shankapal.jpg'
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import Principal from '../assets/Governs/Principal.jpg'

const governing = [
  {
    id: 1,
    name: "Dr. S.R. Shankapal",
    image : Shankapal, 
    resignation :"Vice Chancellor, GMU",
  },
  {
    id: 2,
    name: "Dr. H.D Maheshappa ",
    image : Maheshappa, 
    resignation :"Pro-Vice Chancellor, GMU.",
  },
  {
    id: 3,
    name: "Dr. Sunil Kumar B.S",
    image : Sunil_kumar, 
    resignation :"Registrar, GMU.",
  },
  {
    id: 4,
    name: "Dr. Sanjay Pande M.B",
    image : Principal, 
    resignation :"Principal of GMIT",
  },
  
  
  

]


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
            <h2 className='text-3xl font-bold'>Board of Governers</h2>
            <div className="flex flex-wrap justify-center mb-10 mt-5">
          {
          governing.map((lead, index) => (
            <div data-aos="zoom-in" key={index} className="m-4 ">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md ">
                <img
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                  src={lead.image}
                  alt={lead.name}
                />
                <h2 className="mt-4 text-xl font-bold">{lead.name}</h2>
                <p className="mt-2 text-gray-400">{lead.resignation}</p>
              </div>
            </div>
          ))}
        </div>
            <h2 className=" font-semibold text-2xl ">SUKALPA</h2>
            <p className={` font-mono ${isMobile?'text-center p-3 mt-6':'text-start   p-10 w-8/12`'} text-md mx-auto`}>Sukalpa, an annual event, attracts over 500 participants with a mix of technical and non-technical games, offering exciting prizes. Participants compete in coding challenges, robotics contests, quizzes, and creative arts, fostering innovation and collaboration. It provides a platform for students and professionals to showcase skills, learn, and network, reflecting the community's passion and organizers' dedication.</p>
    </div>
  </div>
  )
}
export default About;