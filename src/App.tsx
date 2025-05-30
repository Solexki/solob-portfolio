import Home from "./components/Home/Home";
import AuthUser from "./components/Auth/AuthUser";
import { Route, Routes } from "react-router-dom";

function App() {
  const authRoute = import.meta.env.VITE_APP_AUTH_ROUTE;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={authRoute} element={<AuthUser />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
