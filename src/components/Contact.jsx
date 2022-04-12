import React from 'react';
import {FaLessThan} from 'react-icons/fa';
import {FaGreaterThan} from 'react-icons/fa';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/fca511b1-9a79-4d14-89b5-49f0488b2426" className='flex flex-col max-w-[600px] w-full'>
        <div>
          <p className="text-4xl flex justify-center place-items-center font-bold text-gray-100 ">
            Works
          </p>
          <p className="py-2 pb-4 flex justify-center place-items-center font-bold text-gray-100">
            <FaLessThan />
            Checkout some of my recent works /
            <FaGreaterThan/>
          </p>
        </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact