"use client";
import { useEffect, useState } from "react";
import Icon from "../Common/Icon";
import "./projects.css";
import Footer from "./Footer";
import Faq from "./Faq";
import WhyMe from "./WhyMe";
import Contact from "./Contact";
import Testimony from "./Testimony";
import SiteTopNav from "./SiteTopNav";
import TopSection from "./TopSection";
import WorkList from "./WorkList";

function Projects() {
  return (
    <div className="project-container">
      <SiteTopNav />

      <TopSection />

      {/* Project photo area */}
      <WorkList />
      {/* Why me section */}
      <div id="why-me" className="why-me-section">
        <WhyMe />
      </div>

      {/* FAQ Section */}
      <div id="faq-section" className="faq-section">
        <Faq Icon={Icon} />
      </div>
      {/*Contact area */}

      <div id="contact" className="contact-section">
        <Contact />
      </div>

      {/*Testimony area */}

      <div
        id="testimony"
        className="why-me-section"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Testimony />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Projects;
