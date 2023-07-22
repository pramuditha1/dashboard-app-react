import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const useMobileView = () => {
  const theme = useTheme();
  // Will be true for screens smaller than 'sm' (i.e., mobile view)
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
  return isMobileView;
};

export default useMobileView;
