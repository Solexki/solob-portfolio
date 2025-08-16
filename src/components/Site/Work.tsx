"use client";
import React from "react";
import "./projects.css";
import SiteTopNav from "./SiteTopNav";
import WorkList from "./WorkList";
import Footer from "./Footer";

function Work() {
  return (
    <div className="project-container">
      <div className="post-content">
        <div className="post-title"> Projects Work On</div>
        <SiteTopNav />
        <WorkList />
        <Footer />
      </div>
    </div>
  );
}

export default Work;
