import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  const [isContact, setIsContact] = useState(false);
  return (
    <div>

      {/* Background Vectorel Lines */}
      <div className="absolute z-0 w-screen h-screen">
        <div className="vectors vector1"></div>
        <div className="vectors vector2"></div>
        <div className="vectors vector3"></div>
        <div className="vectors vector4"></div>
        <div className="vectors vector5"></div>
        <div className="vectors vector6"></div>
      </div>

      {/* Background Blur */}
      <div className="w-screen h-screen bgBlur"></div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto relative z-20 flex flex-col justify-between h-screen max-h-[1000px]">
        <Navbar isContact={isContact} setIsContact={setIsContact} />
        <Hero isContact={isContact} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
