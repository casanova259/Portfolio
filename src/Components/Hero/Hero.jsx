import React from 'react'
import Navbar from '../Navbar/Navbar'
import Aurora from '../../blocks/Backgrounds/Aurora/Aurora';
import BlurText from '../../blocks/TextAnimations/BlurText/BlurText';
import SplitText from '../../blocks/TextAnimations/SplitText/SplitText';

function Hero() {


    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <>
            <section className="h-screen flex flex-col justify-center items-center bg-black text-white">
                
                {/* Background */}
                <Aurora
                    colorStops={["#FFEA00", "#FF94B4", "#FF3232"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
                {/* Foreground Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
                    <BlurText
                        text="Crafting Code,Creating Magic"
                        delay={200}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-7xl font-[Lato, sans-serif] font-bold text-white text-center"
                    />
                    {/* <p className="mt-4 text-lg md:text-xl text-gray-300">
          Exploring React, Animations & Creativity ✨
        </p> */}
                    <div className="pt-8 pb-8">
                        <SplitText
                            text="Hi, I’m Manik Sharma — a passionate learner and aspiring developer."
                            className="text-3xl font-[Lato, sans-serif] antialiased text-yellow-400"
                            delay={50}
                            duration={0.2}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />
                    </div>
                </div>

            </section>
        </>

    )
}

export default Hero