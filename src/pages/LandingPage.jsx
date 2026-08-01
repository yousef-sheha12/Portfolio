import { useMemo } from "react";
import { motion as Motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import img from "/src/assets/myPhoto.jpeg";

const socialLinks = [
  { icon: Github, href: "https://github.com/yousef-sheha12" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/yousef-sheha-1a9316375",
  },
  { icon: Mail, href: "mailto:joesheha8757@gmail.com" },
];

const particleData = [
  { w: 3, h: 4, x: 12, y: 8, color: "rgba(6,182,212,0.3)", dur: 5, del: 0.5 },
  { w: 5, h: 3, x: 45, y: 22, color: "rgba(139,92,246,0.2)", dur: 7, del: 1.2 },
  { w: 2, h: 5, x: 78, y: 35, color: "rgba(16,185,129,0.2)", dur: 6, del: 2.1 },
  { w: 4, h: 2, x: 25, y: 60, color: "rgba(6,182,212,0.3)", dur: 8, del: 0.3 },
  {
    w: 3,
    h: 3,
    x: 60,
    y: 15,
    color: "rgba(139,92,246,0.2)",
    dur: 5.5,
    del: 1.8,
  },
  {
    w: 6,
    h: 4,
    x: 88,
    y: 70,
    color: "rgba(16,185,129,0.2)",
    dur: 7.5,
    del: 0.9,
  },
  { w: 2, h: 6, x: 5, y: 45, color: "rgba(6,182,212,0.3)", dur: 6.5, del: 2.5 },
  { w: 4, h: 3, x: 35, y: 80, color: "rgba(139,92,246,0.2)", dur: 5, del: 1.4 },
  { w: 3, h: 5, x: 55, y: 50, color: "rgba(16,185,129,0.2)", dur: 8, del: 0.7 },
  { w: 5, h: 2, x: 92, y: 25, color: "rgba(6,182,212,0.3)", dur: 6, del: 2.0 },
  { w: 2, h: 4, x: 18, y: 90, color: "rgba(139,92,246,0.2)", dur: 7, del: 1.0 },
  {
    w: 4,
    h: 5,
    x: 70,
    y: 5,
    color: "rgba(16,185,129,0.2)",
    dur: 5.5,
    del: 0.2,
  },
  {
    w: 3,
    h: 3,
    x: 40,
    y: 40,
    color: "rgba(6,182,212,0.3)",
    dur: 8.5,
    del: 1.6,
  },
  { w: 5, h: 4, x: 82, y: 55, color: "rgba(139,92,246,0.2)", dur: 6, del: 2.3 },
  { w: 2, h: 3, x: 10, y: 75, color: "rgba(16,185,129,0.2)", dur: 7, del: 0.8 },
  { w: 4, h: 2, x: 50, y: 95, color: "rgba(6,182,212,0.3)", dur: 5, del: 1.9 },
  {
    w: 3,
    h: 6,
    x: 30,
    y: 12,
    color: "rgba(139,92,246,0.2)",
    dur: 6.5,
    del: 0.4,
  },
  {
    w: 6,
    h: 3,
    x: 65,
    y: 65,
    color: "rgba(16,185,129,0.2)",
    dur: 7.5,
    del: 2.7,
  },
  {
    w: 2,
    h: 2,
    x: 95,
    y: 42,
    color: "rgba(6,182,212,0.3)",
    dur: 5.5,
    del: 1.1,
  },
  { w: 4, h: 4, x: 22, y: 32, color: "rgba(139,92,246,0.2)", dur: 8, del: 0.6 },
];

const LandingPage = () => {
  const particles = useMemo(() => particleData, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16 pt-20 pb-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <Motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.w,
              height: p.h,
              left: `${p.x}%`,
              top: `${p.y}%`,
              background: p.color,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              delay: p.del,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-16">
        <div className="flex-1 text-center lg:text-center">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Motion.span
              className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to my portfolio
            </Motion.span>
          </Motion.div>

          <Motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-['Space_Grotesk'] leading-tight mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Yousef Sheha
            </span>
          </Motion.h1>

          <Motion.p
            className="text-lg sm:text-xl md:text-2xl text-slate-400 font-medium mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack .NET Developer
          </Motion.p>

          <Motion.p
            className="text-sm sm:text-base md:text-lg text-slate-500 max-w-xl mb-8 sm:mb-10 leading-relaxed mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I'm a passionate developer crafting efficient, scalable, and
            beautifully designed software. Currently pursuing Computer Science
            at El Menoufia University.
          </Motion.p>

          <Motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-xs sm:max-w-none mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Motion.a
              href="#projects"
              className="btn-primary-custom"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </Motion.a>
            <Motion.a
              href="#contact"
              className="btn-outline-custom"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </Motion.a>
          </Motion.div>

          <Motion.div
            className="flex gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {socialLinks.map((social, i) => (
              <Motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={20} />
              </Motion.a>
            ))}
          </Motion.div>
        </div>

        <Motion.div
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative">
            <Motion.div
              className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 rounded-full blur-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-white/10 mx-auto">
              <img
                src={img}
                alt="Yousef Sheha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Motion.div>
      </div>

      <Motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={22} className="text-slate-500" />
      </Motion.div>
    </section>
  );
};

export default LandingPage;
