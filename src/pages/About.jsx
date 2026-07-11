import { motion as Motion } from "framer-motion";
import {
  CodeXml,
  ChevronsUp,
  Palette,
  Handshake,
  Download,
} from "lucide-react";
import resume from "/src/assets/resume.png";

const features = [
  {
    icon: CodeXml,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code.",
    bgColor: "bg-cyan-500/10",
    textColor: "text-cyan-400",
  },
  {
    icon: ChevronsUp,
    title: "High Performance",
    description: "Optimizing for speed and efficiency across all devices.",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-400",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Creating beautiful and intuitive user interfaces.",
    bgColor: "bg-emerald-500/10",
    textColor: "text-emerald-400",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Working effectively with teams and stakeholders.",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <section
      id="about"
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
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="section-title mb-4">Who I Am</h2>
          <p className="section-subtitle mx-auto px-4">
            A dedicated developer with a passion for creating innovative
            solutions. With experience in both frontend and backend development,
            I bring ideas to life through code.
          </p>
        </Motion.div>

        <Motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, i) => (
            <Motion.div
              key={i}
              variants={itemVariants}
              className="glass-card p-5 sm:p-6 hover-lift group cursor-default text-center sm:text-left"
            >
              <div
                className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}
              >
                <feature.icon size={28} className={feature.textColor} />
              </div>
              <h3
                className={`text-lg sm:text-xl font-semibold mb-2 ${feature.textColor}`}
              >
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Motion.div>
          ))}
        </Motion.div>

        <Motion.div
          className="glass-card p-6 sm:p-8 md:p-10 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
                My Resume
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm sm:text-base">
                Take a closer look at my professional journey, skills, and
                experience. Download my resume to get a detailed overview of
                what I bring to the table.
              </p>
              <Motion.a
                href="/My_CV_Full-Stack.pdf"
                download="Yousef_Sheha_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download Resume
              </Motion.a>
            </div>
            <div className="shrink-0">
              <Motion.img
                src={resume}
                alt="Resume"
                className="w-48 sm:w-56 md:w-64 h-auto rounded-xl border border-white/10 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default About;
