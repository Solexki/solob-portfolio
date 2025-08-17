"use client";
import React from "react";
import "./projects.css";
import SiteTopNav from "./SiteTopNav";
import WorkList from "./WorkList";
import Footer from "./Footer";

function Work() {
  return (
    <div className="project-container">
      <SiteTopNav />
      <div className="post-content">
        <div className="post-title"> Projects Worked On</div>
      </div>
      <WorkList />
      <Footer />
    </div>
  );
}

export default Work;
