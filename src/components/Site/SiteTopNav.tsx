import React, { useEffect, useState } from "react";
import Icon from "../Common/Icon";
import { socials } from "../Navs/FootNav";
import SkeletonLoader from "../Common/SkeletonLoader";

type TopBtn = {
  name: string;
  link: string;
};

function SiteTopNav() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    let isMunted = true;
    if (isMunted) {
      setIsMobile(window.innerWidth <= 768);
      setIsLoading(false);
    }
    return () => {
      isMunted = false;
    };
  }, []);

  const [displayExtraBtn, setDisplayExtraBtn] = useState<boolean>(false);
  const topBtn: TopBtn[] = [
    { name: "Work", link: "/work" },
    { name: "Why Me", link: "../#why-me" },
    { name: "About", link: "../v1/#about-me" },
    { name: "Contact", link: "../#contact" },
  ];
  const extraBtns: TopBtn[] = [
    { name: "Portfolio V1", link: "/v1" },
    { name: "Testimonies", link: "../#testimony" },
    { name: "FAQs", link: "../#faq-section" },
  ];

  const mobileBtn = topBtn.filter((btn) => btn.name !== "Contact");
  const extraBtn: TopBtn[] = isMobile
    ? [...mobileBtn, ...extraBtns]
    : extraBtns;
  const exclude = ["Github", "Telegram"];

  return (
    <>
      <div className="fixedTop">
        <div className="fixed-content">
          <div className="fixedPic">
            <img
              src={"/images/solob-p.webp"}
              alt=""
              style={{ width: "35px", height: "35px", borderRadius: "50%" }}
            />
          </div>
          <div className="fixedBtnList">
            <div className="main-btns">
              {!isMobile &&
                !isLoading &&
                topBtn.map((btn, index) => (
                  <a key={index} href={btn.link}>
                    <div
                      className={`fixedBtn ${
                        btn.name === "Contact" ? "contact-btn" : ""
                      }`}
                    >
                      {btn.name}
                    </div>
                  </a>
                ))}
              {isMobile && (
                <a href={"../#contact"}>
                  <div className="fixedBtn contact-btn">Contact</div>
                </a>
              )}
              <div
                className={`fixedBtn menu-btn ${displayExtraBtn ? "open" : ""}`}
                onClick={() => setDisplayExtraBtn(!displayExtraBtn)}
              >
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`extra-btns ${displayExtraBtn ? "show-extra-btn" : ""}`}
        >
          {extraBtn.map((btn, index) => (
            <div
              key={index}
              className="extra-btn"
              style={{
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              <a href={btn.link}>
                <div className="extra-btn-social">
                  <span> {btn.name}</span>
                </div>
              </a>
            </div>
          ))}
          <div
            className="extra-btn"
            style={{
              transitionDelay: `0.5s`,
            }}
          >
            {socials
              .filter((btn) => !exclude.includes(btn.name))
              .map((btn) => (
                <a key={btn.id} href={btn.link}>
                  <div
                    className="extra-btn-social"
                    style={{ padding: "10px 0" }}
                  >
                    <span> {btn.name}</span> <Icon.TbArrowUpRight size={18} />
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteTopNav;
