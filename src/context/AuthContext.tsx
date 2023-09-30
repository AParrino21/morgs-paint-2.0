import React from "react";

import { AuthProviderProps, GalleryData, PaintingData, childrenProps } from "../types";
import axios from "axios";

export const AuthContext = React.createContext({} as AuthProviderProps);

export const AuthProvider = ({ children }: childrenProps) => {
  const [alertMessage, setAlertMessage] = React.useState<string>("");
  const [alertStatus, setAlertStatus] = React.useState<string>("");
  const [openAlert, setOpenAlert] = React.useState<boolean>(false);
  const [paintings, setPaintings] = React.useState<PaintingData[]>([]);
  const [cartItems, setCartItems] = React.useState<PaintingData[]>([]);

  const [oils, setOils] = React.useState([])
  const [mixedMedia, setMixedMedia] = React.useState([])

  const url = import.meta.env.VITE_APP_MORGS_API_URL;
  const sUrl = import.meta.env.VITE_APP_MORGS_SERVER;

  function setAlert(aStatus: string, aMessage: string) {
    setOpenAlert(true);
    setAlertStatus(aStatus);
    setAlertMessage(aMessage);
  }

  const getAllOils = async () => {
    try {
      const response = await axios.get(sUrl + 'api/paintings/oils')
      setOils(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getAllMixedMedia = async () => {
    try {
      const response = await axios.get(sUrl + 'api/paintings/mixedmedia')
      setMixedMedia(response.data)
    } catch (error) {
      console.log(error)
    }
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

  function addToCart(painting: PaintingData | GalleryData) {
    let storage: any = localStorage.getItem("morgs-paint-birthday-girls-cart");
    if (!storage) {
      storage = [];
    } else {
      storage = JSON.parse(storage);
    }
    storage.push(painting);
    localStorage.setItem(
      "morgs-paint-birthday-girls-cart",
      JSON.stringify(storage)
    );
    setCartItems(storage);
  }

  React.useEffect(() => {
    getPaintings();
    getCartItems();
    getAllOils();
    getAllMixedMedia();
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
        oils,
        mixedMedia,
        addToCart
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
