import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ThemeToggleButton from "../../components/ThemeToggleButton/index";
import headerMainImage from "../../assets/images/nvdia.png";
import useMobileView from "../../utils/helper";

/*
for extra small devices menu will be hide
for small or large devices left nav will be shown
*/
const LeftNavBar = (props) => {
  const isMobileView = useMobileView();
  const drawerWidth = !isMobileView ? 240 : 0; //leftnav width set to 0 is screen is in mobile view
  return (
    <Drawer
      sx={{
        display: { xs: "none", sm: "flex" },
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <img
          src={headerMainImage}
          alt="profile"
          style={{ height: "50px", width: "auto" }}
        />
      </Toolbar>
      <Divider />
      {/* 
      main navigation for the left menu. route to url and it will render relevant compoent 
      in app.js. see app.js for the router 
      */}
      <List>
        {["Dashboard", "Orders", "Account", "Settings"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
        {["Chat", "FAQ"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ThemeToggleButton
        isDarkMode={props.isDarkMode}
        handleThemeToggle={props.handleThemeToggle}
      />
    </Drawer>
  );
};

export default LeftNavBar;
