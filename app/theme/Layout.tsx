'use client'
import { AppBar, Box, CssBaseline, IconButton, InputBase, Toolbar, Typography, Avatar, Badge } from '@mui/material';
import { Brightness4, Brightness7, Mail, Notifications, SearchOutlined } from '@mui/icons-material';
import { useThemeContext } from './ThemeContext';
import Sidebar from '../components/sidebar/Sidebar'; // Assuming Sidebar component is already created
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles'; // Import useTheme

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.mode === 'light' ? '#A0AEC0' : '#687588', 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.mode === 'light' ? '#A0AEC0' : '#687588', 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(20), // Add spacing between "Dashboard" and search bar
  width: 'auto',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { toggleTheme, themeMode } = useThemeContext();
  const theme = useTheme(); // Use theme

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#1F2937', // Set background color based on theme
            color: theme.palette.mode === 'light' ? '#000000' : '#ffffff', // Ensure text color is appropriate
            boxShadow: 'none', // Remove shadow
            borderBottom: `1px solid ${theme.palette.divider}` // Add bottom border
          }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Operational
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchOutlined />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search anything…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" onClick={toggleTheme}>
            {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={17} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton edge="end" color="inherit">
            <Avatar src="/images/profile.png" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, mt: 8 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
