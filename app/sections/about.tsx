"use client";

import React from "react";
import {
  headlineLarge,
  headlineMedium,
  headlineSmall,
  titleLarge,
  titleMedium,
  bodyLarge,
  bodyMedium,
  bodySmall,
  caption,
} from "../typography";

// Константы для отступов
const HEADER_HEIGHT = 120; // высота хедера в пикселях
const SECTION_OFFSET = 80; // отступ от хедера в пикселях
const STICKY_TOP = HEADER_HEIGHT + SECTION_OFFSET; // 120 + 80 = 200px

// Стили для 12-колоночного грида (скрыт)
const grid12Styles = {
  position: "absolute" as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: "none" as const,
  zIndex: 1,
  display: "none", // Скрыт
} as React.CSSProperties;

const grid12Container = {
  maxWidth: "1360px",
  margin: "0 auto",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: "24px",
  padding: "0",
} as React.CSSProperties;

const grid12Column = {
  backgroundColor: "rgba(255, 0, 0, 0.05)",
  borderLeft: "1px solid rgba(255, 0, 0, 0.1)",
  borderRight: "1px solid rgba(255, 0, 0, 0.1)",
} as React.CSSProperties;

// Стили компонента About
const aboutStyles = {
  section: {
    backgroundColor: "#FCFCFC",
    borderTop: "1px solid #E8EAED", // НАСТОЯЩАЯ ГРАНИЦА - НЕ УБИРАТЬ
    position: "relative" as const,
  } as React.CSSProperties,

  container: {
    maxWidth: "1360px",
    margin: "0 auto",
    padding: "0",
    display: "flex",
  } as React.CSSProperties,

  leftContainer: {
    width: "437px",
    alignSelf: "stretch",

    borderRight: "1px solid #E8EAED", // НАСТОЯЩАЯ ГРАНИЦА - НЕ УБИРАТЬ
    padding: "80px 24px 80px 0",
    boxSizing: "border-box" as const,
  } as React.CSSProperties,

  leftStickyContent: {
    position: "sticky" as const,
    top: `${STICKY_TOP}px`,
  } as React.CSSProperties,

  imageContainer: {
    marginBottom: "0",
    width: "322px",
    height: "322px",
  } as React.CSSProperties,

  title: {
    color: "#1A2433",
    fontSize: "48px",
    fontWeight: "700",
    lineHeight: "1.2",
    margin: "0 0 32px 0",
  } as React.CSSProperties,

  leftContent: {
    color: "#7F858F",
    ...bodyLarge,
    margin: "0 0 24px 0",
  } as React.CSSProperties,

  statsContainer: {
    display: "flex",
    flexDirection: "row" as const,
    gap: "24px",
    marginTop: "0",
    justifyContent: "flex-start",
  } as React.CSSProperties,

  statItem: {
    display: "flex",
    flexDirection: "column" as const,
    width: "207px",
  } as React.CSSProperties,

  statItemWide: {
    display: "flex",
    flexDirection: "column" as const,
    flex: "1",
  } as React.CSSProperties,

  statValue: {
    color: "#1A2433",
    ...headlineMedium,
    margin: "0 0 4px 0",
  } as React.CSSProperties,

  statLabel: {
    color: "#7F858F",
    ...bodyLarge,
    margin: "8px 0 0 0",
  } as React.CSSProperties,

  statLabelWide: {
    color: "#7F858F",
    ...bodyLarge,
    margin: "8px 0 0 0",
  } as React.CSSProperties,

  rightContainer: {
    flex: "1",
    marginLeft: "24px",
    padding: "80px 0 80px 0",

    boxSizing: "border-box" as const,
  } as React.CSSProperties,

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "48px",
  } as React.CSSProperties,

  columnTitle: {
    color: "#1A2433",
    ...titleLarge,
    margin: "0 0 24px 0",
  } as React.CSSProperties,

  text: {
    color: "#7F858F",
    ...bodyLarge,
    margin: "0 0 16px 0",
  } as React.CSSProperties,

  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  } as React.CSSProperties,

  listItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "8px",
  } as React.CSSProperties,

  bullet: {
    color: "#7F858F",
    marginRight: "12px",
    fontSize: "20px",
    lineHeight: "1",
  } as React.CSSProperties,

  listText: {
    color: "#7F858F",
    ...bodyLarge,
    margin: 0,
  } as React.CSSProperties,

  grid2x2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "0",
    marginTop: "48px",
  } as React.CSSProperties,

  gridCell: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  } as React.CSSProperties,

  gridCellTopLeft: {
    padding: "24px 12px 24px 0",
    borderRight: "1px solid #E8EAED",
    borderBottom: "1px solid #E8EAED",
  } as React.CSSProperties,

  gridCellTopRight: {
    padding: "24px 0 24px 12px",
    borderBottom: "1px solid #E8EAED",
  } as React.CSSProperties,

  gridCellBottomLeft: {
    padding: "24px 12px 24px 0",
    borderRight: "1px solid #E8EAED",
  } as React.CSSProperties,

  gridCellBottomRight: {
    padding: "24px 0 24px 12px",
    // Нет границ справа и снизу
  } as React.CSSProperties,

  gridCellTitle: {
    color: "#1A2433",
    ...bodyLarge,
    fontWeight: "600",
    margin: "0 0 8px 0",
  } as React.CSSProperties,

  gridCellText: {
    color: "#7F858F",
    ...bodyLarge,
    margin: 0,
  } as React.CSSProperties,

  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
  } as React.CSSProperties,

  skillCard: {
    display: "flex",
    flexDirection: "column" as const,
    padding: "16px",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  } as React.CSSProperties,

  skillIconsContainer: {
    display: "flex",
    gap: "12px",
    marginBottom: "0",
    flexWrap: "wrap",
  } as React.CSSProperties,

  skillIcon: {
    width: "40px",
    height: "40px",
    objectFit: "contain" as const,
  } as React.CSSProperties,

  skillIconPlaceholder: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    backgroundColor: "#FFFFFF",
    color: "#1A2433",
    ...bodyMedium,
  } as React.CSSProperties,

  skillIconContainer: {
    position: "relative" as const,
    display: "inline-block",
  } as React.CSSProperties,

  skillIconTooltip: {
    position: "absolute" as const,
    bottom: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#1A2433",
    color: "#FFFFFF",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 500,
    whiteSpace: "nowrap" as const,
    opacity: 0,
    visibility: "hidden" as const,
    transition: "opacity 0.2s ease, visibility 0.2s ease",
    zIndex: 100,
    marginBottom: "8px",
    pointerEvents: "none" as const,
  } as React.CSSProperties,

  skillIconTooltipVisible: {
    opacity: 1,
    visibility: "visible" as const,
  } as React.CSSProperties,

  skillIconTooltipArrow: {
    position: "absolute" as const,
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: 0,
    borderLeft: "6px solid transparent",
    borderRight: "6px solid transparent",
    borderTop: "6px solid #1A2433",
  } as React.CSSProperties,

  skillContent: {
    flex: 1,
  } as React.CSSProperties,

  skillTitle: {
    color: "#1A2433",
    ...titleMedium,
    margin: "0 0 16px 0",
  } as React.CSSProperties,

  skillDescription: {
    color: "#7F858F",
    ...bodyLarge,
    margin: "8px 0 0 0",
  } as React.CSSProperties,
};

