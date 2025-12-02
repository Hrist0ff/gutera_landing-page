import { 
  Activity, 
  Utensils, 
  Plane, 
  Search, 
  ShieldCheck, 
  Leaf, 
  Zap, 
  ArrowRightCircle,
  Wind,
  Droplet,
  Scale
} from 'lucide-react';
import { Benefit, Ingredient, Mechanism, TargetAudience } from './types';

export const INGREDIENTS: Ingredient[] = [
  { name: 'Psyllium (Cascara, Entera Ispagula, Plantago Ovata) E.S', amount: 3000, unit: 'mg' },
  { name: 'Alga Chlorella Debilitada (Chlorella vulgaris)', amount: 1000, unit: 'mg' },
  { name: 'Inuline (Fibruline Instant S)', amount: 550, unit: 'mg' },
  { name: 'L-Glutamine', amount: 500, unit: 'mg' },
  { name: 'Plum Powder (Сини сливи)', amount: 150, unit: 'mg' },
  { name: 'Dry Extract Mint 10:1 (Мента)', amount: 50, unit: 'mg' },
  { name: 'Dry Extract Flax Seed 4:1 (Ленено семе)', amount: 50, unit: 'mg' },
  { name: 'Dry Extract of Anise Seed 1:4 (Анасоново семе)', amount: 12.5, unit: 'mg' },
];

export const TARGET_AUDIENCE: TargetAudience[] = [
  { label: 'Промяна в хранителния режим или сезонни вариации' },
  { label: 'Начало или край на ограничаваща диета' },
  { label: 'Режим с повишено мускулно натоварване / висок протеин' },
  { label: 'Временни стомашно-чревни смущения и нарушена моторика' },
  { label: 'Промени в микробиотата и чувствителност на лигавицата' },
  { label: 'Чести пътувания с различно хранене' },
  { label: 'Ниска физическа активност, алкохол и тютюнопушене' },
];

export const MECHANISMS: Mechanism[] = [
  {
    title: 'Стимулира вашия микробиом',
    description: 'Осигурява „градивни елементи“ без добавени пробиотични щамове и активира полезните бактерии отвътре.',
    icon: Activity
  },
  {
    title: 'Бариерна защита',
    description: 'L-глутамин и аминокиселини поддържат чревната стена, особено при повишена пропускливост или раздразнение.',
    icon: ShieldCheck
  },
  {
    title: 'Ритъм и детокс',
    description: 'Нормализира моториката и секрецията, подпомага почистването без слабителен ефект и без газообразуване.',
    icon: Droplet
  }
];

export const DIRECT_BENEFITS: Benefit[] = [
  {
    title: 'Микробиомен баланс',
    description: 'Ферментацията образува бутират, пропионат и ацетат за здрава чревна лигавица.',
    icon: Scale
  },
  {
    title: 'Бариерна подкрепа',
    description: 'Поддържа структурата на чревната стена и усещането за комфорт.',
    icon: ShieldCheck
  },
  {
    title: 'Без подуване',
    description: 'Няма слабително действие и не ускорява чревната перисталтика.',
    icon: Wind
  },
  {
    title: 'Детокс',
    description: 'Комбинира механично и биохимично действие за почистване и отделяне на отпадни продукти.',
    icon: Droplet
  }
];

export const INDIRECT_BENEFITS: Benefit[] = [
  {
    title: 'Адаптация при диети',
    description: 'Подходящ при сезонни промени, високо протеинов прием или край на ограничаващи режими.',
    icon: Utensils
  },
  {
    title: 'Ритъм на моториката',
    description: 'Подкрепя естествения ритъм на храносмилателната система и усещането за лекота.',
    icon: Activity
  },
  {
    title: 'Имунна връзка',
    description: 'Късоверижните мастни киселини участват в сигнални пътища към имунната и нервната система.',
    icon: Zap
  },
  {
    title: 'Без пробиотици',
    description: 'Дългосрочна чревна стабилност без външни бактерии и без газообразуване.',
    icon: ShieldCheck
  }
];
