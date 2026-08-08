import { Award, Calendar, Building2, ExternalLink, Sparkles } from "lucide-react";
import certificate from "@/assets/certifications/certificate1.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
      <motion.div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-yellow-500/10 blur-[160px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="glass px-5 py-4 rounded-full text-xl uppercase tracking-[0.25em] inline-block"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              Certifications
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </span>
          </motion.span>

          <div className="mt-8 flex items-center justify-center flex-wrap">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold"
            >
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
                Professional Certification
              </span>
            </motion.h2>
          </div>
        </motion.div>

        {/* Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-yellow-400/40 hover:shadow-yellow-500/20 group"
        >
          <div className="grid lg:grid-cols-2 items-center">
            {/* Left */}
            <div className="p-8 sm:p-10 lg:p-12">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400/15 mb-6 relative"
              >
                <Award className="w-8 h-8 text-yellow-400" />
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-yellow-400/20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-6"
              >
                FOSTAC Level 3
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-5 text-gray-300"
              >
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Building2 className="w-5 h-5 text-yellow-400" />
                  <span>Food Safety and Standards Authority of India</span>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Calendar className="w-5 h-5 text-yellow-400" />
                  <span>Issued in 2024</span>
                </motion.div>

                <motion.p 
                  className="leading-8 text-gray-400"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  Certified in Food Safety Supervisor Training, HACCP,
                  food hygiene, quality assurance, and restaurant safety
                  management with industry-standard compliance practices.
                </motion.p>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("/certificates/fostac-certificate.pdf", "_blank")}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 group/btn"
              >
                View Appointment Letter
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ExternalLink size={18} />
                </motion.span>
              </motion.button>
            </div>

            {/* Right */}
            <motion.div 
              className="flex justify-center p-8 lg:p-10 bg-gradient-to-br from-yellow-400/5 to-transparent"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-yellow-400/20 blur-2xl group-hover:blur-3xl transition-all duration-500"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.img
                  src={certificate}
                  alt="FOSTAC Certificate"
                  className="relative w-[340px] rounded-2xl border border-yellow-400/20 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Corner Decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-yellow-400/40 rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-yellow-400/40 rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-yellow-400/40 rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-yellow-400/40 rounded-br-lg" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};