import React from "react";
import "../../assets/styles/styles.css";

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
function Container(props: ContainerProps) {
  const { children, className, style } = props;
  return (
    <div className={`main-container ${className || ""}`} style={style}>
      <div className="main-content">{children}</div>
    </div>
  );
}

export default Container;
