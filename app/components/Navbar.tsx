'use client'
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface NavbarProps {
  onToggleTheme: () => void;
  onDrawerToggle: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, onDrawerToggle, isDarkMode }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={onDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Dashboard Operasional
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" onClick={onToggleTheme}>
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
