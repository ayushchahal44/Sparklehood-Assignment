import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css'
import App from './App.tsx'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4aed88',
      light: '#4aee88',
      dark: '#2b824c',
    },
    secondary: {
      main: '#007BFF',
      light: '#60a5fa',
      dark: '#007baa',
    },
    error: {
      main: '#dc2626',
      light: '#ef4444',
      dark: '#b91c1c',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    success: {
      main: '#4aed88',
      light: '#34d399',
      dark: '#2b824c',
    },
    background: {
      default: '#1c1e29',
      paper: '#282a36',
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", "Avenir", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#ffffff',
    },
    h6: {
      fontWeight: 500,
      color: '#ffffff',
    },
    body1: {
      color: '#ffffff',
    },
    body2: {
      color: '#94a3b8',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 5,
          fontWeight: 'bold',
          fontSize: '16px',
          padding: '10px',
          transition: 'all 0.3s ease-in-out',
        },
        contained: {
          '&:hover': {
            backgroundColor: '#2b824c',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: '#282a36',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#1c1e29',
            borderRadius: 5,
            '& fieldset': {
              borderColor: '#4aed88',
            },
            '&:hover fieldset': {
              borderColor: '#4aed88',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4aed88',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#ffffff',
          },
          '& .MuiOutlinedInput-input': {
            color: '#ffffff',
            fontWeight: 'bold',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: '#1c1e29',
          borderRadius: 5,
          color: '#ffffff',
          fontWeight: 'bold',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4aed88',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4aed88',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4aed88',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          backgroundColor: '#282a36',
          '&:hover': {
            backgroundColor: '#1c1e29',
          },
          '&.Mui-selected': {
            backgroundColor: '#1c1e29',
            '&:hover': {
              backgroundColor: '#1c1e29',
            },
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
