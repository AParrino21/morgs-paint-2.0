import React from "react";
import "./Legal.css";
import { Divider } from "@mui/material";

const Privacy = () => {
  return (
    <div className="legal">
      <header>
        <h1>Privacy Policy</h1>
      </header>
      <br />
      <Divider />
      <br />
      <div>
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We may collect various types of information, including personal and
            non-personal information, when you use our website. This may include
            your name, email address, IP address, and browsing behavior.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>
            We may use your information for purposes such as improving our
            website, responding to your inquiries, and sending you updates and
            promotions. We will never sell your personal information to third
            parties.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>3. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to collect
            information about your browsing behavior and preferences. You can
            control cookies through your browser settings.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>4. Data Security</h2>
          <p>
            We take reasonable measures to protect your data from unauthorized
            access, disclosure, alteration, and destruction. However, no method
            of data transmission over the internet is entirely secure.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these websites.
            We encourage you to review the privacy policies of these third-party
            sites.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>6. Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes in our
            practices or for other operational, legal, or regulatory reasons.
            The updated Privacy Policy will be posted on this page.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy, you
            can contact us at morgandantonart@gmail.com.
          </p>
        </section>
        <Divider />
        <br />
      </div>

      <footer>
        <p>This Privacy Policy was last updated on 10/08/2023.</p>
      </footer>
    </div>
  );
};

export default Privacy;
