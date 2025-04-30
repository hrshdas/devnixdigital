import React from 'react';

const services = [
  {
    title: "Performance Marketing",
    description: "Data-backed campaigns that drive real growth.",
    icon: "📈"
  },
  {
    title: "Creative Design",
    description: "Compelling visuals to express your brand's story.",
    icon: "🎨"
  },
  {
    title: "UI/UX & Web Design",
    description: "Smooth, intuitive digital experiences your users love.",
    icon: "🖌️"
  },
  {
    title: "Social Media Management",
    description: "Engaging and strategic content for all platforms.",
    icon: "👥"
  }
];

export default function ServicesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {services.map((service, index) => (
        <div key={index} className="bg-gradient-to-br from-yellow-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
