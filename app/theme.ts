'use client'
import { createTheme } from '@mui/material/styles';

// Define the custom theme
const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#333', // Global font color for headers
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#333', // Global font color for headers
    },
    body1: {
      fontSize: '1rem',
      color: '#666', // Global font color for body text
    },
    // Define other typography variants as needed
  },
  palette: {
    text: {
      primary: '#333', // Global font color
      secondary: '#666', // Secondary font color
    },
    // Define other palette settings as needed
  },
  // Define other theme settings as needed
});

export default theme;
