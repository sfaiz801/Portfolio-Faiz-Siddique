"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import styles from "@/styles/scss/theme/chatbot.module.css";

const initialMessages = [
  { sender: "bot", text: "Hi! I'm Faiz's AI Assistant. How can I help you today?" }
];

const qaDatabase = {
  "who are you": "I am Faiz Siddique, a Full Stack Web Developer and BCA Student specializing in React, Next.js, and modern web experiences.",
  "skills": "My top skills include React.js, Next.js, Node.js, JavaScript, Python, Figma, and Bootstrap/SCSS.",
  "contact": "You can email me at siddiquefaiz521@gmail.com or WhatsApp me at +91 9431255424. The WhatsApp button is also on the top right!",
  "experience": "I have been working as a Freelance Web Developer and studied Full Stack Development at Indixpert Academy.",
  "projects": "I've built several projects like Classic Tailor (E-commerce), Fanciful Llama, and Lezato Restaurant Dashboard. You can view them in the Projects section."
};

const suggestedQuestions = [
  { id: "who", label: "Who are you?", key: "who are you" },
  { id: "skills", label: "What are your skills?", key: "skills" },
  { id: "contact", label: "Contact Info?", key: "contact" },
  { id: "projects", label: "Your Projects?", key: "projects" }
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (text, key = null) => {
    if (!text.trim()) return;
    
    // Add User Message
    const userMsg = { sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Bot Response Logic
    setTimeout(() => {
      let botResponse = "I'm a simple bot! You can ask me about Faiz's skills, projects, or contact info.";
      
      const searchKey = (key || text).toLowerCase();
      
      // Basic matching
      for (const [qaKey, answer] of Object.entries(qaDatabase)) {
        if (searchKey.includes(qaKey) || qaKey.includes(searchKey)) {
          botResponse = answer;
          break;
        }
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    }, 600);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className={styles.chatToggle}
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaRobot className={styles.icon} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className={styles.chatHeader}>
              <div className={styles.headerTitle}>
                <FaRobot /> AI Assistant
              </div>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Messages Area */}
            <div className={styles.chatMessages}>
              {messages.map((msg, i) => (
                <div key={i} className={`${styles.message} ${msg.sender === "user" ? styles.userMsg : styles.botMsg}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            <div className={styles.suggestions}>
              {suggestedQuestions.map((sq) => (
                <button
                  key={sq.id}
                  className={styles.suggestBtn}
                  onClick={() => handleSend(sq.label, sq.key)}
                >
                  {sq.label}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <form
              className={styles.chatInputArea}
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
            >
              <input
                type="text"
                placeholder="Ask something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={styles.chatInput}
              />
              <button type="submit" className={styles.sendBtn} disabled={!input.trim()}>
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
