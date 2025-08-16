import { useState, useEffect } from "react";
import "./prism.css";
import Link from "next/link";

export default function CodeBlock() {
  const skillsList = ["React", "React Native", "Node"];
  const [displayedSkills, setDisplayedSkills] = useState("");
  const [currentSkill, setCurrentSkill] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Blink cursor
    const cursorBlink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  useEffect(() => {
    if (currentSkill < skillsList.length) {
      if (charIndex < skillsList[currentSkill].length) {
        // Typing next character
        const timeout = setTimeout(() => {
          setDisplayedSkills(
            (prev) => prev + skillsList[currentSkill][charIndex]
          );
          setCharIndex((c) => c + 1);
        }, 100); // speed of typing

        return () => clearTimeout(timeout);
      } else if (currentSkill < skillsList.length - 1) {
        // Move to next skill after a pause
        const timeout = setTimeout(() => {
          setDisplayedSkills((prev) => prev + "', '");
          setCurrentSkill((s) => s + 1);
          setCharIndex(0);
        }, 500);

        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, currentSkill]);

  return (
    <div className="top-section">
      <div className="code-container">
        <div
          className="gradientLine"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div className="violent"></div>
          <div className="bluetrans"></div>
        </div>
        <div className="code-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <pre className="code-content">
          <code>
            <span className="token-keyword">const</span> coder{" "}
            <span className="token-keyword">=</span>{" "}
            <span style={{ color: "#666d85" }}>&#123;</span>
            <br />
            &nbsp;<span>name:</span> <span style={{ color: "#666d85" }}>'</span>
            <span className="token-string">Obafemi Solomon</span>
            <span style={{ color: "#666d85" }}>'</span>,
            <br />
            &nbsp;<span>skills:</span>{" "}
            <span style={{ color: "#666d85" }}>['</span>
            <span className="token-string">{displayedSkills}</span>
            {cursorVisible && <span className="cursor">|</span>}
            <span style={{ color: "#666d85" }}>']</span>,
            <br />
            &nbsp;<span>hardWorker:</span>{" "}
            <span className="token-boolean">true</span>,
            <br />
            &nbsp;<span>problemSolver:</span>{" "}
            <span className="token-boolean">true</span>,
            <br />
            &nbsp;<span className="token-property">hireable:</span>{" "}
            <span className="token-boolean">function</span>
            <span style={{ color: "#666d85" }}>() &#123;</span>
            <br />
            &nbsp;&nbsp;<span className="token-boolean">return</span>{" "}
            <span style={{ color: "#666d85" }}>(</span>
            <br />
            <span className="token-this">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.
            </span>
            hardWorker
            <span className="token-string"> &amp;&amp;</span>
            <br />
            <span className="token-this">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.
            </span>
            problemSolver
            <span className="token-string"> &amp;&amp;</span>
            <br />
            <span className="token-this">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.
            </span>
            skills.length <span className="token-string">&gt;=</span>{" "}
            <span className="token-boolean">5</span>
            <br />
            <span style={{ color: "#666d85" }}> &nbsp;&nbsp;);</span>
            <br />
            <span style={{ color: "#666d85" }}>&nbsp;&#125;</span>
            <br />
            <span style={{ color: "#666d85" }}>&#125;</span>
          </code>
          <style jsx>{`
            .cursor {
              display: inline-block;
              width: 1px;
              background: transparent;
              margin-left: 1px;
            }
          `}</style>
        </pre>
      </div>
      <div className="right-side">
        <div className="available">
          <div className="heart-beat"></div> Available for work
        </div>
        <div className="email-dev">
          <Link href={"mailto:hello@solob.dev"}>hello@solob.dev</Link>
        </div>
      </div>
    </div>
  );
}
