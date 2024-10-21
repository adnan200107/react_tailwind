import React from 'react';
import adnanimg from "../assets/adnanimg.jpg";
// import './CustomHeader.css'; // Si tu as besoin d'autres styles

export default function CustomHeader() {
    return (
        <div className="w-full bg-blue-400 flex items-center mb-10 py-10" id="home" style={{ minHeight: '80vh' }}>
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center">
                    {/* Section de l'image */}
                    <div className="w-full lg:w-5/12 pb-10 lg:pb-0" style={{ paddingLeft: '15.25rem', paddingRight: '1.25rem' }}>
                        <img className="w-64 lg:w-80 rounded-full shadow-lg" src={adnanimg} alt="Adnan" />
                    </div>

                    {/* Section du texte */}
                    <div className="w-full lg:w-7/12 text-center lg:text-left">
                        <h3 className="text-white font-normal mb-3">I'm</h3>
                        <h1 className="text-4xl lg:text-6xl text-white font-bold mb-2" style={{ WebkitTextStroke: '2px #ffffff' }}>Adnan Labzioui</h1>
                        {/* <h1 className="typed-text-output d-inline font-light text-white"></h1> */}
                        <div className="typed-text hidden">Web Developer, Full Stack Developer</div>
                        <div className="flex items-center justify-center lg:justify-start pt-10">
                            <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                <span></span>
                            </button>
                            <button type="button" class="text-blue-100 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Download CV</button>
                            <button type="button" class="text-blue-100 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Play Video</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
