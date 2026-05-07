"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo, socialLinks, stats } from "@/data/PersonalData";
import styles from "@/styles/scss/theme/hero.module.css";
import {
  FaDownload, FaArrowRight,
  FaInstagram, FaLinkedinIn, FaGithub, FaFacebookF,
} from "react-icons/fa";

const socialIconMap = { FaInstagram, FaLinkedinIn, FaGithub, FaFacebookF };

const Hero = () => {
  const heroRef = useRef(null);
  const blobRef = useRef(null);

  // Mouse parallax for floating elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;

      const shapes = heroRef.current.querySelectorAll('[data-parallax]');
      shapes.forEach((shape, i) => {
        const speed = (i + 1) * 0.4;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });

      // Move gradient blob
      if (blobRef.current) {
        blobRef.current.style.left = `${clientX - 200}px`;
        blobRef.current.style.top = `${clientY - 200}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      {/* Animated background elements */}
      <div className={styles.bgElements}>
        <div className={styles.gradientBlob} ref={blobRef}></div>
        <div className={styles.gridPattern}></div>

        {/* Floating shapes */}
        <div className={styles.floatingShape} data-parallax style={{ top: "15%", right: "10%" }}>
          <div className={styles.shapeDiamond}></div>
        </div>
        <div className={styles.floatingShape} data-parallax style={{ bottom: "20%", left: "5%" }}>
          <div className={styles.shapeRing}></div>
        </div>
        <div className={styles.floatingShape} data-parallax style={{ top: "60%", right: "20%" }}>
          <div className={styles.shapeCross}></div>
        </div>
        <div className={styles.floatingShape} data-parallax style={{ top: "30%", left: "15%" }}>
          <div className={styles.shapeDot}></div>
        </div>

        {/* Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.textArea}>
          {/* Status badge */}
          <motion.div
            className={styles.statusBadge}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className={styles.statusDot}></span>
            Available for Freelance
          </motion.div>

          {/* Name */}
          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            {personalInfo.firstName}{" "}
            <span className={styles.lastName}>{personalInfo.lastName}</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            className={styles.roleWrapper}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <span className={styles.rolePrefix}>I&apos;m a </span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "UI/UX Enthusiast",
                2000,
                "Next.js Developer",
                2000,
                "MERN Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className={styles.typeText}
              repeat={Infinity}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className={styles.btnGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a href="/resume.pdf" download="Faiz_Siddique_Resume.pdf" className={styles.btnPrimary}>
              <FaDownload className={styles.btnIcon} />
              Download CV
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Hire Me
              <FaArrowRight className={styles.btnIcon} />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className={styles.socialLinks}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            {socialLinks.map((social, i) => {
              const Icon = socialIconMap[social.icon];
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ y: -4, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  style={{ "--accent": social.color }}
                >
                  {Icon && <Icon />}
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Stats cards */}
        <motion.div
          className={styles.statsGrid}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className={styles.statValue}>
                {stat.value}{stat.suffix}
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot}></div>
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
