import React from "react";

type FaqProps = {
  Icon: {
    HiChevronDown: React.ComponentType<{ size?: number }>;
  };
};

function Faq({ Icon }: FaqProps) {
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
      question: "How much does your services cost?",
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

  const toggleAnswer = (index: number) => {
    const faqItems = document.querySelectorAll(".faq-item");
    const answer = faqItems[index];
    if (answer) {
      const isActive = answer.classList.contains("active-faq");
      faqItems.forEach((item) => item.classList.remove("active-faq"));
      if (!isActive) {
        answer.classList.toggle("active-faq");
      }
    }
  };

  return (
    <>
      <div className="section-title">
        <div className="eclipse"></div>FAQ
      </div>
      <h2 className="section-header">Frequently Asked Questions</h2>
      <div className="faq-content">
        {faqS.map((question, index) => (
          <div
            className="faq-item"
            key={index}
            onClick={() => toggleAnswer(index)}
          >
            <div className="fa-question">
              <h3>{question.question}</h3>
              <Icon.HiChevronDown size={15} />
            </div>
            <p>{question.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faq;
