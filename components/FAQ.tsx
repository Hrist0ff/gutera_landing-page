import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const FAQS = [
  {
    question: "Съдържа ли Gutera™ пробиотици или инактивирани бактерии?",
    answer: "Не. Gutera™ осигурява хранителен субстрат за Вашия собствен микробиом, без да въвежда външни щамове. Така стимулира естествената микробиомна активност отвътре."
  },
  {
    question: "Има ли слабително действие или газообразуване?",
    answer: "Не. Формулата не ускорява чревната перисталтика, не предизвиква газообразуване и не е слабително. Поддържа ритъма и комфорта по физиологичен път."
  },
  {
    question: "Как и кога се приема?",
    answer: "Разтворете съдържанието на едно саше в чаша вода, разбъркайте, изчакайте 1–2 минути, разбъркайте отново и изпийте. Препоръчителният дневен прием е сутрин преди храна или вечер след последното хранене."
  },
  {
    question: "Колко дълго да продължа приема?",
    answer: "Започнете с 10 дни прием по едно саше дневно, последвайте с 20-дневна пауза и повторете цикъла в рамките на три последователни месеца. Препоръчително е курсът да се прави поне два пъти годишно."
  },
  {
    question: "Има ли наблюдавани нежелани ефекти?",
    answer: "До момента не са наблюдавани нежелани ефекти. Продуктът е подходящ за продължителна употреба и е наличен без рецепта. Съхранявайте на сухо и тъмно място и не превишавайте препоръчителния дневен прием."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gutera-blue mb-4">
              Често задавани въпроси
            </h2>
            <p className="text-gray-600">
              Всичко, което трябва да знаете за приема и действието на Gutera.
            </p>
          </div>
        </RevealOnScroll>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div 
                className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-gutera-light shadow-md' : 'bg-white hover:bg-gray-50'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-gutera-green' : 'text-gutera-blue'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full ${openIndex === index ? 'bg-gutera-green text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
