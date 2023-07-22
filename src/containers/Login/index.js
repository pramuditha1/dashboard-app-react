import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { CardContainer } from '../../components/UI/Card';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import useMobileView from '../../utils/helper';
import { TextBoxElement } from '../../components/UI/TextBoxElement';
import { ButtonElement } from '../../components/UI/ButtonElement';
import { LinkElement } from '../../components/UI/LinkElement';
import { ImageComponent } from '../../components/UI/Image';
import loginSvg from '../../assets/images/login.svg';

const Login = (props) => {
    const isMobileView = useMobileView(); // Using the custom hook here
    return (
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
                            control={<Checkbox value="remember" />}
                            label="Remember me"
                        />
                    </Grid>
                    <Grid item xs pt="10px">
                        <LinkElement href="#" variant="body2" color="secondary" linkText="Forgot password?" />
                    </Grid>
                </Grid>
                <ButtonElement
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    buttonText="Log in"
                    color="secondary"
                />

                Or
                <LinkElement href="#" variant="body2" color="secondary" linkText=" register now!" />
            </Box>
            <Box component="div" sx={{ ml: 2, mt: 2, width: '30%' }}>
                <ImageComponent width="90%" src={loginSvg} />
            </Box>
        </CardContainer>
    );
}

export default Login