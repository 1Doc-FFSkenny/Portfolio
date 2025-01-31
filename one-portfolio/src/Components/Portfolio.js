import React from 'react'
// import Navbar from './Navbar';

import Eagro from '../img/Eagro.png';
import Plantify1 from '../img/Plantify1.png';
// import Sappi from '../img/Sappi.png';
import vetAdmin from '../img/Vetadmin.png';
import backroad from '../img/Backroad.png';
import photo from '../img/photo.png'
import generator from '../img/Color-Generator.png'

function Portfolio() {


    const portfolio = [
        {
            id: 1,
            src: Eagro,
            link: "E Agro Website",
            href: "https://ken.onedoc.ph/index.php/en/home/"

        },
        {
            id: 2,
            src: Plantify1,
            link: "Plantify Figma Mockup",
            href: "https://www.behance.net/gallery/126968495/Plantify-Mockups"
        },
        {
            id: 3,
            src: backroad,
            link: "Backroads Travel Website",
            href: "https://backroadstourismoffical.netlify.app/"
        },
        {
            id: 4,
            src: photo,
            link: "Photography Portfolio UI/UX Case Study",
            href: "https://www.behance.net/gallery/175292137/Simple-Green-and-White-Photography-Portfolio"
        },
        {
            id: 5,
            src: generator,
            link: "React Color Generator",
            href: "https://react-color-generate.netlify.app/"
        }



    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full '>
            <div className='max-w-screen-xl py-36  mx-auto flex flex-col justify-center w-full h-full px-4'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-gray-500 px-4 md:px-0'>Portfolio</p>
                    <p className='py-6 px-4 md:px-0'>Check out some of my work right here</p>
                </div>
                <div className='items-baseline grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
                    {portfolio.map(({ id, src, link, href }) =>
                        <div key={id} className=' rounded-lg '>

                            <h2 className='text-2xl capitalize font-semibold mb-2 text-center md:text-left'>{link}</h2>
                            <img src={src} alt="" className='rounded-md bg-auto duration-200 hover:scale-105 h-auto max-h-lg' />
                            <div className='flex items-center justify-center shadow-md shadow-gray-600'>

                                <a href={href} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-lg md:text-xl text-center'>Link</a>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </div>
    )
}

export default Portfolio