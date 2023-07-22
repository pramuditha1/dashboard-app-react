import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Cookies from 'js-cookie';

// custom hook to determine web view or mobile view
const useMobileView = () => {
  const theme = useTheme();
  // Will be true for screens smaller than 'sm' (i.e., mobile view)
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
  return isMobileView;
};

export const getAuthToken = () => {
  return Cookies.get('token')
}

export default useMobileView;
