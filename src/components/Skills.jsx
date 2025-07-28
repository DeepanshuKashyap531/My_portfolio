import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("fullstack");

  const fullStackSkills = [
    { name: "Html", image: "skill images/Full Stack Development/html.png" },
    { name: "CSS", image: "skill images/Full Stack Development/css.png" },
    { name: "JavaScript", image: "skill images/Full Stack Development/js.png" },
    { name: "PHP", image: "skill images/Full Stack Development/php.png" },
    { name: "MySql", image: "skill images/Full Stack Development/mysql.png" },
    { name: "Oracle", image: "skill images/Full Stack Development/oracle.png" },
    { name: "Node.js", image: "skill images/Full Stack Development/node.png" },
    { name: "React", image: "skill images/Full Stack Development/react.png" },
    { name: "MongoDB", image: "skill images/Full Stack Development/mongo.png" },
    { name: "Tailwind CSS", image: "skill images/Full Stack Development/Tailwind.png" },
    { name: "Bootstrap", image: "skill images/Full Stack Development/bootstrape.png" },
    { name: "TypeScript", image: "skill images/Full Stack Development/Typescript.png" },
  ];

  const dataAnalystSkills = [
    { name: "Python", image: "skill images/Data Analyst/python.png" },
    { name: "Pandas", image: "skill images/Data Analyst/pandas.png" },
    { name: "NumPy", image: "skill images/Data Analyst/numpy.png" },
    { name: "SQL", image: "skill images/Data Analyst/sql.png" },
    { name: "Machine Learning", image: "skill images/Data Analyst/machien.png" },
    { name: "Microsoft Power Bi", image: "skill images/Data Analyst/poower bi.png" },
    { name: "Scikit Learn", image: "skill images/Data Analyst/scikit.png" },
    { name: "MatplotLib", image: "skill images/Data Analyst/matplotlib.png" },
    { name: "Statistic", image: "skill images/Data Analyst/statistic.png" },
  ];

  const currentSkills = activeTab === "fullstack" ? fullStackSkills : dataAnalystSkills;

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#0A0A0A] to-[#1A2A2A]"
    >
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold mb-8 text-center text-white font-inter animate-fade-in">
          Skills
        </h2>

        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-3 mx-2 rounded text-xl font-inter ${
              activeTab === "fullstack"
                ? "bg-[#00FF99] text-[#0A0A0A]"
                : "bg-[#1A2A2A] text-white border border-[#00FF99]"
            } hover:bg-[#00CC66] hover:text-[#0A0A0A] transition-all duration-300 shadow-lg hover:shadow-[#00FF99]/50`}
            onClick={() => setActiveTab("fullstack")}
          >
            Full Stack Development
          </button>
          <button
            className={`px-6 py-3 mx-2 rounded text-xl font-inter ${
              activeTab === "dataanalyst"
                ? "bg-[#00FF99] text-[#0A0A0A]"
                : "bg-[#1A2A2A] text-white border border-[#00FF99]"
            } hover:bg-[#00CC66] hover:text-[#0A0A0A] transition-all duration-300 shadow-lg hover:shadow-[#00FF99]/50`}
            onClick={() => setActiveTab("dataanalyst")}
          >
            Data Analyst
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-6 rounded-xl bg-[#1A2A2A]/70 backdrop-blur-lg border border-[#00FF99]/30 hover:border-[#00FF99]/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_#00FF99] hover:rotate-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#00FF99]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <img
                src={skill.image}
                alt={skill.name}
                className="w-24 h-24 mb-4 object-contain animate-image"
              />
              <span className="text-xl font-bold text-[#00FF99] font-inter tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
