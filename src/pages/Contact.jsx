import { useRef, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sheha8757@gmail.com",
    href: "mailto:sheha8757@gmail.com",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 109 263 2833",
    href: "tel:+201092632833",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Menoufia, Egypt",
    href: null,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("sent");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setErrorMsg(err?.text || err?.message || "Unknown error");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section
      id="contact"
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
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="section-title mb-4">Get In Touch</h2>
          <p className="section-subtitle mx-auto px-4">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          <Motion.div
            className="lg:col-span-2 space-y-4 sm:space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {contactInfo.map((info, index) => {
              const Tag = info.href ? "a" : "div";
              return (
                <Motion.div key={index} variants={itemVariants}>
                  <Tag
                    href={info.href || undefined}
                    target={info.href ? "_blank" : undefined}
                    className="glass-card p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover-lift block cursor-default"
                  >
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 ${info.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <info.icon size={20} className={info.color} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-slate-500 mb-0.5">
                        {info.label}
                      </p>
                      <p className="text-white font-medium text-sm sm:text-base truncate">
                        {info.value}
                      </p>
                    </div>
                  </Tag>
                </Motion.div>
              );
            })}

            <Motion.div
              variants={itemVariants}
              className="flex gap-3 pt-2 justify-center sm:justify-start"
            >
              <Motion.a
                href="https://github.com/yousef-sheha12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </Motion.a>
              <Motion.a
                href="https://www.linkedin.com/in/yousef-sheha-1a9316375"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </Motion.a>
              <Motion.a
                href="mailto:sheha8757@gmail.com"
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </Motion.a>
            </Motion.div>
          </Motion.div>

          <Motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={formRef}
              className="glass-card p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5"
              onSubmit={sendEmail}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/25 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/25 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/25 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <input type="hidden" name="to_email" value="sheha8757@gmail.com" />

              {status === "sent" && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm">
                  <CheckCircle size={16} />
                  Message sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <Mail size={16} />
                  Failed: {errorMsg}
                </div>
              )}

              <Motion.button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={status !== "sending" ? { scale: 1.02, y: -2 } : {}}
                whileTap={status !== "sending" ? { scale: 0.98 } : {}}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Motion.button>
            </form>
          </Motion.div>
        </div>

        <Motion.div
          className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-white/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-500 text-xs sm:text-sm">
            Designed & Built by{" "}
            <span className="text-cyan-400 font-semibold">Yousef Sheha</span>{" "}
            &copy; {new Date().getFullYear()}
          </p>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;
