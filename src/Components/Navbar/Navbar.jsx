import React from 'react'

function Navbar() {

    return (
        <div className='fixed bg-transparent flex justify-between items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%]  top-[20px] rounded-full backdrop-blur-md bg-opacity-50 text-white shadow-lg z-10'>
            <ul className='flex gap-16 text-xl'>
                <a>Home</a>
                <a>About</a>
                <a>Skills</a>
                <a>Projects</a>
                <a>Contact</a>
            </ul>
        </div>
    )
}

export default Navbar