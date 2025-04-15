import React, { FC } from "react";
import { Provider } from "react-redux";
import store from "../store/Store";
interface IChildProps {
  children: React.ReactNode;
}

const ReduxProvider: FC<IChildProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
