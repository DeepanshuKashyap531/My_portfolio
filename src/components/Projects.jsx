import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "E-commerce Platform",
      desc: "A full-stack e-commerce website with payment integration",
      url: "https://example.com/ecommerce",
      image:
        "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1305&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Data Dashboard",
      desc: "Interactive dashboard for data visualization using Tableau",
      url: "https://example.com/dashboard",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Task Manager",
      desc: "React-based task management application with MongoDB backend",
      url: "https://example.com/taskmanager",
      image:
        "https://images.unsplash.com/photo-1707761918029-1295034aa31e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#0A0A0A] to-[#1A2A2A]"
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold mb-8 text-center text-white font-inter animate-fade-in">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                block border border-[#00FF99]/20 rounded-lg p-6 bg-[#1A2A2A]
                hover:shadow-2xl hover:shadow-[#00FF99]/50 hover:bg-[#1A2A2A]/80
                transition-all duration-300 animate-slide-in
                transform hover:scale-[1.02]
                min-h-[480px] flex flex-col
              "
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-72 object-cover rounded-lg mb-4 transition-transform duration-300 animate-image"
              />
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#00FF99] font-inter mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 font-inter">{project.desc}</p>
                </div>
                <div className="mt-4">
                  <span className="inline-block mt-4 px-4 py-2 bg-[#00FF99] text-[#0A0A0A] rounded hover:bg-[#00CC66] transition-all duration-300 text-center font-inter font-semibold">
                    View Project
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
