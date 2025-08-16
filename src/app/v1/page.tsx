import LogoSvg from "@/components/Common/LogoSvg";
import Home from "@/components/Home/Home";
import React from "react";

function page() {
  return (
    <>
      <Home />
      <div className="bg-logo">
        <LogoSvg className="bg-logo-svg" />
      </div>
    </>
  );
}

export default page;
