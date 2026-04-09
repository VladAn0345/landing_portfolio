/**
 * ПОЛНАЯ СИСТЕМА ШРИФТОВ
 * Основана на текущей hero-секции с расширением для всех типов контента
 */

// Базовые параметры
export const TYPOGRAPHY = {
  // Основной шрифт
  fontFamily: "Inter, sans-serif",

  // Базовая линия
  baseSize: "16px",

  // Масштаб: модульная шкала 1.25
  scaleRatio: 1.25,

  // Типографическая лестница
  styles: {
    // DISPLAY LEVELS (Экранные уровни)
    displayLarge: {
      fontSize: "64px",
      lineHeight: "72px",
      letterSpacing: "-1.2%",
      fontWeight: 900,
      cssProperty: "--display-large" as const,
    },
    displayMedium: {
      fontSize: "48px",
      lineHeight: "56px",
      letterSpacing: "-1.0%",
      fontWeight: 900,
      cssProperty: "--display-medium" as const,
    },

    // HEADLINE LEVELS (Заголовочные уровни)
    headlineLarge: {
      fontSize: "40px",
      lineHeight: "48px",
      letterSpacing: "-0.8%",
      fontWeight: 900,
      cssProperty: "--headline-large" as const,
    },
    headlineMedium: {
      fontSize: "32px",
      lineHeight: "40px",
      letterSpacing: "-0.6%",
      fontWeight: 700,
      cssProperty: "--headline-medium" as const,
    },
    headlineRegular: {
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "-0.4%",
      fontWeight: 600,
      cssProperty: "--headline-regular" as const,
    },
    headlineSmall: {
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "-0.2%",
      fontWeight: 500,
      cssProperty: "--headline-small" as const,
    },

    // TITLE LEVELS (Названия)
    titleLarge: {
      fontSize: "18px",
      lineHeight: "26px",
      letterSpacing: "0%",
      fontWeight: 600,
      cssProperty: "--title-large" as const,
    },
    titleMedium: {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0%",
      fontWeight: 600,
      cssProperty: "--title-medium" as const,
    },

    // BODY LEVELS (Текстовые уровни)
    bodyLarge: {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0%",
      fontWeight: 500,
      cssProperty: "--body-large" as const,
    },
    bodyMedium: {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0%",
      fontWeight: 500,
      cssProperty: "--body-medium" as const,
    },
    bodySmall: {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.1%",
      fontWeight: 400,
      cssProperty: "--body-small" as const,
    },

    // CAPTION & OVERLINE (Подписи и надстрочные)
    caption: {
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.2%",
      fontWeight: 400,
      cssProperty: "--caption" as const,
    },
    overline: {
      fontSize: "10px",
      lineHeight: "14px",
      letterSpacing: "0.5%",
      fontWeight: 500,
      cssProperty: "--overline" as const,
    },
  },

  // Практические комбинации (готовые стили для компонентов)
  combinations: {
    hero: {
      h1: "headlineLarge" as const,
      h2: "headlineSmall" as const,
      body: "bodyLarge" as const,
      button: "bodyMedium" as const,
    },
    card: {
      title: "titleLarge" as const,
      description: "bodySmall" as const,
      tag: "overline" as const,
    },
    navigation: {
      item: "titleMedium" as const,
      activeItem: "titleMedium" as const, // с повышенной насыщенностью
    },
    form: {
      label: "titleMedium" as const,
      input: "bodyMedium" as const,
      hint: "caption" as const,
    },
  },

  // Адаптивные размеры (рекомендации)
  responsive: {
    desktop: {
      displayLarge: "64px",
      headlineLarge: "40px",
    },
    tablet: {
      displayLarge: "56px",
      headlineLarge: "36px",
    },
    mobile: {
      displayLarge: "48px",
      headlineLarge: "32px",
      bodyLarge: "15px",
    },
  },
} as const;

// Типы для TypeScript
export type TypographyStyle = keyof typeof TYPOGRAPHY.styles;
export type TypographyCombination = keyof typeof TYPOGRAPHY.combinations;

// Вспомогательные функции
export const getTypographyStyle = (style: TypographyStyle) => {
  return TYPOGRAPHY.styles[style];
};

export const getCombination = (combination: TypographyCombination) => {
  return TYPOGRAPHY.combinations[combination];
};

// Функция для применения стиля к React компоненту
export const applyTypography = (
  style: TypographyStyle,
): React.CSSProperties => {
  const typographyStyle = getTypographyStyle(style);
  return {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: typographyStyle.fontSize,
    lineHeight: typographyStyle.lineHeight,
    letterSpacing: typographyStyle.letterSpacing,
    fontWeight: typographyStyle.fontWeight,
  };
};

