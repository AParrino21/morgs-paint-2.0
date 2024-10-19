import React from "react";
import "./WeddingPortraits.css";
import { Divider } from "@mui/material";
import OrderFormModal from "../../components/OrderFormModal/OrderFormModal";
import { PortraitInfo } from "../../types";

import WeddingFlowers from "./weddingFlowers.png";
import AboutFlowers from "./weddingAbout.png";
import Artist from "./artist.jpg";
import Size1 from "./size1.jpeg";
import Size2 from "./size2.jpeg";
import WeddingImage from "../Home/wedding.jpg";
import weddingPort from "./weddingPort.jpeg";
import weddingVid from "./weddingVid.mp4";

import { AuthContext } from "../../context/AuthContext";

const WeddingPortraits = () => {
  const [openOrderForm, setOpenOrderForm] = React.useState<boolean>(false);
  const [priceChosen, setPriceChosen] = React.useState<string | undefined>();
  const [file, setFile] = React.useState<any>(null);

  const { setOrderFormInfo } = React.useContext(AuthContext);

  const handleClose = () => {
    setFile(null);
    setOpenOrderForm(false);
    setOrderFormInfo({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      occasion: "",
      price: "",
    });
  };

  function handlePriceChosen(price: string) {
    setOpenOrderForm(true);
    setPriceChosen(price);
    setOrderFormInfo({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      occasion: "",
      price: price,
    });
  }

  return (
    <div className="wedding-page-container">
      <div className="wedding-page-title-container">
        <p className="wedding-page-title">Your Wedding Portrait</p>
        <div>
          <img
            className="wedding-flowers-img"
            src={WeddingFlowers}
            alt="wedding flowers"
          />
        </div>
      </div>
      <div className="wedding-page-subtext-container">
        <p className="wedding-page-subtext-title">
          Capture Your Love Story in Art
        </p>
        <p className="wedding-page-subtext">
          Have your most cherished moments transformed into timeless works of
          art. Whether you're looking to immortalize a magical first dance, a
          heartfelt exchange of vows, or a candid moment of joy.
        </p>
      </div>
      <Divider />
      <div className="meet-me-container">
        <div className="meet-me-img-container">
          <img className="meet-me-img" src={AboutFlowers} alt="flower" />
          <p className="meet-me-title">Meet the Artist</p>
          <img className="meet-me-img" src={AboutFlowers} alt="flower" />
        </div>
        <div className="artist-img-container">
          <img className="artist-img" src={Artist} alt="artist" />
        </div>
        <p className="meet-me-subtext">
          Morgan is a skilled and passionate artist with decades of experience
          in capturing beauty and emotion and putting it onto a canvas. With a
          keen eye for detail and a deep understanding of color and composition,
          Morgan creates portraits that are not only visually stunning but also
          rich with sentiment and personality.
        </p>
      </div>
      <Divider />
      <div className="pricing-container">
        <p className="pricing-title">Pricing</p>
        <div className="size-img-container">
          <img className="size-img" src={Size1} alt="size1" />
          <img className="size-img" src={Size2} alt="size2" />
        </div>
        <Divider />
        <p className="choose">Choose A Size to be Taken to the Order Form</p>
        <Divider />
        <div className="size-details-container">
          <div onClick={() => handlePriceChosen("1800")} className="size-card">
            <p>Small</p>
            <p className="size18x24 size">18" x 24"</p>
            <button
              onClick={() => handlePriceChosen("1800")}
              className="size-btn"
            >
              $ 1800
            </button>
          </div>
          <div onClick={() => handlePriceChosen("2400")} className="size-card">
            <p>Medium</p>
            <p className="size24x30 size">24" x 30"</p>
            <button
              onClick={() => handlePriceChosen("2400")}
              className="size-btn"
            >
              $ 2400
            </button>
          </div>
          <div onClick={() => handlePriceChosen("3000")} className="size-card">
            <p>Large</p>
            <p className="size30x40 size">30" x 40"</p>
            <button
              onClick={() => handlePriceChosen("3000")}
              className="size-btn"
            >
              $ 3000
            </button>
          </div>
        </div>
        <div className="order-time-container">
          <p className="order-time-text">
            Orders take approximately 4 to 6 weeks to complete.An email with
            tracking information will be sent once your painting has been
            shipped.
          </p>
        </div>
        <div className="featured-comission-title">
          <Divider />
          <p className="choose">Featured Comissions</p>
          <Divider />
        </div>
        <div className="wedding-arts-container">
          <img className="wedding-image" src={WeddingImage} alt="weddingpic1" />
          <video
            className="video-file"
            controls
            muted
            autoPlay
            loop
            src={weddingVid}
          />
          <img className="wedding-image" src={weddingPort} alt="weddingpic2" />
        </div>
      </div>
      <OrderFormModal
        open={openOrderForm}
        handleClose={handleClose}
        setFile={setFile}
      />
    </div>
  );
};

export default WeddingPortraits;
