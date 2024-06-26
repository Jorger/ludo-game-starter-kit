import "./styles.css";
import { useWindowResize } from "../../../hooks";
import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  useWindowResize();

  return (
    <div className="container">
      <div className="screen">{children}</div>
    </div>
  );
};

export default React.memo(Container);
