import {ChevronDown, } from "lucide-react";
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
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-amber-600/10 blur-[120px]" />

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
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 animate-fade-in animation-delay-800 ">
        <button
            type="button"
            onClick={() => {
            document.getElementById("certifications")?.scrollIntoView({
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