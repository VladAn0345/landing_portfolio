"use client";

import React, { useState } from "react";

const LogosSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const logos = [
    {
      id: 1,
      name: "ПриветСосед",
      logo: "privetsosed",
      url: "https://privetsosed.ru/",
    },
    { id: 2, name: "Podari", logo: "podari", url: "https://podari.app/" },
    { id: 3, name: "DiceGames", logo: "dicegames", url: null },
    { id: 4, name: "Sputnik", logo: "sputnik", url: null },
  ];

  // Дублируем логотипы для бесшовной анимации
  const duplicatedLogos = [
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
  ];

  const styles = {
    section: {
      backgroundColor: "#1A2433",
      padding: "80px 0",
      overflow: "hidden" as const,
      position: "relative" as const,
    } as React.CSSProperties,

    container: {
      maxWidth: "1360px",
      margin: "0 auto",
      padding: "0",
    } as React.CSSProperties,

    logosContainer: {
      position: "relative" as const,
      width: "100%",
      overflow: "hidden",
      padding: "20px 0",
      maxWidth: "1360px",
      margin: "0 auto",
    } as React.CSSProperties,

    logosTrack: {
      display: "flex",
      alignItems: "center",
      gap: "100px",
      animation: "scroll 15s linear infinite",
      animationPlayState: isPaused ? "paused" : "running",
      transform: "translateX(-680px)",
    } as React.CSSProperties,

    logoImage: {
      display: "block",
      height: "auto",
    } as React.CSSProperties,
  };

  // Стили для анимации
  const animationStyles = `
    @keyframes scroll {
      0% {
        transform: translateX(-680px);
      }
      100% {
        transform: translateX(calc(-680px - 200px * 4));
      }
    }
  `;

  return (
    <section
      style={styles.section}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style>{animationStyles}</style>
      <div style={styles.container}>
        <div style={styles.logosContainer}>
          <div style={styles.logosTrack}>
            {duplicatedLogos.map((logo, index) => {
              const image = (
                <img
                  src={`/images/${logo.logo}.png`}
                  alt={logo.name}
                  style={styles.logoImage}
                />
              );

              return logo.url ? (
                <a
                  key={`${logo.id}-${index}`}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {image}
                </a>
              ) : (
                <div key={`${logo.id}-${index}`}>{image}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
