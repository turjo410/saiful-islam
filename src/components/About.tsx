'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlane, FaGraduationCap, FaCode, FaGlobe, FaRocket } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const highlights = [
    {
      icon: FaPlane,
      title: 'Aircraft Design',
      description: 'Specialized in conceptual aircraft design and aerodynamic optimization',
    },
    {
      icon: FaRocket,
      title: 'CFD Analysis',
      description: 'Proficient in computational fluid dynamics using ANSYS and other tools',
    },
    {
      icon: FaCode,
      title: 'Technical Skills',
      description: 'Strong programming skills in Python, MATLAB, and C for simulations',
    },
    {
      icon: FaGlobe,
      title: 'International Exposure',
      description: 'Participated in prestigious international aerospace competitions',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-wider mb-4 block">
            GET TO KNOW ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Profile Card */}
          <motion.div variants={itemVariants} className="relative">
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl" />

              {/* Profile Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1">
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                      <FaGraduationCap className="text-5xl text-cyan-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-slate-800">
                    <span className="text-xs font-bold">3.56</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-2">Md Saiful Islam</h3>
              <p className="text-cyan-400 text-center mb-6 font-mono text-sm">
                B.Sc. Aerospace Engineering (Final Year)
              </p>

              {/* Quick Facts */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <FaGraduationCap className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">University</p>
                    <p className="text-white font-medium">Aviation and Aerospace University, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <FaPlane className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Specialization</p>
                    <p className="text-white font-medium">Aircraft Design & Aerodynamics</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <FaGlobe className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Languages</p>
                    <p className="text-white font-medium">English (Fluent), Bengali (Native)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Description & Highlights */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Passionate About Aerospace Innovation
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I am a final year Aerospace Engineering student at Aviation and Aerospace University, 
                Bangladesh, with a strong academic record (CGPA 3.56/4.00). My passion lies in aircraft 
                design, aerodynamic analysis, and pushing the boundaries of aviation technology.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Currently working on my bachelor thesis focusing on Hybrid Airfoil Design and 
                Aerodynamic Analysis, I combine theoretical knowledge with practical skills in 
                computational tools like MATLAB, ANSYS, and SolidWorks. I have participated in 
                prestigious international competitions including AIAA Fighter Aircraft Design 
                Competition and Royal Aeronautical Society Light Aircraft Design Competition.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-card p-4 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <item.icon className="text-2xl text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <FaRocket />
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
