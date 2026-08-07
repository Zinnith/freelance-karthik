import { ChevronDown } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Education = () => {
  const education = [
    {
      year: "2016 – 2018",
      degree: "B.A. Hotel Management",
      institution: "Bharathi Institute of Hotel Management",
      desc: "Completed Bachelor's degree in Hotel Management with specialization in hospitality operations, food & beverage service, hotel administration, and restaurant management."
    },
    {
      year: "Sep 2016 – Sep 2017",
      degree: "Diploma in Hotel Management",
      institution: "Bharathi Institute of Hotel Management",
      score: "76%",
      desc: "Completed Diploma in Hotel Management with practical training in food production, front office, housekeeping, and hospitality operations."
    },
    {
      year: "Sep 2014 – Sep 2016",
      degree: "B.Com (Computer Science)",
      institution: "Annai Violet Arts and Science College",
      score: "68%",
      desc: "Completed Bachelor of Commerce with Computer Science."
    },
    {
      year: "Sep 2012 – Sep 2013",
      degree: "Higher Secondary (+2)",
      institution: "E.L.M. Fabricious Higher Secondary School",
      score: "72%",
      desc: "Completed Higher Secondary Education."
    }
  ];

  return (
    <section
      id="education"
      className="relative min-h-screen bg-[#1A120B] py-24 px-6 overflow-hidden"
    >
      {/* ===== PARTICLE MOTION BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Dust Particles */}
        <div className="absolute top-[10%] left-[5%] w-1 h-1 rounded-full bg-yellow-300/60 blur-[1px] animate-particle-1" />
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-amber-400/50 blur-[1px] animate-particle-2" />
        <div className="absolute top-[30%] left-[8%] w-0.5 h-0.5 rounded-full bg-yellow-200/70 blur-[0.5px] animate-particle-3" />
        <div className="absolute top-[45%] left-[3%] w-1.5 h-1.5 rounded-full bg-orange-300/40 blur-[1px] animate-particle-4" />
        <div className="absolute top-[60%] left-[12%] w-1 h-1 rounded-full bg-yellow-400/50 blur-[1px] animate-particle-5" />
        <div className="absolute top-[75%] left-[7%] w-0.5 h-0.5 rounded-full bg-amber-300/60 blur-[0.5px] animate-particle-6" />
        <div className="absolute top-[90%] left-[18%] w-1.5 h-1.5 rounded-full bg-yellow-500/30 blur-[1px] animate-particle-7" />

        {/* Right Side Particles */}
        <div className="absolute top-[5%] right-[8%] w-1.5 h-1.5 rounded-full bg-amber-400/50 blur-[1px] animate-particle-8" />
        <div className="absolute top-[18%] right-[3%] w-0.5 h-0.5 rounded-full bg-yellow-300/70 blur-[0.5px] animate-particle-9" />
        <div className="absolute top-[35%] right-[15%] w-1 h-1 rounded-full bg-orange-400/40 blur-[1px] animate-particle-10" />
        <div className="absolute top-[50%] right-[5%] w-1.5 h-1.5 rounded-full bg-yellow-200/50 blur-[1px] animate-particle-11" />
        <div className="absolute top-[65%] right-[12%] w-0.5 h-0.5 rounded-full bg-amber-500/60 blur-[0.5px] animate-particle-12" />
        <div className="absolute top-[80%] right-[6%] w-1 h-1 rounded-full bg-yellow-400/40 blur-[1px] animate-particle-13" />
        <div className="absolute top-[92%] right-[15%] w-1.5 h-1.5 rounded-full bg-orange-300/30 blur-[1px] animate-particle-14" />

        {/* Center Floating Particles */}
        <div className="absolute top-[12%] left-[45%] w-1 h-1 rounded-full bg-yellow-300/50 blur-[1px] animate-particle-15" />
        <div className="absolute top-[28%] left-[55%] w-1.5 h-1.5 rounded-full bg-amber-400/40 blur-[1px] animate-particle-16" />
        <div className="absolute top-[42%] left-[48%] w-0.5 h-0.5 rounded-full bg-yellow-200/60 blur-[0.5px] animate-particle-17" />
        <div className="absolute top-[58%] left-[52%] w-1 h-1 rounded-full bg-orange-300/50 blur-[1px] animate-particle-18" />
        <div className="absolute top-[72%] left-[42%] w-1.5 h-1.5 rounded-full bg-yellow-400/30 blur-[1px] animate-particle-19" />
        <div className="absolute top-[88%] left-[58%] w-0.5 h-0.5 rounded-full bg-amber-300/50 blur-[0.5px] animate-particle-20" />

        {/* Glowing Embers (Larger particles with glow) */}
        <div className="absolute top-[8%] left-[25%] w-3 h-3 rounded-full bg-yellow-400/20 blur-[4px] animate-ember-1" />
        <div className="absolute top-[22%] right-[25%] w-4 h-4 rounded-full bg-amber-500/15 blur-[5px] animate-ember-2" />
        <div className="absolute top-[48%] left-[35%] w-3.5 h-3.5 rounded-full bg-orange-400/20 blur-[4px] animate-ember-3" />
        <div className="absolute top-[68%] right-[30%] w-4 h-4 rounded-full bg-yellow-300/15 blur-[5px] animate-ember-4" />
        <div className="absolute top-[85%] left-[40%] w-3 h-3 rounded-full bg-amber-400/20 blur-[4px] animate-ember-5" />

        {/* Floating Orbs (Background blur) */}
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-amber-600/10 blur-[120px] animate-float-slower" />
        <div className="absolute top-1/3 right-10 h-56 w-56 rounded-full bg-orange-400/8 blur-[100px] animate-float-medium" />
        <div className="absolute bottom-1/3 left-10 h-56 w-56 rounded-full bg-yellow-300/8 blur-[100px] animate-float-medium-delay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-5">
            <h2 className="text-5xl md:text-6xl font-extrabold">
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-700 bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            <div className="w-40 h-40 animate-fade-in animate-float">
              <DotLottieReact
                src="https://lottie.host/dd2e610f-9bd7-4185-af2f-dac6146841bc/1lYirZ6oot.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
          </div>

          <p className="mt-0 text-stone-400 max-w-2xl mx-auto text-lg">
            My academic journey has provided the knowledge and practical
            foundation that supports my career in hospitality, operations,
            and business management.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {education.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-yellow-700/30 bg-[#2C1C12]/80 p-8 backdrop-blur-lg transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(255,215,0,0.25)]"
            >
              {/* Year Badge */}
              <div className="inline-flex rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 px-4 py-2 text-sm font-semibold text-[#1A120B] shadow-lg">
                {item.year}
              </div>

              {/* Degree */}
              <h3 className="mt-6 text-2xl font-bold text-yellow-100 group-hover:text-yellow-300 transition-colors">
                {item.degree}
              </h3>

              {/* Institution */}
              <p className="mt-2 text-lg text-amber-300">
                {item.institution}
              </p>

              {/* Score */}
              {item.score && (
                <div className="mt-5 inline-block rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                  Score: {item.score}
                </div>
              )}

              {/* Description */}
              <p className="mt-6 leading-7 text-stone-300">
                {item.desc}
              </p>

              {/* Decorative Glow */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-yellow-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 animate-fade-in animation-delay-800">
        <button
          type="button"
          onClick={() => {
            document.getElementById("certifications")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="flex flex-col items-center gap-2 text-stone-400 hover:text-yellow-400 transition-colors group cursor-pointer"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};