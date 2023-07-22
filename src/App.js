import { useState } from 'react';
import './App.css';
import Login from './containers/Login';
import MainHeader from './containers/MainHeader';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Switch } from '@mui/material';
import { ButtonElement } from './components/UI/ButtonElement';

function App() {
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
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
        <MainHeader isDarkMode={isDarkMode}/>
        <Box component="div" 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%', // Set width to 100% to cover the whole page horizontally
          height: '100vh', // Set height to 100vh to cover the whole page vertically
          backgroundColor: !isDarkMode ? '#E4E4E4' : '#000',
        }}
        >
          <Login />
          <Box
            sx={{
              position: 'absolute',
              bottom: '20px',
              left: '50%', // Use left: '50%' to center the inner Box horizontally
              transform: 'translateX(-50%)', // Use transform to adjust centering
            }}
          >
             {/* <ButtonElement
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2 }}
                    buttonText="Dark Mode"
                    color="#fff"
                /> */}
                 <ButtonElement
                    type="button"
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2 }}
                    buttonText="Dark mode"
                    color='secondary'
                    onClick={handleThemeToggle}
                />
          </Box>
        </Box>
        
      </ThemeProvider>
    </>
  );
}

export default App;
