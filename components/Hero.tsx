import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gutera-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gutera-green/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8 z-10 pointer-events-none md:pointer-events-auto">
            <div className="inline-flex items-center space-x-2 bg-gutera-light border border-gutera-green/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-gutera-green rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-gutera-green tracking-wide uppercase">Натуро-базиран продукт</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gutera-blue leading-tight">
              Възстановете своя <br/>
              <span className="text-gutera-green">Вътрешен Ритъм</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              Gutera е специализирана формула за подкрепа на чревния баланс и функционален комфорт. Естествена реколонизация и детокс.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
              <button className="group flex items-center justify-center space-x-2 bg-gutera-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#5a8533] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gutera-green/40 transform hover:scale-105 active:scale-95">
                <span>Поръчай Gutera</span>
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white border-2 border-gutera-blue/10 text-gutera-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-gutera-light hover:border-gutera-blue/30 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95">
                <span>Научи повече</span>
              </button>
            </div>

            <div className="pt-4 flex items-center space-x-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center"><CheckCircle size={16} className="text-gutera-gold mr-1"/> Без консерванти</div>
              <div className="flex items-center"><CheckCircle size={16} className="text-gutera-gold mr-1"/> Без ГМО</div>
              <div className="flex items-center"><CheckCircle size={16} className="text-gutera-gold mr-1"/> 10 Сашета</div>
            </div>
          </div>

          {/* Product Visual Representation with Interactive Animation */}
          <div 
            className="relative flex justify-center items-center z-10 h-[500px] w-full cursor-pointer group perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)} // For mobile tap
          >
             {/* Interaction Hint */}
             <div className={`absolute top-10 right-10 md:right-0 bg-white/90 backdrop-blur shadow-sm text-gutera-blue text-xs font-bold px-4 py-2 rounded-full border border-gutera-blue/10 transition-all duration-500 z-30 ${isHovered ? 'opacity-0 translate-y-4' : 'opacity-100 animate-bounce'}`}>
                👉 Постави мишката тук
             </div>

            {/* Real Box Image (Replacing Abstract Box) */}
            <div className={`relative w-80 md:w-[450px] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform origin-bottom-right ${isHovered ? 'opacity-0 scale-75 translate-x-20 rotate-12 blur-sm' : 'opacity-100 rotate-0 scale-100'}`}>
                <img 
                  src="./boxes.jpeg" 
                  alt="Gutera Boxes" 
                  className="w-full h-auto drop-shadow-2xl" 
                />
            </div>
            
             {/* Real Sachet Image (Replacing Abstract Sachet) */}
             <img 
                src="./sachet.png" 
                alt="Gutera Sachet" 
                className={`absolute w-36 md:w-48 h-auto drop-shadow-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-20 ${isHovered ? 'top-10 left-1/2 -translate-x-1/2 rotate-[135deg] translate-y-0 scale-75 shadow-2xl' : 'bottom-0 left-0 md:left-4 rotate-[-10deg] translate-y-0'}`}
             />

             {/* Falling Powder Particles (Simulating Dissolving) */}
             <div className={`absolute top-[160px] left-1/2 -translate-x-1/2 w-6 h-[180px] z-20 overflow-hidden pointer-events-none transition-all duration-300 delay-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                 {/* Moving dots container */}
                 <div className="flex flex-col items-center gap-2 animate-fall"> 
                    {/* Dots representing powder - Green */}
                    {Array.from({ length: 25 }).map((_, i) => (
                         <div key={i} className={`bg-[#6a9a3b] rounded-full ${i % 3 === 0 ? 'w-1 h-1' : 'w-1.5 h-1.5'}`} />
                    ))}
                 </div>
             </div>
             
             {/* Glass Representation - Appears on Hover */}
             <div className={`absolute bottom-0 md:bottom-8 left-1/2 -translate-x-1/2 w-40 h-56 transition-all duration-700 delay-100 ${isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'}`}>
                 <div className="w-full h-full relative">
                    {/* Glass Shape SVG */}
                    <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-2xl">
                        <defs>
                            <clipPath id="heroGlassClip">
                                <path d="M15 10 L25 130 Q30 140 50 140 Q70 140 75 130 L85 10 Z" />
                            </clipPath>
                            <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#8fb565" />
                                <stop offset="100%" stopColor="#6a9a3b" />
                            </linearGradient>
                        </defs>
                        
                        {/* Glass Body Background (Semi-transparent) */}
                         <path d="M15 10 L25 130 Q30 140 50 140 Q70 140 75 130 L85 10" fill="rgba(255,255,255,0.1)" />

                        {/* Liquid Content */}
                        <g clipPath="url(#heroGlassClip)">
                            {/* 1. Base Water (Always present, initially clear) */}
                            <rect x="0" y="40" width="100" height="100" fill="#e0f2fe" className="opacity-60" />

                            {/* 2. Dissolving Green Color (Fades in on pour) */}
                            <rect 
                                x="0" 
                                y="40" 
                                width="100" 
                                height="100" 
                                fill="url(#liquidGradient)" 
                                className={`transition-opacity duration-[2000ms] ease-in-out delay-500 ${isHovered ? 'opacity-90' : 'opacity-0'}`} 
                            />
                            
                            {/* 3. Dissolving Particles (Swirl inside glass) - Green */}
                            {isHovered && (
                                <g className="">
                                    {Array.from({ length: 8 }).map((_, i) => (
                                        <circle 
                                            key={i}
                                            cx={30 + Math.random() * 40} 
                                            cy={50 + Math.random() * 60} 
                                            r={1 + Math.random() * 2} 
                                            fill="#6a9a3b" 
                                            className="animate-[bounce_3s_infinite]"
                                            style={{ animationDelay: `${i * 0.2}s`, opacity: 0.7 }} 
                                        />
                                    ))}
                                </g>
                            )}
                        </g>

                        {/* Glass Outline / Highlights */}
                        <path d="M15 10 L25 130 Q30 140 50 140 Q70 140 75 130 L85 10" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
                        
                        {/* Rim */}
                        <ellipse cx="50" cy="10" rx="35" ry="3" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />

                        {/* Reflections */}
                        <path d="M22 20 L28 120" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                        <path d="M78 20 L72 120" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
                    </svg>
                 </div>
             </div>

          </div>

        </div>
      </div>
    </div >
  );
};

export default Hero;