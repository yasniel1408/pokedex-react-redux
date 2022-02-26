import { FC, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Message } from "semantic-ui-react";
import { clearError } from "../../redux/actions/actions";
import Menu from "../Menu";
import "./styles.css";

type AppProps = {
  children: ReactNode;
};

const Layout: FC<AppProps> = ({ children }) => {
  const errorMessage = useSelector((state: any) => state.error);
  const dispatch = useDispatch();

  const handleDismiss = () => {
    dispatch(clearError());
  };

  return (
    <div>
      <Menu />
      <div className="Layout-content">{children}</div>
      {errorMessage && (
        <div className="errorWrapper wrapper">
          <Message
            onDismiss={handleDismiss}
            content={errorMessage}
            color="red"
          />
        </div>
      )}
    </div>
  );
};

export default Layout;
