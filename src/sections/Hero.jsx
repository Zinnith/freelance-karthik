// import { Contact } from "lucide-react";
import {Button} from '@/components/Button';
import { ArrowRight , ChevronDown} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimateBorderButton";
import { FaLinkedin} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const experience = [
  {
    company: "Govindam Premium Dairy Products",
    role: "Operations Manager"
  },
  {
    company: "Amirtha Amore Multi Cuisine Restaurant",
    role: "Restaurant Operations Manager"
  },
  {
    company: "Get Diety",
    role: "Centre Facility Manager"
  },
  {
    company: "Ramanathan & Lakshmi Agro Hospitality Pvt. Ltd.",
    role: "Restaurant Operations Manager"
  },
  {
    company: "Baskin Robbins",
    role: "Outlet Operations Manager"
  },
  {
    company: "Millie's Cookies (UK Brand)",
    role: "Outlet Operations Manager"
  },
  {
    company: "Jaipuriya Lassi",
    role: "Restaurant In-Charge / Store Manager"
  }
];

export const Hero = () =>{
  return(
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0 pointer-events-none">
            <img src="/hero-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40"/>
           <div className="absolute inset-0 bg-linear-to-b from-background/0 via-background/50 to-background" /> 
        </div>

        <div className="absolute inset-0 pointer-events-none">
            {/* Champagne Gold */}
            <div className="
                absolute 
                w-[500px] h-[500px]
                bg-[#D4AF37]/20
                rounded-full
                blur-[140px]
                aurora
            "></div>

            {/* Soft Amber Glow */}
            <div className="
                absolute right-0 bottom-0
                w-[450px] h-[450px]
                bg-[#F59E0B]/15
                rounded-full
                blur-[130px]
                aurora
            "></div>

            {/* Bronze Luxury Tone */}
            <div className="
                absolute left-1/3 top-1/3
                w-[350px] h-[350px]
                bg-[#B45309]/15
                rounded-full
                blur-[120px]
                aurora
            "></div>
    </div>

        
        
        {/* Contact  */}

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Context */}
                <div className="space-y-8">
                    <div className="animate-fade-in animate-float ">
                        <span className="inline-flex items-center gap-2 px-5 py-5 rounded-2xl glass text-3xl bg-stone-950 font-extrabold text-yellow-400" >
                            RESTAURANT GM
                        </span>
                    </div>
                    {/* Headline */}
                    <div className="space-y-4 ">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 ">
                            Elevating <span className="text-primary glow-text">hospitality</span>
                            <br/>
                            through
                            <br/>
                            <span className="font-serif italic font-normal text-white">
                            exceptional leadership.
                            </span>
                        </h1>
                        <p className="text-lg max-w-lg text-neutral-400 leading-relaxed animate-fade-in animation-delay-200 ">
                            <span className="text-primary font-semibold">Hi, I'm KARTHICK</span>. <br className="hidden sm:inline" />
                            I seek challenging opportunities where I can fully use my skills for the success of the organization.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg"> 
                        Contact Me  <ArrowRight className ="w-5 h-5"/>
                        </Button>
                    <AnimatedBorderButton/>  
                    </div>
                    {/* Social links */}
                    <div className="flex items-center gap-4 animate-fade-in animate-delay-400 ">
                        <span className='text-m text-yellow-400 font-semibold drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]'>Follow me:</span>

                        {[
                            { icon: FaLinkedin, href: "https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BOYpxQI8SQveXTPmea3dMmw%3D%3D"},
                            { icon: MdEmail, href: "mailto:mkarthick1705@gmail.com" },
                        ].map((social, idx) => (
                            <a key={idx} href={social.href}
                            target={social.href.startsWith("http") ? "_blank" : undefined}
                            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className='p-2 rounded-full glass hover:bg-amber-400 hover:text-black transition-all duration-300'>
                            <social.icon className='w-5 h-5' />
                            </a>
                        ))}
                        </div>
                </div>
                {/* Right Column-Profile Image*/}
                <div className='relative animate-fade-in animation-delay-300'>
                    {/* Profile-Image */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
                    <div className='relative max-w-md mx-auto'>
                        <div className='relative glass rounded-3xl p-2 glow-border'>
                            <img src="/profile-photo.png" alt="Karthik" className='w-full aspect-4/5  object-cover  rounded-2xl border-3 border-white '/> 
                        </div>
                        {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-2 animate-float animation-delay-500">
                                <div className="text-2xl font-bold tracking-wide">
                                <div>
                                    <span className="text-primary">10+</span>
                                </div>
                                <div className="text-white font-semibold text-lg">
                                    Years of Experience
                                </div>
                                </div>
                            </div>
                    </div>                   
                </div>
            </div>
            {/* Skills Set */}
            <div className='mt-20 animate-fade-in animation-delay-600'>
                <p className='text-medium text-stone-50 mb-6 text-center'>Professional Experience</p>
                <div className='relative overflow-hidden'>
                    
                    <div className="flex animate-marquee">
                        {[...experience, ...experience].map((item, idx) => (
                            <div key={idx} className="flex-shrink-0 px-4 py-4">
                            <div
                                className="
                                min-w-[320px]
                                rounded-2xl
                                border border-amber-400/20
                                bg-stone-900/70
                                backdrop-blur-xl
                                px-6 py-5
                                shadow-lg shadow-black/30
                                transition-all duration-300
                                hover:-translate-y-1
                                hover:border-amber-400/60
                                hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]
                                "
                            >
                                <h3 className="text-lg font-semibold text-stone-50">
                                {item.company}
                                </h3>

                                <p className="mt-2 text-sm font-medium text-amber-400">
                                {item.role}
                                </p>
                            </div>
                            </div>
                        ))}
                        </div>
                </div>
            </div>
        </div>
        
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 animate-fade-in animation-delay-800">
        <button
            type="button"
            onClick={() => {
            document.getElementById("about")?.scrollIntoView({
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