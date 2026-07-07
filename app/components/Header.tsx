"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { titleMedium } from "../typography";

const HEADER_HEIGHT = 120;

const styles = {
  header: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: "#FCFCFC",
    transition: "box-shadow 0.3s ease",
    height: `${HEADER_HEIGHT}px`,
    width: "100%",
  } as React.CSSProperties,

  headerScrolled: {
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  } as React.CSSProperties,

  container: {
    maxWidth: "1360px",
    margin: "0 auto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 24px",
    position: "relative" as const,
  } as React.CSSProperties,

  logo: {
    position: "absolute" as const,
    left: "0",
    top: "50%",
    transform: "translateY(-50%)",
    fontFamily: "Inter, sans-serif",
    fontSize: "32px",
    lineHeight: "32px",
    fontWeight: "600",
    color: "#1A2433",
    cursor: "pointer",
    userSelect: "none",
    backgroundColor: "#FCFCFC",
    padding: "0 8px",
    borderRadius: "4px",
    zIndex: 1,
  } as React.CSSProperties,

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  } as React.CSSProperties,

  navButton: (isActive: boolean): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    padding: "8px 12px",
    borderRadius: "10px",
    ...titleMedium,
    border: "none",
    outline: "none",
    cursor: "pointer",
    transition:
      "color 0.5s ease, background-color 0.5s ease, transform 0.5s ease",
    backgroundColor: isActive ? "#F0F2F4" : "#FCFCFC",
    color: isActive ? "#1A2433" : "#7F858F",
    transform: isActive ? "translateY(-2px)" : "none",
  }),
};

const NAV_ITEMS = [
  { id: "about", label: "Обо мне" },
  { id: "projects", label: "Проекты" },
  { id: "resume", label: "Резюме" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const isClickScrolling = useRef(false);

  const findActiveSection = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const viewportCenter = scrollY + viewportHeight / 2;

    let active = "about";

    for (const { id } of NAV_ITEMS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const elTop = rect.top + scrollY;
      const elBottom = rect.bottom + scrollY;

      // Секция пересекает центр вьюпорта
      if (elTop <= viewportCenter && elBottom >= viewportCenter) {
        return id;
      }
      // Если секция ещё выше центра — запоминаем как последнюю пройденную
      if (elBottom <= viewportCenter) {
        active = id;
      }
    }

    return active;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (!isClickScrolling.current) {
        setActiveSection(findActiveSection());
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [findActiveSection]);

  const scrollTo = (sectionId: string) => {
    setActiveSection(sectionId);
    isClickScrolling.current = true;

    const el = document.getElementById(sectionId);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - HEADER_HEIGHT,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  return (
    <header
      style={{
        ...styles.header,
        ...(isScrolled && styles.headerScrolled),
      }}
      id="main-header"
    >
      <div style={styles.container}>
        <div style={styles.logo} onClick={() => scrollTo("home")}>
          ява.
        </div>

        <nav style={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={styles.navButton(activeSection === item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
