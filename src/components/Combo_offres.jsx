import React from 'react';

function Combo_offres() {
  return (
    <div className='flex flex-wrap justify-center  flex-col text-center items-center h-screen text-white'>
        <div className='flex justify-around w-10/12'>
           <div className='bg-blue-500 p-4 rounded-xl w-96'>
        <h2>Code Clash and Tech maze</h2>
        <h3>Registration Fee : 169/-</h3>
        <button className='bg-white text-black font-bold p-2 rounded-xl'>Get Register</button>
      </div>
      <div className='bg-blue-500 p-4 rounded-xl w-96'>
        <h2>(Code Clash / Tech maze) and Engineers Eye</h2>
        <h3>Registration Fee : 169/-</h3>
        <button className='bg-green-400'>Get Register</button>

      </div> 
        </div>
      <div className='flex justify-around w-10/12 mt-10 '>
        <div className='bg-blue-500 p-4 rounded-xl w-96'>
        <h2>Ideathon and (Code Clash or Tech maze Engineers Eye)</h2>
        <h3>Registration Fee : 200/-</h3>
        <button className='bg-green-400'>Get Register</button>

      </div>
      <div className='bg-blue-500 p-4 rounded-xl w-96'>
        <h2>Hackathon and (Engineers Eye or Tech maze)</h2>
        <h3>Registration Fee : 160/-</h3>
        <button className='bg-green-400'>Get Register</button>

      </div>
      </div>
      
    </div>
  );
}

export default Combo_offres;
