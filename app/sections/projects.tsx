"use client";

import React from "react";
import {
  headlineLarge,
  headlineMedium,
  headlineSmall,
  titleLarge,
  titleMedium,
  bodyLarge,
  bodySmall,
} from "../typography";

// Константы для отступов
const HEADER_HEIGHT = 120; // высота хедера в пикселях
const SECTION_OFFSET = 80; // отступ от хедера в пикселях
const STICKY_TOP = HEADER_HEIGHT + SECTION_OFFSET; // 120 + 80 = 200px

// Стили компонента Projects
const projectsStyles = {
  section: {
    backgroundColor: "#FCFCFC",
    borderTop: "1px solid #E8EAED", // НАСТОЯЩАЯ ГРАНИЦА - НЕ УБИРАТЬ
    position: "relative" as const,
    border: "2px dashed red", // ОТЛАДОЧНАЯ РАМКА - МОЖНО УБРАТЬ ПОСЛЕ ОТЛАДКИ
  } as React.CSSProperties,

  container: {
    maxWidth: "1360px",
    margin: "0 auto",
    padding: "0",
    display: "flex",
    border: "2px dashed blue", // ОТЛАДОЧНАЯ РАМКА - МОЖНО УБРАТЬ ПОСЛЕ ОТЛАДКИ
  } as React.CSSProperties,

  // ЛЕВАЯ ЧАСТЬ (контентная) - теперь слева
  leftContainer: {
    flex: "1",
    padding: "80px 24px 80px 24px",
    boxSizing: "border-box" as const,
    border: "2px dashed green", // ОТЛАДОЧНАЯ РАМКА - МОЖНО УБРАТЬ ПОСЛЕ ОТЛАДКИ
  } as React.CSSProperties,

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "48px",
    marginBottom: "64px",
  } as React.CSSProperties,

  projectCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    overflow: "hidden" as const,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    border: "2px dashed purple", // ОТЛАДОЧНАЯ РАМКА - МОЖНО УБРАТЬ ПОСЛЕ ОТЛАДКИ
  } as React.CSSProperties,

  projectImage: {
    height: "240px",
    backgroundColor: "#F0F2F4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px dashed cyan", // ОТЛАДОЧНАЯ РАМКА - МОЖНО УБРАТЬ ПОСЛЕ ОТЛАДКИ
  } as React.CSSProperties,

  projectContent: {
    padding: "32px",
    border: "2px dashed magenta", // ОТЛАДОЧНАЯ РАМКА - МОЖНО УБРАТЬ ПОСЛЕ ОТЛАДКИ
  } as React.CSSProperties,

  projectTitle: {
    color: "#1A2433",
    ...headlineSmall,
    margin: "0 0 16px 0",
    border: "1px dashed darkred", // ОТЛАДОЧНАЯ РАМКА - МОЖНО УБРАТЬ ПОСЛЕ ОТЛАДКИ
  } as React.CSSProperties,

  projectDescription: {
    color: "#7F858F",
    ...bodyLarge,
    margin: "0 0 24px 0",
    border: "1px dashed darkgreen", // ОТЛАДОЧНАЯ РАМКА - МОЖНО УБРАТЬ ПОСЛЕ ОТЛАДКИ
  } as React.CSSProperties,

  tagsContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "8px",
    marginBottom: "24px",
    border: "1px dashed darkblue", // ОТЛАДОЧНАЯ РАМКА - МОЖНО УБРАТЬ ПОСЛЕ ОТЛАДКИ
  } as React.CSSProperties,

  tag: {
    backgroundColor: "#F0F2F4",
    color: "#1A2433",
    ...bodySmall,
    padding: "6px 12px",
    borderRadius: "100px",
  } as React.CSSProperties,

  projectResult: {
    color: "#0371E2",
    ...bodySmall,
    fontWeight: "600" as const,
  } as React.CSSProperties,

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
    marginTop: "48px",
  } as React.CSSProperties,

  statCard: {
    backgroundColor: "#FFFFFF",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
  } as React.CSSProperties,

  statValue: {
    color: "#0371E2",
    ...headlineMedium,
    margin: "0 0 8px 0",
  } as React.CSSProperties,

  statLabel: {
    color: "#7F858F",
    ...bodySmall,
    margin: "0",
  } as React.CSSProperties,

  // ПРАВАЯ ЧАСТЬ (sticky) - теперь справа
  rightContainer: {
    width: "437px",
    alignSelf: "stretch",
    borderLeft: "1px solid #E8EAED", // НАСТОЯЩАЯ ГРАНИЦА - НЕ УБИРАТЬ
    padding: "80px 24px 80px 24px",
    boxSizing: "border-box" as const,
    border: "2px dashed orange", // ОТЛАДОЧНАЯ РАМКА - МОЖНО УБРАТЬ ПОСЛЕ ОТЛАДКИ
  } as React.CSSProperties,

  rightStickyContent: {
    position: "sticky" as const,
    top: `${STICKY_TOP}px`,
  } as React.CSSProperties,

  title: {
    color: "#1A2433",
    ...headlineLarge,
    margin: "0 0 32px 0",
  } as React.CSSProperties,

  rightContent: {
    color: "#7F858F",
    ...bodyLarge,
    margin: "0 0 24px 0",
  } as React.CSSProperties,
};

