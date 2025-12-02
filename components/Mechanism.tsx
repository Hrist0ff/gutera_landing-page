import React from 'react';
import { MECHANISMS } from '../constants';

const Mechanism: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gutera-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
