import React from 'react'

function Contact() {
  return (
    <div name="contact" className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white '>
        <div className='flex flex-col p-4 justify-center max-w-screen-2xl mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-semibold inline border-b-4 border-gray-500 px-4 md:px-0'>Contact</p>
                <p className='py-6'>Let's get in touch!</p>
            </div>

            <div className='flex justify-center items-center'>
              <form action='https://getform.io/f/a153385d-877d-46be-8da9-e443fa172c3e' method='POST' className='flex flex-col md:w-1/2 bg-tran'>
                <input type="text" name="name" className='my-4 p-6 bg-transparent border-2 rounded-md focus:outline-none'  placeholder="Your Name" />
                <input type="text" name="email" className='my-2 p-6 bg-transparent border-2 rounded-md focus:outline-none' placeholder="E-Mail"  />
                <textarea type="text" name="message" rows="12" placeholder='Enter your message' className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none" />
                <button type='submit'  className='bg-gradient-to-r from-cyan-400 to-indigo-500 text-xl font-medium text-white px-12 py-6 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact