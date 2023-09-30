import React from "react";
import "./Home.css";
import { AuthContext } from "../../context/AuthContext";
import CakeGirlSeries from "../CakeGirlSeries/CakeGirlSeries";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

const Home = () => {
  return (
    <div className="home-root">
      <div className="home-content">
        <div>
          <img
            className="home-header"
            src="https://goobisanubis.s3.amazonaws.com/morgsArt/cakeGirlSeries/header/morganNavHeader.JPG"
            alt="header"
          />
        </div>

        <div className="featured-container">
          <h2>FEATURED SERIES</h2>
          <Divider/>
          <br />
          <h4>Birthday Girls</h4>
          <Link to="/happy-birthday">
            <img
              className="featured-img"
              src="https://goobisanubis.s3.amazonaws.com/morgsArt/cakeGirlSeries/cakeGirls/Forgotten.jpeg"
              alt="cake girl"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
