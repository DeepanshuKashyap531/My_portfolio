import React, { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('fullstack');

  const fullStackSkills = [
    { name: 'HTML', image: '../skill images/Full Stack Development/html.png' },
    { name: 'CSS', image: '/skill images/Full Stack Development/css.png' },
    { name: 'JavaScript', image: '/skill images/Full Stack Development/js.png' },
    { name: 'PHP', image: '/skill images/Full Stack Development/php.png' },
    { name: 'MySQL', image: '/skill images/Full Stack Development/mysql.png' },
    { name: 'Oracle', image: '/skill images/Full Stack Development/oracle.png' },
    { name: 'Node.js', image: '/skill images/Full Stack Development/node.png' },
    { name: 'React', image: '/skill images/Full Stack Development/react.png' },
    { name: 'MongoDB', image: '/skill images/Full Stack Development/mongo.png' },
    { name: 'Tailwind CSS', image: '/skill images/Full Stack Development/Tailwind.png' },
    { name: 'Bootstrap', image: '/skill images/Full Stack Development/bootstrape.png' },
    { name: 'TypeScript', image: '/skill images/Full Stack Development/Typescript.png' },
  ];

  const dataAnalystSkills = [
    { name: 'Python', image: "./skill images/Data Analyst/python.png" },
    { name: 'Pandas', image: './skill images/Data Analyst/pandas.png' },
    { name: 'NumPy', image: './skill images/Data Analyst/numpy.png' },
    { name: 'SQL', image: './skill images/Data Analyst/sql.png' },
    { name: 'Machine Learning', image: './skill images/Data Analyst/machien.png' },
    { name: 'Power BI', image: './skill images/Data Analyst/poower bi.png' },
    { name: 'Scikit Learn', image: './skill images/Data Analyst/scikit.png' },
    { name: 'Matplotlib', image: './skill images/Data Analyst/matplotlib.png' },
    { name: 'Statistics', image: './skill images/Data Analyst/statistic.png' },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center bg-gradient-to-br from-[#1E2A44] to-[#2A3B66]">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold mb-8 text-center text-white font-inter animate-fade-in">Skills</h2>
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-3 mx-2 rounded text-xl font-inter ${
              activeTab === 'fullstack'
                ? 'bg-cyan-500 text-[#1E2A44]'
                : 'bg-[#2A3B66] text-white border border-cyan-500'
            } hover:bg-cyan-600 hover:text-[#1E2A44] transition-all duration-300 shadow-lg hover:shadow-cyan-500/50`}
            onClick={() => setActiveTab('fullstack')}
          >
            Full Stack Development
          </button>
          <button
            className={`px-6 py-3 mx-2 rounded text-xl font-inter ${
              activeTab === 'dataanalyst'
                ? 'bg-cyan-500 text-[#1E2A44]'
                : 'bg-[#2A3B66] text-white border border-cyan-500'
            } hover:bg-cyan-600 hover:text-[#1E2A44] transition-all duration-300 shadow-lg hover:shadow-cyan-500/50`}
            onClick={() => setActiveTab('dataanalyst')}
          >
            Data Analyst
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in">
          {(activeTab === 'fullstack' ? fullStackSkills : dataAnalystSkills).map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#2A3B66] p-6 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <img src={skill.image} alt={skill.name} className="w-20 h-20 mb-3 object-contain animate-image" />
              <span className="text-lg font-semibold text-cyan-400 font-inter">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
