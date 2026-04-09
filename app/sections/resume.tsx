import React from "react";
import {
  headlineMedium,
  headlineSmall,
  titleLarge,
  titleMedium,
  bodyLarge,
  bodySmall,
  caption,
} from "../typography";

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-20 bg-[#FCFCFC]"
      style={{ borderTop: "1px solid #7F858F" }}
    >
      <div className="max-w-[1360px] mx-auto px-4">
        <h2
          className="text-center mb-16"
          style={{
            color: "#1A2433",
            ...headlineMedium,
          }}
        >
          Резюме
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Левая колонка - Опыт работы */}
          <div className="lg:col-span-2">
            <h3
              className="mb-8 pb-4 border-b border-[#E5E7EB]"
              style={{
                color: "#1A2433",
                ...headlineSmall,
              }}
            >
              Опыт работы
            </h3>

            <div className="space-y-8">
              {/* Работа 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4
                      className="mb-2"
                      style={{
                        color: "#1A2433",
                        ...titleLarge,
                      }}
                    >
                      Lead UI/UX Designer
                    </h4>
                    <p
                      className="text-[#0371E2] font-medium"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Digital Agency "Creative Minds"
                    </p>
                  </div>
                  <span
                    className="px-3 py-1 bg-[#F0F2F4] text-[#1A2433] text-sm rounded-full"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    2021 - настоящее время
                  </span>
                </div>
                <p
                  className="mb-4"
                  style={{
                    color: "#7F858F",
                    ...bodyLarge,
                  }}
                >
                  Руководство командой дизайнеров, разработка дизайн-систем,
                  проведение пользовательских исследований, создание прототипов
                  и финальных макетов для клиентов из различных отраслей.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#0371E2] mr-2">•</span>
                    <span
                      style={{
                        color: "#7F858F",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Разработал 3 дизайн-системы для корпоративных клиентов
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0371E2] mr-2">•</span>
                    <span
                      style={{
                        color: "#7F858F",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Увеличил конверсию на 35% для e-commerce проекта
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0371E2] mr-2">•</span>
                    <span
                      style={{
                        color: "#7F858F",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Провел 20+ пользовательских исследований
                    </span>
                  </li>
                </ul>
              </div>

              {/* Работа 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4
                      className="mb-2"
                      style={{
                        color: "#1A2433",
                        ...titleLarge,
                      }}
                    >
                      UI/UX Designer
                    </h4>
                    <p
                      className="text-[#0371E2] font-medium"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Tech Startup "InnovateLab"
                    </p>
                  </div>
                  <span
                    className="px-3 py-1 bg-[#F0F2F4] text-[#1A2433] text-sm rounded-full"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    2019 - 2021
                  </span>
                </div>
                <p
                  className="mb-4"
                  style={{
                    color: "#7F858F",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  Создание пользовательских интерфейсов для мобильных и
                  веб-приложений, прототипирование, тестирование с
                  пользователями.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#0371E2] mr-2">•</span>
                    <span
                      style={{
                        color: "#7F858F",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Разработал дизайн для 5 мобильных приложений
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0371E2] mr-2">•</span>
                    <span
                      style={{
                        color: "#7F858F",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Создал систему компонентов для ускорения разработки
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0371E2] mr-2">•</span>
                    <span
                      style={{
                        color: "#7F858F",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Участвовал в 3 успешных раундах финансирования
                    </span>
                  </li>
                </ul>
              </div>

              {/* Работа 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4
                      className="mb-2"
                      style={{
                        color: "#1A2433",
                        ...titleLarge,
                      }}
                    >
                      Junior Web Designer
                    </h4>
                    <p
                      className="text-[#0371E2] font-medium"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Web Studio "PixelPerfect"
                    </p>
                  </div>
                  <span
                    className="px-3 py-1 bg-[#F0F2F4] text-[#1A2433] text-sm rounded-full"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    2017 - 2019
                  </span>
                </div>
                <p
                  className="mb-4"
                  style={{
                    color: "#7F858F",
                    ...bodyLarge,
                  }}
                >
                  Digital Agency "Creative Minds"
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#0371E2] mr-2">•</span>
                    <span
                      style={{
                        color: "#7F858F",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Разработал 30+ веб-сайтов и лендингов
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0371E2] mr-2">•</span>
                    <span
                      style={{
                        color: "#7F858F",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Освоил Figma и современные инструменты дизайна
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0371E2] mr-2">•</span>
                    <span
                      style={{
                        color: "#7F858F",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Получил опыт работы с реальными клиентами
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Правая колонка - Навыки и контакты */}
          <div className="space-y-8">
            {/* Навыки */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3
                className="mb-6 pb-4 border-b border-[#E5E7EB]"
                style={{
                  color: "#1A2433",
                  ...headlineSmall,
                }}
              >
                Навыки
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#1A2433]" style={bodyLarge}>
                      UI/UX Design
                    </span>
                    <span className="text-[#0371E2]" style={bodyLarge}>
                      95%
                    </span>
                  </div>
                  <div className="h-2 bg-[#F0F2F4] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0371E2] rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#1A2433]" style={bodyLarge}>
                      Figma
                    </span>
                    <span className="text-[#0371E2]" style={bodyLarge}>
                      90%
                    </span>
                  </div>
                  <div className="h-2 bg-[#F0F2F4] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0371E2] rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#1A2433]" style={bodyLarge}>
                      Prototyping
                    </span>
                    <span className="text-[#0371E2]" style={bodyLarge}>
                      88%
                    </span>
                  </div>
                  <div className="h-2 bg-[#F0F2F4] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0371E2] rounded-full"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#1A2433]" style={bodyLarge}>
                      User Research
                    </span>
                    <span className="text-[#0371E2]" style={bodyLarge}>
                      85%
                    </span>
                  </div>
                  <div className="h-2 bg-[#F0F2F4] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0371E2] rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#1A2433]" style={bodyLarge}>
                      Design Systems
                    </span>
                    <span className="text-[#0371E2]" style={bodyLarge}>
                      92%
                    </span>
                  </div>
                  <div className="h-2 bg-[#F0F2F4] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0371E2] rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Контакты */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3
                className="mb-8 pb-4 border-b border-[#E5E7EB]"
                style={{
                  color: "#1A2433",
                  ...headlineSmall,
                }}
              >
                Контакты
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#F0F2F4] rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#0371E2] font-bold">@</span>
                  </div>
                  <div>
                    <div className="text-[#1A2433]" style={bodyLarge}>
                      Email
                    </div>
                    <div className="text-[#7F858F]" style={bodySmall}>
                      hello@vladislav.ru
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#F0F2F4] rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#0371E2] font-bold">T</span>
                  </div>
                  <div>
                    <div className="text-[#1A2433]" style={bodyLarge}>
                      Телефон
                    </div>
                    <div className="text-[#7F858F]" style={bodySmall}>
                      +7 (999) 123-45-67
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#F0F2F4] rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#0371E2] font-bold">L</span>
                  </div>
                  <div>
                    <div className="text-[#1A2433]" style={bodyLarge}>
                      LinkedIn
                    </div>
                    <div className="text-[#7F858F]" style={bodySmall}>
                      linkedin.com/in/vladislav
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#F0F2F4] rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#0371E2] font-bold">B</span>
                  </div>
                  <div>
                    <div className="text-[#1A2433]" style={bodyLarge}>
                      Behance
                    </div>
                    <div className="text-[#7F858F]" style={bodySmall}>
                      behance.net/vladislav
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Кнопка скачивания резюме */}
            <div className="text-center">
              <button
                className="w-full h-[55px] rounded-[100px] bg-[#0371E2] flex items-center justify-center border-none box-border hover:bg-[#0366cc] transition-colors duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  color: "#FFFFFF",
                }}
              >
                Скачать резюме (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