export default function Projects() {
  return (
    <section id="projects" style={projectsStyles.section}>
      <div style={projectsStyles.container}>
        {/* ЛЕВАЯ ЧАСТЬ - проекты */}
        <div style={projectsStyles.leftContainer}>
          <div style={{ ...projectsStyles.grid, border: "1px dashed purple" }}>
            {/* Проект 1 */}
            <div
              style={{
                ...projectsStyles.projectCard,
                border: "1px dashed magenta",
              }}
            >
              <div
                style={{
                  ...projectsStyles.projectImage,
                  border: "1px dashed cyan",
                }}
              >
                <div style={{ textAlign: "center" as const }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "#0371E2",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <span
                      style={{
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        fontSize: "24px",
                      }}
                    >
                      E
                    </span>
                  </div>
                  <h3
                    style={{
                      color: "#1A2433",
                      ...titleLarge,
                      fontWeight: "bold",
                    }}
                  >
                    E-commerce Platform
                  </h3>
                </div>
              </div>
              <div
                style={{
                  ...projectsStyles.projectContent,
                  border: "1px dashed lime",
                }}
              >
                <h3
                  style={{
                    ...projectsStyles.projectTitle,
                    border: "1px dashed yellow",
                  }}
                >
                  Онлайн-магазин премиум косметики
                </h3>
                <p
                  style={{
                    ...projectsStyles.projectDescription,
                    border: "1px dashed pink",
                  }}
                >
                  Полный редизайн платформы с фокусом на улучшении
                  пользовательского опыта и увеличении конверсии.
                </p>
                <div
                  style={{
                    ...projectsStyles.tagsContainer,
                    border: "1px dashed brown",
                  }}
                >
                  <span
                    style={{ ...projectsStyles.tag, border: "1px dashed gray" }}
                  >
                    UI/UX Design
                  </span>
                  <span
                    style={{ ...projectsStyles.tag, border: "1px dashed gray" }}
                  >
                    Figma
                  </span>
                  <span
                    style={{ ...projectsStyles.tag, border: "1px dashed gray" }}
                  >
                    Prototyping
                  </span>
                </div>
                <div
                  style={{
                    ...projectsStyles.projectResult,
                    border: "1px dashed orange",
                  }}
                >
                  +45% конверсии
                </div>
              </div>
            </div>

            {/* Проект 2 */}
            <div
              style={{
                ...projectsStyles.projectCard,
                border: "1px dashed magenta",
              }}
            >
              <div
                style={{
                  ...projectsStyles.projectImage,
                  backgroundColor: "#F0F9F0",
                }}
              >
                <div style={{ textAlign: "center" as const }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "#0371E2",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <span
                      style={{
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        fontSize: "24px",
                      }}
                    >
                      F
                    </span>
                  </div>
                  <h3
                    style={{
                      color: "#1A2433",
                      ...titleLarge,
                      fontWeight: "bold",
                    }}
                  >
                    FinTech App
                  </h3>
                </div>
              </div>
              <div style={projectsStyles.projectContent}>
                <h3 style={projectsStyles.projectTitle}>
                  Мобильное приложение для фитнеса
                </h3>
                <p style={projectsStyles.projectDescription}>
                  Создание дизайн-системы и пользовательских потоков для
                  финансового приложения с акцентом на безопасность и простоту
                  использования.
                </p>
                <div style={projectsStyles.tagsContainer}>
                  <span style={projectsStyles.tag}>Mobile Design</span>
                  <span style={projectsStyles.tag}>Design System</span>
                  <span style={projectsStyles.tag}>User Research</span>
                </div>
                <div style={projectsStyles.projectResult}>4.8 ★ рейтинг</div>
              </div>
            </div>

            {/* Проект 3 */}
            <div style={projectsStyles.projectCard}>
              <div
                style={{
                  ...projectsStyles.projectImage,
                  backgroundColor: "#F5F0FF",
                }}
              >
                <div
                  style={{
                    textAlign: "center" as const,
                    border: "1px dashed teal",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "#0371E2",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      border: "1px dashed navy",
                    }}
                  >
                    <span
                      style={{
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        fontSize: "24px",
                        border: "1px dashed white",
                      }}
                    >
                      H
                    </span>
                  </div>
                  <h3
                    style={{
                      color: "#1A2433",
                      ...titleLarge,
                      fontWeight: "bold",
                      border: "1px dashed olive",
                    }}
                  >
                    Healthcare Portal
                  </h3>
                </div>
              </div>
              <div
                style={{
                  ...projectsStyles.projectContent,
                  border: "1px dashed lime",
                }}
              >
                <h3
                  style={{
                    ...projectsStyles.projectTitle,
                    border: "1px dashed yellow",
                  }}
                >
                  Корпоративный портал
                </h3>
                <p
                  style={{
                    ...projectsStyles.projectDescription,
                    border: "1px dashed pink",
                  }}
                >
                  Создание дизайн-системы и UI-кита для кросс-платформенного
                  приложения с трекингом тренировок и питания.
                </p>
                <div
                  style={{
                    ...projectsStyles.tagsContainer,
                    border: "1px dashed brown",
                  }}
                >
                  <span
                    style={{ ...projectsStyles.tag, border: "1px dashed gray" }}
                  >
                    Web Design
                  </span>
                  <span
                    style={{ ...projectsStyles.tag, border: "1px dashed gray" }}
                  >
                    Accessibility
                  </span>
                  <span
                    style={{ ...projectsStyles.tag, border: "1px dashed gray" }}
                  >
                    Dashboard
                  </span>
                </div>
                <div
                  style={{
                    ...projectsStyles.projectResult,
                    border: "1px dashed orange",
                  }}
                >
                  -30% время навигации
                </div>
              </div>
            </div>
          </div>

          {/* Статистика */}
          <div
            style={{ ...projectsStyles.statsGrid, border: "1px dashed indigo" }}
          >
            <div
              style={{
                ...projectsStyles.statCard,
                border: "1px dashed violet",
              }}
            >
              <div
                style={{
                  ...projectsStyles.statValue,
                  border: "1px dashed coral",
                }}
              >
                12+
              </div>
              <div
                style={{
                  ...projectsStyles.statLabel,
                  border: "1px dashed gold",
                }}
              >
                Завершенных проектов
              </div>
            </div>
            <div
              style={{
                ...projectsStyles.statCard,
                border: "1px dashed violet",
              }}
            >
              <div
                style={{
                  ...projectsStyles.statValue,
                  border: "1px dashed coral",
                }}
              >
                8
              </div>
              <div
                style={{
                  ...projectsStyles.statLabel,
                  border: "1px dashed gold",
                }}
              >
                Довольных клиентов
              </div>
            </div>
            <div
              style={{
                ...projectsStyles.statCard,
                border: "1px dashed violet",
              }}
            >
              <div
                style={{
                  ...projectsStyles.statValue,
                  border: "1px dashed coral",
                }}
              >
                3
              </div>
              <div
                style={{
                  ...projectsStyles.statLabel,
                  border: "1px dashed gold",
                }}
              >
                Дизайн-системы
              </div>
            </div>
            <div
              style={{
                ...projectsStyles.statCard,
                border: "1px dashed violet",
              }}
            >
              <div
                style={{
                  ...projectsStyles.statValue,
                  border: "1px dashed coral",
                }}
              >
                100%
              </div>
              <div
                style={{
                  ...projectsStyles.statLabel,
                  border: "1px dashed gold",
                }}
              >
                Успешная сдача
              </div>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ - sticky заголовок и описание */}
        <div style={projectsStyles.rightContainer}>
          <div
            style={{
              ...projectsStyles.rightStickyContent,
              border: "1px dashed chocolate",
            }}
          >
            <h2
              style={{ ...projectsStyles.title, border: "1px dashed salmon" }}
            >
              Проекты
            </h2>
            <p
              style={{
                ...projectsStyles.rightContent,
                border: "1px dashed plum",
              }}
            >
              Реализованные проекты, демонстрирующие мой подход к созданию
              интерфейсов. Каждый проект — это решение конкретной бизнес-задачи
              через дизайн.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
