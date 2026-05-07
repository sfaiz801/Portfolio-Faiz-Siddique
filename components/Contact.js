"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "@/components/SectionHeader";
import styles from "@/styles/scss/theme/contact.module.css";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <section id="contact" className={`section-padding ${styles.contact}`}>
      <Container>
        <SectionHeader title="Get In Touch" subtitle="Contact Me" />

        <Row className="g-4 justify-content-center">
          {/* Info Cards */}
          <Col lg={4} md={5}>
            <motion.div
              className={styles.infoCards}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><FaEnvelope /></div>
                <div>
                  <h6 className={styles.infoLabel}>Email</h6>
                  <p className={styles.infoValue}>siddiquefaiz521@gmail.com</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><FaMapMarkerAlt /></div>
                <div>
                  <h6 className={styles.infoLabel}>Location</h6>
                  <p className={styles.infoValue}>India</p>
                </div>
              </div>

              {/* Decorative */}
              <div className={styles.decorCard}>
                <p className={styles.decorText}>
                  Let&apos;s build something amazing together. I&apos;m always open to new projects and collaborations.
                </p>
              </div>
            </motion.div>
          </Col>

          {/* Form */}
          <Col lg={6} md={7}>
            <motion.form
              className={styles.form}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {submitted && (
                <motion.div
                  className={styles.successMsg}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✨ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.subject ? styles.inputError : ""}`}
                />
                {errors.subject && <span className={styles.error}>{errors.subject}</span>}
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>

              <motion.button
                type="submit"
                className={styles.submitBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane className={styles.submitIcon} />
                Send Message
              </motion.button>
            </motion.form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
