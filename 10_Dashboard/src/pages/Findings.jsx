import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import {
  Alert, Box, Button, Card, CardContent, Chip, Divider, Grid, Stack, Typography,
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import { actions, findings, indicators } from '../data';

const typeMeta = {
  MONITOR: { label: 'MONITOR', color: 'success' },
  INVESTIGATE: { label: 'INVESTIGATE', color: 'error' },
  VALIDATE: { label: 'VALIDATE', color: 'info' },
  MEASUREMENT_GAP: { label: 'MEASUREMENT GAP', color: 'secondary' },
};

function FindingCard({ finding, onOpen }) {
  const action = actions.find((a) => a.id === finding.actionId);
  const indicator = indicators.find((i) => i.findingId === finding.id);
  const meta = typeMeta[finding.type] || typeMeta.MONITOR;

  return (
    <Card
      onClick={() => onOpen(finding)}
      sx={{
        height: '100%', cursor: 'pointer', position: 'relative', overflow: 'hidden',
        transition: 'transform .18s ease, border-color .18s ease, box-shadow .18s ease',
        '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(167,139,250,.35)', boxShadow: '0 24px 80px rgba(0,0,0,.30)' },
      }}
    >
      <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, bgcolor: finding.priority === 'High' ? 'error.main' : 'warning.main' }} />
      <CardContent sx={{ p: { xs: 2.2, md: 2.6 }, pl: { xs: 2.7, md: 3.1 } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1.2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Chip label={finding.id} size="small" color="secondary" variant="outlined" />
            <Chip label={meta.label} size="small" color={meta.color} variant="outlined" />
          </Stack>
          <Chip label={finding.priority.toUpperCase()} size="small" color={finding.priority === 'High' ? 'error' : 'warning'} />
        </Stack>

        <Typography variant="h6" fontWeight={850} sx={{ mt: 1.7, lineHeight: 1.18 }}>{finding.title}</Typography>

        {indicator && (
          <Box sx={{ mt: 1.7, p: 1.35, borderRadius: 2.5, bgcolor: 'rgba(96,165,250,.045)', border: '1px solid rgba(96,165,250,.12)' }}>
            <Typography variant="caption" color="text.secondary">SOURCE INDICATOR</Typography>
            <Typography variant="body2" fontWeight={800} sx={{ mt: .25 }}>{indicator.id} · {indicator.label}</Typography>
            <Typography variant="caption" color="primary.light">
              {indicator.followUp == null ? 'TBD' : indicator.unit === '%' ? `${indicator.followUp.toFixed(2)}% follow-up` : indicator.unit === 'FCFA' ? `${indicator.followUp.toLocaleString('en-US')} FCFA follow-up` : `${indicator.followUp} follow-up`}
            </Typography>
          </Box>
        )}

        <Typography variant="overline" color="text.secondary" fontWeight={900} sx={{ display: 'block', mt: 1.8, letterSpacing: 1 }}>FINDING</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: .35 }}>{finding.interpretation}</Typography>

        <Divider sx={{ my: 1.8 }} />

        <Typography variant="overline" color="secondary.main" fontWeight={900} sx={{ letterSpacing: 1 }}>DECISION</Typography>
        <Typography variant="body2" fontWeight={750} sx={{ mt: .35 }}>{finding.decision}</Typography>

        {action && (
          <Box sx={{ mt: 1.8, p: 1.4, borderRadius: 2.5, bgcolor: 'rgba(167,139,250,.055)', border: '1px solid rgba(167,139,250,.13)' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
              <Typography variant="caption" color="secondary.main" fontWeight={900}>ACTION · {action.id}</Typography>
              <Chip label={action.status.toUpperCase()} size="small" variant="outlined" color="warning" />
            </Stack>
            <Typography variant="body2" sx={{ mt: .5 }} fontWeight={700}>{action.action}</Typography>
          </Box>
        )}

        <Button size="small" endIcon={<ArrowForwardRoundedIcon />} color="secondary" sx={{ mt: 1.5, px: 0, fontWeight: 800 }}>
          Open evidence chain
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Findings({ onOpenFinding }) {
  const high = findings.filter((f) => f.priority === 'High').length;
  const medium = findings.filter((f) => f.priority === 'Medium').length;

  return (
    <Box sx={{ p: { xs: 2, md: 3.5 }, maxWidth: 1500, mx: 'auto' }}>
      <Stack spacing={3}>
        <Box>
          <Typography variant="overline" color="secondary.main" fontWeight={900} letterSpacing={1.5}>FINDING INTELLIGENCE</Typography>
          <Typography variant="h3" sx={{ mt: .3, fontSize: { xs: 30, md: 42 }, letterSpacing: -1.5 }}>Findings & Decisions</Typography>
          <Typography color="text.secondary" sx={{ mt: .7, maxWidth: 760 }}>
            Trace validated indicator evidence into explicit findings, management decisions and linked actions.
          </Typography>
        </Box>

        <Alert severity="info" variant="outlined" icon={<FactCheckRoundedIcon />} sx={{ bgcolor: 'rgba(96,165,250,.03)', borderColor: 'rgba(96,165,250,.18)' }}>
          <Typography fontWeight={800}>Decision traceability</Typography>
          <Typography variant="body2" color="text.secondary">Every formal finding is linked to its source indicator and Stage 09 decision/action record.</Typography>
        </Alert>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card><CardContent><Typography variant="caption" color="text.secondary">FORMAL FINDINGS</Typography><Typography variant="h4" fontWeight={900} sx={{ mt: .5 }}>{findings.length}</Typography><Typography variant="body2" color="text.secondary">F01 → F07</Typography></CardContent></Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card><CardContent><Typography variant="caption" color="text.secondary">HIGH PRIORITY</Typography><Typography variant="h4" fontWeight={900} color="error.main" sx={{ mt: .5 }}>{high}</Typography><Typography variant="body2" color="text.secondary">Requires management attention</Typography></CardContent></Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card><CardContent><Typography variant="caption" color="text.secondary">MEDIUM PRIORITY</Typography><Typography variant="h4" fontWeight={900} color="warning.main" sx={{ mt: .5 }}>{medium}</Typography><Typography variant="body2" color="text.secondary">Monitoring / review</Typography></CardContent></Card>
          </Grid>
        </Grid>

        <Grid container spacing={2.2}>
          {findings.map((finding) => (
            <Grid item xs={12} md={6} lg={4} key={finding.id}>
              <FindingCard finding={finding} onOpen={onOpenFinding} />
            </Grid>
          ))}
        </Grid>

        <Card sx={{ bgcolor: 'rgba(167,139,250,.035)', borderColor: 'rgba(167,139,250,.13)' }}>
          <CardContent sx={{ p: { xs: 2.3, md: 3 } }}>
            <Typography variant="overline" color="secondary.main" fontWeight={900} letterSpacing={1.1}>MEAL DECISION CHAIN</Typography>
            <Typography variant="h6" fontWeight={850} sx={{ mt: .3 }}>Indicator result → Finding → Interpretation → Decision → Action → Follow-up evidence</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: .7 }}>
              The platform presents management implications without changing the underlying evidence or making causal claims.
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
