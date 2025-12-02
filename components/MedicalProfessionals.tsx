import React from 'react';
import { Stethoscope, FlaskConical, ArrowRight, FileText } from 'lucide-react';
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
                    <span className="font-bold uppercase tracking-wider text-sm">Информация от листовката</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Важни указания за продукта
                </h2>
                <p className="text-gray-600 mt-4">
                  Обобщение на ключови моменти за безопасност, съхранение и начин на действие на Gutera™.
                </p>
             </div>
             <div className="hidden md:block w-64 h-40 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img 
                  src="/gutera_boxes_on_shelf_in_pharmacy.png"
                  alt="Gutera кутии на рафт в аптека"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
             </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            
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
                            Осигурява хранителен субстрат без външни пробиотични щамове и активира полезните бактерии отвътре.
                        </li>
                        <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-gutera-green rounded-full mt-1.5 mr-2 shrink-0"></span>
                            Ферментацията формира бутират, пропионат и ацетат, които поддържат бариерната функция и сигнализират към имунната система.
                        </li>
                        <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-gutera-green rounded-full mt-1.5 mr-2 shrink-0"></span>
                            Нормализира моториката и почистването без слабително действие и без газообразуване.
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Безопасност и съхранение</h3>
                    <ul className="space-y-3 text-sm text-gray-600 mb-6">
                        <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-gutera-green rounded-full mt-1.5 mr-2 shrink-0"></span>
                            Формулата е базирана на безопасни, балансирани съставки; до момента не са наблюдавани нежелани ефекти.
                        </li>
                        <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-gutera-green rounded-full mt-1.5 mr-2 shrink-0"></span>
                            Съхранявайте на сухо и тъмно място. Не превишавайте препоръчителния дневен прием и не използвайте продукта след срока на годност.
                        </li>
                        <li className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-gutera-green rounded-full mt-1.5 mr-2 shrink-0"></span>
                            Пазете на място, недостъпно за деца. Продуктът се предлага в аптечната мрежа без рецепта.
                        </li>
                    </ul>
                    <a href="/Gutera - листовка 1.docx" className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group">
                        <div className="mr-3 bg-white p-2 rounded border border-slate-200 text-blue-600 font-bold">DOCX</div>
                        <div>
                            <div className="font-bold text-sm text-gray-900 group-hover:text-gutera-blue">Gutera – листовка</div>
                            <div className="text-xs text-gray-500">Отворете пълната информация за пациента</div>
                        </div>
                        <ArrowRight className="ml-auto text-slate-400 group-hover:text-gutera-blue" size={18} />
                    </a>
                </div>
            </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default MedicalProfessionals;
