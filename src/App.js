// import { useState } from 'react';
// import './App.css';
// import MainHeader from './containers/MainHeader';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { getAuthToken } from './utils/helper';
// import { MainContent } from './containers/MainContent';
// import { ThemeToggleButton } from './components/ThemeToggleButton';
// import Login from './containers/Login';
// import Dashboard from './containers/Dashboard';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { get } from 'lodash';
// import { CssBaseline } from '@mui/material';

// export const App = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const loggedUserDetails = useSelector((state) => state.userInfo.data)
//   const isLoggedIn = get(loggedUserDetails, "isLoggedIn");
//   const defaultTheme = createTheme();
//   const darkTheme = createTheme({
//     palette: {
//       mode: 'dark',
//     },
//   });

//   const handleThemeToggle = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   // Retrieve the token from the cookie
//   const token = getAuthToken();

//   return (
// <ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
//       <CssBaseline />
//       <MainHeader isDarkMode={isDarkMode} isLoggedIn={isLoggedIn} />
//       <MainContent isDarkMode={isDarkMode}>
//         <Router>
//           <Routes>
//             {/* If the user is logged in (token exists), render Dashboard */}
//             {token ? (
//               // Wrap Dashboard component with Route
//               <Route path="/dashboard" element={<Dashboard />} />
//             ) : (
//               // If not logged in, redirect to the Login page
//               <Route path="/" element={<Navigate to="/login" />} />
//             )}

//             {/* Common Login route */}
//             <Route path="/login" element={<Login />} />

//             {/* Route for Stocks (Update with your desired component) */}
//             <Route path="/stocks" element={<div>Stocks Page</div>} />

//             {/* Route for About (Update with your desired component) */}
//             <Route path="/about" element={<div>About Page</div>} />
//           </Routes>
//         </Router>
//       </MainContent>
//       <ThemeToggleButton isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
//     </ThemeProvider>
//   );
// }

// export default App;

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Dashboard from "./containers/Dashboard";
import Orders from "./containers/Orders";
import Account from "./containers/Account";
import Settings from "./containers/Settings";
import Chat from "./containers/Chat";
import FAQ from "./containers/Faq";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainHeader from "./containers/MainHeader";
import Login from "./containers/Login";
import { useSelector } from "react-redux";
import { get } from "lodash";
import LeftNavBar from "./containers/LeftNavBar";
import { CssBaseline } from '@mui/material';

const App = (props) => {
  const loggedUserDetails = useSelector((state) => state.userInfo.data);
  const isLoggedIn = get(loggedUserDetails, "isLoggedIn");
  const [isDarkMode, setIsDarkMode] = useState(false);
    const defaultTheme = createTheme();
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
      <CssBaseline />
    <Router>
      {!isLoggedIn && <Login />}
      {isLoggedIn && (
        <Box sx={{ display: "flex" }}>
           <MainHeader />
          <LeftNavBar isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
            <Box
              component="main"
              sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
            >
              <Toolbar />
              <Routes>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/orders" element={<Orders />} />
                <Route exact path="/account" element={<Account />} />
                <Route exact path="/settings" element={<Settings />} />
                <Route exact path="/chat" element={<Chat />} />
                <Route exact path="/faq" element={<FAQ />} />
              </Routes>
            </Box>
        </Box>
      )}
    </Router>
    </ThemeProvider>
  );
};

export default App;
