"use client";
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

      <section className="work-showcase" aria-labelledby="selected-work-title">
        <div className="section-heading section-heading--dark">
          <div>
            <div className="section-title">
              <div className="eclipse"></div>
              Selected work
            </div>
            <h2 id="selected-work-title" className="section-header">
              Products built to make an impact.
            </h2>
          </div>
          <p>
            A selection of digital products I have designed, engineered, and
            shipped across web and mobile.
          </p>
        </div>
        <WorkList />
      </section>

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
