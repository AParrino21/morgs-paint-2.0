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

const Nav = () => {
  const { cartItems } = React.useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpen(!open);
  }
  function clickAwayHandler() {
    setAnchorEl(null);
    setOpen(false);
  }

  return (
    <>
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
            <ListItem>
              <Link className="nav-item" to="/">
                Home
              </Link>
            </ListItem>
          </div>
          <div>
            <ClickAwayListener onClickAway={clickAwayHandler}>
              <Box>
                <ListItem className="nav-item-series" onClick={handleClick}>
                  Series
                </ListItem>
                <Popper open={open} anchorEl={anchorEl}>
                  <Box sx={{ border: 1, p: 0, bgcolor: "background.paper" }}>
                    <Link className="nav-item" to="/happy-birthday">
                      <p className="nav-dropdown-item">Birthday Girls</p>
                    </Link>
                    <Divider />
                  </Box>
                </Popper>
              </Box>
            </ClickAwayListener>
          </div>
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
      <Divider />
    </>
  );
};

export default Nav;
