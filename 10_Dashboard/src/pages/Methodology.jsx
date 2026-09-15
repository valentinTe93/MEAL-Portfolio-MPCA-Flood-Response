import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { Box, Chip, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';

const sections = [
  {
    title: 'Evidence chain',
    icon: <AccountTreeRoundedIcon />,
    text: 'Validated indicator evidence is transformed into a finding, interpretation, decision and management action.',
  },
  {
    title: 'Evidence base',
    icon: <StorageRoundedIcon />,
    text: 'Stage 08 baseline/follow-up panel comparison and the corrected IPTT provide the analytical evidence used by Stage 10.',
  },
  {
    title: 'Analysis approach',
    icon: <ScienceRoundedIcon />,
    text: 'The dashboard presents descriptive before/after results. It does not claim causal attribution.',
  },
  {
    title: 'Data safeguards',
    icon: <ShieldRoundedIcon />,
    text: 'Unsupported values remain TBD, Measurement Gap or Not available. Denominators and indicator definitions remain source-controlled.',
  },
];

const indicatorMethods = [
  ['FCS', 'Higher is better', '7-day household food consumption recall; standard scoring and classification.'],
  ['rCSI', 'Lower is better', '7-day household food-related coping frequency/severity scoring.'],
  ['Economic capacity', 'Higher is better', 'Monthly per-capita economic capacity; adequacy requires a contextual MEB/SMEB threshold.'],
  ['Cash access', 'Higher success / lower problems', 'Follow-up access indicators use the 56 assisted-household denominator.'],
];

export default function Methodology() {
  return (
    <Box>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2} mb={3}>
        <Box>
          <Typography variant="h4" fontWeight={800}>Methodology & Evidence</Typography>
          <Typography color="text.secondary" mt={0.5}>
            How the dashboard turns validated MEAL evidence into management-useful information.
          </Typography>
        </Box>
        <Chip icon={<FactCheckRoundedIcon />} label="Source-locked methodology" color="primary" variant="outlined" />
      </Stack>

      <Paper sx={{ p: 3, mb: 3, border: '1px solid', borderColor: 'divider' }}>
        <Typography variant="overline" color="primary.main" fontWeight={800}>Core principle</Typography>
        <Typography variant="h5" fontWeight={800} mt={0.5}>
          Build the interface around the evidence. Do not generate additional evidence.
        </Typography>
        <Typography color="text.secondary" mt={1} maxWidth={900}>
          Stage 10 is a presentation and decision-support layer. It does not replace the underlying MEAL analysis, invent missing measurements, or convert descriptive results into causal claims.
        </Typography>
      </Paper>

      <Grid container spacing={2} mb={3}>
        {sections.map((section) => (
          <Grid item xs={12} md={6} key={section.title}>
            <Paper sx={{ p: 2.5, height: '100%', border: '1px solid', borderColor: 'divider' }}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <Box sx={{ color: 'primary.main', display: 'flex', mt: 0.25 }}>{section.icon}</Box>
                <Box>
                  <Typography fontWeight={800}>{section.title}</Typography>
                  <Typography color="text.secondary" variant="body2" mt={0.6}>{section.text}</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ p: 3, mb: 3, border: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h6" fontWeight={800}>Source hierarchy</Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} alignItems={{ xs: 'flex-start', md: 'center' }} mt={2}>
          <Chip label="Stage 08" color="info" />
          <Typography color="text.secondary">Validated baseline/follow-up evidence</Typography>
          <Typography sx={{ display: { xs: 'none', md: 'block' } }}>→</Typography>
          <Chip label="Stage 09" color="secondary" />
          <Typography color="text.secondary">Findings, decisions and actions</Typography>
          <Typography sx={{ display: { xs: 'none', md: 'block' } }}>→</Typography>
          <Chip label="Stage 10" color="primary" />
          <Typography color="text.secondary">Interactive presentation</Typography>
        </Stack>
      </Paper>

      <Paper sx={{ p: 3, border: '1px solid', borderColor: 'divider' }}>
        <Typography variant="h6" fontWeight={800}>Indicator methodology</Typography>
        <Divider sx={{ my: 2 }} />
        <Stack spacing={2}>
          {indicatorMethods.map(([name, direction, method]) => (
            <Box key={name}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                <Typography fontWeight={800} sx={{ minWidth: 170 }}>{name}</Typography>
                <Chip label={direction} size="small" variant="outlined" />
              </Stack>
              <Typography color="text.secondary" variant="body2" mt={0.5}>{method}</Typography>
            </Box>
          ))}
        </Stack>
        <Divider sx={{ my: 2.5 }} />
        <Typography variant="subtitle2" fontWeight={800}>Simulation note</Typography>
        <Typography color="text.secondary" variant="body2" mt={0.5}>
          The project uses fictional simulated data for learning and portfolio demonstration.
        </Typography>
      </Paper>
    </Box>
  );
}
