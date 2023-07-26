import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from "react-redux";
import { get } from "lodash";
import Cookies from "js-cookie";
import { CssBaseline } from '@mui/material';
import LeftNavBar from "./containers/LeftNavBar";
import Login from "./containers/Login";
import MainHeader from "./containers/MainHeader";
import Dashboard from "./containers/Dashboard";
import Orders from "./containers/Orders";
import Account from "./containers/Account";
import Settings from "./containers/Settings";
import Chat from "./containers/Chat";
import FAQ from "./containers/Faq";
import { COLORS } from './utils/Constants';

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
            <MainHeader isDarkMode={isDarkMode} isLoggedIn={isLoggedIn}/>
            <LeftNavBar isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
            <Box
              component="main"
              sx={{ flexGrow: 1, backgroundColor: isDarkMode ? COLORS.BLACK : COLORS.MAIN_CONTENT_BACKGROUND, p: 3 }}
            >
              <Toolbar />
              <Routes>
                <Route exact path="/dashboard" element={<Dashboard isDarkMode={isDarkMode}/>} />
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
