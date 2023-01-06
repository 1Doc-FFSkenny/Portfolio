import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {

    const [nav, setnav] = useState(false);


    // Links Array
    const links = [
        {
            id: 1,
            link: 'home'
        },

        {
            id: 2,
            link: 'About'
        },

        {
            id: 3,
            link: 'experience'
        },

        {
            id: 4,
            link: 'portfolio'
        },
        {
            id: 5,
            link: 'contact'
        },
    ];



    return (
        <>
            <div class='flex justify-between items-center px-4 w-full h-20 text-white  bg-black  fixed'>
                <div>
                    <h1 className='text-4xl ml-2 font-medium font-signature capitalize'>KE</h1>
                </div>

                {/* Links Array Menu */}
                <ul className='hidden md:flex'>


                    {links.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer uppercase font-medium text-whitehover:scale-105 duration-200">{link}</li>
                    ))}


                </ul>

                <div onClick={() => setnav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
                    {/* If Nav is false display FaTimes (cross symbol) */}
                    {/* otherwise show FaBars (hamburget menu) */}
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                {/* if nav is true then display mobile menu */}
                {nav && (
                    // mobile menu
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-indigo-300 to-slate-800'>
                        {links.map(({ id, link }) => (
                            <li key={id} className="px-4 cursor-pointer py-6 text-2xl">{link}</li>
                        ))}

                    </ul>
                )}



            </div>

        </>

    )
}

export default Navbar