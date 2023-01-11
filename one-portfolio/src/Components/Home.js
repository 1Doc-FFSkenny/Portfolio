import React from 'react'

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import selfimg from '../img/self.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Home() {


  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={35} />
        </>

      ),
      href: 'https://ph.linkedin.com/in/kenneth-eugenio-36b9a8197',
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={35} />
        </>

      ),
      href: 'https://github.com/Gaaame',
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={35} />
        </>

      ),
      href: 'eugenio.kennethcleofas@gmail.com = Feedback&body = Message',
    },
  ];


  return (

    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 py-4">
      <div className=" max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full px-4">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have been studying and working as a web developer for the past two years, and have had the opportunity to work on a wide range of projects for clients in various industries.
          </p>
          <div>
            <div className='flex flex-row gap-4 '>
              <ul className='flex flex-row justify-center items-center gap-2 mb-4 '>
                {links.map(({ id, child, href, style, download }) => (
                  <li key={id}
                    className={""
                    }>
                    <a
                      href={href}
                      className="flex justify-between items-center  w-full text-slate-300"
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {child}
                    </a>
                  </li>

                ))}
              </ul>
            </div>

            <a href='/resume.pdf' download className='group text-white text-xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-indigo-500'>
              My Resume
              <span className='group-hover:rotate-90 duration-300 ml-1'>
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src={selfimg}
            alt="my profile"
            className="rounded-2xl mx-auto w-3/5 "
          />
        </div>
      </div>

    </div>
  )
}

export default Home