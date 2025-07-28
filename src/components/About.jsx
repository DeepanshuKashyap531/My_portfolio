import React from 'react';

const About = () => (
  <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-[#0A0A0A] to-[#1A2A2A]">
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-5xl font-bold mb-20 text-center text-white font-inter animate-fade-in">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="skill images/Contact/main Dp.jpg"
            alt="Profile"
            className="rounded-full w-64 h-64 mx-auto object-cover transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#00FF99]/50"
          />
        </div>
        <div className="md:w-1/2 animate-slide-in">
          <p className="text-xl text-[#00CC66] font-inter">
            I'm a passionate Full Stack Developer and Data Analyst with a keen interest in creating
            innovative solutions. With a strong foundation in both development and data analysis,
            I strive to build impactful projects that solve real-world problems.
            <br /><br />
            I thrive on bridging the gap between data insights and practical implementation, turning complex
            problems into elegant, user-centric applications. My experience across the full development stack 
            allows me to build scalable systems while maintaining a focus on performance and clean design. Whether
            it’s designing intuitive user interfaces or building robust backend services, I aim to deliver seamless 
            user experiences that add real value.
            <br /><br />
            Collaboration is at the core of my work ethic, and I believe the best solutions are built through clear communication 
            and teamwork. I am committed to contributing to projects that make a difference, whether through open-source contributions
            or innovative client solutions. My goal is to continue growing as a developer and analyst while working on impactful projects 
            that align with my values and passion for technology.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
