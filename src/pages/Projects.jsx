import { motion as Motion } from "framer-motion";
import { ExternalLink, Github, Star, Server } from "lucide-react";

import herfa from "../assets/herfa.png";
import bank from "../assets/bank.png";
import book from "../assets/book.png";
import clothes from "../assets/clothes.png";
import fitness from "../assets/fitness.png";
import grocery from "../assets/grocery.png";
import hirely from "../assets/hirely.png";
import genzMaker from "../assets/genz-maker.svg";
import upwork from "../assets/upwork.svg";
import leoClinic from "../assets/leo-clinic.svg";
import elara from "../assets/elara.svg";

const projects = [
  {
    name: "GenZ Maker",
    description:
      "A full-stack educational platform built for online learning, combining a modern web interface with a secure ASP.NET Core backend.",
    tech: ["Next.js", "React", "ASP.NET Core", "C#", "SQL Server"],
    github: "https://github.com/yousef-sheha12/GenZ-Maker",
    live: null,
    swagger: null,
    gradient: "from-blue-500 to-cyan-500",
    icon: genzMaker,
  },

  {
    name: "UpWard Backend",
    description:
      "A scalable backend API for a professional platform, built with ASP.NET Core and Clean Architecture for secure and maintainable application development.",
    tech: ["C#", "ASP.NET Core", ".NET 9", "SQL Server", "EF Core"],
    github: "https://github.com/techmasterycompany-star/upward_.net",
    live: null,
    swagger: null,
    gradient: "from-violet-500 to-purple-500",
    icon: upwork,
  },

  {
    name: "LeoClinic Backend",
    description:
      "A healthcare management backend API built with ASP.NET Core and Clean Architecture, providing secure and scalable data management for clinic operations.",
    tech: ["C#", "ASP.NET Core", ".NET 9", "SQL Server", "EF Core"],
    github: "https://github.com/techmasterycompany-star/LeoClinic_.net",
    live: null,
    swagger: null,
    gradient: "from-emerald-500 to-teal-500",
    icon: leoClinic,
  },

  {
    name: "Elara Backend",
    description:
      "A backend application built with .NET and C# using a structured architecture designed for scalable, maintainable, and reliable API development.",
    tech: ["C#", "ASP.NET Core", ".NET", "SQL Server", "EF Core"],
    github: "https://github.com/techmasterycompany-star/Elara_.net",
    live: null,
    swagger: null,
    gradient: "from-orange-500 to-rose-500",
    icon: elara,
  },

  {
    name: "Herfa-Next",
    description:
      "A platform that helps users find and connect with skilled craftsmen through a modern and user-friendly interface.",
    tech: ["Next.js", "React", "JavaScript"],
    github: "https://github.com/yousef-sheha12/Herfa-Next",
    live: "https://herfa.vercel.app",
    swagger: null,
    gradient: "from-cyan-500 to-blue-500",
    icon: herfa,
  },

  {
    name: "Herfa Backend",
    description:
      "The backend API for the Herfa platform, built with ASP.NET Core and C# for scalable and secure data management.",
    tech: ["C#", "ASP.NET Core", "SQL"],
    github: "https://github.com/yousef-sheha12/Herfa-back",
    live: null,
    swagger: null,
    gradient: "from-sky-500 to-indigo-500",
    icon: herfa,
  },

  {
    name: "Grocery App",
    description:
      "A modern grocery shopping application with a clean interface, built with Next.js for optimal performance and SEO.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yousef-sheha12/Grocery-Next.js",
    live: "https://grocery-next-js-j5gn.vercel.app",
    swagger: null,
    gradient: "from-amber-500 to-orange-500",
    icon: grocery,
  },

  {
    name: "Fitness Team-1",
    description:
      "A fitness platform built during an internship with a focus on team collaboration and modern UI.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yousef-sheha12/Fitness-Team-1",
    live: "https://fitness-team-1.vercel.app",
    swagger: null,
    gradient: "from-emerald-500 to-teal-500",
    icon: fitness,
  },

  {
    name: "Hirely",
    description:
      "A modern hiring and recruitment platform connecting employers with talented candidates through an intuitive interface.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/yousef-sheha12/hirely",
    live: "https://hirely-chi.vercel.app",
    swagger: null,
    gradient: "from-violet-500 to-purple-500",
    icon: hirely,
  },

  {
    name: "Clothes Website",
    description:
      "A modern E-commerce web application specialized in fashion with dynamic UI, smooth animations, and seamless shopping.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/yousef-sheha12/Clothes-Website",
    live: "https://clothes-website-psi.vercel.app",
    swagger: null,
    gradient: "from-pink-500 to-rose-500",
    icon: clothes,
  },

  {
    name: "Bankist App",
    description:
      "A modern banking application for managing personal finances, including transactions and loan requests.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/yousef-sheha12/Bankist-App",
    live: "https://bankist-app-azure.vercel.app",
    swagger: null,
    gradient: "from-indigo-500 to-violet-500",
    icon: bank,
  },

  {
    name: "Book Store",
    description:
      "A full-featured book store application with browsing, searching, and cart functionality for book enthusiasts.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/yousef-sheha12/book-store",
    live: "https://book-store-sigma-ebon.vercel.app",
    swagger: null,
    gradient: "from-teal-500 to-cyan-500",
    icon: book,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <Motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Projects
          </span>

          <h2 className="section-title mb-4">Featured Work</h2>

          <p className="section-subtitle mx-auto px-4">
            A selection of my frontend, full-stack, and backend projects
          </p>
        </Motion.div>

        <Motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              className="glass-card overflow-hidden hover-lift group"
            >
              <div
                className={`h-40 sm:h-48 bg-linear-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20" />

                <Motion.span
                  className="relative text-4xl sm:text-5xl font-bold text-white/90 font-['Space_Grotesk']"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.icon ? (
                    <img
                      src={project.icon}
                      alt={project.name}
                      className="w-full object-contain"
                    />
                  ) : (
                    <span>{project.icon}</span>
                  )}
                </Motion.span>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2">
                  {/* Frontend / Full Stack Demo */}
                  {project.live && (
                    <Motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      className="p-2 bg-black/30 backdrop-blur-sm rounded-lg text-white hover:bg-black/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={16} />
                    </Motion.a>
                  )}

                  {/* Backend Swagger */}
                  {project.swagger && (
                    <Motion.a
                      href={project.swagger}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Swagger API"
                      className="p-2 bg-black/30 backdrop-blur-sm rounded-lg text-white hover:bg-black/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Server size={16} />
                    </Motion.a>
                  )}

                  {/* GitHub يظهر فقط لو الـ Repo Public */}
                  {project.github && (
                    <Motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Source Code"
                      className="p-2 bg-black/30 backdrop-blur-sm rounded-lg text-white hover:bg-black/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} />
                    </Motion.a>
                  )}
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={14} className="text-amber-400 fill-amber-400" />

                  <span className="text-xs text-amber-400 font-medium">
                    Featured Project
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-['Space_Grotesk']">
                  {project.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium bg-white/5 border border-white/10 rounded-full text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;
