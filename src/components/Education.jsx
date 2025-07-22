import React from 'react';

const Education = () => {
  const educationList = [
    { degree: "10th Class", institution: "Burgess English Higher Secondary School", year: "2017 - 2018" },
    { degree: "12th Class", institution: "Burgess English Higher Secondary School", year: "2019 - 2020" },
    { degree: "Bachelor in Computer Application", institution: "D.P Vipra College of Education", year: "2021 - 2023" },
    { degree: "MSc Data Science", institution: "Symbiosis Online and Digital Learning", year: "2024 - 2026 (Expected)" },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center bg-gradient-to-br from-[#1E2A44] to-[#2A3B66]">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold mb-8 text-center text-white font-inter animate-fade-in">Education</h2>
        <div className="space-y-8 max-w-2xl mx-auto">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="border-l-4 border-cyan-400 pl-4 animate-slide-in bg-[#2A3B66] p-4 rounded-lg shadow-md shadow-cyan-500/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold text-cyan-400 font-inter">{edu.degree}</h3>
              <p className="text-gray-300 font-inter">{edu.institution}</p>
              <p className="text-gray-400 font-inter">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
