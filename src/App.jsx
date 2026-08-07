import { Navbar } from "@/layout/Navbar";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Certification} from "@/sections/Certification";
import {Experience } from "@/sections/Experience";
import {Education} from "@/sections/Education";
import {Testimonials} from "@/sections/Testimonials";
import {Contact} from "@/sections/Contact";
function App() {
  return (
   <div className ="min-h-screen overflow-x-hidden">
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Experience/>
      <Education/>
      <Certification/>
      <Testimonials/>
      <Contact/>
    </main>
   </div>
  ); 
}

export default App;
