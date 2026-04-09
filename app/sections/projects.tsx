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
  } as React.CSSProperties,

  projectImage: {
    height: "240px",
    backgroundColor: "#F0F2F4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties,

  projectContent: {
    padding: "32px",
  } as React.CSSProperties,

  projectTitle: {
    color: "#1A2433",
    ...headlineSmall,
    margin: "0 0 16px 0",
  } as React.CSSProperties,

  projectDescription: {
    color: "#7F858F",
    ...bodyLarge,
    margin: "0 0 24px 0",
  } as React.CSSProperties,

  tagsContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "8px",
    marginBottom: "24px",
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
          <div style={projectsStyles.grid}>
            {/* Проект 1 */}
            <div style={projectsStyles.projectCard}>
              <div style={projectsStyles.projectImage}>
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
              <div style={projectsStyles.projectContent}>
                <h3 style={projectsStyles.projectTitle}>
                  Онлайн-магазин премиум косметики
                </h3>
                <p style={projectsStyles.projectDescription}>
                  Полный редизайн платформы с фокусом на улучшении
                  пользовательского опыта и увеличении конверсии.
                </p>
                <div style={projectsStyles.tagsContainer}>
                  <span style={projectsStyles.tag}>UI/UX Design</span>
                  <span style={projectsStyles.tag}>Figma</span>
                  <span style={projectsStyles.tag}>Prototyping</span>
                </div>
                <div style={projectsStyles.projectResult}>+45% конверсии</div>
              </div>
            </div>

            {/* Проект 2 */}
            <div style={projectsStyles.projectCard}>
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
                      H
                    </span>
                  </div>
                  <h3
                    style={{
                      color: "#1A2433",
                      ...titleLarge,
                      fontWeight: "bold",
                    }}
                  >
                    Healthcare Portal
                  </h3>
                </div>
              </div>
              <div style={projectsStyles.projectContent}>
                <h3 style={projectsStyles.projectTitle}>
                  Корпоративный портал
                </h3>
                <p style={projectsStyles.projectDescription}>
                  Создание дизайн-системы и UI-кита для кросс-платформенного
                  приложения с трекингом тренировок и питания.
                </p>
                <div style={projectsStyles.tagsContainer}>
                  <span style={projectsStyles.tag}>Web Design</span>
                  <span style={projectsStyles.tag}>Accessibility</span>
                  <span style={projectsStyles.tag}>Dashboard</span>
                </div>
                <div style={projectsStyles.projectResult}>
                  -30% время навигации
                </div>
              </div>
            </div>
          </div>

          {/* Статистика */}
          <div style={projectsStyles.statsGrid}>
            <div style={projectsStyles.statCard}>
              <div style={projectsStyles.statValue}>12+</div>
              <div style={projectsStyles.statLabel}>Завершенных проектов</div>
            </div>
            <div style={projectsStyles.statCard}>
              <div style={projectsStyles.statValue}>8</div>
              <div style={projectsStyles.statLabel}>Довольных клиентов</div>
            </div>
            <div style={projectsStyles.statCard}>
              <div style={projectsStyles.statValue}>3</div>
              <div style={projectsStyles.statLabel}>Дизайн-системы</div>
            </div>
            <div style={projectsStyles.statCard}>
              <div style={projectsStyles.statValue}>100%</div>
              <div style={projectsStyles.statLabel}>Успешная сдача</div>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ - sticky заголовок и описание */}
        <div style={projectsStyles.rightContainer}>
          <div style={projectsStyles.rightStickyContent}>
            <h2 style={projectsStyles.title}>Проекты</h2>
            <p style={projectsStyles.rightContent}>
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
