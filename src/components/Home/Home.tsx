"use client";
import React, { useEffect } from "react";
import Container from "../Common/Container";
import defaultImages from "../Common/defaultImages";
import Icon from "../Common/Icon";
import TopNav from "../Navs/TopNav";
import FootNav from "../Navs/FootNav";
import NewsFeed from "../Feed/NewsFeed";
import About from "../About/About";
import Projects from "../Projects/Projects";
import GuessBook from "../GuestBook/GuessBook";
import useAuth from "../Hooks/useAuth";
import Ballpit from "../Common/Ballpit";
import Image from "next/image";

function Home() {
  const [activeTab, setActiveTab] = React.useState("feed");
  const { isAdmin } = useAuth();
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const path = window.location.pathname.replace("/", "");

    if (hash || path) {
      setActiveTab(hash ? hash : path);
      const target = document.getElementById("active-tabs");
      target?.scrollIntoView({ behavior: "smooth" });
    } else {
      setActiveTab("feed");
    }
  }, []);

  type ListItem = {
    name: string;
    icon: React.ReactNode;
    link?: string;
  };
  const profileList: ListItem[] = [
    {
      name: "Available",
      icon: <Icon.HiMiniBriefcase />,
      link: "",
    },
    {
      name: "/links",
      icon: <Icon.FaLink />,
      link: "/site",
    },
    {
      name: "October 5th",
      icon: <Icon.HiMiniCake />,
      link: "",
    },
    {
      name: "Joined Aug 2023",
      icon: <Icon.IoCalendar />,
      link: "",
    },
    {
      name: "FAQ",
      icon: <Icon.FaQuestion />,
      link: "/site/#faq-section",
    },
  ];

  const tabButtons = [
    { name: "Feed", link: "/posts" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Guestbook", link: "/contact" },
  ];
  return (
    <div>
      <Container>
        <TopNav />
        <div className="hero">
          <div className="hero-content">
            <div className="cover-img">
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "500px",
                  maxHeight: "500px",
                  width: "100%",
                }}
              >
                <Ballpit
                  count={200}
                  gravity={0.7}
                  friction={0.8}
                  wallBounce={0.95}
                  followCursor={true}
                  colors={["#ff5733", "#33c1ff", "#85e085", "#ff66b3"]}
                />
              </div>
            </div>
            <div className="home-page">
              <div className="profile-area">
                <div className="profile-header">
                  <div className="profile-img">
                    <Image src={defaultImages.solobdev} alt="Profile" />
                  </div>
                  <div className="follow-btn">
                    <a
                      href="https://x.com/solexki"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="button-primary follow">
                        Follow
                        <Icon.FaXTwitter />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="profile-info">
                  <div className="profile-name">Solomon Obafemi</div>
                  <div className="profile-description">
                    <span> Dream it—I'll code your vision ✨</span>
                    <br />
                    <span>
                      Full-stack developer, building innovative, scalable, and
                      impactful solutions.
                    </span>
                  </div>
                  <div className="profile-list secondary-text">
                    {profileList.map((item, index) => (
                      <div className="list-item" key={index}>
                        {item.icon}
                        <span>
                          {item.link ? (
                            <a href={item.link}>{item.name}</a>
                          ) : (
                            item.name
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="news-letter-area">
              <div className="news-letter-content">
                <p>
                  Stay updated with the latest news and updates. Subscribe now!
                </p>
                <form className="newsletter-form">
                  <input type="email" placeholder="Enter your email" required />
                  <button type="submit" className="button-primary">
                    Subscribe
                  </button>
                </form>
                <span>No spam. Unsubscribe any time.</span>
              </div>
            </div>
            <div id="active-tabs" className="tab-buttons">
              {tabButtons.map((button, index) => (
                <div
                  className={`tab-button
               ${activeTab === button.name ? "active" : ""}`}
                  key={index}
                  onClick={() => setActiveTab(button.name)}
                >
                  {button.name}
                </div>
              ))}
            </div>
            {activeTab.toLowerCase() === "feed" && (
              <NewsFeed isAdmin={isAdmin} />
            )}
            {activeTab.toLowerCase() === "about" && <About />}
            {activeTab.toLowerCase() === "projects" && (
              <Projects isAdmin={isAdmin} />
            )}
            {activeTab.toLowerCase() === "guestbook" && (
              <GuessBook isAdmin={isAdmin} />
            )}
            <FootNav />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
