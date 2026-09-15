import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function AppShell({ page, onPage, children }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', width: '100%' }}>
      <Sidebar mobileOpen={open} onClose={() => setOpen(false)} selected={page} onSelect={onPage} />
      <TopBar onMenu={() => setOpen(true)} page={page} />
      <Box
        component="main"
        sx={{
          ml: { xs: 0, md: '292px' },
          pt: '72px',
          minHeight: '100vh',
          width: { xs: '100%', md: 'calc(100% - 292px)' },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
