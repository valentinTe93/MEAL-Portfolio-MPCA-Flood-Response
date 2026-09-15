import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import {
  Alert, Box, Card, CardContent, Chip, Divider, Grid, LinearProgress,
  Stack, Typography, Button, Dialog, DialogTitle, DialogContent,
  DialogActions, IconButton, Tooltip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { indicators, findings, actions } from '../data';

const pct = (n) => `${n.toFixed(2)}%`;

function StatusChip({ status }) {
  const map = {
    MET: { label: 'MET', color: 'success' },
    NOT_MET: { label: 'NOT MET', color: 'error' },
    REFERENCE: { label: 'REFERENCE', color: 'info' },
  };
  const item = map[status] || { label: status, color: 'default' };
  return <Chip size="small" label={item.label} color={item.color} variant="outlined" sx={{ fontWeight: 800 }} />;
}

function TransferBreakdown({ onOpen }) {
  const full = 50, partial = 6, none = 4, total = 60;
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <Box>
            <Typography variant="overline" color="text.secondary" fontWeight={800}>DELIVERY COMPLETENESS</Typography>
            <Typography variant="h5" fontWeight={850}>Transfer outcome</Typography>
          </Box>
          <Tooltip title="Open finding F04">
            <IconButton onClick={onOpen} aria-label="Open transfer completeness finding"><ArrowForwardIcon /></IconButton>
          </Tooltip>
        </Stack>
        <Stack direction="row" spacing={1.5} alignItems="baseline" mb={2}>
          <Typography variant="h2" fontWeight={900} lineHeight={1}>83.33%</Typography>
          <StatusChip status="NOT_MET" />
        </Stack>
        <Typography color="text.secondary" mb={2}>Full planned transfer received · target ≥90%</Typography>
        <LinearProgress variant="determinate" value={83.33} color="error" sx={{ height: 10, borderRadius: 5, mb: 3 }} />
        <Stack spacing={1.5}>
          {[['Full transfer', full, 'success'], ['Partial transfer', partial, 'warning'], ['No transfer', none, 'error']].map(([label, value, color]) => (
            <Box key={label}>
              <Stack direction="row" justifyContent="space-between" mb={0.5}>
                <Typography fontWeight={700}>{label}</Typography>
                <Typography fontWeight={800}>{value}/{total}</Typography>
              </Stack>
              <LinearProgress variant="determinate" value={(value / total) * 100} color={color} sx={{ height: 7, borderRadius: 4 }} />
            </Box>
          ))}
        </Stack>
        <Alert severity="warning" sx={{ mt: 3 }}>
          <strong>10 households require reconciliation:</strong> 6 partial + 4 non-receipt.
        </Alert>
      </CardContent>
    </Card>
  );
}

function AccessCard({ onOpen }) {
  const success = indicators.find(x => x.id === 'K05');
  const problems = indicators.find(x => x.id === 'K06');
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <Box>
            <Typography variant="overline" color="text.secondary" fontWeight={800}>TRANSFER ACCESS</Typography>
            <Typography variant="h5" fontWeight={850}>Access performance</Typography>
          </Box>
          <AccountBalanceWalletIcon color="primary" />
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: 2, borderRadius: 3, bgcolor: 'rgba(16,185,129,.08)', border: '1px solid rgba(16,185,129,.18)' }}>
              <Typography color="text.secondary" variant="body2">Successful access</Typography>
              <Typography variant="h3" fontWeight={900}>{pct(success.followUp)}</Typography>
              <Typography variant="body2">53 / 56 assisted households</Typography>
              <Chip size="small" color="success" label="Target met" sx={{ mt: 1, fontWeight: 800 }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: 2, borderRadius: 3, bgcolor: 'rgba(245,158,11,.08)', border: '1px solid rgba(245,158,11,.18)' }}>
              <Typography color="text.secondary" variant="body2">Reported problems</Typography>
              <Typography variant="h3" fontWeight={900}>{pct(problems.followUp)}</Typography>
              <Typography variant="body2">3 / 56 assisted households</Typography>
              <Chip size="small" color="success" label="Within ≤10%" sx={{ mt: 1, fontWeight: 800 }} />
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2.5 }} />
        <Typography variant="body2" color="text.secondary">
          Denominator discipline: cash-access indicators use the 56 assisted households, not all 60 eligible households.
        </Typography>
        <Button sx={{ mt: 2 }} endIcon={<ArrowForwardIcon />} onClick={onOpen}>Open F05</Button>
      </CardContent>
    </Card>
  );
}

