import React from 'react';

export function Summary() {
  return (
    <section className="mb-16 relative">
      <div className="absolute left-0 top-0 w-32 h-32 opacity-5 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=128&q=80" 
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-4">Summary</h3>
      <p className="text-gray-600 leading-relaxed text-lg">
        Highly skilled Front-End Developer with expertise in React and Angular, proficient in creating dynamic, 
        user-friendly, and accessible web applications. Demonstrated excellence in WCAG compliance, ensuring 
        seamless integration of accessibility features in front-end projects.
      </p>
      <p className="text-gray-600 leading-relaxed text-lg mt-4">
        Proven ability in version control, migration, and modernization of front-end architectures. 
        Adept at translating design concepts into responsive, interactive, and accessible user interfaces. 
        Passionate about delivering high-quality code and enhancing user experiences through innovative solutions.
      </p>
    </section>
  );
}