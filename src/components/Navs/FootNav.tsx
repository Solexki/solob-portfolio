import React from "react";
import Icon from "../Common/Icon";

function FootNav() {
  type SocialIcons = {
    link: string;
    icon: React.ReactNode;
  };
  const socials: SocialIcons[] = [
    {
      link: "https://twitter.com/solexki",
      icon: <Icon.FaXTwitter size={20} />,
    },
    {
      link: "https://www.linkedin.com/in/solexki/",
      icon: <Icon.FaLinkedinIn size={20} />,
    },
    {
      link: "https://www.upwork.com/freelancers/~01719fe6e879b234fe",
      icon: <Icon.SiUpwork size={20} />,
    },

    {
      link: "https://t.me/solexki",
      icon: <Icon.FaTelegram size={20} />,
    },
    {
      link: "https://instergram.com/solexki",
      icon: <Icon.FaInstagram size={20} />,
    },
    {
      link: "https://github.com/Solexki",
      icon: <Icon.FaGithub size={20} />,
    },
  ];

  return (
    <div>
      <div className="social-area">
        <div className="social-links">
          {socials.map((social, index) => (
            <div key={index} className="socials">
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="copy-right">
        <p className="secondary-text">
          Solomon Obafemi &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default FootNav;
