import React from "react";
import "./PaintingLayout.css";
import { AuthContext } from "../../context/AuthContext";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
} from "@mui/material";
import { PaintingData } from "../../types";

const PaintingLayout = () => {
  const { paintings, setCartItems } = React.useContext(AuthContext);
  const [paintingPage, setPaintingPage] = React.useState<number>(0);
  const [viewdPainting, setViewedPainting] = React.useState<
    PaintingData[] | null
  >(null);

  function viewPainting(e: React.MouseEvent<HTMLElement>) {
    let clickedPainting = paintings.filter(
      (painting) => painting.id === e.currentTarget.id
    );
    setPaintingPage(1);
    setViewedPainting(clickedPainting);
  }

  function addToCart(painting: PaintingData) {
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

  return (
    <>
      {paintingPage === 0 && (
        <div className="painting-layout-root">
          {paintings
            ?.sort((a, b) => (a.id as any) - (b.id as any))
            .map((painting) => (
              <Card
                key={painting?.id}
                sx={{ width: "90%", maxWidth: 500, margin: "20px auto" }}
              >
                <CardHeader title={painting?.name} />
                <CardMedia
                  className="img-card"
                  component="img"
                  height="600"
                  image={painting?.imgUrl}
                  alt={painting?.name}
                  id={painting?.id}
                  onClick={(e) => viewPainting(e)}
                />
                <CardActions disableSpacing>
                  {/* <Button id={painting.id} onClick={(e) => viewPainting(e)}>VIEW</Button> */}
                </CardActions>
              </Card>
            ))}
        </div>
      )}
      {paintingPage === 1 && (
        <div>
          <Button onClick={() => setPaintingPage(0)}>BACK</Button>
          <br />
          {viewdPainting?.map((painting) => (
            <div key={painting?.id} className="viewed-painting-container">
              <h1>{painting.name}</h1>
              <img
                className="viewed-painting-img"
                src={painting?.imgUrl}
                alt="painting"
              />
              <p>{painting?.size} in</p>
              <br />
              <p>{painting?.price} USD</p>
              <br />
              <div>
                {painting?.quantity == 1 ? (
                  <p style={{ color: "green" }}>AVAILABLE</p>
                ) : (
                  <p style={{ color: "red" }}>SOLD OUT</p>
                )}
              </div>
              <br />
              <div className="viewed-painting-btns">
                <Button onClick={() => addToCart(painting)} variant="outlined">
                  Add To Cart
                </Button>
                <Button
                  onClick={() => setPaintingPage(0)}
                  variant="outlined"
                  color="error"
                >
                  Go Back
                </Button>
              </div>
              <br />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PaintingLayout;
