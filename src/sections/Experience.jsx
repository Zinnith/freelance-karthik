import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // Import ChevronDown from lucide-react
import experienceBg from "../assets/experience-bg.jpg"; // Adjust path based on your folder structure

export const Experience = () => {
  const experiences = [
    {
      year: "2022 - Present",
      role: "Senior Operations Manager",
      company: "Global Ventures Inc.",
      desc: "Leading cross-functional teams to optimize operational efficiency, reduce costs by 25%, and improve customer satisfaction scores by 40%. Implemented agile methodologies across departments.",
    },
    {
      year: "2020 - 2022",
      role: "Operations Lead",
      company: "Fine Dining Group",
      desc: "Managed daily operations across 15+ locations, streamlined supply chain processes, and introduced quality assurance protocols that increased consistency by 60%.",
    },
    {
      year: "2018 - 2020",
      role: "Business Development Executive",
      company: "Tech Solutions Inc.",
      desc: "Expanded market presence across 3 new regions, secured partnerships with 20+ enterprise clients, and grew revenue by 150% within the first year.",
    },
    {
      year: "2016 - 2018",
      role: "Project Coordinator",
      company: "Innovation Hub",
      desc: "Successfully coordinated 50+ projects from inception to completion, ensuring on-time delivery and adherence to quality standards. Built strong client relationships.",
    },
  ];

  return (
    <section id="experience" className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${experienceBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark Overlay - Adjust opacity as needed */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e12]/10 via-[#14181c]/40 to-[#0a0e12]/50" />
        
        {/* Additional Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-yellow-500/10 to-amber-500/10 blur-3xl animate-pulse" />
        <div 
          className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl animate-pulse" 
          style={{ animationDelay: "1.5s" }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-3xl animate-pulse" 
          style={{ animationDelay: "3s" }} 
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header with Speech Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/40 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-yellow-400">
              Career Journey
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Professional{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
                Journey
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-yellow-400 to-amber-600"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          {/* Speech/Quote Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="relative mx-auto mt-8 max-w-xl"
          >
            {/* Speech Bubble with Quote Marks */}
            <div className="relative rounded-2xl border border-yellow-400/20 bg-black/40 p-6 backdrop-blur-xl shadow-2xl shadow-yellow-400/10 md:p-8">
              <p className="text-sm font-semibold text-yellow-400 sm:text-base">
                A Timeline of My Professional Growth
              </p>
              <p className="text-base text-white sm:text-lg">
                From curious beginnings to leading restaurant and hospitality operations
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-gradient-to-b from-yellow-200 via-yellow-500 to-amber-800 md:left-1/2 md:-translate-x-1/2">
            {/* Animated Pulse on Line */}
            <motion.div
              className="absolute top-0 h-12 w-1 rounded-full bg-yellow-400"
              animate={{
                y: ["0%", "100%", "0%"],
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: "top",
              }}
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.year}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-20 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline Node */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="absolute left-5 top-10 z-10 h-6 w-6 rounded-full border-4 border-[#1A120B] bg-yellow-400 shadow-lg shadow-yellow-400/50 md:left-1/2 md:-translate-x-1/2"
              >
                <div className="absolute inset-0 rounded-full bg-yellow-400/50 blur-md animate-ping" />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`ml-14 w-[calc(100%-4rem)] rounded-2xl border border-yellow-700/30 bg-black/60 p-6 backdrop-blur-md transition-all duration-500 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/20 md:ml-0 md:w-[42%] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-yellow-400">
                    {exp.year}
                  </span>
                  {index === 0 && (
                    <span className="rounded-full bg-yellow-400/20 px-2 py-0.5 text-xs font-medium text-yellow-400">
                      Current
                    </span>
                  )}
                </div>

                <h3 className="mt-2 text-xl font-bold text-yellow-100 sm:text-2xl">
                  {exp.role}
                </h3>

                <h4 className="mt-1 text-base text-amber-300 sm:text-lg">
                  {exp.company}
                </h4>

                <p className="mt-4 text-sm leading-7 text-stone-300 sm:text-base">
                  {exp.desc}
                </p>

                {/* Animated Bottom Border */}
                <motion.div
                  className="mt-4 h-0.5 rounded-full bg-gradient-to-r from-yellow-400/50 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
              </motion.div>
            </motion.div>
          ))}

          {/* End Node */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute bottom-0 left-5 h-6 w-6 -translate-y-1/2 rounded-full border-4 border-[#1A120B] bg-gradient-to-r from-yellow-400 to-amber-500 shadow-lg shadow-yellow-400/50 md:left-1/2 md:-translate-x-1/2"
          >
            <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-md animate-pulse" />
          </motion.div>
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-black/40 px-6 py-3 backdrop-blur-sm">
            <span className="text-sm text-gray-400">
              ✨ Building the next chapter of excellence
            </span>
          </div>
        </motion.div>
        
        {/* Scroll Button - Fixed position and functionality */}
        <div className="absolute -bottom-18 left-1/2 -translate-x-1/2 z-50">
          <button
            type="button"
            onClick={() => {
              const nextSection = document.getElementById("experience")?.nextElementSibling;
              if (nextSection) {
                nextSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors group cursor-pointer"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

Experience.displayName = "Experience";