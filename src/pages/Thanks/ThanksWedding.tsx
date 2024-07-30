import React from "react";
import emailjs from "@emailjs/browser";
import { AuthContext } from "../../context/AuthContext";

const ThanksWedding = () => {
  const [orderFormInfoObj, setOrderFormInfoObj] = React.useState<any>();

  React.useEffect(() => {
    let data: any = localStorage.getItem("wedding-portrait-order-form");
    if (!data) {
      setOrderFormInfoObj({
        firstName: "ERROR",
        lastName: "ERROR",
        email: "We have an error bahbee, come get me",
        phoneNumber: "ERROR",
        address: "ERROR",
        city: "ERROR",
        state: "ERROR",
        zipCode: "ERROR",
        occasion: "ERROR",
        price: "ERROR",
      });
    } else {
      data = JSON.parse(data);
      setOrderFormInfoObj({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        address: data.address,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        occasion: data.occasion,
        price: data.price,
      });
    }
  }, []);

  React.useEffect(() => {
    if (orderFormInfoObj) {
      if (Object.values(orderFormInfoObj).every((value) => value !== "")) {
        sendEmail();
      }
    }
  }, [orderFormInfoObj]);

  function sendEmail() {
    const form = document.createElement("form");
    form.style.display = "none";

    Object.keys(orderFormInfoObj as any).forEach((key: any) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = orderFormInfoObj[key];
      form.appendChild(input);
    });
    document.body.appendChild(form);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL_TEMPLATE,
        form,
        {
          publicKey: import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }

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
        with tracking information! Please allow me 4 to 6 weeks to work on your
        piece
      </h5>
      <br />
      <p style={{ fontWeight: "600" }}>- Morgan</p>
    </div>
  );
};

export default ThanksWedding;
