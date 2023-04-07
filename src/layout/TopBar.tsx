import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { webOrigin } from '..';

const TopBar = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((isOpen) => !isOpen);
  };

  const navItems = [
    {
      title: 'Home',
      href: '',
      icon: <HomeIcon />,
      onClick: () => {
        navigate('/');
      },
    },
    {
      title: 'Varaani',
      href: 'https://varaani.com/',
    },
    {
      title: 'Logout',
      href: '',
      icon: <LogoutIcon />,
      onClick: () => {
        logout({ logoutParams: { returnTo: webOrigin } });
      },
    },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton href={item.href} onClick={item.onClick}>
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText
                primary={item.title}
                inset={item.icon === undefined}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mx: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              mx: 2,
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.title}
                color="inherit"
                href={item.href}
                startIcon={item.icon}
                onClick={item.onClick}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="left"
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default TopBar;
