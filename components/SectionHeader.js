"use client";
import { motion } from "framer-motion";
import styles from "@/styles/scss/theme/sectionHeader.module.css";

const SectionHeader = ({ title, subtitle, align = "center" }) => {
  return (
    <motion.div
      className={`${styles.header} ${styles[align]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <span className={styles.tag}>{subtitle}</span>
      <h2 className={styles.title}>
        {title}
      </h2>
      <div className={styles.underline}>
        <div className={styles.underlineDot}></div>
      </div>
    </motion.div>
  );
};

export default SectionHeader;
