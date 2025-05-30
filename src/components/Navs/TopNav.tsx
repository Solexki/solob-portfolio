import Icon from "../Common/Icon";
import { useTheme } from "../Hooks/useTheme";

function TopNav() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <div className="top-nav">
        <div className="nav-item">
          <div className="logo">
            <img src="/vite.svg" alt="Logo" />
          </div>
          <div className="logo" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Icon.MdLightMode size={30} />
            ) : (
              <Icon.FaMoon size={30} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
