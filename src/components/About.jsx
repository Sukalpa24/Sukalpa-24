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
      The department was established in the year 2001 with an intake of 60 students. The department is equipped with all necessary infrastructure and laboratory facilities. Keeping in view of the vision of the institute, the department of ISE is working to achieve excellence in various aspects such as: students performance, effective teacher-student relationship, imparting quality education to students, motivating faculty and students towards research and imbibing best human qualities in students. The department has well established laboratories in the areas of Computing, Systems Programming, File Structures, Computer Networking, Microprocessor, Electronic Circuits, Data Structures, OOPS with C++, JAVA, Oracle, Web Programming, LEX and HAC along with the basic laboratories. The Department has a strong and active Forum EXOTIC helping in all-round development of the students through various Technical Workshops on Recent Technologies like Python, XAMP for Web Application Development, Android etc. and are encouraged to participate in extracurricular, co-curricular and sports activities conducted throughout the year. Extensive placement trainings are conducted to improve employability of the students. The faculty of the department are actively involved in research activities in various technical domains. Every semester our students are getting excellent results and got place at university topper list. Department has got 3rd rank for the university and our alumni are working in different reputed multinational companies at different levels in the area of application development & research.
            </p>
            <h2 className=" font-mono text-2xl ">SUKALPA</h2>
            <p className={` font-mono ${isMobile?'text-center p-3 mt-6':'text-start   p-10 w-8/12`'} text-md mx-auto`}>Sukalpa is an annual event that has been successfully conducted for the past two years, attracting over 500 enthusiastic participants. This vibrant competition features a variety of technical and non-technical games, offering exciting prizes for winners. Participants engage in coding challenges, robotics contests, quizzes, and creative arts, fostering a spirit of innovation and collaboration. Sukalpa provides a platform for students and professionals to showcase their skills, learn from each other, and network with like-minded individuals. The event's success is a testament to the community's passion and the organizers' dedication to delivering an enriching experience for all attendees.</p>
    </div>
  </div>
  )
}
export default About;