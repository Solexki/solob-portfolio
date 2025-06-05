import { useEffect, useState } from "react";
import defaultImages from "../Common/defaultImages";
import Icon from "../Common/Icon";
import "./projects.css";
import Popup from "../Common/Popup";
import useProject from "../Hooks/useProject";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const isMobileCheck: boolean = window.innerWidth <= 768 ? true : false;

  const { projectEmtries } = useProject();

  useEffect(() => {
    setIsMobile(isMobileCheck);
  }, [isMobileCheck]);

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
    project_db?: string;
    other_tools?: string;
    projectImages?: string[];
  };

  const projectList: ProjectItems[] = [
    ...projectEmtries.map((item) => ({
      projectName: item.project_name,
      projectTag: item.project_tag,
      projectStack: item.project_technologies,
      projectDb: item.project_db,
      otherTools: item.other_tools,
      projectImages: item.project_image,
    })),
  ];

  // const projectList: ProjectItems[] = [
  //   {
  //     projectName: "Kogov",
  //     projectStack: "React Native, Node.js",
  //     projectTag: "Welfare",
  //     projectCompany: "Kogov Ltl",
  //     projectImages: [
  //       defaultImages.wtdt,
  //       defaultImages.wtda,
  //       defaultImages.wtdh,
  //       defaultImages.wtds,
  //     ],
  //   },
  //   {
  //     projectName: "WhiteDogs",
  //     projectStack: "React Js, Node.js",
  //     projectTag: "Crypto",
  //     projectCompany: "Whitedogs Ltl",
  //     projectImages: [
  //       defaultImages.wtdt,
  //       defaultImages.wtda,
  //       defaultImages.wtdh,
  //       defaultImages.wtds,
  //     ],
  //   },
  //   {
  //     projectName: "Portfolio",
  //     projectStack: "React Js, Node.js",
  //     projectTag: "Tech",
  //     projectCompany: "Layer Tech",
  //     projectImages: [
  //       defaultImages.wtdt,
  //       defaultImages.wtda,
  //       defaultImages.wtdh,
  //       defaultImages.wtds,
  //     ],
  //   },
  //   {
  //     projectName: "YVA",
  //     projectStack: "HTML, Node.js",
  //     projectTag: "Religion",
  //     projectCompany: "Yieled Vessels Asm",
  //     projectImages: [
  //       defaultImages.wtdt,
  //       defaultImages.wtda,
  //       defaultImages.wtdh,
  //       defaultImages.wtds,
  //     ],
  //   },
  // ];

  return (
    <div className="project-container">
      <div className="project-content">
        {isMobile && (
          <Popup
            onClose={() => setIsMobile(false)}
            title="Pc View"
            content="This page look more beautiful on Desktop View, consider switching"
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
                <img src={defaultImages.profileImage} alt="" />
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
                      <p>{item.other_tools}</p>
                    </div>
                    <div className="item-list">
                      <h1>DataBase</h1>
                      <p className="item-des">{item.project_db}</p>
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
                      <a href="">
                        <Icon.FaArrowRightLong size={15} />
                      </a>
                    </span>
                  </div>
                  <div className={"item-body"}>
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
      <div className="project-footer"></div>
    </div>
  );
}

export default Projects;
