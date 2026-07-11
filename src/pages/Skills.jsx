import { motion as Motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    colorClass: "text-cyan-400",
    gradient: "from-cyan-500 to-cyan-400",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 80 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend",
    colorClass: "text-purple-400",
    gradient: "from-purple-500 to-purple-400",
    skills: [
      { name: "C#", level: 88 },
      { name: "ASP.NET Core", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "SQL", level: 85 },
      { name: "Entity Framework", level: 82 },
    ],
  },
  {
    title: "Tools",
    colorClass: "text-emerald-400",
    gradient: "from-emerald-500 to-emerald-400",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Postman", level: 85 },
      { name: "VS Code", level: 92 },
    ],
  },
  {
    title: "Problem Solving",
    colorClass: "text-amber-400",
    gradient: "from-amber-500 to-amber-400",
    skills: [
      { name: "C++", level: 80 },
      { name: "OOP", level: 88 },
      { name: "Java", level: 75 },
      { name: "Data Structures", level: 78 },
    ],
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <Motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="section-title mb-4">Technologies & Skills</h2>
          <p className="section-subtitle mx-auto px-4">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </Motion.div>

        <Motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, catIndex) => (
            <Motion.div
              key={catIndex}
              variants={itemVariants}
              className="glass-card p-5 sm:p-6 hover-lift"
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.gradient}`} />
                <h3 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk']">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                      <span className="text-xs sm:text-sm font-medium text-slate-300">
                        {skill.name}
                      </span>
                      <span className={`text-xs font-semibold ${category.colorClass}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <Motion.div
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Skills;
