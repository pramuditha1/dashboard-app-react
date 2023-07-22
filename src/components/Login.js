import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Switch } from '@mui/material';
import { CardContainer } from './UI/Card';
import { ImageComponent } from './UI/Image';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import useMobileView from '../utils/helper';
import { TextBoxElement } from './UI/TextBoxElement';
import { ButtonElement } from './UI/ButtonElement';
import { LinkElement } from './UI/LinkElement';

const defaultTheme = createTheme();

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Login = (props) => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const isMobileView = useMobileView(); // Using the custom hook here

    const handleThemeToggle = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
            <CardContainer
                cardStyles={{
                    width: '100%',
                    maxWidth: '500px',
                    marginTop: '30px'
                }}
                cardContentStyles={{
                    padding: !isMobileView ? '1rem' : '0',
                    display: 'flex',
                    flexDirection: isMobileView ? 'column' : 'row', // Set 'column' for mobile view and 'row' for web view
                    alignItems: 'center',
                }}
            >
                <Box component="form" noValidate sx={{ mt: 1, width: '70%' }}>
                    <TextBoxElement
                        margin="normal"
                        id="username"
                        type="text"
                        placeholder="Username"
                        name="username"
                        autoComplete="text"
                        inputAdornmentIcon={<PersonOutlinedIcon />}
                        autoFocus
                        required
                        fullWidth
                    />
                    <TextBoxElement
                        margin="normal"
                        name="password"
                        placeholder='Password'
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        required
                        fullWidth
                        inputAdornmentIcon={<LockOutlinedIcon />}
                    />
                    <Grid container>
                        <Grid item xs>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                        </Grid>
                        <Grid item xs pt="10px">
                            <LinkElement href="#" variant="body2" linkText="Forgot password?" />
                        </Grid>
                    </Grid>
                    <ButtonElement
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        buttonText="Log in"
                    />

                    Or
                    <LinkElement href="#" variant="body2" linkText=" register now!" />
                </Box>
                <Box component="div" sx={{ ml: 2, mt: 2, width: '30%' }}>
                    <ImageComponent
                        styles={{
                            width: "100%",
                            height: "100%"
                        }}
                        link='https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/User_login_man_profile_account.png' />
                </Box>
            </CardContainer>
            <Switch checked={isDarkMode} onChange={handleThemeToggle} />
        </ThemeProvider>
    );
}

export default Login