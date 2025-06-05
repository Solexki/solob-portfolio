import Home from "./components/Home/Home";
import AuthUser from "./components/Auth/AuthUser";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Home/Projects";
import ImgInput from "./components/Common/ImgInput";
import LogoSvg from "./components/Common/LogoSvg";

function App() {
  const authRoute = import.meta.env.VITE_APP_AUTH_ROUTE;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={authRoute} element={<AuthUser />} />
        <Route path="*" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/input" element={<ImgInput />} />
      </Routes>
      <div className="bg-logo">
        <LogoSvg className="bg-logo-svg" />
      </div>
    </>
  );
}

export default App;
