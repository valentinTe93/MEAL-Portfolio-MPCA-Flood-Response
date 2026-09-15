import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import {
  Alert, Box, Button, Card, CardContent, Chip, Dialog, DialogActions, DialogContent,
  DialogTitle, Divider, Grid, InputAdornment, MenuItem, Select, Stack, TextField, Typography,
} from '@mui/material';
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import { actions, findings, indicators } from '../data';

const priorityMeta = {
  High: { color: 'error', label: 'HIGH' },
  Medium: { color: 'warning', label: 'MEDIUM' },
};

function ActionCard({ action, onOpen }) {
  const finding = findings.find((f) => f.id === action.findingId);
  const indicator = indicators.find((i) => i.findingId === action.findingId);
  const meta = priorityMeta[action.priority] || priorityMeta.Medium;
  return (
    <Card onClick={() => onOpen(action)} sx={{
      height: '100%', cursor: 'pointer', position: 'relative', overflow: 'hidden',
      transition: 'transform .18s ease, border-color .18s ease, box-shadow .18s ease',
      '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(167,139,250,.38)', boxShadow: '0 24px 80px rgba(0,0,0,.30)' },
    }}>
      <Box sx={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, bgcolor: action.priority === 'High' ? 'error.main' : 'warning.main' }} />
      <CardContent sx={{ p: { xs: 2.2, md: 2.6 }, pl: { xs: 2.7, md: 3.1 } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Chip label={action.id} size="small" color="secondary" variant="outlined" />
            <Chip label={action.status.toUpperCase()} size="small" color="warning" variant="outlined" />
          </Stack>
          <Chip label={meta.label} size="small" color={meta.color} />
        </Stack>
        <Typography variant="h6" fontWeight={850} sx={{ mt: 1.7, lineHeight: 1.2 }}>{action.action}</Typography>
        <Box sx={{ mt: 1.8, p: 1.35, borderRadius: 2.5, bgcolor: 'rgba(167,139,250,.055)', border: '1px solid rgba(167,139,250,.13)' }}>
          <Typography variant="caption" color="secondary.main" fontWeight={900}>DECISION</Typography>
          <Typography variant="body2" fontWeight={750} sx={{ mt: .35 }}>{action.decision}</Typography>
        </Box>
        <Grid container spacing={1.5} sx={{ mt: .8 }}>
          <Grid item xs={12} sm={6}><Typography variant="caption" color="text.secondary">RESPONSIBLE</Typography><Typography variant="body2" fontWeight={700} sx={{ mt: .2 }}>{action.responsible}</Typography></Grid>
          <Grid item xs={12} sm={6}><Typography variant="caption" color="text.secondary">TIMELINE</Typography><Typography variant="body2" fontWeight={700} sx={{ mt: .2 }}>{action.timeline}</Typography></Grid>
        </Grid>
        <Divider sx={{ my: 1.7 }} />
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="caption" color="text.secondary">LINKED EVIDENCE</Typography>
            <Typography variant="body2" fontWeight={800} sx={{ mt: .2 }}>{action.findingId}{indicator ? ` · ${indicator.id}` : ''}{finding ? ` · ${finding.title}` : ''}</Typography>
          </Box>
          <ArrowForwardRoundedIcon sx={{ color: 'secondary.main' }} fontSize="small" />
        </Stack>
      </CardContent>
    </Card>
  );
}

