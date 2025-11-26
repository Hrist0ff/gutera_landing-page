import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gutera-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4 bg-white/10 p-2 rounded-lg inline-block">
                 <Logo className="h-8 text-white" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Gutera подкрепя естествения ритъм на тялото ви чрез силата на природата и науката.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-gutera-gold">Продукт</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#benefits" className="hover:text-white transition-colors">Ползи</a></li>
              <li><a href="#ingredients" className="hover:text-white transition-colors">Съставки</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Как работи</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-gutera-gold">Компания</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">За нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакти</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Дистрибуция</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-gutera-gold">Производител</h4>
            <div className="text-gray-300 text-sm space-y-2">
              <p className="font-medium">Laboratorios VIRENS S.L.</p>
              <p>Poligono Industrial Nord-Est</p>
              <p>Испания</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="font-medium text-gutera-gold">Вносител:</p>
                <p>HEALTH HUB LTD</p>
                <p>София 1404, България</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gutera. Всички права запазени.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Политика за поверителност</a>
            <a href="#" className="hover:text-white">Общи условия</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;