import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Navigate, useNavigate } from 'react-router-dom';

export default function TemporaryDrawer({ open, toggleDrawer }) {
  const drawerWidthOpen = 250;
  const drawerWidthClosed = 57;
  const navigate = useNavigate();
  const handleItemClick = (itemName) => {
    // Perform actions based on the clicked item name
    navigate(`${itemName.toLowerCase()}`)
    console.log(`Clicked: ${itemName}`);
    // You can add logic to navigate or perform other actions here
  };

  const DrawerList = (
    <Box
      sx={{
        width: open ? drawerWidthOpen : drawerWidthClosed,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidthOpen : drawerWidthClosed,
          boxSizing: 'border-box',
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        },
      }}
      role="presentation"
      onClick={() => toggleDrawer(!open)}
    >
      <List>
        {['notes', 'reminders', 'edit labels', 'archive', 'trash'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'flex', justifyContent: 'center' }}>
            <ListItemButton onClick={() => handleItemClick(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {open && <ListItemText primary={text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      open={open}
      onClose={() => toggleDrawer(!open)}
      sx={{
        width: open ? drawerWidthOpen : drawerWidthClosed,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidthOpen : drawerWidthClosed,
          boxSizing: 'border-box',
          marginTop: '9vh',
          height: '100vh',
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
}