function ActionDialog({ action, onClose }) {
  if (!action) return null;
  const finding = findings.find((f) => f.id === action.findingId);
  const indicator = indicators.find((i) => i.findingId === action.findingId);
  return <Dialog open={Boolean(action)} onClose={onClose} fullWidth maxWidth="md">
    <DialogTitle sx={{ pb: 1 }}>
      <Stack direction="row" spacing={1} alignItems="center"><Chip label={action.id} color="secondary" variant="outlined"/><Typography variant="h6" fontWeight={850}>Action management</Typography></Stack>
    </DialogTitle>
    <DialogContent dividers>
      <Stack spacing={2.2}>
        <Alert severity={action.priority === 'High' ? 'error' : 'warning'} variant="outlined" icon={<FlagRoundedIcon />}>
          <Typography fontWeight={800}>{action.priority} priority · {action.status}</Typography>
          <Typography variant="body2" color="text.secondary">Status is source-controlled. No completion or progress is inferred.</Typography>
        </Alert>
        <Box><Typography variant="overline" color="text.secondary" fontWeight={900}>MANAGEMENT ACTION</Typography><Typography variant="h6" fontWeight={800} sx={{ mt: .3 }}>{action.action}</Typography></Box>
        <Box><Typography variant="overline" color="secondary.main" fontWeight={900}>DECISION</Typography><Typography sx={{ mt: .3 }}>{action.decision}</Typography></Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}><Typography variant="caption" color="text.secondary">RESPONSIBLE ROLE</Typography><Typography fontWeight={750} sx={{ mt: .25 }}>{action.responsible}</Typography></Grid>
          <Grid item xs={12} sm={6}><Typography variant="caption" color="text.secondary">ILLUSTRATIVE TIMELINE</Typography><Typography fontWeight={750} sx={{ mt: .25 }}>{action.timeline}</Typography></Grid>
        </Grid>
        {finding && <Box sx={{ p: 1.6, borderRadius: 2.5, bgcolor: 'rgba(96,165,250,.045)', border: '1px solid rgba(96,165,250,.12)' }}><Typography variant="caption" color="text.secondary">FINDING · {finding.id}</Typography><Typography variant="body2" fontWeight={750} sx={{ mt: .3 }}>{finding.title}</Typography><Typography variant="body2" color="text.secondary" sx={{ mt: .5 }}>{finding.interpretation}</Typography></Box>}
        {indicator && <Box><Typography variant="caption" color="text.secondary">SOURCE INDICATOR</Typography><Typography variant="body2" fontWeight={750} sx={{ mt: .25 }}>{indicator.id} · {indicator.label}</Typography><Typography variant="caption" color="text.secondary">Follow-up: {indicator.followUp == null ? 'TBD' : indicator.unit === '%' ? `${indicator.followUp.toFixed(2)}%` : `${indicator.followUp.toLocaleString('en-US')} ${indicator.unit}`}</Typography></Box>}
        <Divider />
        <Box><Typography variant="overline" color="text.secondary" fontWeight={900}>FOLLOW-UP EVIDENCE</Typography><Typography variant="body2" sx={{ mt: .4 }}>{action.followUpEvidence}</Typography></Box>
      </Stack>
    </DialogContent>
    <DialogActions><Button onClick={onClose} variant="contained" color="secondary">Close</Button></DialogActions>
  </Dialog>;
}

