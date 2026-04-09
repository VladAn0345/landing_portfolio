"use client";

import React from "react";
import { headlineLarge, bodyLarge } from "../typography";

const quoteStyles = {
  section: {
    backgroundColor: "#1A2433",
    padding: "120px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" as const,
  } as React.CSSProperties,

  container: {
    maxWidth: "1360px",
    margin: "0 auto",
    padding: "0 24px",
  } as React.CSSProperties,

  quote: {
    color: "#FFFFFF",
    ...headlineLarge,
    margin: "0 0 32px 0",

    lineHeight: "1.4",
  } as React.CSSProperties,

  author: {
    color: "#FFFFFF",
    ...bodyLarge,
    margin: "0",
    opacity: 0.8,
  } as React.CSSProperties,
};

export default function Quote() {
  return (
    <section style={quoteStyles.section}>
      <div style={quoteStyles.container}>
        <blockquote style={quoteStyles.quote}>
          «Верю в силу простых и понятных интерфейсов — тех, что не требуют
          инструкций и работают интуитивно»
        </blockquote>
      </div>
    </section>
  );
}
