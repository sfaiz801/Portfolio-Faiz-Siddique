"use client";
import ThemeProvider from "@/components/ThemeProvider";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedCursor from "@/components/AnimatedCursor";
import Sidebar from "@/components/Sidebar";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import ChatBot from "@/components/ChatBot";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SocialCards from "@/components/SocialCards";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <AnimatedCursor />
      <LoadingScreen />
      <ScrollProgress />
      <Sidebar />
      <WhatsAppBtn />
      <ChatBot />

      <main style={{ marginLeft: "80px" }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <SocialCards />
        <Testimonials />
        <Contact />
        <Footer />
      </main>

      {/* Mobile: remove margin */}
      <style jsx>{`
        @media (max-width: 991px) {
          main {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </ThemeProvider>
  );
}
