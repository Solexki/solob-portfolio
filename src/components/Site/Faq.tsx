"use client";

import React from "react";
import { useState } from "react";

type FaqProps = {
  Icon: {
    HiChevronDown: React.ComponentType<{ size?: number }>;
  };
};

function Faq({ Icon }: FaqProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  type FaqItem = {
    question: string;
    answer: string;
  };

  const faqS: FaqItem[] = [
    {
      question: "What services do you offer?",
      answer:
        "I offer a range of services including web development, mobile app development, and software solutions tailored to your needs.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Pricing varies based on the project scope and requirements. I provide a detailed quote after discussing your project needs.",
    },
    {
      question: "What is the purpose of this project?",
      answer:
        "This project showcases my skills and experience as a full-stack developer, highlighting various projects I've worked on.",
    },
    {
      question: "How can I contact you for collaboration?",
      answer:
        "You can reach out to me via my social media links provided in the sidebar or through the contact form on this page.",
    },
    {
      question: "How long does it take to finish a project?",
      answer:
        "The timeline for project completion depends on the complexity and requirements. I aim to deliver quality work within agreed deadlines.",
    },
  ];

  return (
    <>
      <div className="section-title">
        <div className="eclipse"></div>FAQ
      </div>
      <h2 className="section-header">Frequently Asked Questions</h2>
      <div className="faq-content">
        {faqS.map((question, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active-faq" : ""}`}
            key={index}
          >
            <button
              className="fa-question"
              type="button"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className="faq-question-label">{question.question}</span>
              <Icon.HiChevronDown size={15} />
            </button>
            <p id={`faq-answer-${index}`}>{question.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faq;
