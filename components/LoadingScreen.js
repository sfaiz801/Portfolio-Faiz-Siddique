"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/scss/theme/loader.module.css";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000);
    const removeTimer = setTimeout(() => setLoading(false), 2600);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`${styles.loader} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.loaderContent}>
        {/* Orbiting rings */}
        <div className={styles.orbitRing}>
          <div className={styles.orbitDot}></div>
        </div>
        <div className={styles.orbitRingInner}>
          <div className={styles.orbitDot}></div>
        </div>
        
        {/* Logo monogram */}
        <div className={styles.monogram}>
          <span className={styles.letterF}>F</span>
          <span className={styles.letterS}>S</span>
        </div>
        
        {/* Loading text */}
        <p className={styles.loadingText}>Loading Experience...</p>
        
        {/* Progress bar */}
        <div className={styles.progressTrack}>
          <div className={styles.progressBar}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
