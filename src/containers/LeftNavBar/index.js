import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar } from '@mui/material';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Switch,
    Link,
  } from "react-router-dom";

import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ThemeToggleButton  from '../../components/ThemeToggleButton/index';

const LeftNavBar = (props) => {
    const drawerWidth = 240;
  return (
    <Drawer
            sx={{
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
            <Toolbar>your company logo</Toolbar>
            <Divider />
            <List>
              {["Dashboard", "Orders", "Account", "Settings"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={`/${text.toLowerCase()}`}
                    >
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            Support
            <List>
              {["Chat", "FAQ"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={`/${text.toLowerCase()}`}
                  >
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <ThemeToggleButton isDarkMode={props.isDarkMode} handleThemeToggle={props.handleThemeToggle} />
          </Drawer>
  )
}

export default LeftNavBar;