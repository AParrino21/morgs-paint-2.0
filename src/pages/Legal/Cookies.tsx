import React from "react";
import "./Legal.css";
import { Divider } from "@mui/material";

const Cookies = () => {
  return (
    <div className="legal">
      <header>
        <h1>Cookies Policy</h1>
      </header>
      <br />
      <Divider />
      <br />
      <div>
        <section>
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your computer or
            mobile device when you visit our website. They help us improve your
            browsing experience and understand how you use our site.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>2. Types of Cookies We Use</h2>
          <p>
            We use both session and persistent cookies. Session cookies are
            temporary and are deleted when you close your browser, while
            persistent cookies remain on your device for a specified period or
            until you delete them.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>3. How We Use Cookies</h2>
          <p>
            We use cookies to analyze site traffic, personalize content, and
            provide social media features. We may also share information about
            your use of our site with our social media, advertising, and
            analytics partners.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>4. Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings.
            However, please note that disabling cookies may affect your browsing
            experience and certain website features may not function properly.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>5. Changes to this Cookies Policy</h2>
          <p>
            We may update this Cookies Policy to reflect changes in our
            practices or for other operational, legal, or regulatory reasons.
            The updated Cookies Policy will be posted on this page.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Cookies Policy, you
            can contact us at morgandantonart@gmail.com.
          </p>
        </section>
        <Divider />
        <br />
      </div>

      <footer>
        <p>This Cookies Policy was last updated on 10/08/2023.</p>
      </footer>
    </div>
  );
};

export default Cookies;
