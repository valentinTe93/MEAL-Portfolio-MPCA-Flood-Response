import React from 'react';
import { AppBar, Toolbar, Box, IconButton, Typography, Chip, Tooltip } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';

export default function TopBar({ onMenu, page }) {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, ml: { md: '292px' }, width: { xs: '100%', md: 'calc(100% - 292px)' } }}>
      <Toolbar sx={{ minHeight: '72px !important', px: { xs: 1.25, sm: 2, md: 3 }, gap: 1 }}>
        <Tooltip title="Open navigation">
          <IconButton aria-label="Open navigation" onClick={onMenu} sx={{ display: { md: 'none' }, color: 'text.primary' }}>
            <MenuRoundedIcon />
          </IconButton>
        </Tooltip>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: 10, sm: 12 }, letterSpacing: .7 }} noWrap>
            MEAL DECISION INTELLIGENCE
          </Typography>
          <Typography sx={{ fontWeight: 750, fontSize: { xs: 15, sm: 18 }, lineHeight: 1.25 }} noWrap>{page}</Typography>
        </Box>
        <Chip
          icon={<ShieldRoundedIcon sx={{ fontSize: '16px !important' }} />}
          label="Evidence controlled"
          size="small"
          sx={{ display: { xs: 'none', sm: 'flex' }, color: 'success.main', border: '1px solid rgba(52,211,153,.2)', bgcolor: 'rgba(52,211,153,.06)' }}
        />
      </Toolbar>
    </AppBar>
  );
}
