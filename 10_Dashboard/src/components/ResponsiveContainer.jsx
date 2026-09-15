import React from 'react';
import { Box } from '@mui/material';

export default function ResponsiveContainer({ children, maxWidth = 1500 }) {
  return (
    <Box sx={{ width: '100%', maxWidth, mx: 'auto', px: { xs: 1.5, sm: 2.5, md: 3.5 }, py: { xs: 2, sm: 2.5, md: 3.5 } }}>
      {children}
    </Box>
  );
}
