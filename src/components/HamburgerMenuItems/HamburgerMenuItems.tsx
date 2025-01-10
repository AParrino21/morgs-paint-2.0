import React from "react";
import { tss, keyframes } from "tss-react";
import { Box, ListItem, ClickAwayListener, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const slideNav = keyframes`
  0% {
    width: 0px
  }
  100% {
    width: 200px
  }
`;

const useStyles = tss.create({
  hamburgerMenuItemsRoot: {
    position: "relative",
  },
  hamburgerItems: {
    position: "absolute",
    right: "0",
    overflow: "hidden",
    width: "200px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    animationName: "slideAnimation",
    animation: `${slideNav} .5s ease-in-out`,
  },
  navMainPages: {
    backgroundColor: "white",
    padding: "20px 10px",
    "& > li": {
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgb(214, 214, 214)",
      },
    },
    "& > li > p": {
      textDecoration: "none",
      fontSize: "13px",
      color: "rgb(120, 120, 120)",
    },
  },
  premiumBtn: {
    fontWeight: "900",
    fontSize: "15px !important",
    background:
      "-webkit-linear-gradient(rgb(84, 255, 195), rgb(86, 0, 255)) !important",
    WebkitBackgroundClip: "text !important",
    WebkitTextFillColor: "transparent !important",
    position: "relative",
    overflow: "hidden",
    padding: "5px 10px",
    borderRadius: "3px",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      zIndex: -1,
      transition: "transform 0.3s ease",
      transform: "translateX(-105%)",
    },
    "&:hover::before": {
      transform: "translateX(0)",
      color: "white !important",
    },
    "&:hover": {
      background: "-webkit-linear-gradient(white, red) !important",
      WebkitBackgroundClip: "text !important",
      WebkitTextFillColor: "transparent !important",
    },
  },
  premiumContainer: {
    paddingLeft: "5px",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  closeBtn: {
    textAlign: "center",
    "& > button": {
      fontSize: "10px",
    },
  },
});

export interface HamburgerMenuItemsProps {
  sliding: boolean;
}

const HamburgerMenuItems: React.FC<HamburgerMenuItemsProps> = ({ sliding }) => {
  const { classes } = useStyles();
  const { windowSize, handleOpenMenu } = React.useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <ClickAwayListener
      onClickAway={() => {
        console.log("away");
        handleOpenMenu();
      }}
    >
      <div className={classes.hamburgerMenuItemsRoot}>
        {windowSize?.width <= 855 && (
          <div className={sliding ? classes.hamburgerItems : ""}>
            <Box component="div">
              <div className={classes.navMainPages}>
                <ListItem onClick={() => navigate("/")}>
                  <p>Home</p>
                </ListItem>
                <ListItem onClick={() => navigate("/wedding-portraits")}>
                  <p>Commisions</p>
                </ListItem>
                <ListItem onClick={() => navigate("/gallery")}>
                  <p>Gallery</p>
                </ListItem>
                <ListItem onClick={() => navigate("/birthday-girls")}>
                  <p>Birthday Girls</p>
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href =
                      "https://www.instagram.com/watchmorganpaint/")
                  }
                >
                  <p>Instagram</p>
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href =
                      "https://www.tiktok.com/@watchmorgspaint")
                  }
                >
                  <p>Tik Tok</p>
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href = "https://society6.com/morgandanton")
                  }
                >
                  <p>Society 6</p>
                </ListItem>
                <ListItem
                  onClick={() =>
                    (window.location.href =
                      "https://www.redbubble.com/people/morgandantonart/shop")
                  }
                >
                  <p>Red Bubble</p>
                </ListItem>
                <div className={classes.closeBtn}>
                  <Button onClick={() => handleOpenMenu()}>Close</Button>
                </div>
              </div>
            </Box>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default HamburgerMenuItems;
