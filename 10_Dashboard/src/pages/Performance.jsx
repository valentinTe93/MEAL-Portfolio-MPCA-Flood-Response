import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { Box, Card, CardContent, Chip, Divider, Grid, Stack, Tooltip, Typography } from '@mui/material';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import { indicators, findings } from '../data';

const get = (id) => indicators.find((x) => x.id === id);
const f = (id) => findings.find((x) => x.id === id);

function Status({ label, color='success' }) {
  return <Chip size="small" label={label} color={color} variant="outlined" sx={{fontWeight:850}} />;
}

function ComparisonCard({ id, icon, accent }) {
  const ind = get(id);
  const finding = f(ind.findingId);
  const pct = ind.unit === '%' ? ind.followUp : null;
  const scale = id === 'K02' ? 15 : 100;
  const baseWidth = ind.baseline == null ? 0 : Math.min(100, (ind.baseline / scale) * 100);
  const followWidth = pct == null ? Math.min(100, (ind.followUp / scale) * 100) : Math.min(100, ind.followUp);

  return (
    <Card sx={{height:'100%', overflow:'hidden', position:'relative'}}>
      <Box sx={{height:4, bgcolor:accent}} />
      <CardContent sx={{p:{xs:2.4,md:3}}}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
          <Box>
            <Typography variant="overline" color="text.secondary" fontWeight={900} letterSpacing={1}>{id}</Typography>
            <Typography variant="h6" fontWeight={850}>{ind.label}</Typography>
          </Box>
          {icon}
        </Stack>

        <Stack direction="row" alignItems="baseline" spacing={1} sx={{mt:2}}>
          <Typography sx={{fontSize:38,fontWeight:950,letterSpacing:-1.5}}>{ind.followUp?.toLocaleString('en-US',{maximumFractionDigits:2})}{ind.unit === '%' ? '%' : ''}</Typography>
          {ind.unit === 'FCFA' && <Typography variant="body2" color="text.secondary">FCFA / person / month</Typography>}
        </Stack>

        <Stack spacing={1.1} sx={{mt:2.2}}>
          {ind.baseline != null && <Box>
            <Stack direction="row" justifyContent="space-between" sx={{mb:.5}}>
              <Typography variant="caption" color="text.secondary">Baseline</Typography>
              <Typography variant="caption" fontWeight={850}>{ind.baseline.toLocaleString('en-US',{maximumFractionDigits:2})}{ind.unit === '%' ? '%' : ''}</Typography>
            </Stack>
            <Tooltip title={`Baseline: ${ind.baseline.toLocaleString('en-US',{maximumFractionDigits:2})}${ind.unit === '%' ? '%' : ''}`}>
              <Box sx={{height:8,borderRadius:99,bgcolor:'rgba(148,163,184,.12)',overflow:'hidden'}}><Box sx={{height:'100%',width:`${baseWidth}%`,borderRadius:99,bgcolor:'rgba(148,163,184,.65)'}}/></Box>
            </Tooltip>
          </Box>}
          <Box>
            <Stack direction="row" justifyContent="space-between" sx={{mb:.5}}>
              <Typography variant="caption" color="text.secondary">Follow-up</Typography>
              <Typography variant="caption" fontWeight={900}>{ind.followUp.toLocaleString('en-US',{maximumFractionDigits:2})}{ind.unit === '%' ? '%' : ''}</Typography>
            </Stack>
            <Tooltip title={`Follow-up: ${ind.followUp.toLocaleString('en-US',{maximumFractionDigits:2})}${ind.unit === '%' ? '%' : ''}`}>
              <Box sx={{height:8,borderRadius:99,bgcolor:'rgba(148,163,184,.12)',overflow:'hidden'}}><Box sx={{height:'100%',width:`${followWidth}%`,borderRadius:99,bgcolor:accent}}/></Box>
            </Tooltip>
          </Box>
        </Stack>

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{mt:2}}>
          <Typography variant="body2" color="text.secondary">Change</Typography>
          <Typography fontWeight={950} sx={{color:accent}}>{ind.changeLabel}</Typography>
        </Stack>

        <Divider sx={{my:2}}/>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
          <Status label={ind.status === 'NOT_MET' ? 'NOT MET' : ind.status} color={ind.status === 'TBD' ? 'info' : ind.status === 'MET' ? 'success' : 'error'} />
          <Typography variant="caption" color="text.secondary">Target: {ind.targetLabel}</Typography>
        </Stack>
        {finding && <Typography variant="caption" color="text.secondary" sx={{display:'block',mt:1.2}}>Linked finding: <b>{finding.id}</b></Typography>}
      </CardContent>
    </Card>
  );
}

