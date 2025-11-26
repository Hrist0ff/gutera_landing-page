import React from 'react';
import { INGREDIENTS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const Ingredients: React.FC = () => {
  return (
    <section id="ingredients" className="py-20 bg-gutera-light/50 relative">
       {/* Decorative leaf */}
      <div className="absolute left-0 top-20 text-gutera-green/5 transform -rotate-45 hidden lg:block">
        <svg width="200" height="400" fill="currentColor">
             <path d="M100,0 C20,100 0,300 100,400 C180,300 200,100 100,0 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gutera-blue mb-4">
                    Активни съставки
                </h2>
                <p className="text-gray-600">
                    Високо ефективна формула в едно саше (5,312.5 mg)
                </p>
            </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gutera-blue text-white">
                    <th className="p-4 md:p-6 font-semibold text-lg">Съставка</th>
                    <th className="p-4 md:p-6 font-semibold text-lg text-right">Количество (mg)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {INGREDIENTS.map((ing, index) => (
                    <tr 
                        key={index} 
                        className={`hover:bg-gutera-light/50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                    >
                        <td className="p-4 md:p-5 text-gutera-blue font-medium">
                        {ing.name}
                        </td>
                        <td className="p-4 md:p-5 text-right font-bold text-gutera-green">
                        {ing.amount} {ing.unit}
                        </td>
                    </tr>
                    ))}
                    <tr className="bg-gutera-gold/10">
                    <td className="p-4 md:p-6 font-bold text-gutera-blue">Общо количество в 1 саше</td>
                    <td className="p-4 md:p-6 font-bold text-right text-gutera-blue text-xl">5,312.5 mg</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Ingredients;