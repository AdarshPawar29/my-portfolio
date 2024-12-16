import React from 'react';
import { Code2, GitBranch, Palette } from 'lucide-react';
import { SkillCard } from './SkillCard';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 size={24} />,
      skills: [
        {
          name: 'React',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
          name: 'Angular',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
        },
        {
          name: 'TypeScript',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        {
          name: 'Node.js',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        }
      ]
    },
    {
      title: 'Version Control & Tools',
      icon: <GitBranch size={24} />,
      skills: [
        {
          name: 'Git',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
        {
          name: 'Webpack',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg'
        },
        {
          name: 'Babel',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg'
        }
      ]
    },
    {
      title: 'Design & UI',
      icon: <Palette size={24} />,
      skills: [
        {
          name: 'Figma',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
        {
          name: 'Bootstrap',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
        },
        {
          name: 'Material-UI',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
        }
      ]
    }
  ];

  return (
    <section className="mb-16">
      <h3 className="text-2xl font-semibold mb-6">Skills</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <SkillCard
            key={category.title}
            title={category.title}
            skills={category.skills}
            icon={category.icon}
          />
        ))}
      </div>
    </section>
  );
}