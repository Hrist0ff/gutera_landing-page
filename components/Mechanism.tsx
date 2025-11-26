import React from 'react';
import { MECHANISMS } from '../constants';

const Mechanism: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gutera-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gutera-blue mb-4">
            Цялостна система за чревна поддръжка
          </h2>
          <p className="text-gray-600 text-lg">
            Gutera действа чрез три взаимно допълващи се механизма, осигурявайки дълготраен комфорт и баланс.
          </p>
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