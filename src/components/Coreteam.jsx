import React from 'react';
import '../App.css'
import Sumanth from '../assets/Coordinates/Sumanth.jpg'
import Akshay from '../assets/Coordinates/Akshay.jpg'
import Prathik from '../assets/Coordinates/Prathik.jpg'
import Sushma from '../assets/Coordinates/Sushma.jpg'
import Raksha from '../assets/Coordinates/Raksha.jpg'
import Imran from  '../assets/Coordinates/Imran.jpg'
import Nasreen from  '../assets/Coordinates/Nasreentaj.jpg'

const Team = () => {
  
  const Faculty = [
    {
      name: 'Imran Khan',
      role: 'Assistant Professor, ISE Dept',
      image: Imran, 
    },
    {
      name: 'Nasreen Taj',
      role: 'Assistant Professor, ISE Dept',
      image: Nasreen,
    },
  ];

  const members = [
   {
      name: 'Sumanth SV',
      image: Sumanth, 
    },
    {
      name: 'Akshay LN',
      image: Akshay, 
    },
    {
      name: 'Raksha GW',
      image: Raksha,
    },
    {
      name: 'Sushma BB',
      image: Sushma, 
    },

    {
      name: 'Pratheek RT',
      image: Prathik, 
    },
  ];

  return (
    <div className=" text-white py-10">
      <div className="container mx-auto text-center">
        <h1 data-aos="fade-up" className="text-4xl font-bold mb-10">Faculty Co-ordinators</h1>
        
        <div className="flex flex-wrap justify-center mb-10">
          {Faculty.map((lead, index) => (
            <div data-aos="zoom-in" key={index} className="m-4">
              <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <img
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                  src={lead.image}
                  alt={lead.name}
                />
                <h2 className="mt-4 text-xl font-bold">{lead.name}</h2>
                <p className="mt-2 text-gray-400">{lead.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 data-aos="fade-up" className="text-2xl font-bold mb-6">Sukalpa Core Team</h2>
        <div className="flex flex-wrap justify-center">
          {members.map((member, index) => (
            <div data-aos="fade-up" data-aos-delay={100} key={index} className="m-4">
              <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={member.image}
                  alt={member.name}
                />
                <h2 className="mt-4 text-xl font-bold">{member.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
