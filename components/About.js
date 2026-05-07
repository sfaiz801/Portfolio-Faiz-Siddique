"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "@/components/SectionHeader";
import { personalInfo, stats } from "@/data/PersonalData";
import styles from "@/styles/scss/theme/about.module.css";
import { FaGraduationCap, FaCode, FaLaptopCode, FaPalette } from "react-icons/fa";

const AnimatedCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const duration = 1500;
          const stepTime = Math.max(Math.floor(duration / target), 30);
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const funFacts = [
    { icon: <FaGraduationCap />, label: "BCA Student", desc: "Computer Applications" },
    { icon: <FaCode />, label: "MERN Stack", desc: "Full Stack Developer" },
    { icon: <FaLaptopCode />, label: "Indixpert Academy", desc: "Learning & Growing" },
    { icon: <FaPalette />, label: "UI/UX Design", desc: "Figma Enthusiast" },
  ];

  return (
    <section id="about" className={`section-padding ${styles.about}`}>
      <Container>
        <SectionHeader title="About Me" subtitle="Who I Am" />

        <Row className="g-5 align-items-center">
          {/* Left — Image & Info */}
          <Col lg={5}>
            <motion.div
              className={styles.imageContainer}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.imageWrapper}>
                {/* 
                  USER: Please place your professional photo inside the public/images folder
                  and name it 'profile.jpg' 
                */}
                <img src="/images/profile.png" alt={personalInfo.name} className={styles.profileImage} onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500?text=Profile+Image'; }} />
                <div className={styles.imageGlow}></div>
              </div>
              
              <div className={styles.cardStats}>
                {stats.map((stat) => (
                  <div key={stat.label} className={styles.cardStat}>
                    <span className={styles.cardStatValue}>
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className={styles.cardStatLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Col>

          {/* Right — Text */}
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className={styles.greeting}>
                Hello! I&apos;m <span className={styles.highlight}>{personalInfo.name}</span>
              </h3>
              <p className={styles.bio}>{personalInfo.bio}</p>

              {/* Fun Facts Grid */}
              <div className={styles.factsGrid}>
                {funFacts.map((fact, i) => (
                  <motion.div
                    key={fact.label}
                    className={styles.factCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <span className={styles.factIcon}>{fact.icon}</span>
                    <div>
                      <h6 className={styles.factLabel}>{fact.label}</h6>
                      <p className={styles.factDesc}>{fact.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
