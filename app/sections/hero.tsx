"use client";

import React, { useState } from "react";
import {
  headlineLarge,
  headlineRegular,
  bodyLarge,
  bodyMedium,
} from "../typography";

export default function Hero() {
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isResumeHovered, setIsResumeHovered] = useState(false);

  const handleResumeClick = () => {
    console.log("Resume button clicked");
  };

  const handleContactClick = () => {
    console.log("Contact button clicked");
  };

  return (
    <section id="home" style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.title}>UX/UI-дизайнер</h1>
        <h2 style={styles.subtitle}>Я Владислав Анищенко</h2>
        <p style={styles.description}>
          Создаю интерфейсы, которые решают бизнес-задачи и нравятся
          пользователям. От исследования до готовых экранов — помогаю сделать
          цифровой продукт эффективным и удобным.
        </p>
        <div style={styles.buttonsContainer}>
          <button
            style={{
              ...styles.resumeButton,
              ...(isResumeHovered ? styles.resumeButtonHover : {}),
            }}
            onClick={handleResumeClick}
            onMouseEnter={() => setIsResumeHovered(true)}
            onMouseLeave={() => setIsResumeHovered(false)}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <img
                src="/images/material-symbols_download.svg"
                alt="Download"
                style={{ width: "24px", height: "24px" }}
              />
              Резюме PDF
            </div>
          </button>
          <button
            style={{
              ...styles.contactButton,
              ...(isContactHovered ? styles.contactButtonHover : {}),
            }}
            onClick={handleContactClick}
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}
          >
            Написать
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    height: "100dvh",
    display: "flex",
    flexDirection: "column" as const,
    boxSizing: "border-box" as const,
    marginTop: "-120px",
    borderBottom: "1px solid #E8EAED",
  } as React.CSSProperties,

  container: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "0px",
    paddingBottom: "0px",
    boxSizing: "border-box" as const,
  } as React.CSSProperties,

  title: {
    color: "#1A2433",
    ...headlineLarge,
    textAlign: "center" as const,
    margin: "0 0 48px 0",
    padding: "0",
    maxWidth: "668px",
  } as React.CSSProperties,

  subtitle: {
    color: "#1A2433",
    ...headlineRegular,
    textAlign: "center" as const,
    margin: "0 0 24px 0",
    padding: "0",
    maxWidth: "668px",
  } as React.CSSProperties,

  description: {
    color: "#7F858F",
    ...bodyLarge,
    textAlign: "center" as const,
    margin: "0 0 32px 0",
    padding: "0",
    maxWidth: "668px",
  } as React.CSSProperties,

  buttonsContainer: {
    display: "flex",
    gap: "16px",
    width: "440px",
    maxWidth: "90%",
  } as React.CSSProperties,

  resumeButton: {
    width: "212px",
    height: "55px",
    borderRadius: "12px",
    backgroundColor: "#FFFFFF",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#1A2433",
    color: "#1A2433",
    ...bodyMedium,
    cursor: "pointer" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box" as const,
    transition:
      "box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  } as React.CSSProperties,

  resumeButtonHover: {
    borderColor: "#0A141E",
    color: "#0A141E",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  } as React.CSSProperties,

  contactButton: {
    width: "212px",
    height: "55px",
    borderRadius: "12px",
    backgroundColor: "#1A2433",
    border: "none",
    color: "#FFFFFF",
    ...bodyMedium,
    cursor: "pointer" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box" as const,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  } as React.CSSProperties,

  contactButtonHover: {
    backgroundColor: "#2A3444",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  } as React.CSSProperties,
};
