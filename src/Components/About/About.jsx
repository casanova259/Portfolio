import React from 'react'

function About() {

    function check() {
        console.log("maybe these it is ");
    }

    // function ko yaha call kar (return se upar)
    check();

    return (
        <>
            <section className="py-16 bg-black text-white text-center">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="max-w-2xl mx-auto text-lg">
                    I’m Manik Sharma, a Full-Stack Developer with a strong base in C, C++, and DSA. 
                    I build scalable web and mobile apps using JavaScript, React, Node.js, Express, 
                    Tailwind CSS, MongoDB, and PostgreSQL.

                    I enjoy working with APIs, Git, and GitHub to create efficient, collaborative 
                    projects, and I’m exploring System Design and Project Management to better 
                    architect and scale applications.

                    My focus is on crafting clean, optimized code and delivering impactful digital experiences.
                </p>
            </section>
        </>
    )
}

export default About;
