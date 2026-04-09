"use client";

import React, { useState, useEffect, useRef } from "react";
import { titleMedium } from "../typography";

// Стили компонента Header
const headerStyles = {
  header: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: "#FCFCFC",
    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    margin: 0,
    padding: 0,
    height: "120px",
    overflow: "visible" as const,
    width: "100%",
  } as React.CSSProperties,

  headerScrolled: {
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
    backgroundColor: "#FCFCFC",
  } as React.CSSProperties,

  container: {
    maxWidth: "1360px",
    margin: "0 auto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0",
  } as React.CSSProperties,

  logo: {
    fontFamily: "Inter, sans-serif",
    fontSize: "32px",
    lineHeight: "32px",
    fontWeight: "600",
    color: "#1A2433",
    cursor: "pointer",
    transition: "opacity 0.3s ease",
    userSelect: "none",
  } as React.CSSProperties,

  navContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    flex: 1,
  } as React.CSSProperties,

  navButton: {
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
      "color 0.9s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
    backgroundColor: "#FCFCFC",
    color: "#7F858F",
  } as React.CSSProperties,

  navButtonHover: {
    color: "#1A2433",
    backgroundColor: "#F0F2F4",
    transform: "translateY(-2px)",
  } as React.CSSProperties,

  navButtonActive: {
    color: "#1A2433",
    backgroundColor: "#F0F2F4",
    transform: "translateY(-2px)",
  } as React.CSSProperties,
};

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrollingByClickRef = useRef(false);

  const navItems = [
    { id: "about", label: "Обо мне" },
    { id: "projects", label: "Проекты" },
    { id: "resume", label: "Резюме" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);

      // Если скролл вызван кликом, не меняем активную секцию
      if (isScrollingByClickRef.current) {
        return;
      }

      // Определяем активную секцию на основе позиции в viewport
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      let activeId = "about";
      let maxVisibleArea = 0;

      // Проверяем hero секцию (home) отдельно
      const heroElement = document.getElementById("home");
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;
        const elementBottom = rect.bottom + scrollPosition;

        const viewportTop = scrollPosition;
        const viewportBottom = scrollPosition + viewportHeight;

        const visibleTop = Math.max(elementTop, viewportTop);
        const visibleBottom = Math.min(elementBottom, viewportBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        // Hero секция активна если видна больше чем на 50%
        if (visibleHeight > viewportHeight * 0.5) {
          activeId = "about";
        }
      }

      // Проверяем остальные секции
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollPosition;
          const elementBottom = rect.bottom + scrollPosition;

          // Вычисляем видимую часть секции в viewport
          const viewportTop = scrollPosition;
          const viewportBottom = scrollPosition + viewportHeight;

          const visibleTop = Math.max(elementTop, viewportTop);
          const visibleBottom = Math.min(elementBottom, viewportBottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);

          // Если секция видна в viewport
          if (visibleHeight > 0) {
            // Для остальных секций проверяем, находятся ли они в нижней части viewport
            // (нижние 40% viewport)
            const viewportBottomThreshold =
              viewportBottom - viewportHeight * 0.4;

            // Секция считается активной, если она видна в нижней части viewport
            if (visibleBottom > viewportBottomThreshold) {
              maxVisibleArea = visibleHeight;
              activeId = item.id;
            }
            // Если ни одна секция не в нижней части viewport, выбираем с наибольшей видимой площадью
            else if (visibleHeight > maxVisibleArea) {
              maxVisibleArea = visibleHeight;
              activeId = item.id;
            }
          }
        }
      }

      setActiveSection(activeId);
    };

    window.addEventListener("scroll", handleScroll);
    // Вызываем сразу для определения начального состояния
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Немедленно устанавливаем активную секцию
    setActiveSection(sectionId === "home" ? "about" : sectionId);

    // Устанавливаем флаг, что скролл вызван кликом
    isScrollingByClickRef.current = true;

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120;
      const elementTop = element.offsetTop;
      const offsetPosition = elementTop - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Сбрасываем флаг после завершения скролла
      setTimeout(() => {
        isScrollingByClickRef.current = false;
      }, 1000); // Время чуть больше чем длительность плавного скролла
    } else {
      // Если элемент не найден, сбрасываем флаг сразу
      isScrollingByClickRef.current = false;
    }
  };

  const getButtonStyle = (itemId: string) => {
    const isActive = activeSection === itemId;
    const baseStyle = { ...headerStyles.navButton };

    if (isActive) {
      return {
        ...baseStyle,
        ...headerStyles.navButtonActive,
      };
    }

    return baseStyle;
  };

  const headerStyle = {
    ...headerStyles.header,
    ...(isScrolled ? headerStyles.headerScrolled : {}),
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <header style={headerStyle} id="main-header">
      <div style={headerStyles.container}>
        <div
          style={headerStyles.logo}
          onClick={handleLogoClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.7";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          ява.
        </div>
        <div style={headerStyles.navContainer}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={getButtonStyle(item.id)}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color =
                    headerStyles.navButtonHover.color;
                  e.currentTarget.style.backgroundColor =
                    headerStyles.navButtonHover.backgroundColor;
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = headerStyles.navButton.color;
                  e.currentTarget.style.backgroundColor =
                    headerStyles.navButton.backgroundColor;
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div style={{ width: "60px" }}></div> {/* Пустой элемент для баланса */}
      </div>
    </header>
  );
}
