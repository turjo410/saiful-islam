'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaPlane, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/md-saiful-islam-361560359',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/Saiful198809',
      label: 'GitHub',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:saifulbrmraau02@gmail.com',
      label: 'Email',
    },
    {
      icon: FaPhone,
      href: 'tel:+8801782198809',
      label: 'Phone',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <FaPlane className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Md Saiful Islam
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Aerospace Engineering Student passionate about aircraft design, 
              aerodynamics, and pushing the boundaries of aviation technology.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400 flex-shrink-0" />
                <a 
                  href="mailto:saifulbrmraau02@gmail.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  saifulbrmraau02@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-cyan-400 flex-shrink-0" />
                <a 
                  href="tel:+8801782198809"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  +880 1782-198809
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPlane className="text-cyan-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  Aviation and Aerospace University, Bangladesh
                </span>
              </div>
            </div>

            {/* Status Badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Open to Opportunities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Md Saiful Islam. Made with
              <FaHeart className="text-red-500 text-xs mx-1" />
              in Bangladesh
            </p>
            
            <p className="text-slate-500 text-sm">
              B.Sc. Aerospace Engineering • Final Year Student
            </p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </footer>
  );
};

export default Footer;
