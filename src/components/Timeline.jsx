import React from 'react';
import {useState,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Timeline () {
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
    <div className="text-white  min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-20">Timeline</h1>
      <div className="relative w-full md:w-3/4 lg:w-1/2 px-4">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-600"></div>
        {[
          {
            date: "21th June 2024",
            title: "Registrations begin",
            description: "Explore the exciting world of technology and innovation. Unleash your creative potential and build something extraordinary. Join us on July 15th and 16th for a hackathon like no other!",
            color: "bg-purple-600",
            icon: "📅"
          },
          {
            date: "01 July 2024",
            title: "Day 1: Let The Hackthon Begin",
            description: "",
            table: [
              { time: "9:30am - 12:30pm", event: "Hackthon-Starts" },
              { time: "4:00pm", event: "Ribbon Cutting and Addressing" },
              // { time: "6:00pm", event: "Hackathon Begins" },
            ],
            color: "bg-red-600",
            icon: "💻"
          },
          {
            date: "01 July 2024",
            title: "Day 1: Code Clash",
            description: "Where the Best Coders Compete for Glory",
            table: [
              { time: "11:00am - 11:30am", event: "First Round -> Quiz-bit" },
              { time: "12:45pm - 01:30", event: "Second Round -> Reverse Coding" },
              { time: "2:30pm - 3:30pm", event: "Third Round -> Fix-it Frenzy" },
              { time: "04:00pm - 05:30", event: "Final Round -> DSA Duel" },
            ],
            color: "bg-green-600",
            icon: "🏆"
          },
          {
            date: "01 July 2024",
            title: "Day 1: E-Sports",
            description: "Code Beyond Limits: Innovate, Create, Elevate , Emphasize innovation in coding.",
            table: [
              { time: "2:00pm - 3:30pm", event: "BGMI" },
              { time: "04:00pm - 05:30", event: "Free fire" },
            ],
            color: "bg-red-600",
            icon:"🎮"
        },
          {
            date: "02 July 2024",
            title: "Day 2: Code Collab",
            description: "",
            table: [
              { time: "10:00am - 11:00am", event: "Collabarate with your teammate" },
            ],
            color: "bg-green-600",
            icon: "✌️"
          },
          {
            date: "02 July 2024",
            title: "Day 2: Ideathon ",
            description: "",
            table: [
              { time: "11:00am - 2:00pm", event: "Pitch on New world" },
            ],
            color: "bg-green-600",
            icon: "💡"
          },
          {
            date: "02 July 2024",
            title: "Day 2: Engineers Eye",
            description: "",
            table: [
              { time: "02:00pm - 05:00pm", event: "Collabarate with your teammate" },
            ],
            color: "bg-green-600",
            icon: "👁️"
          },
          
        ].map((event, index) => (
          <div className="mb-10 relative flex flex-col md:flex-row items-center p-5" key={index}>
            <div className={`absolute left-1/2  transform -translate-x-1/2 md:static md:translate-x-0 flex items-center ${isMobile?'-mt-12':''}    `}>
              <div className={`w-8 h-8 ${event?.color? event.color:'green'} rounded-full flex items-center justify-center text-2xl`}>{event?.icon}</div>
              <div className="ml-2 text-center md:text-left">{event?.date?event.date:'15/july/2024'}</div> 
            </div>
            <div data-aos="fade-up" className={"bg-[#151515] p-4 rounded-lg shadow-md w-full md:w-3/4"}>
              <h2 className={`text-xl font-bold ${event.color.replace('bg', 'text')}`}>{event?.title?event.title:'Event'}</h2>
              {event.description && <p className="mt-2">{event?.description ?event.description:''}</p>}
              {event.table && (
                <div  className="bg-[#8000C8] p-2 rounded-lg mt-4">
                  <table className="w-full text-center">
                    <thead>
                      <tr>
                        {Object.keys(event?.table[0]).map((key) => (
                          <th className="px-4 py-2" key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {event.table.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {Object.values(row).map((value, cellIndex) => (
                            <td className="border px-4 py-2" key={cellIndex}>{value}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
