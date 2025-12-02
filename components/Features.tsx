import React from 'react';
import { DIRECT_BENEFITS, INDIRECT_BENEFITS, TARGET_AUDIENCE } from '../constants';
import { Check } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Features: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Benefits Grid */}
        <div className="mb-20">
            <RevealOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold text-gutera-blue text-center mb-12">
                Ползи от приема на Gutera™
                </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={80}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
                    <div className="p-8 md:p-10">
                        <p className="text-sm uppercase tracking-[0.18em] text-gutera-green font-semibold mb-3">Натурална грижа</p>
                        <h3 className="text-2xl font-bold text-gutera-blue mb-4">Чиста формула без добавени щамове</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Gutera™ подпомага микробиома чрез качествен хранителен субстрат, без пробиотици и без газообразуване. Съвместима е с активен начин на живот, диети и пътувания.
                        </p>
                    </div>
                    <div className="relative h-64 md:h-full">
                        <img 
                            src="/gutera_and_its_ingredients.png"
                            alt="Gutera и основните натурални съставки"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gutera-blue/10 via-transparent to-white/10"></div>
                    </div>
                </div>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Direct Benefits */}
                <RevealOnScroll delay={100}>
                    <div className="bg-gutera-green/5 rounded-3xl p-8 border border-gutera-green/10 hover:shadow-lg transition-shadow duration-300 h-full">
                        <h3 className="text-2xl font-bold text-gutera-green mb-6 flex items-center">
                            <span className="w-2 h-8 bg-gutera-green mr-3 rounded-full"></span>
                            Основни действия
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {DIRECT_BENEFITS.map((benefit, idx) => (
                                <div key={idx} className="flex flex-col items-start group">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-gutera-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <benefit.icon size={24} />
                                    </div>
                                    <h4 className="font-bold text-gutera-blue">{benefit.title}</h4>
                                    <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Indirect Benefits */}
                <RevealOnScroll delay={300}>
                    <div className="bg-gutera-gold/5 rounded-3xl p-8 border border-gutera-gold/10 hover:shadow-lg transition-shadow duration-300 h-full">
                        <h3 className="text-2xl font-bold text-gutera-gold mb-6 flex items-center">
                            <span className="w-2 h-8 bg-gutera-gold mr-3 rounded-full"></span>
                            Разширени ползи
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {INDIRECT_BENEFITS.map((benefit, idx) => (
                                <div key={idx} className="flex flex-col items-start group">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-gutera-green mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <benefit.icon size={24} />
                                    </div>
                                    <h4 className="font-bold text-gutera-blue">{benefit.title}</h4>
                                    <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </div>

        {/* Target Audience */}
        <RevealOnScroll>
            <div className="bg-gutera-blue rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Gutera™ може да бъде подходящ избор при:</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {TARGET_AUDIENCE.map((item, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center hover:bg-white/20 transition-all duration-300 cursor-default transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
                                <Check size={18} className="text-gutera-gold mr-2" />
                                <span className="font-medium text-sm md:text-base">{item.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <p className="max-w-2xl mx-auto text-blue-100">
                            Подходящ при временни стомашно-чревни смущения, промени в моториката, чести пътувания или повишен прием на протеин.
                        </p>
                    </div>
                </div>
            </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};

export default Features;
