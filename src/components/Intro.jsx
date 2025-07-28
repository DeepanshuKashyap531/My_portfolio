import React, { useState } from 'react';

const Intro = () => {
  const [role] = useState('Full Stack Developer & Data Analyst Fresher');

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A0A0A] to-[#1A2A2A]"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:hidden flex justify-center mb-8">
          <dotlottie-wc
            src="https://lottie.host/791c709c-7134-4632-9a78-7b79daf1c527/6leLQ7GZTr.lottie"
            style={{ width: "100vw", height: "50vh" }}
            speed="1"
            autoplay
            loop
          />
        </div>
        <div className="hidden md:flex md:w-1/2 justify-center mb-8 md:mb-0">
          <dotlottie-wc
            src="https://lottie.host/791c709c-7134-4632-9a78-7b79daf1c527/6leLQ7GZTr.lottie"
            style={{ width: "60vw", height: "60vh" }}
            speed="1"
            autoplay
            loop
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold font-inter text-white">
            Hello, I am Deepanshu Kashyap, a{" "}
            <span className="text-[#00FF99] ">{role}</span>.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Intro;