export default function Actions() {
  const [priority, setPriority] = React.useState('All');
  const [status, setStatus] = React.useState('All');
  const [query, setQuery] = React.useState('');
  const [selected, setSelected] = React.useState(null);
  const filtered = actions.filter((a) => {
    const text = `${a.id} ${a.findingId} ${a.action} ${a.decision} ${a.responsible}`.toLowerCase();
    return (priority === 'All' || a.priority === priority) && (status === 'All' || a.status === status) && text.includes(query.toLowerCase());
  });
  const high = actions.filter((a) => a.priority === 'High').length;
  return <Box sx={{ p: { xs: 2, md: 3.5 }, maxWidth: 1500, mx: 'auto' }}>
    <Stack spacing={3}>
      <Box>
        <Typography variant="overline" color="secondary.main" fontWeight={900} letterSpacing={1.5}>ACTION INTELLIGENCE</Typography>
        <Typography variant="h3" sx={{ mt: .3, fontSize: { xs: 30, md: 42 }, letterSpacing: -1.5 }}>Action Management</Typography>
        <Typography color="text.secondary" sx={{ mt: .7, maxWidth: 780 }}>Turn traceable management decisions into a controlled action register, with responsibility, priority, timeline and follow-up evidence.</Typography>
      </Box>
      <Alert severity="info" variant="outlined" icon={<PlaylistAddCheckRoundedIcon />} sx={{ bgcolor: 'rgba(167,139,250,.035)', borderColor: 'rgba(167,139,250,.18)' }}>
        <Typography fontWeight={800}>Source-locked action register</Typography>
        <Typography variant="body2" color="text.secondary">Seven actions are carried forward from Stage 09. All current action statuses are Open; the dashboard does not invent progress or completion.</Typography>
      </Alert>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}><Card><CardContent><Typography variant="caption" color="text.secondary">OPEN ACTIONS</Typography><Typography variant="h4" fontWeight={900} sx={{ mt: .5 }}>{actions.length}</Typography><Typography variant="body2" color="text.secondary">A01 → A07</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={4}><Card><CardContent><Typography variant="caption" color="text.secondary">HIGH PRIORITY</Typography><Typography variant="h4" fontWeight={900} color="error.main" sx={{ mt: .5 }}>{high}</Typography><Typography variant="body2" color="text.secondary">Requires management attention</Typography></CardContent></Card></Grid>
        <Grid item xs={12} sm={4}><Card><CardContent><Typography variant="caption" color="text.secondary">MEDIUM PRIORITY</Typography><Typography variant="h4" fontWeight={900} color="warning.main" sx={{ mt: .5 }}>{actions.length - high}</Typography><Typography variant="body2" color="text.secondary">Monitoring / review actions</Typography></CardContent></Card></Grid>
      </Grid>
      <Card sx={{ bgcolor: 'rgba(13,20,36,.7)' }}><CardContent><Grid container spacing={1.5} alignItems="center">
        <Grid item xs={12} md={6}><TextField fullWidth size="small" placeholder="Search actions, findings or responsible roles" value={query} onChange={(e) => setQuery(e.target.value)} InputProps={{ startAdornment: <InputAdornment position="start"><SearchRoundedIcon fontSize="small"/></InputAdornment> }}/></Grid>
        <Grid item xs={6} md={3}><Select fullWidth size="small" value={priority} onChange={(e) => setPriority(e.target.value)}><MenuItem value="All">All priorities</MenuItem><MenuItem value="High">High</MenuItem><MenuItem value="Medium">Medium</MenuItem></Select></Grid>
        <Grid item xs={6} md={3}><Select fullWidth size="small" value={status} onChange={(e) => setStatus(e.target.value)}><MenuItem value="All">All statuses</MenuItem><MenuItem value="Open">Open</MenuItem></Select></Grid>
      </Grid></CardContent></Card>
      <Grid container spacing={2.2}>{filtered.map((action) => <Grid item xs={12} md={6} lg={4} key={action.id}><ActionCard action={action} onOpen={setSelected}/></Grid>)}</Grid>
      {filtered.length === 0 && <Card><CardContent><Typography fontWeight={800}>No actions match the current filters.</Typography><Typography variant="body2" color="text.secondary" sx={{ mt: .5 }}>No additional evidence is inferred.</Typography></CardContent></Card>}
      <Card sx={{ bgcolor: 'rgba(167,139,250,.035)', borderColor: 'rgba(167,139,250,.13)' }}><CardContent><Typography variant="overline" color="secondary.main" fontWeight={900} letterSpacing={1.1}>ACTION TRACEABILITY</Typography><Typography variant="h6" fontWeight={850} sx={{ mt: .3 }}>Indicator → Finding → Interpretation → Decision → Action → Follow-up evidence</Typography><Typography variant="body2" color="text.secondary" sx={{ mt: .7 }}>Each action remains anchored to the Stage 09 decision/action register and its evidence pathway.</Typography></CardContent></Card>
    </Stack>
    <ActionDialog action={selected} onClose={() => setSelected(null)} />
  </Box>;
}
