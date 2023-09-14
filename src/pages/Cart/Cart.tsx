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
  const { cartItems, setCartItems } = React.useContext(AuthContext);

  function removeFromCart(e: React.MouseEvent<HTMLElement>) {
    console.log(e.currentTarget.id);

    let newCart = cartItems!.filter((items) => items.id !== e.currentTarget.id);
    setCartItems(newCart);
    localStorage.setItem(
      "morgs-paint-birthday-girls-cart",
      JSON.stringify(newCart)
    );
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
            <Button variant="outlined" color="success">
              CHECK OUT
            </Button>
          </div>
          {cartItems?.map((item) => (
            <Card
              key={item?.id}
              sx={{ width: "90%", maxWidth: 500, margin: "50px auto" }}
            >
              <CardHeader title={item?.name} />
              <CardMedia
                className="img-card"
                component="img"
                height="600"
                image={item?.imgUrl}
                alt={item?.name}
                id={item?.id}
              />
              <CardActions
                sx={{ justifyContent: "center", margin: "20px" }}
                disableSpacing
              >
                <Button
                  variant="outlined"
                  color="error"
                  id={item.id}
                  onClick={(e) => removeFromCart(e)}
                >
                  Remove From Cart
                </Button>
              </CardActions>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
