import React from 'react'

import bootstrap from '../icons/bootstrap.svg';
import html5 from '../icons/html5.svg';
import css3 from '../icons/css3.svg';
import javascript from '../icons/javascript.svg';
import laravel from '../icons/laravel.svg';
import react from '../icons/react.svg';
import wordpress from '../icons/wordpress.svg';
import sass from '../icons/sass.svg';
import github from '../icons/github.png';
import tailwind from '../icons/tailwind.svg';

const experiences = [
    {
        id: 1,
        title: "HTML 5",
        src: html5,

    },
    {
        id: 2,
        title: "CSS 3",
        src: css3,

    },
    {
        id: 3,
        title: "Javascript",
        src: javascript,

    },
    {
        id: 4,
        title: "Sass",
        src: sass,

    },
    {
        id: 5,
        title: "Bootstrap",
        src: bootstrap,

    },
    {
        id: 6,
        title: "Tailwind",
        src: tailwind,

    },
    {
        id: 7,
        title: "React",
        src: react,
    },
    {
        id: 8,
        title: "Wordpress",
        src: wordpress,
    },
    {
        id: 9,
        title: "Github",
        src: github,
    },
    {
        id: 10,
        title: "Laravel",
        src: laravel,

    },

   
];


function Experience() {
    return (
        <div id="experience" className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white px-4">
            <div className="max-w-screen-xl mx-auto py-36 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-white font-bold pb-8 ">
                    My Tech Stack
                </h2>

                <div className="grid lg:grid-cols-3 gap-8">
                    {experiences.map(({ id, title, src }) => (
                        <div
                            key={id}  className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-10 rounded-lg shadow-md shadow-accent-50 hover:scale-105 duration-300">
                            <img src={src} width="64px" height="64px" alt={title} />
                            <h3 className="font-medium text-xl ">{title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience