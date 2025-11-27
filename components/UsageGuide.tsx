import React, { useState, useEffect } from 'react';
import { Clock, RotateCw, CheckCircle, Droplet, Coffee } from 'lucide-react';

const UsageGuide: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Изсипете",
      desc: "Изсипете 1 саше в чаша вода",
      duration: 3000,
      icon: Droplet
    },
    {
      id: 1,
      title: "Разбъркайте",
      desc: "Разбъркайте добре сместа",
      duration: 3000,
      icon: RotateCw
    },
    {
      id: 2,
      title: "Изчакайте",
      desc: "Изчакайте 1-2 минути да се активира",
      duration: 4000,
      icon: Clock
    },
    {
      id: 3,
      title: "Разбъркайте отново",
      desc: "Разбъркайте още веднъж преди прием",
      duration: 3000,
      icon: RotateCw
    },
    {
      id: 4,
      title: "Консумирайте",
      desc: "Насладете се на лекотата",
      duration: 4000,
      icon: Coffee 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, steps[currentStep].duration);

    return () => clearInterval(timer);
  }, [currentStep]);

  return (
    <section id="usage" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gutera-blue mb-4">
            Лесен ежедневен ритуал
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            За максимален ефект спазвайте последователността на приготвяне.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          
          {/* Animation Stage */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gutera-light/50 rounded-full flex items-center justify-center shadow-inner border border-gutera-green/10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              
              <defs>
                {/* Clip Path for the Prep Glass */}
                <clipPath id="glassClip">
                   <path d="M55 60 L70 170 Q75 185 100 185 Q125 185 130 170 L145 60 Z" />
                </clipPath>
              </defs>

              {/* === PREPARATION SCENE (Steps 0-3) === */}
              <g className={`transition-all duration-700 ${currentStep < 4 ? 'opacity-100' : 'opacity-0 scale-95'}`}>
                  
                  {/* Glass Shadow */}
                  <ellipse cx="100" cy="190" rx="50" ry="5" fill="#000" opacity="0.1" />

                  {/* Liquid Content */}
                  <g clipPath="url(#glassClip)">
                    {/* Base Water */}
                    <rect x="0" y="70" width="200" height="130" fill="#dbeafe" />
                    <ellipse cx="100" cy="70" rx="44" ry="5" fill="#bfdbfe" />
                    
                    {/* Product Mixture (Green/Gold) */}
                    <rect 
                      x="0" 
                      y="0" 
                      width="200" 
                      height="200" 
                      fill="#6a9a3b" 
                      className={`transition-all duration-1000 ${currentStep === 0 ? 'opacity-0 translate-y-full' : 'opacity-80 translate-y-80'}`}
                      style={{ 
                        transform: currentStep >= 1 ? 'translateY(60px)' : 'translateY(200px)',
                        opacity: currentStep >= 1 ? 0.8 : 0
                      }}
                    />
                    
                    {/* Swirling Effect */}
                    {(currentStep === 1 || currentStep === 3) && (
                       <path 
                         d="M50 120 Q100 140 150 120 T250 120" 
                         fill="none" 
                         stroke="white" 
                         strokeWidth="3" 
                         opacity="0.5"
                         className="animate-spin origin-center"
                         style={{ transformOrigin: '100px 120px' }}
                       />
                    )}
                  </g>

                  {/* Glass Outline */}
                  <path 
                    d="M55 60 L70 170 Q75 185 100 185 Q125 185 130 170 L145 60" 
                    fill="none" 
                    stroke="#94a3b8" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    className="drop-shadow-sm"
                  />
                  <path d="M55 60 L145 60" fill="none" stroke="#cbd5e1" strokeWidth="1" />

                  {/* STEP 0: Sachet Pouring */}
                  <g className={`transition-all duration-500 ${currentStep === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    {/* Sachet Packet */}
                    <image
                      href="/sachet.png"
                      x="80"
                      y="5"
                      width="100"
                      height="100"
                      className="drop-shadow-lg"
                      transform="rotate(-30 140 35)"
                    />
                    
                    {/* Powder Particles */}
                    {currentStep === 0 && (
                      <g className="animate-pulse">
                         <circle cx="100" cy="60" r="2" fill="#6a9a3b" className="animate-[bounce_1s_infinite]" />
                         <circle cx="105" cy="70" r="2" fill="#6a9a3b" className="animate-[bounce_1.2s_infinite]" />
                         <circle cx="95" cy="80" r="2" fill="#6a9a3b" className="animate-[bounce_0.8s_infinite]" />
                         <circle cx="100" cy="90" r="2" fill="#6a9a3b" className="animate-[bounce_1.1s_infinite]" />
                      </g>
                    )}
                  </g>

                  {/* STEP 1 & 3: Stirring Spoon */}
                  <g className={`transition-all duration-500 ${(currentStep === 1 || currentStep === 3) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}>
                     <path d="M100 20 L100 160" stroke="#9ca3af" strokeWidth="4" strokeLinecap="round" />
                     <ellipse cx="100" cy="160" rx="10" ry="5" fill="#9ca3af" />
                     <animateTransform 
                        attributeName="transform" 
                        type="rotate" 
                        from="-5 100 20" 
                        to="5 100 20" 
                        dur="0.5s" 
                        repeatCount="indefinite" 
                        begin={currentStep === 1 || currentStep === 3 ? '0s' : 'indefinite'}
                     />
                  </g>

                  {/* STEP 2: Waiting Clock */}
                  <g className={`transition-all duration-500 ${currentStep === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                     <circle cx="150" cy="50" r="25" fill="white" stroke="#6a9a3b" strokeWidth="2" className="drop-shadow-md" />
                     <path d="M150 50 L150 35" stroke="#6a9a3b" strokeWidth="2" />
                     <path d="M150 50 L160 50" stroke="#6a9a3b" strokeWidth="2">
                        <animateTransform attributeName="transform" type="rotate" from="0 150 50" to="360 150 50" dur="2s" repeatCount="indefinite" />
                     </path>
                  </g>
              </g>

              {/* === DRINKING SCENE (Step 4) === */}
              <g className={`transition-all duration-1000 ${currentStep === 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  {/* Person Silhouette */}
                  <g transform="translate(10, 10)">
                      {/* Body */}
                      <path d="M140 180 C140 140 130 120 110 110 L110 180" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
                      <path d="M110 110 Q100 130 80 130" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.5" />
                      
                      {/* Neck */}
                      <path d="M100 110 L100 90" stroke="#cbd5e1" strokeWidth="18" />
                      
                      {/* Head */}
                      <circle cx="100" cy="70" r="32" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                      
                      {/* Face Features (Profile Left) */}
                      <circle cx="92" cy="65" r="2.5" fill="#475569" /> {/* Left Eye */}
                      <circle cx="108" cy="65" r="2.5" fill="#475569" /> {/* Right Eye */}
                      <path d="M90 86 Q100 92 110 86" fill="none" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" /> {/* Smile */}
                      
                      {/* Hair hint */}
                      <path d="M125 55 Q110 30 80 45" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

                      {/* Animated Arm & Glass */}
                      <g className="animate-drink origin-bottom-right" style={{ transformOrigin: '120px 140px' }}>
                          {/* Arm */}
                          <path d="M120 140 Q100 140 70 110" stroke="#cbd5e1" strokeWidth="8" strokeLinecap="round" fill="none" />
                          
                          {/* Hand */}
                          <circle cx="70" cy="110" r="10" fill="#cbd5e1" />

                          {/* The Glass Being Drunk */}
                          <g transform="translate(50, 80) rotate(15)">
                              {/* Glass Shape */}
                              <path d="M0 0 L10 50 Q12 55 25 55 Q38 55 40 50 L50 0 Z" fill="#e0f2fe" stroke="#94a3b8" strokeWidth="1.5" opacity="0.9"/>
                              
                              {/* Liquid (Tilted level to simulate movement/gravity) */}
                              <path d="M5 20 L45 10 L40 50 Q38 55 25 55 Q12 55 10 50 Z" fill="#6a9a3b" opacity="0.9" />
                              
                              {/* Rim */}
                              <ellipse cx="25" cy="0" rx="25" ry="3" fill="none" stroke="#94a3b8" strokeWidth="1" />
                          </g>
                      </g>
                  </g>

                  {/* "Enjoy" Sparkles */}
                  <g>
                     <circle cx="60" cy="40" r="3" fill="#d89c36" className="animate-ping" style={{ animationDuration: '2s' }} />
                     <circle cx="40" cy="60" r="2" fill="#6a9a3b" className="animate-ping" style={{ animationDuration: '1.5s', animationDelay: '0.5s' }} />
                  </g>
              </g>

            </svg>
          </div>

          {/* Steps List */}
          <div className="flex-1 w-full max-w-md">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center p-4 rounded-xl transition-all duration-300 border cursor-pointer ${
                    currentStep === index 
                      ? 'bg-gutera-green text-white shadow-lg scale-105 border-transparent' 
                      : 'bg-white text-gray-400 border-gray-100 hover:bg-gray-50'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className={`p-2 rounded-full mr-4 ${currentStep === index ? 'bg-white/20' : 'bg-gray-100 text-gray-400'}`}>
                    <step.icon size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold ${currentStep === index ? 'text-white' : 'text-gray-700'}`}>
                      {index + 1}. {step.title}
                    </h4>
                    <p className={`text-sm ${currentStep === index ? 'text-blue-50' : 'text-gray-400'}`}>
                      {step.desc}
                    </p>
                  </div>
                  {currentStep === index && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gutera-gold/10 p-4 rounded-lg border border-gutera-gold/20 text-sm text-gutera-blue flex items-start">
               <div className="mr-2 mt-0.5 min-w-[16px]">💡</div>
               <p><strong>Съвет:</strong> Ако сместа се сгъсти прекалено много, добавете още малко вода и разбъркайте отново.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UsageGuide;
