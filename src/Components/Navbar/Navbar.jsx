import React from 'react'

function Navbar() {

    return (
        <div className='bg-transparent flex justify-center items-center gap-16 py-3 px-10 rounded-full backdrop-blur-md bg-opacity-50 text-white shadow-lg'>
            <ul className='flex gap-16 text-xl'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </ul>
        </div>
    )
}

export default Navbar