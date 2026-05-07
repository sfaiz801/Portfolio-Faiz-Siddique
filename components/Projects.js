"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "react-bootstrap";
import SectionHeader from "@/components/SectionHeader";
import { projects, projectCategories } from "@/data/ProjectsData";
import styles from "@/styles/scss/theme/projects.module.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className={`section-padding ${styles.projects}`}>
      <Container>
        <SectionHeader title="My Projects" subtitle="Recent Work" />

        {/* Filter Bar */}
        <div className={styles.filters}>
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filter} ${activeFilter === cat ? styles.filterActive : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className={styles.card}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -10 }}
              >
                {/* Image area */}
                <div className={styles.imageWrapper}>
                  <div className={styles.imagePlaceholder}>
                    <span className={styles.projectInitial}>
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className={styles.overlay}>
                    <div className={styles.overlayLinks}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.overlayBtn}
                          title="Live Preview"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.overlayBtn}
                          title="GitHub"
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Category badge */}
                  <span className={styles.categoryBadge}>{project.category}</span>
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <h5 className={styles.cardTitle}>{project.title}</h5>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.techStack.map((tech) => (
                      <span key={tech} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
