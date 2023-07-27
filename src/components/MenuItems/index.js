import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";

import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatIcon from '@mui/icons-material/Chat';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { MENU } from "../../utils/Constants";

/*
MenuItems component. this is used in both mobile(header mobile) and desktop views(in leftnav)
*/
const MenuItems = (props) => {
  return (
    <>
      <List>
        {[MENU.DASHBOARD, MENU.ORDERS, MENU.ACCOUNT, MENU.SETTINGS].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={`/${text.toLowerCase()}`} onClick={props.handleDrawer}>
              <ListItemIcon>
                {text === MENU.DASHBOARD ? <StackedBarChartIcon /> 
                : text === MENU.ORDERS ? <ShoppingCartIcon/> 
                : text === MENU.ACCOUNT ? <PersonIcon/> 
                : text === MENU.SETTINGS ? <SettingsIcon/> 
                : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography pl={1} pt={2}>
        Support
      </Typography>
      <List>
        {[MENU.CHAT, MENU.FAQ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={`/${text.toLowerCase()}`} onClick={props.handleDrawer}>
              <ListItemIcon>
              {text === MENU.CHAT ? <ChatIcon /> 
                : text === MENU.FAQ ? <LiveHelpIcon/>
                : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default MenuItems;
