"use client";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { navigationItems } from "@/data/NavigationData";
import { socialLinks } from "@/data/PersonalData";
import styles from "@/styles/scss/theme/footer.module.css";
import {
  FaInstagram, FaLinkedinIn, FaGithub, FaFacebookF,
  FaArrowUp, FaHeart,
} from "react-icons/fa";

const socialIconMap = { FaInstagram, FaLinkedinIn, FaGithub, FaFacebookF };

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      {/* Glow line */}
      <div className={styles.glowLine}></div>

      <Container>
        <div className={styles.content}>
          {/* Logo */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <a href="#hero" className={styles.logoLink}>
                <span className={styles.logoFirst}>faiz</span>
                <div className={styles.logoNodeWrapper}>
                  <span className={styles.logoNode}></span>
                  <span className={styles.logoNodeDot}></span>
                  <span className={styles.logoNodeDot}></span>
                </div>
                <span className={styles.logoLast}>siddique</span>
              </a>
            </div>
            <p className={styles.tagline}>Building the future, one pixel at a time.</p>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <h6 className={styles.linksTitle}>Quick Links</h6>
            <div className={styles.linkGrid}>
              {navigationItems.slice(0, 6).map(({ id, label }) => (
                <button
                  key={id}
                  className={styles.link}
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className={styles.socialArea}>
            <h6 className={styles.linksTitle}>Follow Me</h6>
            <div className={styles.socialRow}>
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    whileHover={{ y: -3 }}
                    style={{ "--color": social.color }}
                  >
                    {Icon && <Icon />}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Faiz Siddique. Made with{" "}
            <FaHeart className={styles.heart} /> All rights reserved.
          </p>
          <motion.button
            className={styles.scrollTop}
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
