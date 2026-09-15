import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import {
  Alert, Avatar, Box, Button, Card, CardContent, Chip, Divider, Grid,
  LinearProgress, Stack, Tooltip, Typography
} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import { indicators, findings, actions } from '../data';

const statusMeta = {
  MET: {label:'MET', color:'success', icon:<CheckCircleRoundedIcon fontSize="small"/>},
  NOT_MET: {label:'NOT MET', color:'error', icon:<WarningAmberRoundedIcon fontSize="small"/>},
  TBD: {label:'TBD', color:'info', icon:<InsightsRoundedIcon fontSize="small"/>},
  MEASUREMENT_GAP: {label:'MEASUREMENT GAP', color:'secondary', icon:<FactCheckRoundedIcon fontSize="small"/>},
  REFERENCE: {label:'REFERENCE', color:'default', icon:<InsightsRoundedIcon fontSize="small"/>},
};

const kpiOrder = ['K01','K02','K03','K04','K05','K06','K07','K08'];

function StatusChip({status}){
  const meta=statusMeta[status] || statusMeta.REFERENCE;
  return <Chip size="small" icon={meta.icon} label={meta.label} color={meta.color} variant="outlined" sx={{fontWeight:800}}/>;
}

function formatValue(ind){
  if(ind.followUp == null) return 'TBD';
  if(ind.unit === '%') return `${ind.followUp.toFixed(2)}%`;
  if(ind.unit === 'FCFA') return `${ind.followUp.toLocaleString('en-US')} FCFA`;
  return ind.followUp.toFixed(2);
}

function KpiCard({ind,onOpen}){
  const meta=statusMeta[ind.status] || statusMeta.REFERENCE;
  const isPct=ind.unit === '%';
  return (
    <Card onClick={()=>onOpen(ind)} sx={{height:'100%',cursor:'pointer',position:'relative',overflow:'hidden',transition:'transform .18s ease, border-color .18s ease, box-shadow .18s ease','&:hover':{transform:'translateY(-3px)',borderColor:`${meta.color==='success'?'rgba(52,211,153,.5)':meta.color==='error'?'rgba(251,113,133,.55)':meta.color==='info'?'rgba(96,165,250,.5)':'rgba(167,139,250,.5)'}`,boxShadow:'0 22px 70px rgba(0,0,0,.28)'}}}>
      <Box sx={{position:'absolute',inset:0,background:`radial-gradient(circle at 90% 0%, ${meta.color==='success'?'rgba(52,211,153,.10)':meta.color==='error'?'rgba(251,113,133,.10)':meta.color==='info'?'rgba(96,165,250,.10)':'rgba(167,139,250,.10)'} 0, transparent 45%)`,pointerEvents:'none'}}/>
      <CardContent sx={{p:2.2,position:'relative'}}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1}>
          <Typography variant="overline" sx={{letterSpacing:1.1,color:'text.secondary',fontWeight:800,lineHeight:1.2}}>{ind.id}</Typography>
          <StatusChip status={ind.status}/>
        </Stack>
        <Typography sx={{mt:1,fontWeight:750,minHeight:42}}>{ind.label}</Typography>
        <Typography sx={{fontSize:{xs:30,sm:34},fontWeight:900,letterSpacing:-1.3,mt:.8}}>{formatValue(ind)}</Typography>
        <Stack direction="row" justifyContent="space-between" sx={{mt:1.2}}>
          <Typography variant="caption" color="text.secondary">{ind.targetLabel}</Typography>
          <Typography variant="caption" color="text.secondary">{ind.denominator}</Typography>
        </Stack>
        {ind.baseline != null && ind.followUp != null && (
          <Box sx={{mt:1.4}}>
            <Stack direction="row" justifyContent="space-between" sx={{mb:.5}}>
              <Typography variant="caption" color="text.secondary">Baseline</Typography>
              <Typography variant="caption" fontWeight={800}>{ind.unit==='%'?`${ind.baseline.toFixed(2)}%`:ind.baseline.toLocaleString('en-US')}</Typography>
            </Stack>
            <LinearProgress variant="determinate" value={Math.min(100, isPct?ind.followUp:Math.max(0,Math.min(100,ind.followUp/70)))} sx={{height:5,borderRadius:4,bgcolor:'rgba(148,163,184,.10)','& .MuiLinearProgress-bar':{borderRadius:4}}}/>
            <Stack direction="row" justifyContent="space-between" sx={{mt:.45}}>
              <Typography variant="caption" color="text.secondary">Follow-up</Typography>
              <Typography variant="caption" color="success.main" fontWeight={900}>{ind.changeLabel}</Typography>
            </Stack>
          </Box>
        )}
        {ind.status==='MEASUREMENT_GAP' && <Typography variant="caption" color="secondary.light" sx={{display:'block',mt:1.4}}>Required follow-up measurement is unavailable.</Typography>}
        <Typography variant="caption" sx={{display:'block',mt:1.5,color:'primary.light',fontWeight:800}}>View evidence chain →</Typography>
      </CardContent>
    </Card>
  );
}

