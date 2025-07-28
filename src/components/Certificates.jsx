import React, { useState } from "react";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Microsoft Power BI",
      issuer: "Udemy",
      year: "2025",
      image: "skill images/skill/Power BI.jpg",
    },
    {
      title: "Full Stack Development",
      issuer: "Udemy",
      year: "2023",
      image: "skill images/skill/Web Development.jpg",
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#0A0A0A] to-[#1A2A2A] relative"
    >
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-5xl font-bold mb-8 text-center text-white font-inter animate-fade-in">
          Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-6 rounded-xl bg-[#1A2A2A]/70 backdrop-blur-lg border border-[#00FF99]/30 hover:border-[#00FF99]/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_#00FF99] hover:rotate-1 cursor-pointer overflow-hidden"
              onClick={() => setSelectedCert(cert.image)}
            >
              <div className="w-full h-64 md:h-[400px] overflow-hidden rounded-lg mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00FF99] font-inter text-center mb-1">
                {cert.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base font-inter text-center">
                {cert.issuer}
              </p>
              <p className="text-gray-400 text-sm sm:text-base font-inter text-center">
                {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Overlay */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center px-4">
          <div className="relative max-w-5xl w-full">
            <img
              src={selectedCert}
              alt="Fullscreen Certificate"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              className="absolute top-4 right-4 bg-[#00FF99] text-[#0A0A0A] px-4 py-2 rounded hover:bg-[#00CC66] transition font-bold"
              onClick={() => setSelectedCert(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
