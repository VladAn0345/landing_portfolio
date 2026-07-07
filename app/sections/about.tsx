"use client";

import { useState } from "react";
import {
  headlineLarge,
  headlineMedium,
  titleLarge,
  titleMedium,
  bodyLarge,
  bodyMedium,
} from "../typography";

const HEADER_HEIGHT = 120;
const SECTION_OFFSET = 80;
const STICKY_TOP = HEADER_HEIGHT + SECTION_OFFSET;

const grid12Styles = {
  position: "absolute" as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: "none" as const,
  zIndex: 1,
  display: "none",
};

const grid12Container = {
  maxWidth: "1360px",
  margin: "0 auto",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: "24px",
  padding: "0",
};

const grid12Column = {
  backgroundColor: "rgba(255, 0, 0, 0.05)",
  borderLeft: "1px solid rgba(255, 0, 0, 0.1)",
  borderRight: "1px solid rgba(255, 0, 0, 0.1)",
};

const styles = {
  section: {
    backgroundColor: "#FCFCFC",
    borderTop: "1px solid #E8EAED",
    position: "relative" as const,
  },

  container: {
    maxWidth: "1360px",
    margin: "0 auto",
    padding: "0",
    display: "flex",
  },

  left: {
    width: "437px",
    alignSelf: "stretch",
    borderRight: "1px solid #E8EAED",
    padding: "80px 24px 80px 0",
    boxSizing: "border-box" as const,
  },

  sticky: {
    position: "sticky" as const,
    top: `${STICKY_TOP}px`,
  },

  image: {
    marginBottom: "0",
    width: "322px",
    height: "322px",
  },

  title: {
    color: "#1A2433",
    fontSize: "48px",
    fontWeight: "700",
    lineHeight: "1.2",
    margin: "0 0 32px 0",
  },

  leftText: {
    color: "#7F858F",
    ...bodyLarge,
    margin: "0 0 24px 0",
  },

  stats: {
    display: "flex",
    flexDirection: "row" as const,
    gap: "24px",
    marginTop: "0",
    justifyContent: "flex-start",
  },

  statItem: {
    display: "flex",
    flexDirection: "column" as const,
    width: "207px",
  },

  statItemWide: {
    display: "flex",
    flexDirection: "column" as const,
    flex: "1",
  },

  statValue: {
    color: "#1A2433",
    ...headlineMedium,
    margin: "0 0 4px 0",
  },

  statLabel: {
    color: "#7F858F",
    ...bodyLarge,
    margin: "8px 0 0 0",
  },

  right: {
    flex: "1",
    marginLeft: "24px",
    padding: "80px 0 80px 0",
    boxSizing: "border-box" as const,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "48px",
  },

  columnTitle: {
    color: "#1A2433",
    ...titleLarge,
    margin: "0 0 24px 0",
  },

  text: {
    color: "#7F858F",
    ...bodyLarge,
    margin: "0 0 16px 0",
  },

  grid2x2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0",
    marginTop: "48px",
  },

  cell: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  cellTL: {
    padding: "24px 12px 24px 0",
    borderRight: "1px solid #E8EAED",
    borderBottom: "1px solid #E8EAED",
  },

  cellTR: {
    padding: "24px 0 24px 12px",
    borderBottom: "1px solid #E8EAED",
  },

  cellBL: {
    padding: "24px 12px 24px 0",
    borderRight: "1px solid #E8EAED",
  },

  cellBR: {
    padding: "24px 0 24px 12px",
  },

  cellTitle: {
    color: "#1A2433",
    ...bodyLarge,
    fontWeight: "600",
    margin: "0 0 8px 0",
  },

  cellText: {
    color: "#7F858F",
    ...bodyLarge,
    fontWeight: "500",
    margin: 0,
  },

  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
  },

  skillCard: {
    display: "flex",
    flexDirection: "column" as const,
    padding: "16px",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },

  skillIcons: {
    display: "flex",
    gap: "12px",
    marginBottom: "0",
    flexWrap: "wrap",
  },

  skillIcon: {
    width: "40px",
    height: "40px",
    objectFit: "contain" as const,
  },

  skillTitle: {
    color: "#1A2433",
    ...titleMedium,
    margin: "0 0 16px 0",
  },

  skillDescription: {
    color: "#7F858F",
    ...bodyLarge,
    margin: "8px 0 0 0",
  },

  tooltipContainer: {
    position: "relative" as const,
    display: "inline-block",
  },

  tooltip: {
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
  },

  tooltipArrow: {
    position: "absolute" as const,
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: 0,
    borderLeft: "6px solid transparent",
    borderRight: "6px solid transparent",
    borderTop: "6px solid #1A2433",
  },
};

