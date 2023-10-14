import { Divider } from "@mui/material";
import React from "react";
import "./Legal.css";

const Returns = () => {
  return (
    <div className="legal">
      <header>
        <h1>No Returns Policy</h1>
      </header>
      <br />
      <Divider />
      <br />

      <div>
        <section>
          <h2>1. All Sales Are Final</h2>
          <p>
            At Morgandanton.com, all sales are final. We do not accept returns,
            refunds, or exchanges for any products purchased on our website,
            including artwork and other items.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>2. Damaged or Defective Items</h2>
          <p>
            If you receive a damaged or defective item, please contact us upon
            receiving your order. We will work with you to resolve the issue,
            which may include providing a replacement or a refund.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>3. Contact Us</h2>
          <p>
            If you have any questions or concerns about our No Returns Policy,
            you can contact us at [Your Contact Information].
          </p>
        </section>
        <Divider />
        <br />
      </div>

      <footer>
        <p>This No Returns Policy was last updated on 10/08/2023.</p>
      </footer>
    </div>
  );
};

export default Returns;
