import React from 'react';

const About = () => (
  <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-[#1E2A44] to-[#2A3B66]">
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-5xl font-bold mb-20 text-center text-white font-inter animate-fade-in">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="skill images/Contact/main Dp.jpg"
            alt="Profile"
            className="rounded-full w-64 h-64 mx-auto object-cover transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/50"
          />
        </div>
        <div className="md:w-1/2 animate-slide-in">
          <p className="text-xl text-cyan-300 font-inter">
            I'm a passionate Full Stack Developer and Data Analyst with a keen interest in creating innovative solutions.
            With a strong foundation in both development and data analysis, I strive to build impactful projects that
            solve real-world problems.
            <br /><br />
            I thrive on bridging the gap between data insights and practical implementation, turning complex problems
            into elegant, user-centric applications. My experience across the full development stack allows me to build
            scalable systems while maintaining a focus on performance and clean design.
            <br /><br />
            Collaboration is at the core of my work ethic, and I believe the best solutions are built through clear
            communication and teamwork. My goal is to continue growing as a developer and analyst while working on impactful
            projects aligned with my passion for technology.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
