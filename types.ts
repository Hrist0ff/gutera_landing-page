import { LucideIcon } from 'lucide-react';

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  description?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TargetAudience {
  label: string;
}

export interface Mechanism {
  title: string;
  description: string;
  icon: LucideIcon;
}