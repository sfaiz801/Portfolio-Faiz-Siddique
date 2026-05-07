"use client";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import SectionHeader from "@/components/SectionHeader";
import { experienceTimeline } from "@/data/ExperienceData";
import styles from "@/styles/scss/theme/experience.module.css";
import { FaGraduationCap, FaCode, FaPaintBrush, FaUniversity } from "react-icons/fa";

const iconMap = { FaGraduationCap, FaCode, FaPaintBrush, FaUniversity };

const Experience = () => {
  return (
    <section id="experience" className={`section-padding ${styles.experience}`}>
      <Container>
        <SectionHeader title="Experience & Courses" subtitle="My Journey" />

        <div className={styles.timeline}>
          {/* Center line */}
          <div className={styles.timelineLine}></div>

          {experienceTimeline.map((item, i) => {
            const Icon = iconMap[item.icon];
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={item.id}
                className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Dot on the line */}
                <div className={styles.timelineDot}>
                  {Icon && <Icon />}
                </div>

                {/* Content card */}
                <div className={styles.timelineCard}>
                  <span className={styles.duration}>{item.duration}</span>
                  <span className={`${styles.typeBadge} ${styles[item.type]}`}>
                    {item.type}
                  </span>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <h6 className={styles.org}>{item.organization}</h6>
                  <p className={styles.desc}>{item.description}</p>
                  <div className={styles.highlights}>
                    {item.highlights.map((h) => (
                      <span key={h} className={styles.tag}>{h}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