export default function Overview({onOpenIndicator,onOpenFinding}){
  const priorityFindings=findings.filter(f=>f.priority==='High');
  const openActions=actions.filter(a=>a.status==='Open');
  return <Box sx={{p:{xs:2,md:3.5},maxWidth:1500,mx:'auto'}}>
    <Stack spacing={3}>
      <Box>
        <Stack direction={{xs:'column',md:'row'}} justifyContent="space-between" alignItems={{md:'flex-end'}} spacing={2}>
          <Box>
            <Typography variant="overline" sx={{letterSpacing:1.5,color:'primary.main',fontWeight:900}}>MPCA FLOOD RESPONSE</Typography>
            <Typography variant="h3" sx={{mt:.3,fontSize:{xs:30,md:42},letterSpacing:-1.5}}>MEAL Decision Intelligence Platform</Typography>
            <Typography sx={{mt:.8,color:'text.secondary',fontSize:{xs:14,md:16}}>From evidence to findings, decisions and action.</Typography>
          </Box>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            <Chip label="SIMULATED PORTFOLIO" size="small" variant="outlined" />
            <Chip label="60 PANEL HOUSEHOLDS" size="small" color="info" variant="outlined" />
            <Chip label="BASELINE → FOLLOW-UP" size="small" color="secondary" variant="outlined" />
          </Stack>
        </Stack>
      </Box>

      <Alert severity="info" variant="outlined" icon={<InsightsRoundedIcon/>} sx={{bgcolor:'rgba(96,165,250,.035)',borderColor:'rgba(96,165,250,.20)'}}>
        <Typography fontWeight={800}>Executive signal</Typography>
        <Typography variant="body2" color="text.secondary">Outcome indicators show positive movement, while transfer completeness and measurement gaps require management attention.</Typography>
      </Alert>

      <Grid container spacing={2}>
        {kpiOrder.map(id=>{const ind=indicators.find(x=>x.id===id); return ind ? <Grid key={id} item xs={12} sm={6} lg={3}><KpiCard ind={ind} onOpen={onOpenIndicator}/></Grid> : null;})}
      </Grid>

      <Grid container spacing={2.5}>
        <Grid item xs={12} lg={7}>
          <Card sx={{height:'100%'}}>
            <CardContent sx={{p:{xs:2.3,md:3}}}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="overline" color="primary.main" fontWeight={900} letterSpacing={1.1}>DECISION INTELLIGENCE</Typography>
                  <Typography variant="h5" fontWeight={850}>What requires attention?</Typography>
                </Box>
                <Avatar sx={{bgcolor:'rgba(167,139,250,.12)',color:'secondary.main'}}><InsightsRoundedIcon/></Avatar>
              </Stack>
              <Stack spacing={1.25} sx={{mt:2.3}}>
                {priorityFindings.map(f=><Box key={f.id} onClick={()=>onOpenFinding(f)} sx={{p:1.7,borderRadius:2.5,border:'1px solid rgba(148,163,184,.10)',bgcolor:'rgba(255,255,255,.015)',cursor:'pointer','&:hover':{bgcolor:'rgba(255,255,255,.035)',borderColor:'rgba(167,139,250,.28)'}}}>
                  <Stack direction={{xs:'column',sm:'row'}} justifyContent="space-between" spacing={1}>
                    <Stack direction="row" spacing={1} alignItems="center"><Chip label={f.id} size="small" color="secondary" variant="outlined"/><Typography fontWeight={800}>{f.title}</Typography></Stack>
                    <Chip label="HIGH" size="small" color="error" variant="outlined"/>
                  </Stack>
                  <Typography variant="body2" color="text.secondary" sx={{mt:.8}}>{f.decision}</Typography>
                  <Stack direction="row" justifyContent="flex-end" sx={{mt:1}}><Typography variant="caption" color="primary.light" fontWeight={800}>Open finding →</Typography></Stack>
                </Box>)}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Card sx={{height:'100%'}}>
            <CardContent sx={{p:{xs:2.3,md:3}}}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="overline" color="secondary.main" fontWeight={900} letterSpacing={1.1}>ACTION INTELLIGENCE</Typography>
                  <Typography variant="h5" fontWeight={850}>Open management actions</Typography>
                </Box>
                <Chip label={`${openActions.length} OPEN`} color="warning" variant="outlined"/>
              </Stack>
              <Stack spacing={1.15} sx={{mt:2.2}}>
                {openActions.slice(0,5).map(a=><Box key={a.id} sx={{display:'flex',gap:1.3,alignItems:'flex-start'}}>
                  <Avatar sx={{width:30,height:30,fontSize:12,bgcolor:a.priority==='High'?'rgba(251,113,133,.12)':'rgba(251,191,36,.10)',color:a.priority==='High'?'error.main':'warning.main'}}>{a.id.replace('A','')}</Avatar>
                  <Box sx={{minWidth:0,flex:1}}>
                    <Typography variant="body2" fontWeight={800}>{a.action}</Typography>
                    <Typography variant="caption" color="text.secondary">{a.priority} priority · {a.timeline}</Typography>
                  </Box>
                </Box>)}
              </Stack>
              <Button endIcon={<ArrowForwardRoundedIcon/>} sx={{mt:2}} color="secondary">Open action register</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card>
        <CardContent sx={{p:{xs:2.3,md:3}}}>
          <Stack direction={{xs:'column',md:'row'}} justifyContent="space-between" spacing={2}>
            <Box>
              <Typography variant="overline" color="info.main" fontWeight={900} letterSpacing={1.1}>MEASUREMENT INTELLIGENCE</Typography>
              <Typography variant="h5" fontWeight={850}>Evidence quality is part of the story</Typography>
              <Typography variant="body2" color="text.secondary" sx={{mt:.6}}>The platform keeps uncertainty visible instead of filling gaps with unsupported values.</Typography>
            </Box>
            <Stack direction="row" spacing={1} alignItems="center"><Chip label="MEB / SMEB: REQUIRED" color="info" variant="outlined"/><Chip label="F07: MEASUREMENT GAP" color="secondary" variant="outlined"/></Stack>
          </Stack>
          <Divider sx={{my:2}}/>
          <Stack direction={{xs:'column',sm:'row'}} spacing={2}>
            <Box sx={{flex:1}}><Typography variant="caption" color="text.secondary">ANALYTICAL SAFEGUARD</Typography><Typography variant="body2" fontWeight={750} sx={{mt:.3}}>Descriptive before-and-after analysis. No causal attribution.</Typography></Box>
            <Box sx={{flex:1}}><Typography variant="caption" color="text.secondary">SOURCE RULE</Typography><Typography variant="body2" fontWeight={750} sx={{mt:.3}}>Build the interface around the evidence. Do not generate additional evidence.</Typography></Box>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  </Box>;
}
