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
  const { paintings, addToCart, cartItems } = React.useContext(AuthContext);
  const [paintingPage, setPaintingPage] = React.useState<number>(0);
  const [viewdPainting, setViewedPainting] = React.useState<
    PaintingData[] | null
  >(null);
  const [paintingIsInCart, setPaintingIsInCart] = React.useState<boolean[]>([]);

  function viewPainting(e: React.MouseEvent<HTMLElement>) {
    let clickedPainting = paintings.filter(
      (painting) => painting.id === e.currentTarget.id
    );
    setPaintingPage(1);
    setViewedPainting(clickedPainting);

    let isInCart = cartItems.map(
      (i: any) => i.name === clickedPainting[0].name
    );
    const resultArray = isInCart.filter((value: boolean) => value === true);
    setPaintingIsInCart(resultArray);
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
                sx={{
                  width: "90%",
                  maxWidth: 500,
                  margin: "20px auto",
                  textAlign: "center",
                }}
              >
                <CardHeader
                  sx={{ fontFamily: "Cinzel !important" }}
                  title={painting?.name}
                />
                <CardMedia
                  className="img-card"
                  component="img"
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
          <Button
            onClick={() => {
              setPaintingPage(0);
              setViewedPainting(null);
            }}
          >
            BACK
          </Button>
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
              {painting?.quantity != 0 ? (
                <div className="viewed-painting-btns">
                  {paintingIsInCart[0] && (
                    <Button disabled variant="outlined">
                      IN CART!
                    </Button>
                  )}
                  {paintingIsInCart?.length === 0 && (
                    <Button
                      onClick={() => {
                        addToCart(painting);
                        setPaintingIsInCart([true]);
                      }}
                      variant="outlined"
                    >
                      Add To Cart
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      setPaintingPage(0);
                      setViewedPainting(null);
                    }}
                    variant="outlined"
                    color="error"
                  >
                    Go Back
                  </Button>
                </div>
              ) : (
                <div className="viewed-painting-btns">
                  <Button
                    onClick={() => {
                      setPaintingPage(0);
                      setViewedPainting(null);
                    }}
                    variant="outlined"
                    color="error"
                  >
                    Go Back
                  </Button>
                </div>
              )}
              <br />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PaintingLayout;
