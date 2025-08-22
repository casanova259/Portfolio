import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import LightRays from "./blocks/Backgrounds/LightRays/LightRays.jsx";
import Aurora from "./blocks/Backgrounds/Aurora/Aurora.jsx";
import BlurText from "./blocks/TextAnimations/BlurText/BlurText.jsx";
function App() {

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (


    <div className="relative h-screen w-full overflow-hidden bg-black">
      
      <Navbar/>

      {/* Background */}
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#FFFFFF"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
        <BlurText
          text="Crafting Code, Creating Magic"
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-7xl font-bold text-amber-300 text-center"
        />
        {/* <p className="mt-4 text-lg md:text-xl text-gray-300">
          Exploring React, Animations & Creativity ✨
        </p> */}
      </div>
    </div>
  );
}

export default App;
