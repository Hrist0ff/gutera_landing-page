import React from 'react';
import { FileText, Stethoscope, FlaskConical, ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const MedicalProfessionals: React.FC = () => {
  return (
    <section id="professionals" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-6">
             <div className="max-w-2xl">
                <div className="flex items-center space-x-2 text-gutera-blue mb-2">
                    <Stethoscope size={20} />
                    <span className="font-bold uppercase tracking-wider text-sm">Медицински специалисти</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Клинична информация и ресурси
                </h2>
                <p className="text-gray-600 mt-4">
                  Специализирана секция за лекари, фармацевти и диетолози. Научни данни за механизма на действие на Gutera.
                </p>
             </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Clinical Focus Card */}
            <RevealOnScroll delay={100}>
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 text-gutera-blue rounded-lg flex items-center justify-center mb-6">
                        <FlaskConical size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Механизъм на действие</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-gutera-green rounded-full mt-1.5 mr-2 shrink-0"></span>
                            Синергичен ефект на Psyllium и Chlorella за детоксикация.
                        </li>
                        <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-gutera-green rounded-full mt-1.5 mr-2 shrink-0"></span>
                            Възстановяване на чревната бариера чрез L-Glutamine.
                        </li>
                        <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-gutera-green rounded-full mt-1.5 mr-2 shrink-0"></span>
                            Пребиотична стимулация без ферментационен дискомфорт.
                        </li>
                    </ul>
                </div>
            </RevealOnScroll>

            {/* Resources Card */}
            <RevealOnScroll delay={200}>
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 text-gutera-blue rounded-lg flex items-center justify-center mb-6">
                        <FileText size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Ресурси за изтегляне</h3>
                    <div className="space-y-4">
                        <a href="#" className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group">
                            <div className="mr-3 bg-white p-2 rounded border border-slate-200 text-red-500">PDF</div>
                            <div>
                                <div className="font-bold text-sm text-gray-900 group-hover:text-gutera-blue">Продуктова монография</div>
                                <div className="text-xs text-gray-500">2.4 MB</div>
                            </div>
                        </a>
                        <a href="#" className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group">
                             <div className="mr-3 bg-white p-2 rounded border border-slate-200 text-red-500">PDF</div>
                            <div>
                                <div className="font-bold text-sm text-gray-900 group-hover:text-gutera-blue">Клинични проучвания</div>
                                <div className="text-xs text-gray-500">1.8 MB</div>
                            </div>
                        </a>
                    </div>
                </div>
            </RevealOnScroll>

            {/* Request Form Card */}
            <RevealOnScroll delay={300}>
                <div className="bg-gutera-blue p-8 rounded-xl shadow-md text-white">
                    <h3 className="text-xl font-bold mb-4">Заявете мостра</h3>
                    <p className="text-blue-200 text-sm mb-6">
                        Медицински представители могат да заявят професионален стартов пакет за своята практика.
                    </p>
                    <button 
                        className="w-full py-3 bg-white text-gutera-blue font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                        // mailto office@healthhub.com with subject "Заявка за мостра Gutera"
                        onClick={() => window.location.href = 'mailto:office@healthhub.com?subject=Заявка%20за%20мостра%20Gutera'}
                    >
                        
                        Свържете се с нас
                    </button>
                    <p className="text-xs text-blue-300/60 mt-4 text-center">
                        Само за регистрирани медицински лица.
                    </p>
                </div>
            </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default MedicalProfessionals;