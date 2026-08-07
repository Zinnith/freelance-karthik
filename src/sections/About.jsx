import {
  UtensilsCrossed,
  Users,
  BarChart3,
  BadgeCheck,
  ChevronDown,
} from "lucide-react";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const highlights = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant Operations",
    description: "Skilled in overseeing daily restaurant operations, ensuring smooth service, operational efficiency, and exceptional guest experiences."
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Experienced in leading, training, and motivating diverse teams to maintain high performance and deliver outstanding customer service."
  },
  {
    icon: BarChart3,
    title: "Sales & Performance",
    description: "Focused on increasing revenue through sales analysis, inventory optimization, cost control, and performance monitoring."
  },
  {
    icon: BadgeCheck,
    title: "Service Excellence",
    description: "Committed to maintaining the highest standards of food quality, customer satisfaction, and operational excellence."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-35 relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero-bg-2.jpg" 
          alt="Hero image" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/0 via-background/60 to-background" /> 
      </div>
      
      {/* Sparkle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full fire-spark blur-[1px]"
            style={{
              backgroundColor: "#FFD700",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 15px #A855F7",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Grid - Left and Right Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in animate-float">
              <span className="rounded-2xl glass px-4 py-3 bg-stone-950 text-white text-sm font-semibold tracking-wider uppercase inline-block">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-yellow-400">
              Excellence isn't served by chance
              <span className="font-serif italic font-normal text-white block mt-2">
                it's managed with purpose.
              </span>
            </h2>

            <div className="space-y-4 text-white/70 animate-fade-in animation-delay-200">
              <p>
                As a passionate Restaurant Manager, I specialize in delivering exceptional dining experiences through effective leadership, operational excellence, and customer-focused service. With experience in managing daily operations, leading teams, and maintaining high hospitality standards, I am committed to creating efficient workflows that enhance both guest satisfaction and business performance.
              </p>

              <p>
                My expertise includes staff management, inventory control, cost optimization, food safety compliance, and resolving customer concerns with professionalism. I thrive in fast-paced environments, using strategic thinking and problem-solving skills to ensure smooth operations while maintaining consistent service quality and achieving business goals.
              </p>

              <p>
                I believe great hospitality is built on teamwork, innovation, and continuous improvement. By combining modern technology with operational expertise, I strive to optimize restaurant performance, empower teams, and create memorable guest experiences that contribute to long-term business success.
              </p>

              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]">
                  "My mission is to transform restaurant operations through strong leadership, passionate service, and innovative strategies. I strive to create memorable guest experiences, empower teams, and drive sustainable growth through excellence in hospitality management."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="glass p-6 rounded-2xl animate-fade-in hover:scale-105 transition-transform duration-300" 
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Skills Section */}
        <div className="py-12 px-6 mt-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-up animation-delay-200 animation-ease-out animation-fill-both">
                Core Skills
              </h2>

              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full mx-auto lg:mx-0 mb-8"></div>

              <p className="text-lg leading-9 text-gray-300 animate-fade-in animation-delay-400 animation-fill-both">
                Leveraging <span className="text-yellow-400 font-semibold">leadership</span>,
                <span className="text-yellow-400 font-semibold"> strategic decision-making</span>,
                and <span className="text-yellow-400 font-semibold">operational excellence</span>
                to drive sustainable business growth, build
                <span className="text-yellow-400 font-semibold"> high-performing teams</span>,
                and deliver
                <span className="text-yellow-400 font-semibold"> exceptional customer experiences</span>
                through innovation, quality, and continuous improvement.
              </p>
            </div>

            {/* Right Animation */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="w-80 h-80 md:w-[450px] md:h-[450px]">
                <DotLottieReact
                  src="https://lottie.host/99ce589c-b4ea-4862-9ccc-56a4ec0e154f/YORI4Eilqk.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in animation-delay-800">
        <button
          type="button"
          onClick={() => {
            document.getElementById("experience")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};