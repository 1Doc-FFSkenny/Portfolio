import React from 'react'

import selfimg from '../img/self.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 py-4">
      <div className=" max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full px-4">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I have been studying and working as a web developer for the past two years, and have had the opportunity to work on a wide range of projects for clients in various industries.
          </p>
          <div>
            <button className='group text-white text-xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-indigo-500'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300 ml-1'>
                <MdOutlineKeyboardArrowRight size={25} />
              </span>

            </button>
          </div>
        </div>
        <div>
          <img
            src={selfimg}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home