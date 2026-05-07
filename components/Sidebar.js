"use client";
import { useState, useEffect, useCallback } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { navigationItems } from "@/data/NavigationData";
import { socialLinks } from "@/data/PersonalData";
import styles from "@/styles/scss/theme/sidebar.module.css";
import {
  FaHome, FaUser, FaCogs, FaBriefcase, FaFolderOpen,
  FaConciergeBell, FaQuoteLeft, FaEnvelope,
  FaSun, FaMoon, FaBars, FaTimes,
  FaInstagram, FaLinkedinIn, FaGithub, FaFacebookF,
} from "react-icons/fa";

const iconMap = {
  FaHome, FaUser, FaCogs, FaBriefcase, FaFolderOpen,
  FaConciergeBell, FaQuoteLeft, FaEnvelope,
};

const socialIconMap = {
  FaInstagram, FaLinkedinIn, FaGithub, FaFacebookF,
};

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    navigationItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  }, []);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className={styles.mobileToggle}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div className={styles.overlay} onClick={() => setMobileOpen(false)} />
      )}

      {/* Logo Outside Sidebar */}
      <div className={styles.logo}>
        <a href="#hero" onClick={() => setMobileOpen(false)} className={styles.logoLink}>
          <span className={styles.logoFirst}>faiz</span>
          <div className={styles.logoNodeWrapper}>
            <span className={styles.logoNode}></span>
            <span className={styles.logoNodeDot}></span>
            <span className={styles.logoNodeDot}></span>
          </div>
          <span className={styles.logoLast}>siddique</span>
        </a>
      </div>

      <aside className={`${styles.sidebar} ${mobileOpen ? styles.open : ""}`}>
        {/* Navigation */}
        <nav className={styles.nav}>
          {navigationItems.map(({ id, label, icon }) => {
            const Icon = iconMap[icon];
            return (
              <button
                key={id}
                className={`${styles.navItem} ${activeSection === id ? styles.active : ""}`}
                onClick={() => scrollTo(id)}
                title={label}
              >
                <span className={styles.navIcon}>
                  {Icon && <Icon />}
                </span>
                <span className={styles.navLabel}>{label}</span>
                {activeSection === id && <span className={styles.activeIndicator}></span>}
              </button>
            );
          })}
        </nav>

        {/* Bottom area */}
        <div className={styles.bottomArea}>
          {/* Theme toggle */}
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Social */}
          <div className={styles.socialRow}>
            {socialLinks.slice(0, 3).map((social) => {
              const Icon = socialIconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title={social.name}
                >
                  {Icon && <Icon />}
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
