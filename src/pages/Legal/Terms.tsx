import React from "react";
import "./Legal.css";
import { Divider } from "@mui/material";

const Terms = () => {
  return (
    <div className="legal">
      <header>
        <h1>Terms of Use</h1>
      </header>
      <br />
      <Divider />
      <br />
      <div>
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            Welcome to Morgandanton.com. By using this website, you agree to
            comply with and be bound by the following terms and conditions of
            use. If you do not agree to these terms, please do not use this
            website.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>2. Use of the Website</h2>
          <p>
            You may use this website for personal and non-commercial purposes
            only. You agree not to use this website for any unlawful or
            prohibited purpose.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text,
            images, and artwork, is the intellectual property of
            Morgandanton.com and is protected by copyright and other
            intellectual property laws.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>4. User Accounts</h2>
          <p>
            If you create an account on this website, you are responsible for
            maintaining the confidentiality of your account and password. You
            agree to accept responsibility for all activities that occur under
            your account.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>5. Privacy Policy</h2>
          <p>
            Your use of this website is also governed by our{" "}
            <a href="/privacy-policy">Privacy Policy</a>, which is incorporated
            by reference into these Terms of Use.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            Morgandanton.com shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits
            or revenues, whether incurred directly or indirectly.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>7. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of Florida.
          </p>
        </section>
        <Divider />
        <br />

        <section>
          <h2>8. Changes to Terms</h2>
          <p>
            Morgandanton.com reserves the right to modify these terms at any
            time. Updated terms will be effective immediately upon posting. It
            is your responsibility to review these terms regularly.
          </p>
        </section>
        <Divider />
        <br />
      </div>

      <footer>
        <p>This document was last updated on 10/08/2023.</p>
      </footer>
    </div>
  );
};

export default Terms;
