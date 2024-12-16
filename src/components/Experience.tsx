import React from 'react';
import { Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <section className="mb-16">
      <h3 className="text-2xl font-semibold mb-6">Experience</h3>
      <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Briefcase className="text-blue-500" size={24} />
            <div>
              <h4 className="text-xl font-medium">Software Engineer</h4>
              <p className="text-gray-600">Bristlecone (Mahindra Group Company)</p>
            </div>
          </div>
          <p className="text-gray-500">07/2017 – Present | Pune, India</p>
        </div>
        <ul className="text-gray-600 space-y-3 mt-6">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            <span>Collaborated with backend, UI/UX, and security teams to implement and enhance new front-end features.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            <span>Integrated WCAG accessibility standards to ensure inclusive design and functionality.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            <span>Demonstrated expertise in React and Angular, delivering seamless applications.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
            <span>Led efforts in front-end modernization, implementing scalable architectures.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}