const SHADOW_ICONS = [
  "gpt.svg",
  "deepseek.svg",
  "grok.svg",
  "figma.svg",
  "miro.svg",
  "trello.svg",
  "jira.svg",
  "github.svg",
  "claude.svg",
  "flutter_logo.png",
];

function SkillIcon({
  src,
  alt,
  tooltipText,
  isSpecial,
}: {
  src: string;
  alt: string;
  tooltipText: string;
  isSpecial?: boolean;
}) {
  const [visible, setVisible] = useState(false);
  const hasShadow = SHADOW_ICONS.some((name) => src.includes(name));

  return (
    <div
      style={styles.tooltipContainer}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {isSpecial ? (
        <div
          style={{
            ...styles.skillIcon,
            backgroundColor: "#121212",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "4px",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {alt === "Claude" ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#d87e51">
              <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
            </svg>
          ) : alt === "GitHub" ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          ) : alt === "Flutter" ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#02569B">
              <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM14.314 0l-6 6 6 6 6-6-6-6zM2.3 12L0 14.3 6 20.3 8.3 18 2.3 12z" />
            </svg>
          ) : (
            <img
              src={src}
              alt={alt}
              style={{ width: "24px", height: "24px" }}
            />
          )}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          style={{
            ...styles.skillIcon,
            ...(alt === "Flutter" && {
              padding: "4px",
              boxSizing: "border-box",
            }),
            ...(hasShadow && {
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }),
          }}
        />
      )}
      <div
        style={{
          ...styles.tooltip,
          ...(visible && { opacity: 1, visibility: "visible" }),
        }}
      >
        {tooltipText}
        <div style={styles.tooltipArrow} />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <div style={grid12Styles}>
        <div style={grid12Container}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={grid12Column} />
          ))}
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.left}>
          <div style={styles.sticky}>
            <h2 style={styles.title}>Обо мне</h2>
            <p style={styles.leftText}>
              С 2022 года профессионально занимаюсь веб‑дизайном&nbsp;и
              UI/UX-разработкой, постоянно совершенствуя свои навыки
              на&nbsp;практике. В&nbsp;своей работе стремлюсь
              к&nbsp;минимализму, логичности и&nbsp;ясности, создавая решения,
              которые действительно помогают пользователям.
            </p>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.grid}>
            <div style={styles.image}>
              <img
                src="/images/1.png"
                alt="Фотография профиля"
                width="322"
                height="322"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div style={styles.stats}>
              <div style={styles.statItem}>
                <div style={styles.statValue}>4 года</div>
                <div style={styles.statLabel}>опыта в веб дизайне</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statValue}>10+</div>
                <div style={styles.statLabel}>кейсов реализовано</div>
              </div>
              <div style={styles.statItemWide}>
                <div style={styles.statValue}>Высокая</div>
                <div style={styles.statLabel}>удовлетворённость клиентов</div>
              </div>
            </div>

            <div>
              <h3 style={styles.columnTitle}>Профессиональный путь</h3>
              <p style={styles.text}>
                Мой путь в веб-дизайне начался с помощи другу в тестировании
                приложений, что открыло для меня мир IT и в частности
                веб-дизайна. Это стало отправной точкой: я понял, что между
                красивым макетом в Figma и готовым сайтом — целый мир деталей,
                которые нужно контролировать.
              </p>
              <p style={styles.text}>
                Сегодня я не просто рисую интерфейсы — я сопровождаю дизайн от
                идеи до реализации. Работаю в тесной связке с разработчиками,
                потому что знаю: даже отличный макет требует внимательной
                проверки, точной передачи в код и последующей сверки
                сверстанного с реальным дизайном в Figma.
              </p>
              <p style={styles.text}>
                Использую ИИ для ускорения дизайна и написания кода, сочетая
                знания веб-дизайна с пониманием структуры и стилей. Это
                позволяет верстать собственные макеты. Данный сайт создан именно
                так: веб-дизайн + необходимый минимум кода + ИИ.
              </p>

              <div style={styles.grid2x2}>
                {[
                  {
                    pos: "TL",
                    title: "Фокус на деталях",
                    text: "Верю, что совершенство интерфейса — в деталях. Реализую дизайн, где каждая мелочь работает на удобство пользователя",
                  },
                  {
                    pos: "TR",
                    title: "От идеи до кода",
                    text: "Веду проект от концепции в Figma до контроля реализации, обеспечивая точное соответствие дизайна",
                  },
                  {
                    pos: "BL",
                    title: "Работа с командой",
                    text: "Создаю дизайн с пониманием фронтенд-реализации, что упрощает коммуникацию с разработчиками",
                  },
                  {
                    pos: "BR",
                    title: "ИИ в работе",
                    text: "Использую искусственный интеллект для ускорения дизайна и создания кода, расширяя возможности реализации",
                  },
                ].map(({ pos, title, text }) => (
                  <div
                    key={pos}
                    style={{
                      ...styles.cell,
                      ...styles[`cell${pos}` as keyof typeof styles],
                    }}
                  >
                    <div style={styles.cellTitle}>{title}</div>
                    <div style={styles.cellText}>{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={styles.columnTitle}>Навыки и технологии</h3>
              <div style={styles.skillsGrid}>
                {[
                  {
                    title: "Дизайн и прототипирование",
                    icons: [
                      {
                        src: "/images/figma.svg",
                        alt: "Figma",
                        tooltip: "Figma",
                      },
                      { src: "/images/miro.svg", alt: "Miro", tooltip: "Miro" },
                    ],
                  },
                  {
                    title: "Коммуникация и задачи",
                    icons: [
                      {
                        src: "/images/trello.svg",
                        alt: "Trello",
                        tooltip: "Trello",
                      },
                      { src: "/images/jira.svg", alt: "Jira", tooltip: "Jira" },
                      {
                        src: "/images/github.svg",
                        alt: "GitHub",
                        tooltip: "GitHub",
                        isSpecial: true,
                      },
                    ],
                  },
                  {
                    title: "Работа с версткой",
                    icons: [
                      {
                        src: "/images/vscode.svg",
                        alt: "VS Code",
                        tooltip: "VS Code",
                      },
                      { src: "/images/zed.svg", alt: "Zed", tooltip: "Zed" },
                    ],
                  },
                  {
                    title: "ИИ-инструменты",
                    icons: [
                      {
                        src: "/images/gpt.svg",
                        alt: "ChatGPT",
                        tooltip: "ChatGPT",
                      },
                      {
                        src: "/images/deepseek.svg",
                        alt: "DeepSeek",
                        tooltip: "DeepSeek",
                      },
                      { src: "/images/grok.svg", alt: "Grok", tooltip: "Grok" },
                      {
                        src: "/images/claude.svg",
                        alt: "Claude",
                        tooltip: "Claude",
                        isSpecial: true,
                      },
                    ],
                  },
                  {
                    title: "Мобильная разработка",
                    icons: [
                      {
                        src: "/images/flutter_logo.png",
                        alt: "Flutter",
                        tooltip: "Flutter",
                      },
                    ],
                  },
                  {
                    title: "Графические редакторы",
                    icons: [
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
                        alt: "Photoshop",
                        tooltip: "Photoshop",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
                        alt: "Illustrator",
                        tooltip: "Illustrator",
                      },
                      {
                        src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
                        alt: "After Effects",
                        tooltip: "After Effects",
                      },
                    ],
                  },
                ].map((skill) => (
                  <div key={skill.title} style={styles.skillCard}>
                    <h4 style={styles.skillTitle}>{skill.title}</h4>
                    <div style={styles.skillIcons}>
                      {skill.icons.map((icon) => (
                        <SkillIcon
                          key={icon.alt}
                          {...icon}
                          tooltipText={icon.tooltip}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
