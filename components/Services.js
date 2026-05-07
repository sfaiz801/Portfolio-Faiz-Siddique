"use client";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/data/ServicesData";
import styles from "@/styles/scss/theme/services.module.css";
import {
  FaServer, FaLaptopCode, FaMobileAlt,
  FaPaintBrush, FaBriefcase, FaRocket,
} from "react-icons/fa";

const iconMap = { FaServer, FaLaptopCode, FaMobileAlt, FaPaintBrush, FaBriefcase, FaRocket };

const Services = () => {
  return (
    <section id="services" className={`section-padding ${styles.services}`}>
      <Container>
        <SectionHeader title="My Services" subtitle="What I Offer" />

        <Row className="g-4 justify-content-center">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Col lg={4} md={6} key={service.id}>
                <motion.div
                  className={styles.card}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className={styles.cardIcon}>
                    {Icon && <Icon />}
                  </div>
                  <h5 className={styles.cardTitle}>{service.title}</h5>
                  <p className={styles.cardDesc}>{service.description}</p>
                  <div className={styles.features}>
                    {service.features.map((f) => (
                      <span key={f} className={styles.feature}>
                        <span className={styles.featureDot}></span>
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
