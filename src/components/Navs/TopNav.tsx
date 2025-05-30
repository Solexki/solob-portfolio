import React from "react";
import Icon from "../Common/Icon";

function TopNav() {
  return (
    <div>
      <div className="top-nav">
        <div className="nav-item">
          <div className="logo">
            <img src="/vite.svg" alt="Logo" />
          </div>
          <div className="logo">
            <Icon.MdLightMode size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
