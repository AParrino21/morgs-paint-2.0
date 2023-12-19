import { Button } from "@mui/material";
import React from "react";
import { ViewPaintingProps } from "../../types";

const ViewPainting: React.FC<ViewPaintingProps> = ({
  setPaintingPage,
  setChosenPainting,
  chosenPainting,
  viewGalleryPainting,
  paintingIsInCart,
  addToCart,
  setPaintingIsInCart,
}) => {
  return (
    <div>
      <Button
        onClick={() => {
          setPaintingPage(0);
          setChosenPainting(null);
        }}
      >
        BACK
      </Button>
      <div className="gallery-container">
        <div className="gallery-item">
          <h2>{chosenPainting![0].name}</h2>
          <br />
          <p>{chosenPainting![0].bio}</p>
          <p>{chosenPainting![0].description}</p>
          <br />
          {chosenPainting![0].cat === "mixed_media" && (
            <img
              onClick={(e) => viewGalleryPainting(e)}
              className="gallery-viewed-img"
              id={chosenPainting![0]._id}
              src={chosenPainting![0].src}
              alt="painting"
            />
          )}
          {chosenPainting![0].cat === "painting" && (
            <img
              onClick={(e) => viewGalleryPainting(e)}
              className="gallery-viewed-img"
              id={chosenPainting![0]._id}
              src={chosenPainting![0].image}
              alt="painting"
            />
          )}
          <br />
          <br />
          <p>{chosenPainting![0].size}</p>
          <br />
          <p>{chosenPainting![0].price} USD</p>
          <br />
          {chosenPainting![0].inventory > 0 ? (
            <p style={{ color: "green" }}>AVAILABLE</p>
          ) : (
            <p style={{ color: "red" }}>SOLD</p>
          )}
          <br />
          {chosenPainting![0].inventory != 0 ? (
            <div className="gallery-btns">
              {paintingIsInCart[0] && (
                <Button disabled variant="outlined">
                  IN CART!
                </Button>
              )}
              {paintingIsInCart?.length === 0 && (
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => {
                    addToCart(chosenPainting![0]);
                    setPaintingIsInCart([true]);
                  }}
                >
                  ADD TO CART
                </Button>
              )}
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  setPaintingPage(0);
                  setChosenPainting(null);
                }}
              >
                GO BACK
              </Button>
            </div>
          ) : (
            <div className="gallery-btns">
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  setPaintingPage(0);
                  setChosenPainting(null);
                }}
              >
                GO BACK
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewPainting;
