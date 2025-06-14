import React from "react";
import Icon from "../Common/Icon";

// type WhyMeProps = {
//     Icon: {

//     }
// }

function WhyMe() {
  type WhymeType = {
    title: string;
    whyMe: string;
    icon: React.ComponentType<{ size?: number }>;
  };

  const whyMeReasons: WhymeType[] = [
    {
      title: "Builder's Instinct",
      whyMe:
        "I don’t just write functions — I build systems that breathe. From Telegram bots to reward engines, I think in flows, not just files.",
      icon: Icon.PiBrain,
    },
    {
      title: "Fast & Focused",
      whyMe:
        "Speed matters, but so does precision. I deliver quickly without compromising quality — because good work should feel effortless to use.",
      icon: Icon.SiFastlane,
    },
    {
      title: "Obsessed with the Details",
      whyMe:
        "Whether it's database indexing or a single pixel in a UI, I believe the magic lives in the small stuff. I build with care, always.",
      icon: Icon.FaBuffer,
    },
    {
      title: "Startup Energy",
      whyMe:
        "I move like a founder because I think like one. I care about users, growth, performance — and making every feature count.",
      icon: Icon.MdBolt,
    },
    {
      title: "Team-Ready, Solo-Capable",
      whyMe:
        "I've led my own projects and plugged into fast-moving teams. I ask smart questions, listen harder, and always push for clarity.",
      icon: Icon.FaPeopleCarry,
    },
    {
      title: "Craft Meets Curiosity",
      whyMe:
        "I don’t just use tools — I explore them. I reverse-engineer platforms like Telegram, dive into trading logic, and stay excited about what’s next.",
      icon: Icon.PiLightbulbFill,
    },
  ];

  return (
    <>
      <div className="section-title">
        <div className="eclipse"></div>why me?
      </div>
      <h2 className="section-header">More than just coding</h2>
      <div className="why-me-grid">
        {whyMeReasons.map((item, index) => (
          <div className="why-me-item" key={index}>
            <div className="why-me-title">
              <div className="why-me-icon">{<item.icon size={15} />}</div>
              <h3>{item.title}</h3>
            </div>

            <p>{item.whyMe}</p>
          </div>
        ))}
      </div>
      <a href="#contact" style={{ color: "white" }}>
        <button className="hire-me">Hire me</button>
      </a>
    </>
  );
}

export default WhyMe;
