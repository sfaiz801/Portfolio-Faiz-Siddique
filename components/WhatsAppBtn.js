"use client";
import { FaWhatsapp } from "react-icons/fa";
import styles from "@/styles/scss/theme/whatsapp.module.css";
import { motion } from "framer-motion";

const WhatsAppBtn = () => {
  return (
    <motion.a
      href="https://wa.me/919431255424"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappBtn}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17, delay: 0.5 }}
      title="Chat with me on WhatsApp"
    >
      <FaWhatsapp className={styles.icon} />
      <span className={styles.ping}></span>
    </motion.a>
  );
};

export default WhatsAppBtn;
