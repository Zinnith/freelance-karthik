import { memo } from "react";
import experienceBg from "@/assets/experience-bg.jpg";

const experiences = [
  {
    year: "May 2024 - Present",
    role: "Operations Manager",
    company: "Govindam Premium Dairy Products",
    desc: "Leading dairy production and restaurant operations. Responsible for recipe development, paneer, milk and curd quality control, production planning, banquet operations, decision-making, staff training, sales shift management, and supervising a team of over 50 employees. Ensuring food safety standards as a FOSTAC Level 3 Certified professional.",
  },
  {
    year: "Sep 2023 - Sep 2024",
    role: "Restaurant Operations Manager",
    company: "Amirtha Amore Multi Cuisine Restaurant (Rela Hospital Campus)",
    desc: "Managed complete restaurant operations, customer service, team leadership, inventory management, food quality, hygiene compliance, and daily business performance to deliver excellent guest experiences.",
  },
  {
    year: "Sep 2022 - Sep 2023",
    role: "Center Facility Manager",
    company: "GET DIETY",
    desc: "Managed cloud kitchen and central kitchen operations at Ekkatuthangal. Oversaw production, food quality, inventory, staff coordination, and facility management while maintaining operational efficiency.",
  },
  {
    year: "Sep 2019 - Sep 2021",
    role: "Restaurant Operations Manager",
    company: "Ramanathan & Lakshmi Agro Hospitality Pvt. Ltd.",
    desc: "Managed multiple restaurant outlets including Baskin Robbins (Grand Galada & Gateway IT Park) and Millie's Cookies UK Brand (Phoenix Mall & VR Mall). Responsible for vendor management, sales management, profit & loss analysis, food safety, hygiene audits, kitchen safety, inventory control, banquet management, quotations, staff recruitment, training, shift planning, wastage control, weekly & monthly reporting, and ensuring operational compliance.",
  },
  {
    year: "Sep 2016 - Sep 2018",
    role: "Restaurant Incharge / Store Manager",
    company: "Jaipuriya Lassi",
    desc: "Handled day-to-day operations of multiple outlets including Grand Galada, Meenambakkam, and ECR. Managed store operations, inventory, customer service, staff supervision, and sales performance.",
  },
];

export const Experience = memo(() => {
  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-fixed py-24 px-5"
      style={{
        backgroundImage: `url(${experienceBg})`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="mb-20 flex justify-center animate-fade-in animate-float">
          <span className="inline-flex items-center rounded-2xl border border-yellow-500/30 bg-[#050505]/95 px-10 py-5 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.8)]">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-700 bg-clip-text text-5xl font-bold tracking-wide text-transparent">
              Experience
            </span>
          </span>
        </h2>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-gradient-to-b from-yellow-200 via-yellow-500 to-amber-800 md:left-1/2 md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.year}`}
              className={`relative mb-20 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-5 top-10 h-6 w-6 rounded-full border-4 border-[#1A120B] bg-yellow-400 shadow-lg md:left-1/2 md:-translate-x-1/2"></div>

              {/* Card */}
              <div
                className={`ml-14 w-[calc(100%-4rem)] rounded-2xl border border-yellow-700/30 bg-[#2C1C12]/90 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl md:ml-0 md:w-[42%] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <p className="font-semibold text-yellow-400">{exp.year}</p>

                <h3 className="mt-2 text-2xl font-bold text-yellow-100">
                  {exp.role}
                </h3>

                <h4 className="mt-1 text-lg text-amber-300">
                  {exp.company}
                </h4>

                <p className="mt-4 leading-7 text-stone-300">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = "Experience";