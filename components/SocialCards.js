"use client";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import SectionHeader from "@/components/SectionHeader";
import { socialLinks } from "@/data/PersonalData";
import styles from "@/styles/scss/theme/socialCards.module.css";
import { FaInstagram, FaLinkedinIn, FaGithub, FaFacebookF, FaExternalLinkAlt } from "react-icons/fa";

const socialIconMap = { FaInstagram, FaLinkedinIn, FaGithub, FaFacebookF };

const SocialCards = () => {
  return (
    <section className={`section-padding ${styles.social}`}>
      <Container>
        <SectionHeader title="Let's Connect" subtitle="Social Media" />

        <div className={styles.grid}>
          {socialLinks.map((social, i) => {
            const Icon = socialIconMap[social.icon];
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                style={{ "--platform-color": social.color }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={styles.cardGlow}></div>
                <div className={styles.cardIcon}>
                  {Icon && <Icon />}
                </div>
                <h5 className={styles.platform}>{social.name}</h5>
                <p className={styles.handle}>{social.handle}</p>
                <span className={styles.visitBtn}>
                  Visit <FaExternalLinkAlt className={styles.visitIcon} />
                </span>
              </motion.a>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default SocialCards;
