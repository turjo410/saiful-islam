'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaPlane, FaRocket, FaGlobe } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const competitions = [
    {
      title: 'AIAA Fighter Aircraft Design Competition',
      organization: 'American Institute of Aeronautics and Astronautics',
      type: 'International',
      status: 'Participated',
      year: '2024',
      icon: FaPlane,
      description: 'Designed a next-generation fighter aircraft concept meeting strict performance requirements. Applied advanced aerodynamic principles and optimization techniques.',
      skills: ['Aircraft Design', 'Aerodynamics', 'Performance Analysis', 'Technical Documentation'],
    },
    {
      title: 'Light Aircraft Design Competition',
      organization: 'Royal Aeronautical Society',
      type: 'International',
      status: 'Participated',
      year: '2024',
      icon: FaRocket,
      description: 'Developed conceptual design for a light aircraft focusing on efficiency, safety, and manufacturability. Collaborated on technical reports and presentations.',
      skills: ['Conceptual Design', 'Weight Estimation', 'Stability Analysis', 'Team Collaboration'],
    },
    {
      title: 'International Rocket Engineering Competition (IREC)',
      organization: 'Spaceport America',
      type: 'International',
      status: 'Prospective',
      year: '2025',
      icon: FaGlobe,
      description: 'Preparing for participation in one of the world\'s largest intercollegiate rocket engineering competitions. Focus on propulsion and structural design.',
      skills: ['Rocket Propulsion', 'Structural Analysis', 'Project Management', 'Safety Protocols'],
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
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
            ACHIEVEMENTS & COMPETITIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Competition Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Actively participating in prestigious international aerospace competitions, 
            applying theoretical knowledge to real-world design challenges.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 transform md:-translate-x-1/2" />

          {competitions.map((comp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-cyan-500/50" />

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <comp.icon className="text-2xl text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <FaTrophy className="text-yellow-500 text-sm" />
                        <span className="text-xs font-mono text-cyan-400">{comp.type}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{comp.title}</h3>
                      <p className="text-slate-400 text-sm">{comp.organization}</p>
                    </div>
                  </div>

                  {/* Year & Status Badge */}
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-mono text-slate-300">
                      {comp.year}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      comp.status === 'Prospective' 
                        ? 'bg-purple-500/20 text-purple-400' 
                        : 'bg-green-500/20 text-green-400'
                    }`}>
                      {comp.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {comp.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {comp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <FaRocket className="text-4xl text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Continuous Learning</h3>
            <p className="text-slate-400">
              As a final year aerospace engineering student, I am constantly seeking opportunities 
              to apply my knowledge in real-world scenarios. These competitions have helped me develop 
              practical skills in aircraft design, team collaboration, and technical communication.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
