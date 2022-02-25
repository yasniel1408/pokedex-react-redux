import React, { FC } from "react";
import Menu from "../Menu";
import "./styles.css";

type AppProps = {
  children: React.ReactNode;
};

const Layout: FC<AppProps> = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className="Layout-content">{children}</div>
    </div>
  );
};

export default Layout;
