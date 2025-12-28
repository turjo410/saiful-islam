"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SiPython } from "react-icons/si";
import { FaBrain, FaPlane, FaCode, FaTools, FaCogs, FaChartLine, FaFileAlt } from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FaCode,
    skills: [
      { name: "Python", icon: SiPython, level: 85, color: "#3776AB" },
      { name: "C", icon: FaCode, level: 80, color: "#A8B9CC" },
      { name: "MATLAB", icon: FaCogs, level: 90, color: "#0076A8" },
    ],
  },
  {
    title: "Engineering Software",
    icon: FaTools,
    skills: [
      { name: "MATLAB", icon: FaCogs, level: 92, color: "#0076A8" },
      { name: "ANSYS (Structural & CFD)", icon: FaCogs, level: 85, color: "#FFB71B" },
      { name: "SolidWorks", icon: FaCogs, level: 88, color: "#FF0000" },
    ],
  },
  {
    title: "Data & Machine Learning",
    icon: FaBrain,
    skills: [
      { name: "Data Preprocessing", icon: FaChartLine, level: 80, color: "#4CAF50" },
      { name: "Regression Models", icon: FaChartLine, level: 78, color: "#2196F3" },
      { name: "Classification Models", icon: FaChartLine, level: 75, color: "#9C27B0" },
      { name: "ML Workflows", icon: FaBrain, level: 72, color: "#FF5722" },
    ],
  },
  {
    title: "Aerospace Engineering",
    icon: FaPlane,
    skills: [
      { name: "Aircraft Conceptual Design", icon: FaPlane, level: 90, color: "#1976D2" },
      { name: "Aerodynamic Analysis", icon: FaPlane, level: 88, color: "#00BCD4" },
      { name: "Wing & Power Loading", icon: FaPlane, level: 85, color: "#3F51B5" },
      { name: "Performance Estimation", icon: FaPlane, level: 85, color: "#673AB7" },
      { name: "Fatigue Life Estimation", icon: FaCogs, level: 80, color: "#E91E63" },
    ],
  },
  {
    title: "Documentation",
    icon: FaFileAlt,
    skills: [
      { name: "LaTeX", icon: FaFileAlt, level: 85, color: "#008080" },
      { name: "MS Word", icon: FaFileAlt, level: 90, color: "#2B579A" },
      { name: "MS Excel", icon: FaFileAlt, level: 88, color: "#217346" },
      { name: "PowerPoint", icon: FaFileAlt, level: 85, color: "#D24726" },
    ],
  },
];

const coreCompetencies = [
  { name: "Aircraft Design", percentage: 92 },
  { name: "Aerodynamics", percentage: 88 },
  { name: "CFD Analysis", percentage: 85 },
  { name: "MATLAB/Python", percentage: 88 },
  { name: "Problem Solving", percentage: 90 },
  { name: "Research Skills", percentage: 85 },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-dark-200/50">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-wider uppercase mb-4 block">
            My Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills in aerospace engineering, programming, and data analysis developed through academic projects and research.
          </p>
        </motion.div>

        {/* Core Competencies - Circular Progress */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10 font-display">
            Core <span className="gradient-text">Competencies</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {coreCompetencies.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4">
                  <CircularProgressbar
                    value={inView ? item.percentage : 0}
                    text={`${item.percentage}%`}
                    styles={buildStyles({
                      textSize: "22px",
                      textColor: "#fff",
                      pathColor: `url(#gradient-${index})`,
                      trailColor: "rgba(255, 255, 255, 0.1)",
                      pathTransitionDuration: 1.5,
                    })}
                  />
                  <svg style={{ height: 0 }}>
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#d946ef" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="text-sm text-gray-300 text-center font-medium">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass rounded-3xl p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold font-display">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                        style={{ backgroundColor: `${skill.color}20` }}
                      >
                        <skill.icon
                          className="w-6 h-6 transition-all"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-white">{skill.name}</span>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="skill-bar h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Relevant Coursework */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-10 font-display">
            Relevant <span className="gradient-text">Coursework</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Aircraft Design (Raymer methodology)",
              "Aerodynamics",
              "Flight Mechanics",
              "Aircraft Propulsion",
              "Aerospace Structures",
              "Composite Materials",
              "Orbital Mechanics",
              "Numerical Methods"
            ].map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:border-primary-500/50 transition-all cursor-default"
              >
                {course}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
