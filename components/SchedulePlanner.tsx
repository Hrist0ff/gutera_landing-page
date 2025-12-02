import React, { useState } from 'react';
import { Calendar as CalendarIcon, Download, ArrowRight, CheckCircle } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

// Helper to add months safely
const addMonths = (date: Date, months: number) => {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
};

// Helper to add days
const addDays = (date: Date, days: number) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

// Helper to format date
const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('bg-BG', { day: 'numeric', month: 'long' }).format(date);
};

const SchedulePlanner: React.FC = () => {
  // Default start date is today
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);

  const generateSchedule = () => {
    const start = new Date(startDate);
    const schedule = [];
    
    for (let i = 0; i < 3; i++) {
        // Start date for this month's cycle
        const cycleStart = addMonths(start, i);
        
        // End date (10 days duration means start + 9 days)
        const cycleEnd = new Date(cycleStart);
        cycleEnd.setDate(cycleEnd.getDate() + 9); 
        
        schedule.push({
            month: i + 1,
            start: cycleStart,
            end: cycleEnd
        });
    }
    return schedule;
  };

  const schedule = generateSchedule();

  const downloadICS = () => {
    let icsContent = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Gutera//Schedule//BG
CALSCALE:GREGORIAN
METHOD:PUBLISH
`;

    schedule.forEach(cycle => {
        let currentDate = new Date(cycle.start);
        const endDate = new Date(cycle.end);
        
        while (currentDate <= endDate) {
            // Format date as YYYYMMDD without dashes
            const dateStr = currentDate.toISOString().replace(/[-:]/g, '').split('.')[0].slice(0, 8);
            
            // Event
            icsContent += 
`BEGIN:VEVENT
SUMMARY:Gutera Прием (Месец ${cycle.month}, Ден ${cycle.month * 10 - 9 + (currentDate.getDate() - cycle.start.getDate())})
DTSTART;VALUE=DATE:${dateStr}
DESCRIPTION:Време е за вашето дневно саше Gutera. Разбъркайте, изчакайте, разбъркайте отново и се насладете.
STATUS:CONFIRMED
TRANSP:TRANSPARENT
END:VEVENT
`;
            // Next day
            currentDate.setDate(currentDate.getDate() + 1);
        }
    });

    icsContent += 'END:VCALENDAR';

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'gutera-calendar.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-gutera-light/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gutera-gold/5 rounded-full -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gutera-green/5 rounded-full -ml-20 -mb-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gutera-blue mb-4">
              Планирайте своя прием
            </h2>
            <p className="text-gray-600 text-lg">
              Започнете с 10 дни прием по едно саше дневно, направете 20-дневна пауза и повторете цикъла в рамките на три последователни месеца.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    
                    {/* Controls Section */}
                    <div className="p-8 bg-gutera-blue text-white flex flex-col justify-center">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2 text-gutera-gold">Стъпка 1</h3>
                            <p className="text-blue-200 mb-6">Изберете начална дата за първия прием.</p>
                            
                            <label className="block text-sm font-medium text-blue-200 mb-2">Начало на курса</label>
                            <div className="relative">
                                <input 
                                    type="date" 
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-gutera-gold focus:border-transparent transition-all [color-scheme:dark]"
                                />
                            </div>
                        </div>

                        <div className="mt-auto">
                            <h3 className="text-2xl font-bold mb-2 text-gutera-gold">Стъпка 2</h3>
                            <p className="text-blue-200 mb-6">Изтеглете графика и добавете напомняния в календара си.</p>
                            <button 
                                onClick={downloadICS}
                                className="w-full flex items-center justify-center space-x-2 bg-gutera-gold hover:bg-yellow-500 text-gutera-blue font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                <Download size={20} />
                                <span>Изтегли Календар (.ics)</span>
                            </button>
                            <p className="text-xs text-blue-300 mt-3 text-center opacity-80">
                                Съвместим с Google Calendar, Apple Calendar, Outlook
                            </p>
                        </div>
                    </div>

                    {/* Visual Schedule Section */}
                    <div className="col-span-1 lg:col-span-2 p-8 lg:p-12 bg-white">
                        <h3 className="text-xl font-bold text-gutera-blue mb-8 flex items-center">
                            <CalendarIcon className="mr-2 text-gutera-green" />
                            Вашият персонален план
                        </h3>

                        <div className="space-y-8 relative">
                            {/* Vertical connecting line */}
                            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-100 hidden md:block"></div>

                            {schedule.map((cycle, index) => (
                                <div key={index} className="relative flex flex-col md:flex-row gap-6 items-start group">
                                    {/* Timeline Node */}
                                    <div className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white border-2 border-gutera-green text-gutera-green font-bold z-10 shrink-0 group-hover:bg-gutera-green group-hover:text-white transition-colors duration-300">
                                        {cycle.month}
                                    </div>

                                    {/* Card Content */}
                                    <div className="flex-1 w-full bg-gradient-to-r from-gutera-light/80 via-white to-gutera-light/60 rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-gutera-green/5 rounded-full pointer-events-none"></div>
                                        <div className="absolute -left-6 bottom-2 w-16 h-16 bg-gutera-gold/10 rounded-full pointer-events-none"></div>

                                        <div className="flex flex-wrap justify-between items-center mb-4 relative">
                                            <div className="flex items-center space-x-2">
                                                <span className="bg-gutera-green/10 text-gutera-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                                    Месец {cycle.month}
                                                </span>
                                                <h4 className="font-bold text-gray-800">10-дневен курс</h4>
                                            </div>
                                            <div className="text-right">
                                                <span className="block text-sm text-gray-700 font-semibold bg-white px-3 py-1 rounded-md shadow-sm border border-gray-100">
                                                    {formatDate(cycle.start)} - {formatDate(cycle.end)}
                                                </span>
                                                <span className="text-[11px] text-gray-400 block mt-1">10 дни прием · 20 дни пауза</span>
                                            </div>
                                        </div>

                                        {/* Visual progress bar days */}
                                        <div className="mb-4 space-y-3">
                                            <div className="relative h-5 text-xs text-gray-500">
                                                <span className="absolute left-0 top-0">{formatDate(cycle.start)}</span>
                                                <span 
                                                  className="absolute top-0 whitespace-nowrap"
                                                  style={{ left: '33.333%', transform: 'translateX(-50%)' }}
                                                >
                                                  {formatDate(cycle.end)}
                                                </span>
                                                <span className="absolute right-0 top-0 text-right">{formatDate(addDays(cycle.start, 29))}</span>
                                            </div>
                                            <div className="relative h-3 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                                                <div 
                                                  className="h-full bg-gradient-to-r from-gutera-green via-gutera-green to-gutera-green/80" 
                                                  style={{ width: '33.333%' }} 
                                                  title="10 дни прием"
                                                />
                                                <div className="absolute left-1/3 top-0 h-full w-px bg-gutera-gold/70" aria-hidden="true" />
                                                <div className="absolute right-0 inset-y-0 flex items-center pr-2">
                                                    <span className="text-[11px] text-gray-400 font-semibold">Пауза</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white border border-gray-100 shadow-sm">
                                                <div className="w-2.5 h-2.5 rounded-full bg-gutera-green"></div>
                                                <div className="text-xs">
                                                    <p className="text-gray-700 font-semibold">Активни дни</p>
                                                    <p className="text-gray-400">10 приема в месеца</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white border border-gray-100 shadow-sm">
                                                <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                                                <div className="text-xs">
                                                    <p className="text-gray-700 font-semibold">Пауза</p>
                                                    <p className="text-gray-400">20 дни възстановяване</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-8 p-4 bg-gutera-light/50 rounded-lg flex items-start text-sm text-gray-600">
                             <CheckCircle size={18} className="text-gutera-green mr-3 mt-0.5 shrink-0" />
                             <p>Този цикъл от <strong>3 месеца по 10 дни</strong> се препоръчва да се прави <strong>поне два пъти годишно</strong> за поддържане на оптимален микробиомен баланс.</p>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default SchedulePlanner;
