import React from "react";

import { AuthProviderProps, childrenProps } from "../types";

export const AuthContext = React.createContext({} as AuthProviderProps);

export const AuthProvider = ({ children }: childrenProps) => {
  const [alertMessage, setAlertMessage] = React.useState<string>("");
  const [alertStatus, setAlertStatus] = React.useState<string>("");
  const [openAlert, setOpenAlert] = React.useState<boolean>(false);

  //   const URL = import.meta.env.VITE_APP_SERVER_URL;


  function setAlert(aStatus: string, aMessage: string) {
    setOpenAlert(true);
    setAlertStatus(aStatus);
    setAlertMessage(aMessage);
  }

  return (
    <AuthContext.Provider
      value={{
        alertMessage,
        alertStatus,
        setAlert,
        openAlert,
        setOpenAlert,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
