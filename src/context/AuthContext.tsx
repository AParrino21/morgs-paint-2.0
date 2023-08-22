import React from "react";

import { AuthProviderProps, PaintingData, childrenProps } from "../types";
import axios from "axios";

export const AuthContext = React.createContext({} as AuthProviderProps);
import { cakeGirlPaintings } from "../paintings";

export const AuthProvider = ({ children }: childrenProps) => {
  const [alertMessage, setAlertMessage] = React.useState<string>("");
  const [alertStatus, setAlertStatus] = React.useState<string>("");
  const [openAlert, setOpenAlert] = React.useState<boolean>(false);
  const [backgrounds, setBackgrounds] = React.useState([]);
  const [paintings, setPaintings] = React.useState<PaintingData[]>([]);

  const url = import.meta.env.VITE_APP_MORGS_API_URL;

  function setAlert(aStatus: string, aMessage: string) {
    setOpenAlert(true);
    setAlertStatus(aStatus);
    setAlertMessage(aMessage);
  }

  async function getBackgrounds() {
    try {
      const response = await axios.get(`${url}backgrounds`);
      setBackgrounds(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getPaintings() {
    // try {
    //   const response = await axios.get(`${url}cakeGirlPaintings`)
    //   setPaintings(response)
    // }
    // catch (error) {
    //   console.log(error)
    // }
    setPaintings(cakeGirlPaintings);
  }

  React.useEffect(() => {
    // getBackgrounds();
    getPaintings();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        alertMessage,
        alertStatus,
        setAlert,
        openAlert,
        setOpenAlert,
        backgrounds,
        paintings
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
