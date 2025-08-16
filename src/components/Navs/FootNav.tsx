import React from "react";
import Icon from "../Common/Icon";
type SocialIcons = {
  id:number;
  link: string;
  name: string;
  icon: React.ReactNode;
};
export const socials: SocialIcons[] = [
  {
    id: 1,
    link: "https://twitter.com/solexki",
    icon: <Icon.FaXTwitter size={20} />,
    name: "Twitter",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/solexki/",
    icon: <Icon.FaLinkedinIn size={20} />,
    name: "LinkedIn",
  },
  {
    id: 3,
    link: "https://www.upwork.com/freelancers/~01719fe6e879b234fe",
    icon: <Icon.SiUpwork size={20} />,
    name: "Upwork",
  },

  {
    id: 4,
    link: "https://t.me/solexki",
    icon: <Icon.FaTelegram size={20} />,
    name: "Telegram",
  },
  {
    id: 5,
    link: "https://github.com/Solexki",
    icon: <Icon.FaGithub size={20} />,
    name: "Github",
  },
];

function FootNav() {
 

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
