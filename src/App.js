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
import { MainContent } from './containers/MainContent';
import { ThemeToggleButton } from './components/ThemeToggleButton';

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
        <Login />
      </MainContent>
      <ThemeToggleButton isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
    </ThemeProvider>
  );
}

export default App;