function OperationalSignals({ onSelect }) {
  const signals = [
    ['K04', 'Full transfer', '83.33%', 'NOT_MET', 'F04'],
    ['K05', 'Cash access success', '94.64%', 'MET', 'F05'],
    ['K06', 'Cash access problems', '5.36%', 'MET', 'F05'],
    ['K07', 'Any MPCA receipt', '93.33%', 'REFERENCE', 'F06'],
  ];
  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="overline" color="text.secondary" fontWeight={800}>OPERATIONAL SIGNALS</Typography>
        <Typography variant="h5" fontWeight={850} mb={2}>Delivery and access indicators</Typography>
        <Grid container spacing={1.5}>
          {signals.map(([id, label, value, status, findingId]) => (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <Box onClick={() => onSelect(findingId)} sx={{ p: 2, height: '100%', borderRadius: 3, border: '1px solid', borderColor: 'divider', cursor: 'pointer', transition: '.18s', '&:hover': { transform: 'translateY(-2px)', borderColor: 'primary.main', boxShadow: 3 } }}>
                <Stack direction="row" justifyContent="space-between"><Typography variant="caption" color="text.secondary" fontWeight={800}>{id}</Typography><StatusChip status={status} /></Stack>
                <Typography fontWeight={750} mt={1}>{label}</Typography>
                <Typography variant="h4" fontWeight={900}>{value}</Typography>
                <Typography variant="caption" color="text.secondary">Finding {findingId}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default function Operations({ onOpenFinding }) {
  const [selected, setSelected] = React.useState(null);
  const selectedFinding = selected ? findings.find(f => f.id === selected) : null;
  const selectedAction = selectedFinding ? actions.find(a => a.id === selectedFinding.actionId) : null;
  const f06 = findings.find(f => f.id === 'F06');

  const openFinding = (id) => setSelected(id);

  return (
    <Box>
      <Stack spacing={0.5} mb={3}>
        <Typography variant="overline" color="primary.main" fontWeight={900} letterSpacing={1.5}>OPERATIONAL INTELLIGENCE</Typography>
        <Typography variant="h3" fontWeight={950}>Delivery, access & reconciliation</Typography>
        <Typography color="text.secondary" maxWidth={800}>
          A focused view of transfer delivery and cash-access performance, with denominators preserved from the validated evidence model.
        </Typography>
      </Stack>

      <Alert severity="error" icon={<ErrorOutlineIcon />} sx={{ mb: 3, borderRadius: 3 }}>
        <strong>Primary operational attention:</strong> full-transfer delivery is 83.33% against a ≥90% target.
      </Alert>

      <Grid container spacing={2.5}>
        <Grid item xs={12} md={7}>
          <TransferBreakdown onOpen={() => openFinding('F04')} />
        </Grid>
        <Grid item xs={12} md={5}>
          <AccessCard onOpen={() => openFinding('F05')} />
        </Grid>
        <Grid item xs={12}>
          <OperationalSignals onSelect={openFinding} />
        </Grid>
      </Grid>

      <Card sx={{ mt: 2.5 }}>
        <CardContent sx={{ p: 3 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={2}>
            <Box>
              <Typography variant="overline" color="text.secondary" fontWeight={800}>RECONCILIATION QUEUE</Typography>
              <Typography variant="h5" fontWeight={850}>Cases requiring operational follow-up</Typography>
            </Box>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip icon={<FactCheckIcon />} label="10 incomplete / non-received" color="error" variant="outlined" />
              <Chip icon={<CheckCircleOutlineIcon />} label="53 successful access" color="success" variant="outlined" />
              <Chip label="4 non-receipt cases" color="warning" variant="outlined" />
            </Stack>
          </Stack>
          <Divider sx={{ my: 2.5 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box onClick={() => openFinding('F04')} sx={{ p: 2, borderRadius: 3, bgcolor: 'background.default', cursor: 'pointer' }}>
                <Typography fontWeight={800}>F04 · Incomplete delivery</Typography>
                <Typography variant="body2" color="text.secondary" mt={0.5}>6 partial + 4 non-receipt cases</Typography>
                <Button size="small" sx={{ mt: 1 }} endIcon={<ArrowForwardIcon />}>Open decision</Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box onClick={() => openFinding('F05')} sx={{ p: 2, borderRadius: 3, bgcolor: 'background.default', cursor: 'pointer' }}>
                <Typography fontWeight={800}>F05 · Access barriers</Typography>
                <Typography variant="body2" color="text.secondary" mt={0.5}>3 assisted households reported problems</Typography>
                <Button size="small" sx={{ mt: 1 }} endIcon={<ArrowForwardIcon />}>Open decision</Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box onClick={() => openFinding('F06')} sx={{ p: 2, borderRadius: 3, bgcolor: 'background.default', cursor: 'pointer' }}>
                <Typography fontWeight={800}>F06 · Non-receipt</Typography>
                <Typography variant="body2" color="text.secondary" mt={0.5}>4 eligible households received no MPCA</Typography>
                <Button size="small" sx={{ mt: 1 }} endIcon={<ArrowForwardIcon />}>Open decision</Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Dialog open={Boolean(selectedFinding)} onClose={() => setSelected(null)} maxWidth="sm" fullWidth>
        {selectedFinding && (
          <>
            <DialogTitle sx={{ pr: 6 }}>
              <Typography variant="overline" color="primary.main" fontWeight={900}>{selectedFinding.id} · {selectedFinding.type}</Typography>
              <Typography variant="h5" fontWeight={900}>{selectedFinding.title}</Typography>
              <IconButton onClick={() => setSelected(null)} sx={{ position: 'absolute', right: 12, top: 12 }}><CloseIcon /></IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Stack spacing={2}>
                <Box><Typography variant="caption" color="text.secondary" fontWeight={800}>EVIDENCE</Typography><Typography mt={0.5}>{selectedFinding.evidence}</Typography></Box>
                <Box><Typography variant="caption" color="text.secondary" fontWeight={800}>INTERPRETATION</Typography><Typography mt={0.5}>{selectedFinding.interpretation}</Typography></Box>
                <Box sx={{ p: 2, borderRadius: 3, bgcolor: 'rgba(124,58,237,.08)' }}><Typography variant="caption" color="text.secondary" fontWeight={800}>DECISION</Typography><Typography mt={0.5} fontWeight={750}>{selectedFinding.decision}</Typography></Box>
                {selectedAction && <Box><Typography variant="caption" color="text.secondary" fontWeight={800}>ACTION {selectedAction.id}</Typography><Typography mt={0.5}>{selectedAction.action}</Typography><Stack direction="row" spacing={1} mt={1} flexWrap="wrap" useFlexGap><Chip size="small" label={selectedAction.priority} color={selectedAction.priority === 'High' ? 'error' : 'warning'} /><Chip size="small" label={selectedAction.status} variant="outlined" /><Chip size="small" label={selectedAction.timeline} variant="outlined" /></Stack></Box>}
                <Alert severity="info"><strong>Analytical safeguard:</strong> findings are based on descriptive evidence and do not establish causal attribution.</Alert>
              </Stack>
            </DialogContent>
            <DialogActions><Button onClick={() => setSelected(null)}>Close</Button></DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
