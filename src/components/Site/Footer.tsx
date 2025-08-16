import React from "react";
import LogoSvg from "../Common/LogoSvg";
import Icon from "../Common/Icon";

function Footer() {
  type FooterLink = {
    title: string;
    links: {
      name: string;
      href: string;
      icon?: React.ComponentType<{ size?: number }>;
    }[];
  };
  const footerLinks: FooterLink[] = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/v1/#about" },
        { name: "Projects", href: "/work" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Reach out",
      links: [
        { name: "Email", href: "mailto:solomonobafemi@gmail.com" },
        { name: "Whatsapp", href: "https://wa.me/2347058119411" },
      ],
    },
    {
      title: "Socials",
      links: [
        {
          name: "Twitter",
          href: "https://x.com/solexki",
          icon: Icon.FaXTwitter,
        },
        {
          name: "Linkedin",
          href: "https://www.linkedin.com/in/solexki/",
          icon: Icon.FaLinkedinIn,
        },
        {
          name: "Upwork",
          href: "https://www.upwork.com/freelancers/~01719fe6e879b234fe",
          icon: Icon.SiUpwork,
        },
      ],
    },
  ];

  return (
    <div className="project-footer">
      <div className="footer-content">
        <div className="slide-track">
          <span className="slide-text">
            Bring your ideas to life with innovative solutions. - One Block of
            code at a time!
          </span>
          <span className="slide-text">
            Bring your ideas to life with innovative solutions. - One Block of
            code at a time!
          </span>
        </div>

        <div className="footer-items">
          <div className="footer-logo">
            <LogoSvg />
          </div>
          <div className="footer-item">
            {footerLinks.map((section, index) => (
              <div className="items-data" key={index}>
                <h2>{section.title}</h2>
                <div className="items">
                  {section.links.map((link, linkIndex) => (
                    <a href={link.href} key={linkIndex}>
                      {!link?.icon ? (
                        <Icon.HiChevronRight />
                      ) : (
                        <link.icon size={10} />
                      )}
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
