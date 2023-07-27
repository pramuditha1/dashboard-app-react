import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import userImage from "../../assets/images/user.png";
import { COLORS } from "../../utils/Constants";
import useMobileView from "../../utils/helper";
import headerMainImage from "../../assets/images/nvdia.png";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MenuItems from "../MenuItems";

/*
  Mobile view only header
  click on menu will render menu
*/
const MobileHeader = (props) => {
  const isMobileView = useMobileView();
  const isDarkMode = props.isDarkMode;
  const menuId = "primary-search-account-menu";
  const drawerWidth = isMobileView ? 0 : 240;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          height: 50,
          ml: `${drawerWidth}px`,
          backgroundColor: !isDarkMode && COLORS.HEADER_APP_BAR_LIGHT,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          edge="start"
          color="secondary"
          aria-label="menu"
          onClick={handleDrawer}
          sx={{
            display: { xs: "block", sm: "none" },
            paddingLeft: 2,
          }}
        >
          {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <img
          src={headerMainImage}
          alt="profile"
          style={{ height: "40px", width: "auto" }}
        />
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          color="inherit"
          sx={{
            paddingRight: 2,
          }}
        >
          <img
            src={userImage}
            alt="profile"
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
            }}
          />
        </IconButton>
      </AppBar>
      {isDrawerOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 50,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: isDarkMode ? COLORS.BLACK : COLORS.WHITE,
            zIndex: 9999,
          }}
        >
          <MenuItems handleDrawer={handleDrawer}/>
        </Box>
      )}
    </>
  );
};

export default MobileHeader;
