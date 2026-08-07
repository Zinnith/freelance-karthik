import { Button } from "@/components/Button";
import { Menu , X} from "lucide-react";
import { useEffect, useState } from "react";

const navLinks =[
    {href: "#about",lable: "About"},
    {href: "#experience",lable: "Experience"},
    {href: "#education",lable: "Education"},
    {href: "#certifications",lable: "Certificate"},
    {href: "#testimonials",lable: "Testimonials"},
];


export const Navbar = () =>{
    const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
    const [isScrolled,setIsScrolled] = useState(false);

    useEffect(() =>{
        const handleScroll=()=>{
            setIsScrolled(window.scrollY>50);
        };
        window.addEventListener("scroll",handleScroll);

        return()=>window.removeEventListener("scroll",handleScroll);
    },[]);

    return(
    <header className={`fixed top-0 left-0 right-0  transition-all duration-500 ${isScrolled ? "glass-strong py-3":"bg-transparent py-5"}  z-50`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
            
              <a
                href="#"
                className="flex items-center hover:scale-105 transition"
                >
                <div className="h-20 w-40  shadow-[0_0_20px_rgba(250,204,21,0.8)">
                    <img
                    src="/L3.png"
                    alt="Logo"
                    className="h-full w-full object-cover"
                    />
                </div>
                </a>

            {/* Desktop Nav*/}
            <div className=" hidden md:flex items-center gap-1">  
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link, index) => (
                        <a 
                            href={link.href} 
                            key={index} 
                            className="group relative px-4 py-2 text-sm font-bold text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-all duration-300"
                        >
                            {link.lable}
                            
                            {/* Glowing highlight under content */}
                            <div className="absolute -bottom-1.5 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-400">
                                <svg 
                                    className="w-16 h-4" 
                                    viewBox="0 0 64 16" 
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <filter id={`glowFilter-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
                                            <feMerge>
                                                <feMergeNode in="blur"/>
                                                <feMergeNode in="SourceGraphic"/>
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    
                                    {/* Glowing bar with animation */}
                                    <rect 
                                        x="8" 
                                        y="6" 
                                        width="48" 
                                        height="3" 
                                        rx="1.5"
                                        fill="#FBBF24"
                                        opacity="0.6"
                                        filter={`url(#glowFilter-${index})`}
                                    >
                                        <animate 
                                            attributeName="width" 
                                            values="40;52;40" 
                                            dur="2s" 
                                            repeatCount="indefinite"
                                        />
                                        <animate 
                                            attributeName="x" 
                                            values="12;6;12" 
                                            dur="2s" 
                                            repeatCount="indefinite"
                                        />
                                        <animate 
                                            attributeName="opacity" 
                                            values="0.4;0.8;0.4" 
                                            dur="2s" 
                                            repeatCount="indefinite"
                                        />
                                    </rect>
                                    
                                    {/* Bright center core */}
                                    <rect 
                                        x="20" 
                                        y="6.5" 
                                        width="24" 
                                        height="2" 
                                        rx="1"
                                        fill="#FBBF24"
                                        opacity="1"
                                    >
                                        <animate 
                                            attributeName="width" 
                                            values="18;26;18" 
                                            dur="2s" 
                                            repeatCount="indefinite"
                                        />
                                        <animate 
                                            attributeName="x" 
                                            values="23;19;23" 
                                            dur="2s" 
                                            repeatCount="indefinite"
                                        />
                                    </rect>
                                    
                                    {/* Sparkle particles */}
                                    <circle cx="10" cy="7" r="1" fill="#FBBF24" opacity="0">
                                        <animate 
                                            attributeName="opacity" 
                                            values="0;1;0" 
                                            dur="1.5s" 
                                            begin="0.2s"
                                            repeatCount="indefinite"
                                        />
                                        <animate 
                                            attributeName="cx" 
                                            values="10;6;10" 
                                            dur="1.5s" 
                                            begin="0.2s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                    
                                    <circle cx="54" cy="7" r="1" fill="#FBBF24" opacity="0">
                                        <animate 
                                            attributeName="opacity" 
                                            values="0;1;0" 
                                            dur="1.5s" 
                                            begin="0.8s"
                                            repeatCount="indefinite"
                                        />
                                        <animate 
                                            attributeName="cx" 
                                            values="54;58;54" 
                                            dur="1.5s" 
                                            begin="0.8s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
                <Button size="sm">Contact Me </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
            className="md:hidden p-2 text-foreground cursor-pointer" 
            onClick={() => setIsMobileMenuOpen((prev)=>!prev)}
            >
                {isMobileMenuOpen?<X size={24}/>:<Menu size={24}/>}
            </button>
        </nav>
        {/* Mobile Menu */}
        {isMobileMenuOpen &&(
            <div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-3">
                {navLinks.map((link, index) => (
                    <a 
                        href={link.href} 
                        key={index} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group relative text-lg font-medium text-muted-foreground hover:text-foreground px-4 py-3 rounded-xl hover:bg-white/5 transition-all duration-300 flex items-center justify-between"
                    >
                        <span className="relative z-10">{link.lable}</span>
                        
                        {/* Subtle background highlight - ONLY ON LINKS */}
                        <svg 
                            className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500"
                            viewBox="0 0 300 50" 
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient id={`mobileHighlight-${index}`} x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#FBBF24" stopOpacity="0"/>
                                    <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.08"/>
                                    <stop offset="100%" stopColor="#FBBF24" stopOpacity="0"/>
                                </linearGradient>
                            </defs>
                            <rect width="300" height="50" rx="12" fill={`url(#mobileHighlight-${index})`}/>
                        </svg>
                        
                        {/* Right arrow - ONLY ON LINKS */}
                        <svg 
                            className="relative z-10 w-5 h-5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 group-active:translate-x-0"
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="#FBBF24" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
                        </svg>
                        
                        {/* Bottom glow bar - ONLY ON LINKS */}
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent group-hover:w-11/12 group-active:w-11/12 transition-all duration-500"></span>
                    </a>
                ))} 
                
                {/* Contact Button - PLAIN, NO GLOW EFFECTS */}
                <Button 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="w-full mt-2"
                >
                    Contact Me
                </Button>
            </div>
            </div>
        )}
    </header>
    );
}; 