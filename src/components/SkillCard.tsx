import React from 'react';
import { TechIcon } from './TechIcon';

interface Skill {
  name: string;
  imageUrl: string;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
  icon: React.ReactNode;
}

export function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-blue-500">{icon}</span>
        <h4 className="font-medium text-xl">{title}</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skills.map((skill) => (
          <TechIcon 
            key={skill.name} 
            name={skill.name} 
            imageUrl={skill.imageUrl} 
          />
        ))}
      </div>
    </div>
  );
}