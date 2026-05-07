"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "react-bootstrap";
import SectionHeader from "@/components/SectionHeader";
import { skills, skillCategories } from "@/data/SkillsData";
import styles from "@/styles/scss/theme/skills.module.css";
import {
  FaHtml5, FaCss3Alt, FaSass, FaReact, FaBootstrap,
  FaNodeJs, FaPython, FaGithub, FaFigma,
} from "react-icons/fa";
import {
  SiJavascript, SiNextdotjs, SiMongodb, SiJira,
} from "react-icons/si";

const iconMap = {
  FaHtml5, FaCss3Alt, FaSass, FaReact, FaBootstrap,
  FaNodeJs, FaPython, FaGithub, FaFigma,
  SiJavascript, SiNextdotjs, SiMongodb, SiJira,
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className={`section-padding ${styles.skills}`}>
      <Container>
        <SectionHeader title="My Skills" subtitle="What I Know" />

        {/* Category Tabs */}
        <div className={styles.tabs}>
          {skillCategories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => {
              const Icon = iconMap[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  className={styles.card}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  style={{ "--skill-color": skill.color }}
                >
                  <div className={styles.cardIcon}>
                    {Icon && <Icon />}
                  </div>
                  <h6 className={styles.cardName}>{skill.name}</h6>
                  <div className={styles.progressTrack}>
                    <motion.div
                      className={styles.progressBar}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      style={{ background: skill.color }}
                    />
                  </div>
                  <span className={styles.progressLabel}>{skill.level}%</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
