import React from 'react';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-gutera-blue relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gutera-green rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gutera-gold rounded-full blur-[80px] transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Готови ли сте за усещане за <br/>
              <span className="text-gutera-green">лекота и комфорт?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Възстановете естествения ритъм на тялото си с една стъпка. 
              Поръчайте Gutera днес и усетете разликата.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gutera-green text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-[#5a8533] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-gutera-green/20 transform hover:-translate-y-1 flex items-center">
                Поръчай сега
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-sm text-gutera-gold font-medium mt-2 sm:mt-0">
                100% Натуро-базиран продукт
              </span>
            </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default CTA;