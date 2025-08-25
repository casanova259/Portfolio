import React from "react";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";

function App() {

  function check()
  {
    console.log("MAYB ")
  }
  
  return (


    <div className="w-full bg-black">

      <Hero/>
      <About/>
    </div>
  );
}

export default App;
