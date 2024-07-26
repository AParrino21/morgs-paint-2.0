import React from "react";
import "./Nav.css";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import {
  Box,
  ClickAwayListener,
  Divider,
  ListItem,
  Popper,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavMobile from "./NavMobile";

const Nav = () => {
  const { cartItems, windowSize } = React.useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openSeries, setOpenSeries] = React.useState<boolean>(false);

  const [anchorElSocials, setAnchorElSocails] =
    React.useState<null | HTMLElement>(null);
  const [openSocials, setOpenSocials] = React.useState<boolean>(false);

  function handleSeriesClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpenSeries(!openSeries);

    setAnchorElSocails(null);
    setOpenSocials(false);
  }

  function handleSocialsClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorElSocails(anchorElSocials ? null : event.currentTarget);
    setOpenSocials(!openSocials);

    setAnchorEl(null);
    setOpenSeries(false);
  }

  function clickAwayHandler() {
    setAnchorElSocails(null);
    setOpenSocials(false);

    setAnchorEl(null);
    setOpenSeries(false);
  }

  return (
    <>
      {windowSize?.width <= 855 ? (
        <div className="mobileNavContainer">
          <div style={{ display: "flex", alignItems: "center" }}>
            <ListItem>
              <Link className="nav-item" to="/">
                MD
              </Link>
            </ListItem>
            <ListItem>
              <Link className="nav-item nav-item-cart" to="/cart">
                <ShoppingCartIcon className="shopping-cart-icon" />
                {cartItems?.length > 0 && (
                  <p className="cart-length-nav">{cartItems?.length}</p>
                )}
              </Link>
            </ListItem>
          </div>
          <NavMobile />
        </div>
      ) : (
        <div className="nav-root">
          <div>
            <ListItem>
              <Link className="nav-item" to="/">
                MD
              </Link>
            </ListItem>
          </div>
          <div className="nav-links">
            <div>
              <ListItem className="nav-item-series">
                <Link className="nav-item" to={"/wedding-portraits"}>
                  {" "}
                  Commissions{" "}
                </Link>
              </ListItem>
            </div>
            <ClickAwayListener onClickAway={clickAwayHandler}>
              <>
                <div>
                  <Box>
                    <ListItem
                      className="nav-item-series"
                      onClick={handleSocialsClick}
                    >
                      Socials
                    </ListItem>
                    <Popper open={openSocials} anchorEl={anchorElSocials}>
                      <Box
                        sx={{ border: 1, p: 0, bgcolor: "background.paper" }}
                      >
                        <Link
                          className="nav-item"
                          to="https://www.instagram.com/watchmorganpaint/"
                        >
                          <p className="nav-dropdown-item">Instagram</p>
                        </Link>
                        <Divider />
                        <Link
                          className="nav-item"
                          to="https://www.tiktok.com/@watchmorgspaint"
                        >
                          <p className="nav-dropdown-item">TikTok</p>
                        </Link>
                        <Divider />
                        <Link
                          className="nav-item"
                          to="https://society6.com/morgandanton"
                        >
                          <p className="nav-dropdown-item">Society 6</p>
                        </Link>
                        <Divider />
                        <Link
                          className="nav-item"
                          to="https://www.redbubble.com/people/morgandantonart/shop"
                        >
                          <p className="nav-dropdown-item">Red Bubble</p>
                        </Link>
                        <Divider />
                      </Box>
                    </Popper>
                  </Box>
                </div>

                {/* <div>
                <Box>
                  <ListItem
                    className="nav-item-series"
                    onClick={handleSeriesClick}
                  >
                    Series
                  </ListItem>
                  <Popper open={openSeries} anchorEl={anchorEl}>
                    <Box sx={{ border: 1, p: 0, bgcolor: "background.paper" }}>
                      <Link className="nav-item" to="/birthday-girls">
                        <p className="nav-dropdown-item">Birthday Girls</p>
                      </Link>
                      <Divider />
                    </Box>
                  </Popper>
                </Box>
              </div> */}
              </>
            </ClickAwayListener>
            <div>
              <ListItem>
                <Link className="nav-item" to="/gallery">
                  Gallery
                </Link>
              </ListItem>
            </div>
            <div>
              <ListItem>
                <Link className="nav-item nav-item-cart" to="/cart">
                  <ShoppingCartIcon className="shopping-cart-icon" />
                  {cartItems?.length > 0 && (
                    <p className="cart-length-nav">{cartItems?.length}</p>
                  )}
                </Link>
              </ListItem>
            </div>
          </div>
        </div>
      )}
      <Divider />
    </>
  );
};

export default Nav;
