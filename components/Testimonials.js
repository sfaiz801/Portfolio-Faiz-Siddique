"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "react-bootstrap";
import SectionHeader from "@/components/SectionHeader";
import { testimonials } from "@/data/TestimonialsData";
import styles from "@/styles/scss/theme/testimonials.module.css";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className={`section-padding ${styles.testimonials}`}>
      <Container>
        <SectionHeader title="Testimonials" subtitle="What People Say" />

        <div className={styles.sliderWrapper}>
          <button className={styles.navBtn} onClick={prev} aria-label="Previous">
            <FaChevronLeft />
          </button>

          <div className={styles.slider}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className={styles.card}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
              >
                <FaQuoteLeft className={styles.quoteIcon} />
                <p className={styles.text}>{t.text}</p>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < t.rating ? styles.starFilled : styles.starEmpty}
                    />
                  ))}
                </div>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h6 className={styles.authorName}>{t.name}</h6>
                    <p className={styles.authorRole}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className={styles.navBtn} onClick={next} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
