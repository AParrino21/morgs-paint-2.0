import React from "react";
import { tss } from "tss-react";
import MenuIcon from "@mui/icons-material/Menu";
import { AuthContext } from "../../context/AuthContext";

const useStyles = tss.create({
  navMobileRoot: {
    padding: "5px",
  },

  menuIcon: {
    cursor: "pointer",
    padding: "8px",
    borderRadius: "8px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    "&:hover": {
      backgroundColor: "lightgray",
    },
  },
});

const NavMobile = () => {
  const { classes } = useStyles();
  const { handleOpenMenu } = React.useContext(AuthContext);

  return (
    <div className={classes.navMobileRoot}>
      <div>
        <MenuIcon
          className={classes.menuIcon}
          onClick={() => handleOpenMenu()}
        />
      </div>
    </div>
  );
};

export default NavMobile;
