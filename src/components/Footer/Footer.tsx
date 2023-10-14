import React from "react";
import "./Footer.css";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div className="footer-root">
      <Divider />
      <Card>
        <CardContent>
          <div>
            <Typography
              sx={{ fontSize: 12 }}
              color="text.secondary"
              gutterBottom
            >
              <Link className="legal-links" to="/terms-of-use">
                Terms of Use
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: 12 }}
              color="text.secondary"
              gutterBottom
            >
              <Link className="legal-links" to="/privacy-policy">
                Privacy Policy
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: 12 }}
              color="text.secondary"
              gutterBottom
            >
              <Link className="legal-links" to="/cookie-policy">
                Cookies Policy
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: 12 }}
              color="text.secondary"
              gutterBottom
            >
              <Link className="legal-links" to="/returns">
                Refunds
              </Link>
            </Typography>
            <Typography
              sx={{ fontSize: 12 }}
              color="text.secondary"
              gutterBottom
            >
              <Link className="legal-links" to="/contact">
                Contact
              </Link>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Footer;
