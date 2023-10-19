import React from "react";
import { AuthContext } from "../../context/AuthContext";

const Thanks = () => {
  const { subtractInventory,  } =
    React.useContext(AuthContext);
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    let data: any = localStorage.getItem("morgs-paint-birthday-girls-cart");
    if (!data) {
      data = [];
    } else {
      data = JSON.parse(data);
    }
    setCart(data);
  }, []);

  React.useEffect(() => {
    if (cart?.length !== 0) {
      cart?.map((item: any) => {
        subtractInventory(item);
      });
    }
  }, [cart]);

  return (
    <div style={{ textAlign: "center", padding: "150px 50px" }}>
      <h1>Thank you for your purchase!</h1>
      <br />
      <br />
      <p style={{ fontWeight: "600" }}>Check your email for your receipt.</p>
      <br />
      <br />
      <h5>
        I will email you to notify you once your item has been shipped along
        with tracking information!
      </h5>
      <br />
      <p style={{ fontWeight: "600" }}>- Morgan</p>
    </div>
  );
};

export default Thanks;
