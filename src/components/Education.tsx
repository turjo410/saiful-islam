'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBook, FaTrophy, FaPlane, FaCalculator, FaCogs } from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = {
    degree: 'Bachelor of Science in Aerospace Engineering',
    university: 'Aviation and Aerospace University, Bangladesh (BAAU)',
    duration: '2021 - 2025 (Expected)',
    cgpa: '3.56',
    maxCgpa: '4.00',
    status: 'Final Year Student',
  };

  const relevantCoursework = [
    { name: 'Aerodynamics', icon: FaPlane },
    { name: 'Aircraft Structures', icon: FaCogs },
    { name: 'Flight Mechanics', icon: FaPlane },
    { name: 'Propulsion Systems', icon: FaCogs },
    { name: 'Aircraft Design', icon: FaPlane },
    { name: 'Control Systems', icon: FaCalculator },
    { name: 'Computational Methods', icon: FaCalculator },
    { name: 'Thermodynamics', icon: FaCogs },
  ];

  const achievements = [
    {
      title: 'AIAA Fighter Aircraft Design Competition',
      description: 'International level participation',
      year: '2024',
    },
    {
      title: 'Royal Aeronautical Society Competition',
      description: 'Light Aircraft Design Challenge',
      year: '2024',
    },
    {
      title: 'IREC Rocket Engineering Competition',
      description: 'Prospective participant',
      year: '2025',
    },
  ];

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

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
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
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Main Education Card */}
          <motion.div variants={itemVariants}>
            <div className="glass-card p-8 h-full relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full" />

              {/* University Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-0.5 mb-6">
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                  <FaGraduationCap className="text-4xl text-cyan-400" />
                </div>
              </div>

              {/* Degree Info */}
              <div className="mb-6">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                  {education.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {education.degree}
              </h3>
              
              <p className="text-cyan-400 font-medium mb-4">
                {education.university}
              </p>

              <p className="text-slate-400 mb-6">
                {education.duration}
              </p>

              {/* CGPA Display */}
              <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-400">Cumulative GPA</span>
                  <span className="text-2xl font-bold text-white">
                    {education.cgpa}
                    <span className="text-slate-400 text-lg font-normal"> / {education.maxCgpa}</span>
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(parseFloat(education.cgpa) / parseFloat(education.maxCgpa)) * 100}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  />
                </div>
                <p className="text-slate-500 text-sm mt-2">
                  Top performer in class
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                  <div className="text-xl font-bold text-cyan-400">4</div>
                  <div className="text-slate-500 text-xs">Year Program</div>
                </div>
                <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                  <div className="text-xl font-bold text-cyan-400">3+</div>
                  <div className="text-slate-500 text-xs">Projects</div>
                </div>
                <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                  <div className="text-xl font-bold text-cyan-400">3</div>
                  <div className="text-slate-500 text-xs">Competitions</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Coursework & Achievements */}
          <div className="space-y-8">
            {/* Relevant Coursework */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <FaBook className="text-indigo-400" />
                </div>
                <h4 className="text-xl font-bold text-white">Relevant Coursework</h4>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {relevantCoursework.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
                  >
                    <course.icon className="text-cyan-400 text-sm flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{course.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                  <FaTrophy className="text-yellow-400" />
                </div>
                <h4 className="text-xl font-bold text-white">Competitions & Achievements</h4>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaTrophy className="text-yellow-400 text-sm" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-semibold text-white">{achievement.title}</h5>
                        <span className="text-xs font-mono text-slate-500">{achievement.year}</span>
                      </div>
                      <p className="text-slate-400 text-sm">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
