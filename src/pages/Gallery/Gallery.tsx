import React from "react";
import "./Gallery.css";
import { AuthContext } from "../../context/AuthContext";
import { GalleryData } from "../../types";
import { Button } from "@mui/material";

const Gallery = () => {
  const { oils, mixedMedia, addToCart, galleryHeader, cartItems } =
    React.useContext(AuthContext);
  const [paintingPage, setPaintingPage] = React.useState<number>(0);
  const [chosenPainting, setChosenPainting] = React.useState<
    GalleryData[] | null
  >(null);
  const [paintingIsInCart, setPaintingIsInCart] = React.useState<boolean[]>([]);

  function viewGalleryPainting(e: React.MouseEvent<HTMLElement>) {
    const paitings: GalleryData[] = [];
    mixedMedia?.map((item) => paitings.push(item));
    oils?.map((item) => paitings.push(item));

    const clickedPainting = paitings.filter(
      (paiting) => paiting._id === e.currentTarget.id
    );

    setPaintingPage(1);

    const allArt: GalleryData[] = [];
    oils.map((o) => allArt.push(o));
    mixedMedia.map((m) => allArt.push(m));
    const viewedPainting = allArt.filter((a) => a._id === e.currentTarget.id);
    setChosenPainting(viewedPainting);

    let isInCart = cartItems.map(
      (i: any) => i.name === clickedPainting[0].name
    );
    const resultArray = isInCart.filter((value: boolean) => value === true);
    setPaintingIsInCart(resultArray);
  }

  return (
    <div>
      {paintingPage === 0 && (
        <div>
          <div>
            <img className="header" src={galleryHeader} alt="header" />
          </div>
          <div className="gallery-container">
            {mixedMedia?.map((mixed) => (
              <div key={mixed._id} className="gallery-item">
                <h2>{mixed.name}</h2>
                <br />
                <p>{mixed.bio}</p>
                <br />
                <p>{mixed.size}</p>
                <br />
                <img
                  onClick={(e) => viewGalleryPainting(e)}
                  className="gallery-img"
                  id={mixed._id}
                  src={mixed.src}
                  alt="painting"
                />
              </div>
            ))}

            {oils?.map((oil) => (
              <div key={oil._id} className="gallery-item">
                <h2>{oil.name}</h2>
                <br />
                <p>{oil.description}</p>
                <br />
                <p>{oil.size}</p>
                <br />
                <img
                  onClick={(e) => viewGalleryPainting(e)}
                  className="gallery-img"
                  id={oil._id}
                  src={oil.image}
                  alt="painting"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {paintingPage === 1 && (
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
      )}
    </div>
  );
};

export default Gallery;
