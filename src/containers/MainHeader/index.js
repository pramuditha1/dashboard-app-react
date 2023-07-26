import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import userImage from "../../assets/images/user.png";
import { COLORS, SEARCH } from "../../utils/Constants";
import Search from "../../components/UI/Search";
import SearchIconWrapper from "../../components/UI/SearchIconWrapper";
import StyledInputBase from "../../components/UI/StyledInputBase";
import { useSelector } from "react-redux";
import { selectUserDetails } from "../../store/slices/authReducer";
import { get } from "lodash";
import useMobileView from "../../utils/helper";
import headerMainImage from '../../assets/images/nvdia.png';

/*
Main header component. used mui appBar component
for extra small screens
- searchbar, user name, notifications does not show (xs: none)
- 50px reduced from total width to show menu button
for medium screens
- user details, searchbar shows in flex behaviour
- does not show menu button and 240px reduced from total width to show company logo
- company logo hides and it will show in leftNav component
*/
const MainHeader = (props) => {
  const userDetails = useSelector(selectUserDetails);
  const isMobileView = useMobileView();
  const isDarkMode = props.isDarkMode;
  const isLoggedIn = props.isLoggedIn;
  const menuId = "primary-search-account-menu";

  const drawerWidth = isMobileView ? 50 : 240;

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
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            {isLoggedIn && (
              <>
              <Search sx={{maxWidth: "300px", minWidth: "150px", display: { xs: "none", sm: "flex" }}}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder={SEARCH}
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Toolbar sx={{justifyContent: "space-around", display: { xs: "flex", sm: "none" }}}>
              <img
                src={headerMainImage}
                alt="profile"
                style={{ height: '50px', width: 'auto' }}
              />
            </Toolbar>
            </>
            )}
          </Box>
          {isLoggedIn && (
            <Box
              sx={{
                display: "flex" ,
                color: isDarkMode
                  ? COLORS.HEADER_USER_DETAILS_DARK
                  : COLORS.HEADER_USER_DETAILS_LIGHT,
              }}
            >
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                sx={{
                  display: { xs: "none", sm: "flex" },
                }}
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Typography
                variant="small"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "flex"}, paddingTop: "12px" }}
              >
                {get(userDetails, "firstName") + " " + get(userDetails, "lastName")}
              </Typography>
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
                  style={{ width: "24px", height: "24px", borderRadius: "50%" }}
                />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainHeader;
