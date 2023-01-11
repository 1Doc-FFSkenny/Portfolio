import React from 'react'

function About() {
    return (
        <div name="about" className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white '>
            <div className='max-w-screen-2xl px-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8 pt-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 px-4 md:px-0 '>About</p>
                </div>
                <p className='text-xl py-2'>
                I have a strong passion for creating intuitive and user-friendly websites that provide a seamless experience for the end user. I believe that good design is not just about making a website look good, but also about making it easy to use and navigate.
                </p>
                <br />
                <p className='text-xl py-2'>
                    In addition to my technical skills, I am a strong communicator and work well in team environments. I am always looking to learn and stay up-to-date on the latest web development trends and best practices.
                </p>
                <br/>
                <p className='text-xl py-2'>
                Thank you for visiting my portfolio. I look forward to the opportunity to work with you on your next project.
                </p>
            </div>
        </div>
    )
}

export default About