import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  imageUrl: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}