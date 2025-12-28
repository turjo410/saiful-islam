'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlane, FaBrain, FaSeedling, FaGithub, FaExternalLinkAlt, FaCog } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Hybrid Airfoil Design and Aerodynamic Analysis',
      type: 'Bachelor Thesis',
      status: 'Ongoing',
      description: 'Developing a novel hybrid airfoil design combining the best characteristics of multiple airfoil families. Conducting comprehensive aerodynamic analysis using computational methods to optimize lift-to-drag ratio and performance across different flight conditions.',
      technologies: ['MATLAB', 'ANSYS Fluent', 'XFOIL', 'SolidWorks', 'CFD'],
      icon: FaPlane,
      color: 'from-cyan-500 to-blue-500',
      highlights: [
        'Optimized airfoil geometry for improved L/D ratio',
        'CFD simulations at various Reynolds numbers',
        'Comparative analysis with existing NACA profiles',
        'Academic research publication in progress'
      ]
    },
    {
      title: 'Machine Learning-Based Fatigue Life Estimation',
      type: 'Research Project',
      status: 'Completed',
      description: 'Developed machine learning models to predict fatigue life of composite materials used in aerospace structures. Applied various ML algorithms to analyze stress-strain data and predict material failure points with high accuracy.',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
      icon: FaBrain,
      color: 'from-purple-500 to-pink-500',
      highlights: [
        'Achieved 94% prediction accuracy',
        'Trained models on extensive composite material data',
        'Compared multiple ML algorithms for best results',
        'Applicable to aerospace structural analysis'
      ]
    },
    {
      title: 'Conceptual Aircraft Design – Crop Duster X-406',
      type: 'Academic Project',
      status: 'Completed',
      description: 'Designed a purpose-built agricultural aircraft (Crop Duster) optimized for aerial application of pesticides and fertilizers. The design focused on low-speed performance, payload capacity, and operational efficiency in agricultural environments.',
      technologies: ['SolidWorks', 'MATLAB', 'AutoCAD', 'Excel', 'OpenVSP'],
      icon: FaSeedling,
      color: 'from-green-500 to-teal-500',
      highlights: [
        'Complete conceptual design from scratch',
        'Weight estimation and CG calculations',
        'Stability and control analysis',
        'Performance envelope definition'
      ]
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-900/50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
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
            MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A showcase of my aerospace engineering projects, combining theoretical knowledge 
            with practical applications in aircraft design, computational analysis, and machine learning.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card p-8 hover:border-cyan-500/50 transition-all duration-500"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left - Icon and Title */}
                  <div className="lg:col-span-1">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} p-0.5 mb-6`}>
                      <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                        <project.icon className="text-3xl text-white" />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Ongoing' 
                          ? 'bg-yellow-500/20 text-yellow-400' 
                          : 'bg-green-500/20 text-green-400'
                      }`}>
                        {project.status}
                      </span>
                      <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-mono text-slate-300">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-800/50 text-slate-400 rounded text-xs font-mono border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Middle - Description */}
                  <div className="lg:col-span-1">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      <FaCog className="text-xs" />
                      Project Overview
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Right - Highlights */}
                  <div className="lg:col-span-1">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-slate-400 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 mt-6 pt-6 border-t border-slate-700/50">
                  <a
                    href="https://github.com/Saiful198809"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 text-sm"
                  >
                    <FaGithub />
                    View on GitHub
                  </a>
                  <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-lg text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 text-sm">
                    <FaExternalLinkAlt />
                    Learn More
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Saiful198809"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-slate-500/20 transition-all duration-300 hover:scale-105 border border-slate-600"
          >
            <FaGithub className="text-xl" />
            See More on GitHub
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
