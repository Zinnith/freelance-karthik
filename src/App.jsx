
import { useState, useEffect } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Certification } from "@/sections/Certification";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import LoadingScreen from "@/components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  // Check if user has visited before
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
    sessionStorage.setItem('hasVisited', 'true');
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Loading Screen - only shows on first visit */}
      {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {/* Your existing content */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certification />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;