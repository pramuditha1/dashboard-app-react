import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import userImage from "../../assets/images/user.png";
import { COLORS } from "../../utils/Constants";
import { useSelector } from "react-redux";
import { selectUserDetails } from "../../store/slices/authReducer";
import useMobileView from "../../utils/helper";
import headerMainImage from "../../assets/images/nvdia.png";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import MenuItems from "../MenuItems";

/*
  Mobile view only header
*/
const MobileHeader = (props) => {
  const userDetails = useSelector(selectUserDetails);
  const isMobileView = useMobileView();
  const isDarkMode = props.isDarkMode;
  const isLoggedIn = props.isLoggedIn;
  const menuId = "primary-search-account-menu";

  const drawerWidth = isMobileView ? 0 : 240;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(isOpen);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: !isDarkMode && COLORS.HEADER_APP_BAR_LIGHT,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            {/* Menu icon */}
            {isLoggedIn && (
              <IconButton
                edge="start"
                color="secondary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <img
              src={headerMainImage}
              alt="profile"
              style={{ height: "40px", width: "auto" }}
            />
          </Box>
          {/* User profile icon */}
          {isLoggedIn && (
            <Box
              sx={{
                display: "flex",
                color: isDarkMode
                  ? COLORS.HEADER_USER_DETAILS_DARK
                  : COLORS.HEADER_USER_DETAILS_LIGHT,
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
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
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: "64px" }}>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <MenuItems />
        </Drawer>
      </Box>
    </>
  );
};

export default MobileHeader;
