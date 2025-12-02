import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { MECHANISMS } from '../constants';

const Mechanism: React.FC = () => {
  const [showBackgroundOnly, setShowBackgroundOnly] = useState(false);

  return (
    <section
      id="how-it-works"
      className={`relative overflow-hidden ${showBackgroundOnly ? 'py-10 md:py-20' : 'py-20'}`}
    >
      <div className="absolute inset-0">
        <img
          src="/how_does_gutera_work.png"
          alt="Как действа Gutera"
          className="w-full h-full object-contain"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-white/70 transition-opacity duration-500 ${
            showBackgroundOnly ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          className="group relative inline-flex items-center gap-2 bg-white/85 backdrop-blur-sm border border-gutera-blue/20 text-gutera-blue px-5 py-2.5 rounded-full font-semibold shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gutera-green/40"
          onClick={() => setShowBackgroundOnly((prev) => !prev)}
          aria-pressed={showBackgroundOnly}
          title={showBackgroundOnly ? 'Възстанови съдържанието' : 'Покажи само фона'}
        >
          <span
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              showBackgroundOnly ? 'bg-gutera-gold animate-pulse' : 'bg-gutera-green animate-ping'
            }`}
          />
          <span className="flex items-center gap-1">
            {showBackgroundOnly ? <EyeOff size={18} /> : <Eye size={18} />}
            {showBackgroundOnly ? 'Върни съдържанието' : 'Виж действието върху тялото'}
          </span>
          <span className="absolute inset-0 rounded-full bg-gutera-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </button>
      </div>
      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 transition-all duration-500 ${
          showBackgroundOnly
            ? 'opacity-0 pointer-events-none max-h-100 overflow-hidden'
            : 'opacity-100 max-h-[2000px]'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gutera-blue mb-4">
            Как действа Gutera™
          </h2>
          <p className="text-gray-600 text-lg">
            Логиката следва веригата: хранителен субстрат → микробиом → метаболити → рецептори → моторика и имунитет → почистване и детоксикация → усещане за комфорт.
          </p>
        </div>

        <div className="mb-14">
          <div className="relative rounded-3xl overflow-hidden border border-gutera-green/10 shadow-lg">
            <img
              src="/two_glasses.png"
              alt="Свежа чаша вода с натурални съставки"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
            <div className="absolute left-0 top-0 p-6 md:p-8 max-w-xl">
              <p className="text-sm uppercase tracking-[0.18em] font-semibold text-gutera-green mb-2">Натуро-базиран подход</p>
              <p className="text-gray-700 text-base md:text-lg">
                Gutera™ осигурява хранителен субстрат за полезните бактерии, които образуват късоверижни мастни киселини и поддържат бариерата отвътре.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MECHANISMS.map((mech, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full"
            >
              <div className="w-16 h-16 bg-gutera-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gutera-green group-hover:text-white transition-colors text-gutera-green">
                  <mech.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gutera-blue mb-3">{mech.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                  {mech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mechanism;
