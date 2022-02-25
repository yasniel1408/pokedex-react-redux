import { FC, ReactNode } from "react";
import Menu from "../Menu";
import "./styles.css";

type AppProps = {
  children: ReactNode;
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
