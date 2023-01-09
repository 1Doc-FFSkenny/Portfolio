import React from 'react'

const experiences = [
    {
        id:1,
        title: "HTML",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    }
]


function Experience() {
    return (
        <div id="experience" className="w-full">
            <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
                    experience
                </h2>
                <p className="py-4 max-w-lg">
                    While only that hauntedtell many purple no lent cushions more heart.
                    Soul cushions the still if i, hath lamplight mortals the rapping have
                    me and.
                </p>

                <div className="grid lg:grid-cols-4 gap-8">

                </div>
            </div>
        </div>
    )
}

export default Experience