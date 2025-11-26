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
  { label: 'Активно спортуващи' },
  { label: 'Хора на диетичен режим' },
  { label: 'При продължително гладуване' },
  { label: 'Активно пътуващи' },
  { label: 'Подготовка за колоноскопия' },
  { label: 'При сезонен дискомфорт' },
];

export const MECHANISMS: Mechanism[] = [
  {
    title: 'Регулаторен ефект',
    description: 'Подпомага естествената моторика и редовност на стомашно-чревния тракт.',
    icon: Activity
  },
  {
    title: 'Пребиотичен ефект',
    description: 'Стимулира развитието на полезната микробиота и оптимизира микробиомната функция.',
    icon: Leaf
  },
  {
    title: 'Протективен ефект',
    description: 'Поддържа структурната и функционална цялост на чревната лигавица и намалява дискомфорта.',
    icon: ShieldCheck
  }
];

export const DIRECT_BENEFITS: Benefit[] = [
  {
    title: 'Редовност и комфорт',
    description: 'Подобряване на функционалния комфорт и ритъм.',
    icon: Activity
  },
  {
    title: 'Микробиомен баланс',
    description: 'Поддържане на здравословна микробиомна активност.',
    icon: Scale
  },
  {
    title: 'Без подуване',
    description: 'Намаляване на газове и усещане за тежест.',
    icon: Wind
  },
  {
    title: 'Детокс',
    description: 'Подпомагане на естествените процеси на изчистване.',
    icon: Droplet
  }
];

export const INDIRECT_BENEFITS: Benefit[] = [
  {
    title: 'Усвояване',
    description: 'Оптимизиране на усвояването на хранителни вещества.',
    icon: ArrowRightCircle
  },
  {
    title: 'Метаболизъм',
    description: 'Подкрепа при диети и физическо натоварване.',
    icon: Zap
  },
  {
    title: 'Тонус',
    description: 'Подобряване на общото усещане за лекота и жизненост.',
    icon: Activity
  },
  {
    title: 'Стабилност',
    description: 'Дългосрочна чревна стабилност без пробиотици.',
    icon: ShieldCheck
  }
];