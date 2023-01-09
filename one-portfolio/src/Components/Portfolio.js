import React from 'react'
import Navbar from './Navbar';

import Eagro from '../img/Eagro.png';
import Plantify1 from '../img/Plantify1.png';
import Plantify2 from '../img/Plantify2.png';
import Sappi from '../img/Sappi.png';
import vetAdmin from '../img/Vetadmin.png';

function Portfolio() {


    const portfolio = [
        {
            id: 1,
            src: Eagro,
            link: "E Agro Website" 
        },
        {
            id: 2,
            src: Plantify1,
            link: "Plantify Figma Mockup" 
        },
        {
            id: 3,
            src: Plantify2,
            link: "Plantify Website" 
        },
        {
            id: 4,
            src: Sappi,
            link: "Sappi Website" 
        },
        {
            id: 5,
            src: vetAdmin,
            link: "MyVet Mockup" 
        },

    ]

    return (
        <div className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full'>
            <div className='max-w-screen-xl  mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
                    {portfolio.map(({ id, src, link }) =>
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                            <img src={src}  alt="" className='rounded-md bg-auto duration-200 hover:scale-105 h-auto max-h-lg' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-2xl md:text-xl'>{link}</button>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </div>
    )
}

export default Portfolio