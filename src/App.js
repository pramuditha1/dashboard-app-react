import { useState } from 'react';
import './App.css';
import Login from './containers/Login';
import MainHeader from './containers/MainHeader';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { ButtonElement } from './components/UI/ButtonElement';
import { useSelector } from 'react-redux';
import { getAuthToken } from './utils/helper';
import { Dashboard } from './containers/Dashboard';

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isLoggedIn = useSelector((state) => state.userInfo.isLoggedIn)
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
  const isValidUser = isLoggedIn && token
  console.log(isLoggedIn, "==== isLoggedIn");
  console.log(token, "==== token");
  console.log(isValidUser, "==== isValidUser");

  return (
      <ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
        <MainHeader isDarkMode={isDarkMode} />
        <Box component="div"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%', // Set width to 100% to cover the whole page horizontally
            height: '100vh', // Set height to 100vh to cover the whole page vertically
            backgroundColor: !isDarkMode ? '#E4E4E4' : '#000',
          }}
        >
          {!token && <Login />}
          {token && <Dashboard />}
          {/* <Box
            sx={{
              position: 'absolute',
              bottom: '20px',
              left: '50%', // Use left: '50%' to center the inner Box horizontally
              transform: 'translateX(-50%)', // Use transform to adjust centering
            }}
          >
            <ButtonElement
              type="button"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              buttonText={isDarkMode ? "Light Mode" : "Dark Mode"}
              color='secondary'
              onClick={handleThemeToggle}
            />
          </Box> */}
        </Box>
      </ThemeProvider>
  );
}

export default App;
