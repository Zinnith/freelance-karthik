import { Award, Calendar, Building2, ExternalLink } from "lucide-react";
import certificate from "@/assets/certifications/certificate1.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState, useEffect, useRef } from "react";

export const Certification = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-28 bg-[#1A120B] overflow-hidden"
    >
      {/* Cursor Glow Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.08), transparent 80%)`,
        }}
      />

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-yellow-500/10 blur-[160px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="glass px-5 py-4 rounded-full text-xl uppercase tracking-[0.25em]">
            Certifications
          </span>

          <div className="mt-6 flex items-center justify-center gap-4">
            <h2 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
                Professional Certification
              </span>
            </h2>

            {/* Small Lottie Animation */}
            <div className="w-40 h-40 animate-fade-in">
              <DotLottieReact
                src="https://lottie.host/2fb9c29e-0a55-43f4-9cd8-29fdad61c4d8/wMEeQQN6Zz.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </div>

        {/* Premium Card */}
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-yellow-500/10 animate-float">
          <div className="grid lg:grid-cols-2 items-center">
            {/* Left */}
            <div className="p-10 lg:p-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/15 mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-6">
                FOSTAC Level 3
              </h3>

              <div className="space-y-5 text-gray-300">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span>Food Safety and Standards Authority of India</span>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Issued in 2024</span>
                </div>

                <p className="leading-8 text-gray-400">
                  Certified in Food Safety Supervisor Training, HACCP,
                  food hygiene, quality assurance, and restaurant safety
                  management with industry-standard compliance practices.
                </p>
              </div>

              <button
                onClick={() => window.open("/certificates/fostac-certificate.pdf", "_blank")}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                View Appointment Letter
                <ExternalLink size={18} />
              </button>
            </div>

            {/* Right */}
            <div className="flex justify-center p-8 lg:p-10 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <img
                  src={certificate}
                  alt="FOSTAC Certificate"
                  className="relative w-[340px] rounded-2xl border border-primary/20 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};