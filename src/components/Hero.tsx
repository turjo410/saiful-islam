'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaPlane } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2.2}>
      <MeshDistortMaterial
        color="#0ea5e9"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90 z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 z-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 justify-center lg:justify-start mb-4"
          >
            <FaPlane className="text-cyan-400 text-xl" />
            <span className="text-cyan-400 font-mono text-sm tracking-wider">AEROSPACE ENGINEERING</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Md Saiful Islam
            </span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-6 h-16"
          >
            <TypeAnimation
              sequence={[
                'Aerospace Engineering Student',
                2000,
                'Aircraft Design Enthusiast',
                2000,
                'CFD Analysis Specialist',
                2000,
                'Aerodynamics Researcher',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-light"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-400 text-lg max-w-xl mb-8 leading-relaxed"
          >
            Final year Aerospace Engineering student at Aviation and Aerospace University, Bangladesh.
            Passionate about aircraft design, aerodynamic analysis, and pushing the boundaries of aviation technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-cyan-500/50 rounded-full font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://linkedin.com/in/md-saiful-islam-361560359"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Saiful198809"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:saifulbrmraau02@gmail.com"
              className="p-3 bg-slate-800/50 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="tel:+8801782198809"
              className="p-3 bg-slate-800/50 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
            >
              <FaPhone size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - Stats */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 hidden lg:flex justify-center"
        >
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '3.56', label: 'CGPA', sublabel: 'out of 4.00' },
              { number: '3+', label: 'Projects', sublabel: 'Completed' },
              { number: '3', label: 'Competitions', sublabel: 'International' },
              { number: '2025', label: 'Graduating', sublabel: 'Final Year' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
                <div className="text-slate-500 text-sm">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-sm font-mono">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
