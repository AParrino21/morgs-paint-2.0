import React from "react";
import "./Cart.css";
import { AuthContext } from "../../context/AuthContext";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Divider,
} from "@mui/material";

const Cart = () => {
  const URL = import.meta.env.VITE_APP_MORGS_SERVER;
  const { cartItems, setCartItems } = React.useContext(AuthContext);

  function removeFromCart(e: React.MouseEvent<HTMLElement>) {
    let newCart = cartItems!.filter(
      (items: any) =>
        (items.id && items.id !== e.currentTarget.id) ||
        (items._id && items._id !== e.currentTarget.id)
    );
    setCartItems(newCart);
    localStorage.setItem(
      "morgs-paint-birthday-girls-cart",
      JSON.stringify(newCart)
    );
  }

  function checkOutNow() {
    fetch(URL + "create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    })
      .then((res) => res.json())
      .then((data) => {
        // redirecting the page using url from the backend
        window.location.href = data.url;
      });
    console.log(`${URL}create-checkout-session`);
  }

  return (
    <div>
      {cartItems?.length <= 0 && (
        <div className="cart-title-container">
          <h2>Cart Is Empty</h2>
        </div>
      )}
      {cartItems?.length > 0 && (
        <>
          <div className="cart-title-container">
            <h2>MY CART</h2>
          </div>
          <Divider />
          <div className="checkout-container">
            <Button variant="outlined" color="success" onClick={checkOutNow}>
              CHECK OUT
            </Button>
          </div>
          {cartItems?.map((item: any) => (
            <Card
              key={item?.id}
              sx={{ width: "90%", maxWidth: 500, margin: "50px auto" }}
            >
              <CardHeader title={item?.name} />
              {item?.src && (
                <CardMedia
                  className="img-card"
                  component="img"
                  height="600"
                  image={item?.src}
                  alt={item?.name}
                  id={item?._id}
                />
              )}
              {item?.image && (
                <CardMedia
                  className="img-card"
                  component="img"
                  height="600"
                  image={item?.image}
                  alt={item?.name}
                  id={item?._id}
                />
              )}
              {item?.imgUrl && (
                <CardMedia
                  className="img-card"
                  component="img"
                  height="600"
                  image={item?.imgUrl}
                  alt={item?.name}
                  id={item?.id}
                />
              )}
              <CardActions
                sx={{ justifyContent: "center", margin: "20px" }}
                disableSpacing
              >
                {item?.imgUrl ? (
                  <Button
                    variant="outlined"
                    color="error"
                    id={item.id}
                    onClick={(e) => removeFromCart(e)}
                  >
                    Remove From Cart
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    color="error"
                    id={item._id}
                    onClick={(e) => removeFromCart(e)}
                  >
                    Remove From Cart
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
