"use client";
// import defaultImages from "../Common/defaultImages";
import Icon from "../Common/Icon";
import LogoSvg from "../Common/LogoSvg";
import { useTheme } from "../Hooks/useTheme";

function TopNav() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <div className="top-nav">
        <div className="nav-item">
          <div className="logo">
            <LogoSvg />
          </div>
          <div className="logo" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Icon.MdLightMode size={30} />
            ) : (
              <Icon.BsFillTvFill size={30} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
