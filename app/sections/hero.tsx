"use client";

import {
  headlineLarge,
  headlineRegular,
  bodyLarge,
  bodyMedium,
} from "../typography";

const styles = {
  section: {
    width: "100%",
    height: "100dvh",
    display: "flex",
    flexDirection: "column" as const,
    boxSizing: "border-box" as const,
    marginTop: "-120px",
    borderBottom: "1px solid #E8EAED",
  },

  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box" as const,
  },

  title: {
    color: "#1A2433",
    ...headlineLarge,
    textAlign: "center" as const,
    margin: "0 0 48px 0",
    padding: 0,
    maxWidth: "668px",
  },

  subtitle: {
    color: "#1A2433",
    ...headlineRegular,
    textAlign: "center" as const,
    margin: "0 0 24px 0",
    padding: 0,
    maxWidth: "668px",
  },

  description: {
    color: "#7F858F",
    ...bodyLarge,
    textAlign: "center" as const,
    margin: "0 0 32px 0",
    padding: 0,
    maxWidth: "668px",
  },

  buttons: {
    display: "flex",
    gap: "16px",
    width: "440px",
    maxWidth: "90%",
  },

  btnBase: {
    width: "212px",
    height: "55px",
    borderRadius: "12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    boxSizing: "border-box" as const,
    transition: "all 0.3s ease",
    ...bodyMedium,
  },

  btnOutline: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #1A2433",
    color: "#1A2433",
  },

  btnFilled: {
    backgroundColor: "#1A2433",
    border: "none",
    color: "#FFFFFF",
  },
};

const HOVER_STYLE = `
  .hero-btn-outline:hover {
    border-color: #0A141E;
    color: #0A141E;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
  .hero-btn-filled:hover {
    background-color: #2A3444;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

export default function Hero() {
  return (
    <section id="home" style={styles.section}>
      <style>{HOVER_STYLE}</style>
      <div style={styles.container}>
        <h1 style={styles.title}>UX/UI-дизайнер</h1>
        <h2 style={styles.subtitle}>Я Владислав Анищенко</h2>
        <p style={styles.description}>
          Создаю интерфейсы, которые решают бизнес-задачи и нравятся
          пользователям. От исследования до готовых экранов — помогаю сделать
          цифровой продукт эффективным и удобным.
        </p>
        <div style={styles.buttons}>
          <button
            className="hero-btn-outline"
            style={{ ...styles.btnBase, ...styles.btnOutline }}
          >
            <img
              src="/images/material-symbols_download.svg"
              alt="Download"
              style={{ width: "24px", height: "24px" }}
            />
            Резюме PDF
          </button>
          <button
            className="hero-btn-filled"
            style={{ ...styles.btnBase, ...styles.btnFilled }}
          >
            Написать
          </button>
        </div>
      </div>
    </section>
  );
}
