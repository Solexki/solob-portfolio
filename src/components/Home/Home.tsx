import React from "react";
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

import { SceneCanvas } from "../SceneCanvas";

function Home() {
  const [activeTab, setActiveTab] = React.useState("Feed");
  const { isAdmin } = useAuth();

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
      link: "https://solomonobafemi.com/links",
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
              <SceneCanvas />
            </div>
            <div className="home-page">
              <div className="profile-area">
                <div className="profile-header">
                  <div className="profile-img">
                    <img src={defaultImages.profileImage} alt="Profile" />
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
            <div className="tab-buttons">
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
            {activeTab === "Feed" && <NewsFeed isAdmin={isAdmin} />}
            {activeTab === "About" && <About />}
            {activeTab === "Projects" && <Projects isAdmin={isAdmin} />}
            {activeTab === "Guestbook" && <GuessBook isAdmin={isAdmin} />}
            <FootNav />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
