import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const FAQS = [
  {
    question: "Съдържа ли Gutera пробиотици?",
    answer: "Не. Gutera е създаден да стимулира естествената реколонизация на Вашия собствен микробиом, вместо да внася външни бактерии. Това осигурява по-дълготрайна стабилност на чревната флора."
  },
  {
    question: "Мога ли да приемам Gutera по време на фастинг или диета?",
    answer: "Да, абсолютно. Gutera е изключително подходящ при продължително гладуване, пости и специални хранителни режими (вкл. високопротеинови), като поддържа метаболитния баланс и предпазва стомашната лигавица."
  },
  {
    question: "Подходящ ли е за активни спортисти?",
    answer: "Да. Активните съставки като L-Глутамин подпомагат възстановяването на тъканите, а електролитният баланс се поддържа чрез оптимизирана абсорбция на течности, което е ключово при физическо натоварване."
  },
  {
    question: "Колко време трябва да го приемам?",
    answer: "Стандартният курс е 10 дни (една опаковка), което е достатъчно за усещане на отчетлив ефект – лекота, редовност и комфорт. Продуктът е безопасен и за по-дългосрочна употреба при нужда."
  },
  {
    question: "Има ли консерванти или изкуствени оцветители?",
    answer: "Не. Gutera е натуро-базиран продукт без консерванти, без ГМО и без изкуствени оцветители. Цветът и вкусът се дължат на естествените съставки (мента, хлорела, сини сливи)."
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