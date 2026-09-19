import { motion as Motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

import herfa from "../assets/herfa.png";
import fitness from "../assets/fitness.png";
import genzMaker from "../assets/genz-maker.svg";
import upwork from "../assets/upwork.svg";

const projects = [
  {
    name: "GenZ-Maker LMS",
    description:
      "A modern learning management system for managing courses, instructors, students, and educational content with a responsive and user-friendly interface.",
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Zustand", "TanStack React Query", "Axios", ".NET", "ASP.NET Core", "SQL Server"],
    github: "https://github.com/yousef-sheha12/GenZ-Maker",
    live: null,
    badge: "Full Stack • In Production",
    gradient: "from-blue-500 to-cyan-500",
    icon: genzMaker,
  },

  {
    name: "Herfa",
    description:
      "A scalable platform connecting users with local craftsmen, featuring service search & filtering, booking flow, client/artisan dashboards, real-time notifications, and interactive maps with Leaflet.",
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS", "DaisyUI", "TanStack React Query", "Zustand", "React Hook Form", "Zod", "Leaflet", "Framer Motion", "Chart.js", "ASP.NET Core", "C#", "SQL Server", "REST APIs"],
    github: "https://github.com/yousef-sheha12/Herfa-Next",
    live: "https://herfa.vercel.app",
    badge: "Full Stack",
    gradient: "from-cyan-500 to-blue-500",
    icon: herfa,
  },

  {
    name: "Upwork Backend",
    description:
      "A scalable backend system built to manage users, jobs, categories, technologies, comments, and administrative operations.",
    tech: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Clean Architecture", "JWT", "RESTful APIs"],
    github: "https://github.com/techmasterycompany-star/upward_.net",
    live: null,
    badge: "Backend",
    gradient: "from-violet-500 to-purple-500",
    icon: upwork,
  },

  {
    name: "Fitness",
    description:
      "A responsive fitness platform built during internship at Huma-Vole, featuring trainer discovery with search/filter, package comparison, booking flow with Stripe/PayPal/Vodafone Cash, and user dashboard with progress tracking.",
    tech: ["Tailwind CSS", "TanStack React Query", "Zustand", "React Hook Form", "Zod", "Radix UI", "Recharts"],
    github: "https://github.com/yousef-sheha12/Fitness-Team-1",
    live: "https://fitness-team-1.vercel.app",
    badge: "Frontend",
    gradient: "from-emerald-500 to-teal-500",
    icon: fitness,
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
                    {project.badge || "Featured Project"}
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