function EconomicCapacityCard() {
  const ind = get('K03');
  return <Card sx={{height:'100%',overflow:'hidden',position:'relative'}}>
    <Box sx={{height:4,bgcolor:'secondary.main'}} />
    <CardContent sx={{p:{xs:2.4,md:3}}}>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
        <Box><Typography variant="overline" color="text.secondary" fontWeight={900} letterSpacing={1}>K03</Typography><Typography variant="h6" fontWeight={850}>Economic capacity</Typography></Box>
        <InsightsRoundedIcon sx={{color:'secondary.main'}}/>
      </Stack>
      <Typography sx={{fontSize:38,fontWeight:950,letterSpacing:-1.5,mt:2}}>{ind.followUp.toLocaleString('en-US')} <Typography component="span" sx={{fontSize:15,fontWeight:750,color:'text.secondary'}}>FCFA</Typography></Typography>
      <Typography variant="body2" color="text.secondary">monthly per-capita economic capacity</Typography>
      <Box sx={{mt:2.2}}>
        <Stack direction="row" justifyContent="space-between"><Typography variant="caption">Baseline</Typography><Typography variant="caption" fontWeight={850}>{ind.baseline.toLocaleString('en-US')} FCFA</Typography></Stack>
        <Stack direction="row" justifyContent="space-between" sx={{mt:.7}}><Typography variant="caption">Follow-up</Typography><Typography variant="caption" fontWeight={850}>{ind.followUp.toLocaleString('en-US')} FCFA</Typography></Stack>
        <Stack direction="row" justifyContent="space-between" sx={{mt:.7}}><Typography variant="caption">Change</Typography><Typography variant="caption" fontWeight={950} color="secondary.main">+{ind.change.toLocaleString('en-US')} FCFA</Typography></Stack>
      </Box>
      <Divider sx={{my:2}}/>
      <Status label="TBD" color="info" />
      <Typography variant="body2" sx={{mt:1.2}}><b>Why not classified?</b></Typography>
      <Typography variant="body2" color="text.secondary" sx={{mt:.35}}>The applicable MEB/SMEB threshold has not been established or validated.</Typography>
      <Box sx={{mt:1.6,p:1.4,borderRadius:2,bgcolor:'rgba(96,165,250,.06)',border:'1px solid rgba(96,165,250,.16)'}}>
        <Typography variant="caption" color="info.light" fontWeight={850}>F03 → A03</Typography>
        <Typography variant="caption" display="block" color="text.secondary">Validate the contextual threshold before assessing adequacy.</Typography>
      </Box>
    </CardContent>
  </Card>;
}

export default function Performance() {
  return <Box sx={{p:{xs:2,md:3.5},maxWidth:1500,mx:'auto'}}>
    <Stack spacing={3}>
      <Box>
        <Typography variant="overline" color="primary.main" fontWeight={900} letterSpacing={1.5}>PERFORMANCE INTELLIGENCE</Typography>
        <Typography variant="h3" sx={{fontSize:{xs:30,md:42},letterSpacing:-1.5,fontWeight:900}}>Outcome performance</Typography>
        <Typography color="text.secondary" sx={{mt:.8,maxWidth:780}}>Validated before-and-after evidence for food consumption, coping and household economic capacity.</Typography>
      </Box>

      <Card sx={{background:'linear-gradient(120deg, rgba(45,212,191,.08), rgba(96,165,250,.04))',borderColor:'rgba(45,212,191,.18)'}}>
        <CardContent sx={{p:{xs:2.4,md:3}}}>
          <Stack direction={{xs:'column',md:'row'}} spacing={2} alignItems={{md:'center'}} justifyContent="space-between">
            <Stack direction="row" spacing={1.5} alignItems="center"><TrendingUpRoundedIcon color="success"/><Box><Typography fontWeight={900}>Overall outcome signal</Typography><Typography variant="body2" color="text.secondary">Both food-consumption indicators moved in the expected direction and meet their defined targets.</Typography></Box></Stack>
            <Stack direction="row" spacing={1}><Status label="FCS MET" color="success"/><Status label="rCSI MET" color="success"/></Stack>
          </Stack>
        </CardContent>
      </Card>

      <Grid container spacing={2.5}>
        <Grid item xs={12} md={6}><ComparisonCard id="K01" accent="#2dd4bf" icon={<TrendingUpRoundedIcon sx={{color:'success.main'}}/>}/></Grid>
        <Grid item xs={12} md={6}><ComparisonCard id="K02" accent="#34d399" icon={<TrendingDownRoundedIcon sx={{color:'success.main'}}/>}/></Grid>
        <Grid item xs={12}><EconomicCapacityCard/></Grid>
      </Grid>

      <Card>
        <CardContent sx={{p:{xs:2.4,md:3}}}>
          <Typography variant="overline" color="secondary.main" fontWeight={900} letterSpacing={1.1}>ANALYTICAL SAFEGUARD</Typography>
          <Typography variant="h6" fontWeight={850}>What these results do and do not tell us</Typography>
          <Grid container spacing={2} sx={{mt:.6}}>
            <Grid item xs={12} md={6}><Box sx={{p:1.7,borderRadius:2.5,bgcolor:'rgba(52,211,153,.045)',border:'1px solid rgba(52,211,153,.14)'}}><Typography fontWeight={800}>Supported</Typography><Typography variant="body2" color="text.secondary" sx={{mt:.5}}>The panel data show descriptive change between baseline and follow-up.</Typography></Box></Grid>
            <Grid item xs={12} md={6}><Box sx={{p:1.7,borderRadius:2.5,bgcolor:'rgba(251,113,133,.045)',border:'1px solid rgba(251,113,133,.14)'}}><Typography fontWeight={800}>Not established</Typography><Typography variant="body2" color="text.secondary" sx={{mt:.5}}>These comparisons do not establish causal attribution to MPCA.</Typography></Box></Grid>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  </Box>;
}
