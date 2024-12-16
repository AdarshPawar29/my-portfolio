import { Code2, GitBranch, Palette } from 'lucide-react';

export const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
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
    icon: GitBranch,
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
    icon: Palette,
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
] as const;