import React from 'react';

export function Awards() {
  const awards = [
    {
      icon: '🏆',
      title: 'RISE Scout Award',
      description: 'For exceptional performance beyond expectations'
    },
    {
      icon: '🌟',
      title: 'Xtra Miler Award',
      description: 'Recognized for consistently exceeding performance expectations'
    },
    {
      icon: '🥈',
      title: 'Kaizen Silver Award',
      description: 'For creating innovative and efficient platforms'
    }
  ];

  return (
    <section className="mb-16">
      <h3 className="text-2xl font-semibold mb-6">Awards & Recognition</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {awards.map((award) => (
          <div key={award.title} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <span className="text-4xl mb-4 block">{award.icon}</span>
            <h4 className="font-medium text-lg mb-2">{award.title}</h4>
            <p className="text-gray-600">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}