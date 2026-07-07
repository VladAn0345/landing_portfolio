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
    justifyContent: "center",
    padding: "0 24px",
    position: "relative" as const,
  } as React.CSSProperties,

  logoContainer: {
    position: "absolute" as const,
    left: "0",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    height: "32px",
    zIndex: 1,
  } as React.CSSProperties,

  logo: {
    fontFamily: "Inter, sans-serif",
    fontSize: "32px",
    lineHeight: "32px",
    fontWeight: "600",
    color: "#1A2433",
    cursor: "pointer",
    userSelect: "none",
    display: "flex",
    backgroundColor: "#FCFCFC",
    padding: "0 8px",
    borderRadius: "4px",
  } as React.CSSProperties,

  logoLetter: {
    display: "inline-block",
    transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  } as React.CSSProperties,

  navContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
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
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [lettersVisibility, setLettersVisibility] = useState<boolean[]>([]);
  const isScrollingByClickRef = useRef(false);

  // Текст логотипа
  const initialLogo = "ява.";
  const expandedLogo = "явладиславанищенко.";
  const initialLetters = Array.from(initialLogo);
  const expandedLetters = Array.from(expandedLogo);

  // Создаем массив букв для отображения
  // В начальном состоянии: буквы из initialLogo на позициях 0-3
  // В expanded состоянии: буквы из expandedLogo на всех позициях
  const getDisplayLetter = (index: number, isHovered: boolean) => {
    // Особый случай: буква "а" на позиции 2
    // В initialLogo это "а" (индекс 2), в expandedLogo это "л" (индекс 2)
    if (index === 2) {
      if (!isHovered) {
        // В начальном состоянии показываем "а"
        return "а";
      } else {
        // При наведении показываем "л" из expandedLogo
        return expandedLetters[index];
      }
    }

    if (!isHovered && index < initialLetters.length) {
      // В начальном состоянии используем буквы из initialLogo
      return initialLetters[index];
    }
    // В остальных случаях используем буквы из expandedLogo
    return expandedLetters[index];
  };

  // Инициализируем видимость букв
  useEffect(() => {
    const initialVisibility = expandedLetters.map(
      (_, index) => index < initialLetters.length,
    );
    setLettersVisibility(initialVisibility);
  }, []);

  // Состояние для анимации
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handleLogoMouseEnter = () => {
    if (isAnimating) return;
    setIsLogoHovered(true);
    setIsAnimating(true);

    // Простая последовательная анимация
    // 1. Буквы "ява." уже видны
    // 2. Буквы "ладислав" появляются по очереди (индексы 2-9 в expandedLetters)
    // 3. Буквы "анищенко." появляются по очереди (индексы 10-18 в expandedLetters)

    // Буквы "ладислав" (индексы 2-9)
    for (let i = 2; i <= 9; i++) {
      setTimeout(
        () => {
          setLettersVisibility((prev) => {
            const newVisibility = [...prev];
            newVisibility[i] = true;
            return newVisibility;
          });
        },
        (i - 2) * 80,
      );
    }

    // Буквы "анищенко." (индексы 10-18)
    for (let i = 10; i <= 18; i++) {
      setTimeout(
        () => {
          setLettersVisibility((prev) => {
            const newVisibility = [...prev];
            newVisibility[i] = true;
            return newVisibility;
          });
        },
        (i - 10) * 80 + 640,
      ); // Начинаем после "ладислав"
    }

    // Завершаем анимацию
    setTimeout(() => setIsAnimating(false), 1500);
  };

  const handleLogoMouseLeave = () => {
    if (isAnimating) return;
    setIsLogoHovered(false);
    setIsAnimating(true);

    // Обратная анимация в обратном порядке
    // 1. Буквы "анищенко." исчезают первыми (индексы 18-10)
    // 2. Буквы "ладислав" исчезают после (индексы 9-2)

    // Буквы "анищенко." (индексы 18-10 в обратном порядке)
    for (let i = 18; i >= 10; i--) {
      setTimeout(
        () => {
          setLettersVisibility((prev) => {
            const newVisibility = [...prev];
            newVisibility[i] = false;
            return newVisibility;
          });
        },
        (18 - i) * 60,
      );
    }

    // Буквы "ладислав" (индексы 9-3 в обратном порядке, индекс 2 - это "а" из initialLogo)
    for (let i = 9; i >= 3; i--) {
      setTimeout(
        () => {
          setLettersVisibility((prev) => {
            const newVisibility = [...prev];
            newVisibility[i] = false;
            return newVisibility;
          });
        },
        (9 - i) * 60 + 540,
      ); // Начинаем после "анищенко."
    }

    // Завершаем анимацию
    setTimeout(() => setIsAnimating(false), 1200);
  };

  return (
    <header style={headerStyle} id="main-header">
      <div style={headerStyles.container}>
        <div
          style={headerStyles.logoContainer}
          onClick={handleLogoClick}
          onMouseEnter={handleLogoMouseEnter}
          onMouseLeave={handleLogoMouseLeave}
        >
          <div style={headerStyles.logo}>
            {expandedLetters.map((_, index) => {
              const isInitialLetter = index < initialLetters.length;

              // Определяем какую букву показывать
              const displayLetter = getDisplayLetter(index, isLogoHovered);

              // Используем состояние видимости для каждой буквы
              const isVisible =
                lettersVisibility[index] !== undefined
                  ? lettersVisibility[index]
                  : isInitialLetter;

              const letterStyle = {
                ...headerStyles.logoLetter,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-100%)",
                width: isVisible ? "auto" : "0",
                overflow: "hidden",
              };

              return (
                <span key={index} style={letterStyle}>
                  {displayLetter}
                </span>
              );
            })}
          </div>
        </div>
        <div style={headerStyles.navContainer}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={getButtonStyle(item.id)}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = headerStyles.navButtonHover
                    .color as string;
                  e.currentTarget.style.backgroundColor = headerStyles
                    .navButtonHover.backgroundColor as string;
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.color = headerStyles.navButton
                    .color as string;
                  e.currentTarget.style.backgroundColor = headerStyles.navButton
                    .backgroundColor as string;
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
