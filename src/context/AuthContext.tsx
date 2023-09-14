import React from "react";

import { AuthProviderProps, PaintingData, childrenProps } from "../types";
import axios from "axios";

export const AuthContext = React.createContext({} as AuthProviderProps);

export const AuthProvider = ({ children }: childrenProps) => {
  const [alertMessage, setAlertMessage] = React.useState<string>("");
  const [alertStatus, setAlertStatus] = React.useState<string>("");
  const [openAlert, setOpenAlert] = React.useState<boolean>(false);
  const [paintings, setPaintings] = React.useState<PaintingData[]>([]);
  const [cartItems, setCartItems] = React.useState<PaintingData[]>([]);

  const url = import.meta.env.VITE_APP_MORGS_API_URL;

  function setAlert(aStatus: string, aMessage: string) {
    setOpenAlert(true);
    setAlertStatus(aStatus);
    setAlertMessage(aMessage);
  }

  async function getPaintings() {
    try {
      const response = await axios.get(`${url}cakeGirls`);
      setPaintings(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function getCartItems() {
    let storage: any = localStorage.getItem("morgs-paint-birthday-girls-cart");
    if (storage?.length > 0) {
      storage = JSON.parse(storage);
      setCartItems(storage);
    }
  }

  React.useEffect(() => {
    getPaintings();
    getCartItems();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        alertMessage,
        alertStatus,
        setAlert,
        openAlert,
        setOpenAlert,
        paintings,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