// CSS переменные для глобального использования
export const typographyCSSVariables = `
  :root {
    /* DISPLAY LEVELS */
    --display-large-font-size: ${TYPOGRAPHY.styles.displayLarge.fontSize};
    --display-large-line-height: ${TYPOGRAPHY.styles.displayLarge.lineHeight};
    --display-large-letter-spacing: ${TYPOGRAPHY.styles.displayLarge.letterSpacing};
    --display-large-font-weight: ${TYPOGRAPHY.styles.displayLarge.fontWeight};

    --display-medium-font-size: ${TYPOGRAPHY.styles.displayMedium.fontSize};
    --display-medium-line-height: ${TYPOGRAPHY.styles.displayMedium.lineHeight};
    --display-medium-letter-spacing: ${TYPOGRAPHY.styles.displayMedium.letterSpacing};
    --display-medium-font-weight: ${TYPOGRAPHY.styles.displayMedium.fontWeight};

    /* HEADLINE LEVELS */
    --headline-large-font-size: ${TYPOGRAPHY.styles.headlineLarge.fontSize};
    --headline-large-line-height: ${TYPOGRAPHY.styles.headlineLarge.lineHeight};
    --headline-large-letter-spacing: ${TYPOGRAPHY.styles.headlineLarge.letterSpacing};
    --headline-large-font-weight: ${TYPOGRAPHY.styles.headlineLarge.fontWeight};

    --headline-medium-font-size: ${TYPOGRAPHY.styles.headlineMedium.fontSize};
    --headline-medium-line-height: ${TYPOGRAPHY.styles.headlineMedium.lineHeight};
    --headline-medium-letter-spacing: ${TYPOGRAPHY.styles.headlineMedium.letterSpacing};
    --headline-medium-font-weight: ${TYPOGRAPHY.styles.headlineMedium.fontWeight};

    --headline-regular-font-size: ${TYPOGRAPHY.styles.headlineRegular.fontSize};
    --headline-regular-line-height: ${TYPOGRAPHY.styles.headlineRegular.lineHeight};
    --headline-regular-letter-spacing: ${TYPOGRAPHY.styles.headlineRegular.letterSpacing};
    --headline-regular-font-weight: ${TYPOGRAPHY.styles.headlineRegular.fontWeight};

    --headline-small-font-size: ${TYPOGRAPHY.styles.headlineSmall.fontSize};
    --headline-small-line-height: ${TYPOGRAPHY.styles.headlineSmall.lineHeight};
    --headline-small-letter-spacing: ${TYPOGRAPHY.styles.headlineSmall.letterSpacing};
    --headline-small-font-weight: ${TYPOGRAPHY.styles.headlineSmall.fontWeight};

    /* TITLE LEVELS */
    --title-large-font-size: ${TYPOGRAPHY.styles.titleLarge.fontSize};
    --title-large-line-height: ${TYPOGRAPHY.styles.titleLarge.lineHeight};
    --title-large-letter-spacing: ${TYPOGRAPHY.styles.titleLarge.letterSpacing};
    --title-large-font-weight: ${TYPOGRAPHY.styles.titleLarge.fontWeight};

    --title-medium-font-size: ${TYPOGRAPHY.styles.titleMedium.fontSize};
    --title-medium-line-height: ${TYPOGRAPHY.styles.titleMedium.lineHeight};
    --title-medium-letter-spacing: ${TYPOGRAPHY.styles.titleMedium.letterSpacing};
    --title-medium-font-weight: ${TYPOGRAPHY.styles.titleMedium.fontWeight};

    /* BODY LEVELS */
    --body-large-font-size: ${TYPOGRAPHY.styles.bodyLarge.fontSize};
    --body-large-line-height: ${TYPOGRAPHY.styles.bodyLarge.lineHeight};
    --body-large-letter-spacing: ${TYPOGRAPHY.styles.bodyLarge.letterSpacing};
    --body-large-font-weight: ${TYPOGRAPHY.styles.bodyLarge.fontWeight};

    --body-medium-font-size: ${TYPOGRAPHY.styles.bodyMedium.fontSize};
    --body-medium-line-height: ${TYPOGRAPHY.styles.bodyMedium.lineHeight};
    --body-medium-letter-spacing: ${TYPOGRAPHY.styles.bodyMedium.letterSpacing};
    --body-medium-font-weight: ${TYPOGRAPHY.styles.bodyMedium.fontWeight};

    --body-small-font-size: ${TYPOGRAPHY.styles.bodySmall.fontSize};
    --body-small-line-height: ${TYPOGRAPHY.styles.bodySmall.lineHeight};
    --body-small-letter-spacing: ${TYPOGRAPHY.styles.bodySmall.letterSpacing};
    --body-small-font-weight: ${TYPOGRAPHY.styles.bodySmall.fontWeight};

    /* CAPTION & OVERLINE */
    --caption-font-size: ${TYPOGRAPHY.styles.caption.fontSize};
    --caption-line-height: ${TYPOGRAPHY.styles.caption.lineHeight};
    --caption-letter-spacing: ${TYPOGRAPHY.styles.caption.letterSpacing};
    --caption-font-weight: ${TYPOGRAPHY.styles.caption.fontWeight};

    --overline-font-size: ${TYPOGRAPHY.styles.overline.fontSize};
    --overline-line-height: ${TYPOGRAPHY.styles.overline.lineHeight};
    --overline-letter-spacing: ${TYPOGRAPHY.styles.overline.letterSpacing};
    --overline-font-weight: ${TYPOGRAPHY.styles.overline.fontWeight};

    /* Базовые значения */
    --font-family: ${TYPOGRAPHY.fontFamily};
    --base-font-size: ${TYPOGRAPHY.baseSize};
  }
`;

// Утилиты для быстрого доступа к конкретным стилям
export const displayLarge = applyTypography("displayLarge");
export const displayMedium = applyTypography("displayMedium");
export const headlineLarge = applyTypography("headlineLarge");
export const headlineMedium = applyTypography("headlineMedium");
export const headlineRegular = applyTypography("headlineRegular");
export const headlineSmall = applyTypography("headlineSmall");
export const titleLarge = applyTypography("titleLarge");
export const titleMedium = applyTypography("titleMedium");
export const bodyLarge = applyTypography("bodyLarge");
export const bodyMedium = applyTypography("bodyMedium");
export const bodySmall = applyTypography("bodySmall");
export const caption = applyTypography("caption");
export const overline = applyTypography("overline");
