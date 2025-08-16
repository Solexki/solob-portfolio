"use client";
import { useEffect, useState } from "react";
import Icon from "../Common/Icon";
import "./projects.css";
import Popup from "../Common/Popup";
import useProject from "../Hooks/useProject";
import Footer from "./Footer";
import Faq from "./Faq";
import WhyMe from "./WhyMe";
import Contact from "./Contact";
import Testimony from "./Testimony";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const { projectEmtries } = useProject();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.getElementById(hash.substring(1));
      target?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".project-item");

      let current = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          current = index;
        }
      });

      setActiveIndex(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProject = (index: number) => {
    const section = document.getElementById(`project-${index}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  type ProjectItems = {
    projectName?: string;
    projectTag?: string;
    projectStack?: string;
    projectDb?: string;
    otherTools?: string;
    projectImages?: string[];
    projectWebsite?: string;
  };

  const projectList: ProjectItems[] = [
    ...projectEmtries.map((item) => ({
      projectName: item.project_name,
      projectTag: item.project_tag,
      projectStack: item.project_technologies,
      projectDb: item.project_db,
      otherTools: item.other_tools,
      projectImages: item.project_image,
      projectWebsite: item.project_link,
    })),
  ];

  return (
    <div className="project-container">
      <div id="projects" className="project-content">
        {isMobile && (
          <Popup
            onClose={() => setIsMobile(false)}
            title="Pc View"
            content="This page looks more beautiful on Desktop View, consider switching"
          />
        )}
        {/* side bar */}
        <div
          className={`side-bar-area ${showMobileMenu ? "mobile-side-bar" : ""}`}
        >
          <div className="side-bar-content">
            <div
              className="side-bar-profile"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <div className="profile-img-name">
                <img src={"/images/solob.webp"} alt="" />
                <div className="name-status">
                  <h2>Solomon O</h2>
                  <p>Available for work</p>
                </div>
              </div>
              <div className="desc">
                Full-stack developer, building innovative, scalable, and
                impactful solutions...
                <a href="/">
                  <span className="read-more">Read More</span>
                </a>
              </div>
              <div className="side-bar-social">
                <div className="contact">Contact</div>
                <div className="handle">
                  <a href="https://x.com/solexki">
                    <Icon.FaXTwitter />
                  </a>
                </div>
                <div className="handle">
                  <a href="https://www.linkedin.com/in/solexki/">
                    <Icon.FaLinkedinIn />
                  </a>
                </div>
                <div className="handle">
                  <a href="https://www.upwork.com/freelancers/~01719fe6e879b234fe">
                    <Icon.SiUpwork />
                  </a>
                </div>
              </div>
            </div>

            <div className="index-area">
              {projectList.map((item, index) => (
                <div
                  className={`index-items ${
                    activeIndex === index ? "active-item" : ""
                  }`}
                  key={index}
                  onClick={() => scrollToProject(index)}
                >
                  <div className="index-item">
                    <h2>{index + 1}</h2> <p>{item.projectName}</p>
                  </div>
                  <div
                    className={
                      activeIndex === index
                        ? "active-item-list activate-list"
                        : "active-item-list"
                    }
                  >
                    <div className="item-list">
                      <h1>Category</h1>
                      <p>{item.projectTag}</p>
                    </div>
                    <div className="item-list">
                      <h1>Stacks</h1>
                      <p>{item.projectStack}</p>
                    </div>
                    <div className="item-list">
                      <h1>Other Tools</h1>
                      <p>{item.otherTools}</p>
                    </div>
                    <div className="item-list">
                      <h1>DataBase</h1>
                      <p className="item-des">{item.projectDb}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* main content */}
        <div className="content-display-area">
          <div className="displies">
            <div
              className="project-items"
              onClick={() => setShowMobileMenu(false)}
            >
              {projectList.map((item, index) => (
                <div
                  className={`project-item ${
                    activeIndex === index ? "" : "collapsed"
                  }`}
                  id={`project-${index}`}
                  key={index}
                >
                  <div className="item-header">
                    <h2>{item.projectName}</h2>
                    <span className="divider"></span>
                    <span className="item-link">
                      <a
                        href={item.projectWebsite || "#"}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.FaArrowRightLong size={15} />
                      </a>
                    </span>
                  </div>
                  <div className="item-body">
                    {item.projectImages?.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt=""
                        className="project-img"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
