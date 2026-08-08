import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Arun Kumar",
      role: "Business Partner",
      company: "Global Ventures",
      message:
        "Karthick consistently demonstrates exceptional leadership and operational discipline. His commitment to quality and attention to detail have been instrumental in our success.",
      initials: "AK",
      image: "https://i.pravatar.cc/200?img=1",
      rating: 5,
      color: "from-amber-400 to-yellow-500",
    },
    {
      id: 2,
      name: "Rahul Menon",
      role: "Restaurant Director",
      company: "Fine Dining Group",
      message:
        "His ability to manage teams, improve operations, and maintain high service standards makes him an exceptional professional. A true asset to any organization.",
      initials: "RM",
      image: "https://i.pravatar.cc/200?img=2",
      rating: 5,
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Operations Lead",
      company: "Tech Solutions Inc.",
      message:
        "A dependable leader with excellent decision-making skills and a genuine focus on customer satisfaction. Karthick's dedication to excellence is truly inspiring.",
      initials: "PS",
      image: "https://i.pravatar.cc/200?img=3",
      rating: 5,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 4,
      name: "Vikram Reddy",
      role: "CEO",
      company: "Innovation Hub",
      message:
        "One of the most dedicated professionals I've worked with. His strategic thinking and ability to execute complex projects with precision is unmatched.",
      initials: "VR",
      image: "https://i.pravatar.cc/200?img=4",
      rating: 5,
      color: "from-green-400 to-emerald-500",
    },
    {
      id: 5,
      name: "Sneha Patel",
      role: "HR Director",
      company: "Global Enterprises",
      message:
        "Karthick's ability to mentor teams and drive results while maintaining a positive work environment is truly remarkable. An outstanding professional.",
      initials: "SP",
      image: "https://i.pravatar.cc/200?img=5",
      rating: 5,
      color: "from-red-400 to-rose-500",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  // Mouse tracking for 3D effect
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });
  }, []);

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0e12] via-[#14181c] to-[#0a0e12] px-4 py-20 sm:px-6 sm:py-28">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 blur-3xl animate-pulse" />
        <div 
          className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl animate-pulse" 
          style={{ animationDelay: "1.5s" }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl animate-pulse" 
          style={{ animationDelay: "3s" }} 
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Floating Particles */}
        {typeof window !== 'undefined' && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-yellow-400/30"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              scale: [1, 2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-yellow-400">
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            What People{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
                Say
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-yellow-400 to-amber-600"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-base text-gray-400 sm:text-lg"
          >
            Professional relationships built through leadership, trust, operational excellence, and consistent results.
          </motion.p>
        </motion.div>

        {/* 3D Carousel */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative mx-auto max-w-5xl"
        >
          {/* 3D Container */}
          <div 
            className="relative flex h-[500px] items-center justify-center"
            style={{ perspective: "1500px" }}
          >
            {/* Previous Card */}
            <motion.div
              className="absolute left-0 top-1/2 w-72 -translate-x-20 -translate-y-1/2 opacity-40 blur-sm hidden lg:block"
              style={{
                rotateY: "60deg",
                transformOrigin: "right center",
                transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 10}px)`,
              }}
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800" />
                  <div>
                    <div className="h-4 w-24 rounded bg-gray-700" />
                    <div className="mt-1 h-3 w-16 rounded bg-gray-700" />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-3 w-full rounded bg-gray-700/50" />
                  <div className="h-3 w-5/6 rounded bg-gray-700/50" />
                  <div className="h-3 w-4/6 rounded bg-gray-700/50" />
                </div>
              </div>
            </motion.div>

            {/* Main Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                x: mousePosition.x * 30,
                y: mousePosition.y * 15,
              }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="relative z-20 w-full max-w-2xl px-4 sm:px-0"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-2xl shadow-2xl sm:p-8 md:p-12">
                {/* Animated Border Glow */}
                <motion.div
                  className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 opacity-0 blur-xl"
                  animate={{
                    opacity: isHovering ? 0.5 : 0,
                    scale: isHovering ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                <div className="relative">
                  {/* Rating Stars */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4 sm:mb-6 flex gap-1"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </motion.div>

                  {/* Quote Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="mb-3 sm:mb-4 text-4xl sm:text-6xl font-serif leading-none text-yellow-400/30"
                  >
                    "
                  </motion.div>

                  {/* Message */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl leading-relaxed text-gray-200"
                  >
                    {currentTestimonial.message}
                  </motion.p>

                  {/* Profile */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative flex-shrink-0"
                    >
                      <div className="h-12 w-12 sm:h-16 sm:w-16 overflow-hidden rounded-full border-2 border-yellow-400/30">
                        <img
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <motion.div
                        className="absolute -inset-1 rounded-full bg-yellow-400/20 blur-xl"
                        animate={{
                          scale: isHovering ? 1.2 : 1,
                          opacity: isHovering ? 0.8 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-white truncate">
                        {currentTestimonial.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-yellow-400 truncate">
                        {currentTestimonial.role}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {currentTestimonial.company}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Next Card */}
            <motion.div
              className="absolute right-0 top-1/2 w-72 translate-x-20 -translate-y-1/2 opacity-40 blur-sm hidden lg:block"
              style={{
                rotateY: "-60deg",
                transformOrigin: "left center",
                transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 10}px)`,
              }}
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800" />
                  <div>
                    <div className="h-4 w-24 rounded bg-gray-700" />
                    <div className="mt-1 h-3 w-16 rounded bg-gray-700" />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-3 w-full rounded bg-gray-700/50" />
                  <div className="h-3 w-5/6 rounded bg-gray-700/50" />
                  <div className="h-3 w-4/6 rounded bg-gray-700/50" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 sm:mt-12 flex items-center justify-center gap-4 sm:gap-6">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrevious}
              className="rounded-full border border-white/20 bg-white/5 p-2 sm:p-3 text-white backdrop-blur-sm transition-all hover:border-yellow-400/50 hover:bg-yellow-400/20 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2 sm:gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => goToSlide(index)}
                  className={`relative h-2 sm:h-3 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? "w-8 sm:w-12 bg-gradient-to-r from-yellow-400 to-amber-500 shadow-lg shadow-yellow-400/50"
                      : "w-2 sm:w-3 bg-white/30 hover:bg-white/50"
                  }`}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="rounded-full border border-white/20 bg-white/5 p-2 sm:p-3 text-white backdrop-blur-sm transition-all hover:border-yellow-400/50 hover:bg-yellow-400/20 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Progress Bar */}
          <motion.div
            className="mt-6 sm:mt-8 h-1 w-full max-w-md mx-auto overflow-hidden rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              key={currentIndex}
              className="h-full bg-gradient-to-r from-yellow-400 to-amber-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};