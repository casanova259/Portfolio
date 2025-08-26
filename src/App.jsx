import React from "react";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Logoloop from "./Components/LogoLoop/LogoLoop.jsx";

function App() {

  function check()
  {
    console.log("MAYB ")
  }
  
  return (


    <div className="w-full bg-black">
      <Navbar/>
      <Hero/>
      <About/>
      <Logoloop/>
    </div>
  );
}

export default App;
