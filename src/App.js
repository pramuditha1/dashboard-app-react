import { useState } from 'react';
import './App.css';
import MainHeader from './containers/MainHeader';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { ButtonElement } from './components/UI/ButtonElement';
import { useSelector } from 'react-redux';
import { getAuthToken } from './utils/helper';
import { MainContent } from './containers/MainContent';
import { ThemeToggleButton } from './components/ThemeToggleButton';

import Login from './containers/Login';
import Dashboard from './containers/Dashboard';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isLoggedIn = useSelector((state) => state.userInfo)
  const defaultTheme = createTheme();
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Retrieve the token from the cookie
  const token = getAuthToken();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
      <MainHeader isDarkMode={isDarkMode} />
      <MainContent isDarkMode={isDarkMode}>
      <Router>
          <Routes>
            {/* If the user is logged in (token exists), render Dashboard */}
            {token ? (
              <Route path="/dashboard" element={<Dashboard />} />
            ) : (
              // If not logged in, redirect to the Login page
              <Route path="/" element={<Navigate to="/login" />} />
            )}
            {/* Common Login route */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </MainContent>
      <ThemeToggleButton isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
    </ThemeProvider>
  );
}

export default App;
