// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import useMobileView from '../../utils/helper';
// import userImage from '../../assets/images/user.png';
// import headerMainImage from '../../assets/images/logo.jpg';
// import { useSelector } from 'react-redux';
// import { get } from 'lodash';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));

// const MainHeader = (props) => {
//     const isMobileView = useMobileView(); // Using the custom hook here
//     // const loggedUserDetails = useSelector((state) => state.userInfo.data)
//     const menuId = 'primary-search-account-menu';
//     const isDarkMode = props.isDarkMode;
//     const isLoggedIn = props.isLoggedIn;
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static" sx={{ backgroundColor: isDarkMode ? '#000' : '#e0dfdc' }}>
//                 <Toolbar>
//                 <Box
//             sx={{
//             //   backgroundColor: 'gray',
//               display: 'flex',
//               alignItems: 'center',
//               height: '100%',
//               padding: '0',
//             }}
//           >
//             <img
//               src={headerMainImage}
//               alt="profile"
//               style={{ height: '50px', width: 'auto' }}
//             />
//           </Box>
//                     {
//                         isLoggedIn &&
//                         <Search sx={{ backgroundColor: isDarkMode ? '#525250' : '#adadaa' }}>
//                             <SearchIconWrapper>
//                                 <SearchIcon />
//                             </SearchIconWrapper>
//                             <StyledInputBase
//                                 placeholder="Search…"
//                                 inputProps={{ 'aria-label': 'search' }}
//                             />
//                         </Search>}
//                     <Box sx={{ flexGrow: 1 }} />
//                     {
//                         isLoggedIn &&
//                     <Box sx={{ display: { xs: 'none', md: 'flex' }, color: isDarkMode ? '#525250' : '#000' }}>
//                         <IconButton
//                             size="large"
//                             aria-label="show 17 new notifications"
//                             color="inherit"
//                         >
//                             <Badge badgeContent={17} color="error">
//                                 <NotificationsIcon />
//                             </Badge>
//                         </IconButton>
//                         <Typography
//                             variant="h6"
//                             noWrap
//                             component="div"
//                             sx={{ display: { xs: 'none', sm: 'block' }, paddingTop: '5px'}}
//                         >
//                             Matt Appleyard
//                         </Typography>
//                         <IconButton
//                             size="large"
//                             edge="end"
//                             aria-label="account of current user"
//                             aria-controls={menuId}
//                             aria-haspopup="true"
//                             color="inherit"
//                         >
//                             <img src={userImage} alt="profile" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
//                         </IconButton>
//                     </Box>
//                     }
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// }

// export default MainHeader

import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
const drawerWidth = 240;
const MainHeader = (props) => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default MainHeader;
