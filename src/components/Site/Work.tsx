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
      <main className="work-page">
        <header className="work-page__header">
          <div className="section-title">
            <div className="eclipse"></div>
            Project archive
          </div>
          <h1>Selected work</h1>
          <p>
            Products, platforms, and experiences built with care—from the first
            system decision to the last interface detail.
          </p>
        </header>
        <WorkList />
      </main>
      <Footer />
    </div>
  );
}

export default Work;
