import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#070b14', paper: '#0d1424' },
    primary: { main: '#67e8f9' },
    secondary: { main: '#a78bfa' },
    success: { main: '#34d399' },
    warning: { main: '#fbbf24' },
    error: { main: '#fb7185' },
    info: { main: '#60a5fa' },
  },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontWeight: 800 }, h2: { fontWeight: 800 }, h3: { fontWeight: 750 }, h4: { fontWeight: 750 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { margin: 0, minWidth: 320, overflowX: 'hidden' },
        '*': { boxSizing: 'border-box' },
        '*::-webkit-scrollbar': { width: 8, height: 8 },
        '*::-webkit-scrollbar-track': { background: 'rgba(255,255,255,.02)' },
        '*::-webkit-scrollbar-thumb': { background: 'rgba(148,163,184,.22)', borderRadius: 999 },
        '*::-webkit-scrollbar-thumb:hover': { background: 'rgba(148,163,184,.34)' },
        '::selection': { background: 'rgba(103,232,249,.22)' },
      },
    },
    MuiCard: {
      styleOverrides: { root: { backgroundImage: 'none', border: '1px solid rgba(148,163,184,.12)', boxShadow: '0 16px 50px rgba(0,0,0,.18)' } },
    },
    MuiDrawer: {
      styleOverrides: { paper: { backgroundImage: 'none', background: '#0a1020', borderRight: '1px solid rgba(148,163,184,.10)' } },
    },
    MuiAppBar: {
      styleOverrides: { root: { backgroundImage: 'none', background: 'rgba(7,11,20,.86)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(148,163,184,.10)' } },
    },
    MuiButtonBase: {
      styleOverrides: { root: { '&:focus-visible': { outline: '2px solid #67e8f9', outlineOffset: 2 } } },
    },
    MuiIconButton: {
      styleOverrides: { root: { '&:focus-visible': { outline: '2px solid #67e8f9', outlineOffset: 2 } } },
    },
    MuiTextField: { defaultProps: { variant: 'outlined' } },
  },
});