// Компонент иконки с tooltip
interface SkillIconWithTooltipProps {
  src: string;
  alt: string;
  tooltipText: string;
}

const SkillIconWithTooltip: React.FC<SkillIconWithTooltipProps> = ({
  src,
  alt,
  tooltipText,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  // Определяем, нужно ли добавлять тень и скругление
  // (для иконок ИИ-инструментов, Figma, Miro, Trello, Jira)
  const shouldAddShadow =
    src.includes("gpt.svg") ||
    src.includes("deepseek.svg") ||
    src.includes("grok.svg") ||
    src.includes("figma.svg") ||
    src.includes("miro.svg") ||
    src.includes("trello.svg") ||
    src.includes("jira.svg");

  const iconStyle = shouldAddShadow
    ? {
        ...aboutStyles.skillIcon,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }
    : aboutStyles.skillIcon;

  return (
    <div
      style={aboutStyles.skillIconContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} style={iconStyle} />
      <div
        style={{
          ...aboutStyles.skillIconTooltip,
          ...(isTooltipVisible ? aboutStyles.skillIconTooltipVisible : {}),
        }}
      >
        {tooltipText}
        <div style={aboutStyles.skillIconTooltipArrow}></div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" style={aboutStyles.section}>
      {/* 12-колоночный грид для отладки */}
      <div style={grid12Styles}>
        <div style={grid12Container}>
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} style={grid12Column} />
          ))}
        </div>
      </div>

      <div style={aboutStyles.container}>
        <div style={aboutStyles.leftContainer}>
          <div style={aboutStyles.leftStickyContent}>
            <h2 style={aboutStyles.title}>Обо мне</h2>
            <p style={aboutStyles.leftContent}>
              С 2022 года профессионально занимаюсь веб‑дизайном&nbsp;и
              UI/UX-разработкой, постоянно совершенствуя свои навыки
              на&nbsp;практике. В&nbsp;своей работе стремлюсь
              к&nbsp;минимализму, логичности и&nbsp;ясности, создавая решения,
              которые действительно помогают пользователям.
            </p>
          </div>
        </div>
        <div style={aboutStyles.rightContainer}>
          <div style={aboutStyles.grid}>
            <div style={aboutStyles.imageContainer}>
              <img
                src="/images/1.png"
                alt="Фотография профиля"
                width="322"
                height="322"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div style={aboutStyles.statsContainer}>
              <div style={aboutStyles.statItem}>
                <div style={aboutStyles.statValue}>4 года</div>
                <div style={aboutStyles.statLabel}>опыта в веб дизайне</div>
              </div>
              <div style={aboutStyles.statItem}>
                <div style={aboutStyles.statValue}>10+</div>
                <div style={aboutStyles.statLabel}>кейсов реализовано</div>
              </div>
              <div style={aboutStyles.statItemWide}>
                <div style={aboutStyles.statValue}>Высокая</div>
                <div style={aboutStyles.statLabelWide}>
                  удовлетворённость клиентов
                </div>
              </div>
            </div>

            <div>
              <h3 style={aboutStyles.columnTitle}>Профессиональный путь</h3>
              <p style={aboutStyles.text}>
                Мой путь в веб-дизайне начался с помощи другу в тестировании
                приложений, что открыло для меня мир IT и в частности
                веб-дизайна. Это стало отправной точкой: я понял, что между
                красивым макетом в Figma и готовым сайтом — целый мир деталей,
                которые нужно контролировать.
              </p>
              <p style={aboutStyles.text}>
                Сегодня я не просто рисую интерфейсы — я сопровождаю дизайн от
                идеи до реализации. Работаю в тесной связке с разработчиками,
                потому что знаю: даже отличный макет требует внимательной
                проверки, точной передачи в код и последующей сверки
                сверстанного с реальным дизайном в Figma.
              </p>
              <p style={aboutStyles.text}>
                Использую ИИ для ускорения дизайна и написания кода, сочетая
                знания веб-дизайна с пониманием структуры и стилей. Это
                позволяет верстать собственные макеты. Данный сайт создан именно
                так: веб-дизайн + необходимый минимум кода + ИИ.
              </p>
              <div style={aboutStyles.grid2x2}>
                <div
                  style={{
                    ...aboutStyles.gridCell,
                    ...aboutStyles.gridCellTopLeft,
                  }}
                >
                  <div style={aboutStyles.gridCellTitle}>Фокус на деталях</div>
                  <div style={aboutStyles.gridCellText}>
                    Верю, что совершенство интерфейса — в деталях. Реализую
                    дизайн, где каждая мелочь работает на удобство пользователя
                  </div>
                </div>

                <div
                  style={{
                    ...aboutStyles.gridCell,
                    ...aboutStyles.gridCellTopRight,
                  }}
                >
                  <div style={aboutStyles.gridCellTitle}>От идеи до кода</div>
                  <div style={aboutStyles.gridCellText}>
                    Веду проект от концепции в Figma до контроля реализации,
                    обеспечивая точное соответствие дизайна
                  </div>
                </div>

                <div
                  style={{
                    ...aboutStyles.gridCell,
                    ...aboutStyles.gridCellBottomLeft,
                  }}
                >
                  <div style={aboutStyles.gridCellTitle}>Работа с командой</div>
                  <div style={aboutStyles.gridCellText}>
                    Создаю дизайн с пониманием фронтенд-реализации, что упрощает
                    коммуникацию с разработчиками
                  </div>
                </div>

                <div
                  style={{
                    ...aboutStyles.gridCell,
                    ...aboutStyles.gridCellBottomRight,
                  }}
                >
                  <div style={aboutStyles.gridCellTitle}>ИИ в работе</div>
                  <div style={aboutStyles.gridCellText}>
                    Использую искусственный интеллект для ускорения дизайна и
                    создания кода, расширяя возможности реализации
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={aboutStyles.columnTitle}>Навыки и технологии</h3>
              <div style={aboutStyles.skillsGrid}>
                <div style={aboutStyles.skillCard}>
                  <h4 style={aboutStyles.skillTitle}>
                    Дизайн и прототипирование
                  </h4>
                  <div style={aboutStyles.skillIconsContainer}>
                    <SkillIconWithTooltip
                      src="/images/figma.svg"
                      alt="Figma"
                      tooltipText="Figma"
                    />
                    <SkillIconWithTooltip
                      src="/images/miro.svg"
                      alt="Miro"
                      tooltipText="Miro"
                    />
                  </div>
                </div>
                <div style={aboutStyles.skillCard}>
                  <h4 style={aboutStyles.skillTitle}>Коммуникация и задачи</h4>
                  <div style={aboutStyles.skillIconsContainer}>
                    <SkillIconWithTooltip
                      src="/images/trello.svg"
                      alt="Trello"
                      tooltipText="Trello"
                    />
                    <SkillIconWithTooltip
                      src="/images/jira.svg"
                      alt="Jira"
                      tooltipText="Jira"
                    />
                  </div>
                </div>
                <div style={aboutStyles.skillCard}>
                  <h4 style={aboutStyles.skillTitle}>Работа с версткой</h4>
                  <div style={aboutStyles.skillIconsContainer}>
                    <SkillIconWithTooltip
                      src="/images/vscode.svg"
                      alt="VS Code"
                      tooltipText="VS Code"
                    />
                    <SkillIconWithTooltip
                      src="/images/zed.svg"
                      alt="Zed"
                      tooltipText="Zed"
                    />
                  </div>
                </div>
                <div style={aboutStyles.skillCard}>
                  <h4 style={aboutStyles.skillTitle}>ИИ-инструменты</h4>
                  <div style={aboutStyles.skillIconsContainer}>
                    <SkillIconWithTooltip
                      src="/images/gpt.svg"
                      alt="ChatGPT"
                      tooltipText="ChatGPT"
                    />
                    <SkillIconWithTooltip
                      src="/images/deepseek.svg"
                      alt="DeepSeek"
                      tooltipText="DeepSeek"
                    />
                    <SkillIconWithTooltip
                      src="/images/grok.svg"
                      alt="Grok"
                      tooltipText="Grok"
                    />
                  </div>
                </div>
                <div style={aboutStyles.skillCard}>
                  <h4 style={aboutStyles.skillTitle}>Графические редакторы</h4>
                  <div style={aboutStyles.skillIconsContainer}>
                    <SkillIconWithTooltip
                      src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
                      alt="Photoshop"
                      tooltipText="Photoshop"
                    />
                    <SkillIconWithTooltip
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
                      alt="Illustrator"
                      tooltipText="Illustrator"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
