import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import {
  Alert, Box, Card, CardContent, Chip, Divider, Grid, LinearProgress,
  Stack, Typography, Button, Dialog, DialogTitle, DialogContent, IconButton,
  Tooltip
} from '@mui/material';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import RuleRoundedIcon from '@mui/icons-material/RuleRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { indicators, measurementGap } from '../data/indicators';
import { methodology, sourceManifest } from '../data/methodology';

const gaps = [
  {id:'G01', title:'Delivery timeframe', status:'Measurement gap', severity:'High', source:'K08 / F07', detail:'The delivery-timeframe indicator cannot be assessed because the required follow-up timing evidence is not available.', action:'Restore the delivery-timeframe measurement before the next follow-up.'},
  {id:'G02', title:'Targeting verification denominator', status:'Measurement gap', severity:'High', source:'F07', detail:'A follow-up denominator needed to assess targeting verification is not available in the locked evidence.', action:'Define and capture the denominator needed for targeting-verification monitoring.'},
  {id:'G03', title:'Communication and feedback indicators', status:'Measurement gap', severity:'High', source:'F07', detail:'The locked follow-up evidence does not contain the variables required to assess communication reach and knowledge of feedback/complaints mechanisms.', action:'Restore the relevant communication and feedback indicators, with denominator and timing definitions.'},
];

function Metric({label,value,sub,icon}){
 return <Card sx={{height:'100%'}}><CardContent><Stack direction="row" spacing={1.5} alignItems="flex-start"><Box sx={{width:42,height:42,borderRadius:3,display:'grid',placeItems:'center',bgcolor:'rgba(167,139,250,.10)',color:'secondary.main'}}>{icon}</Box><Box sx={{minWidth:0}}><Typography variant="body2" color="text.secondary">{label}</Typography><Typography variant="h5" sx={{mt:.5,fontWeight:800}}>{value}</Typography><Typography variant="caption" color="text.secondary">{sub}</Typography></Box></Stack></CardContent></Card>
}

export default function Measurement(){
 const [selected,setSelected]=React.useState(null);
 const assessed=indicators.filter(i=>i.status!=='MEASUREMENT_GAP').length;
 const gapCount=indicators.filter(i=>i.status==='MEASUREMENT_GAP').length;
 return <Box sx={{pb:6}}>
  <Stack spacing={3}>
   <Box>
    <Typography variant="overline" color="secondary.main" sx={{letterSpacing:2}}>MEASUREMENT INTELLIGENCE</Typography>
    <Typography variant="h3" sx={{mt:.5}}>Measurement & Data Quality</Typography>
    <Typography color="text.secondary" sx={{mt:1,maxWidth:820}}>Show what the evidence can support, what it cannot support, and what must be restored before the next decision cycle.</Typography>
   </Box>

   <Alert severity="warning" icon={<WarningAmberRoundedIcon/>} sx={{border:'1px solid rgba(251,191,36,.22)',background:'rgba(251,191,36,.07)'}}>
    <Typography fontWeight={800}>Measurement gaps are signals, not missing numbers to be filled.</Typography>
    <Typography variant="body2" sx={{mt:.25}}>This page deliberately displays TBD where the locked evidence does not support an indicator value. No value is estimated or inferred.</Typography>
   </Alert>

   <Grid container spacing={2}>
    <Grid item xs={12} md={4}><Metric label="Indicators assessed" value={`${assessed}/8`} sub="Source-locked Stage 10 registry" icon={<FactCheckRoundedIcon/>}/></Grid>
    <Grid item xs={12} md={4}><Metric label="Measurement gaps" value={`${gapCount}`} sub="Indicator-level gap in the registry" icon={<WarningAmberRoundedIcon/>}/></Grid>
    <Grid item xs={12} md={4}><Metric label="Analytical safeguard" value="Descriptive" sub="Before/after; no causal attribution" icon={<RuleRoundedIcon/>}/></Grid>
   </Grid>

   <Card>
    <CardContent sx={{p:{xs:2,md:3}}}>
     <Stack direction={{xs:'column',md:'row'}} justifyContent="space-between" spacing={2} alignItems={{md:'center'}}>
      <Box><Typography variant="h5" fontWeight={800}>Measurement gap register</Typography><Typography variant="body2" color="text.secondary" sx={{mt:.5}}>Three source-identified gaps are carried into the management layer.</Typography></Box>
      <Chip icon={<WarningAmberRoundedIcon/>} label="F07 · High priority" color="warning" variant="outlined"/>
     </Stack>
     <Divider sx={{my:2.5}}/>
     <Stack spacing={1.25}>
      {gaps.map(g=><Card key={g.id} variant="outlined" onClick={()=>setSelected(g)} sx={{cursor:'pointer',background:'rgba(15,23,42,.45)',borderColor:'rgba(167,139,250,.14)','&:hover':{borderColor:'rgba(167,139,250,.38)',transform:'translateY(-1px)'}}}>
       <CardContent sx={{'&:last-child':{pb:2}}}><Stack direction={{xs:'column',md:'row'}} spacing={2} justifyContent="space-between">
        <Stack direction="row" spacing={1.5} alignItems="flex-start"><Box sx={{mt:.25,width:10,height:10,borderRadius:'50%',bgcolor:'secondary.main',boxShadow:'0 0 0 5px rgba(167,139,250,.08)'}}/><Box><Typography fontWeight={800}>{g.title}</Typography><Typography variant="body2" color="text.secondary" sx={{mt:.35}}>{g.detail}</Typography></Box></Stack>
        <Stack direction="row" spacing={1} sx={{alignSelf:{xs:'flex-start',md:'center'}}}><Chip size="small" label={g.status} color="secondary" variant="outlined"/><Chip size="small" label={g.severity} color="warning" variant="outlined"/><Chip size="small" label={g.source}/></Stack>
       </Stack></CardContent>
      </Card>)}
     </Stack>
    </CardContent>
   </Card>

   <Grid container spacing={2}>
    <Grid item xs={12} lg={7}>
     <Card sx={{height:'100%'}}><CardContent sx={{p:{xs:2,md:3}}}>
      <Stack direction="row" spacing={1.25} alignItems="center"><VerifiedRoundedIcon color="success"/><Typography variant="h5" fontWeight={800}>Data quality principles in this dashboard</Typography></Stack>
      <Stack spacing={2} sx={{mt:2.5}}>
       {[
        ['Source locked','Values are taken from the validated Stage 08 evidence and Stage 09 dashboard inputs.'],
        ['Denominator disciplined','Cash-access indicators use the 56 assisted-household denominator, not all 60 panel households.'],
        ['No fabricated completion','Open actions remain Open. Missing measurement remains a measurement gap.'],
        ['No causal claim','The baseline/follow-up comparison is descriptive and does not establish attribution.'],
       ].map(([h,d])=><Box key={h}><Typography fontWeight={750}>{h}</Typography><Typography variant="body2" color="text.secondary" sx={{mt:.25}}>{d}</Typography></Box>)}
      </Stack>
     </CardContent></Card>
    </Grid>
    <Grid item xs={12} lg={5}>
     <Card sx={{height:'100%'}}><CardContent sx={{p:{xs:2,md:3}}}>
      <Typography variant="h5" fontWeight={800}>Source chain</Typography>
      <Stack spacing={1.1} sx={{mt:2}}>
       {methodology.sourceHierarchy.map((s,i)=><Box key={s} sx={{p:1.5,borderRadius:3,bgcolor:'rgba(96,165,250,.055)',border:'1px solid rgba(96,165,250,.10)'}}><Typography variant="caption" color="info.main">0{i+1}</Typography><Typography variant="body2" fontWeight={700} sx={{mt:.2}}>{s}</Typography></Box>)}
      </Stack>
      <Typography variant="caption" color="text.secondary" sx={{display:'block',mt:2}}>Manifest: {sourceManifest.lockStatus}</Typography>
     </CardContent></Card>
    </Grid>
   </Grid>

   <Card sx={{background:'linear-gradient(135deg, rgba(103,232,249,.055), rgba(167,139,250,.06))'}}><CardContent sx={{p:{xs:2,md:3}}}>
    <Typography variant="h5" fontWeight={800}>What the dashboard will not do</Typography>
    <Grid container spacing={2} sx={{mt:.5}}>
     {['Invent an MEB/SMEB threshold','Create unavailable delivery-timeframe results','Manufacture subgroup findings','Turn before/after change into causal attribution'].map(t=><Grid item xs={12} sm={6} key={t}><Stack direction="row" spacing={1} alignItems="center"><Box sx={{width:7,height:7,borderRadius:'50%',bgcolor:'error.main'}}/><Typography variant="body2">{t}</Typography></Stack></Grid>)}
    </Grid>
   </CardContent></Card>
  </Stack>

  <Dialog open={Boolean(selected)} onClose={()=>setSelected(null)} fullWidth maxWidth="sm"><DialogTitle sx={{pr:6}}>{selected?.title}<IconButton onClick={()=>setSelected(null)} sx={{position:'absolute',right:10,top:10}}><CloseRoundedIcon/></IconButton></DialogTitle><DialogContent dividers>
   {selected && <Stack spacing={2.25}><Stack direction="row" spacing={1}><Chip label={selected.status} color="secondary" variant="outlined"/><Chip label={`${selected.severity} priority`} color="warning" variant="outlined"/><Chip label={selected.source}/></Stack><Box><Typography variant="caption" color="text.secondary">Why this is a gap</Typography><Typography sx={{mt:.5}}>{selected.detail}</Typography></Box><Box><Typography variant="caption" color="text.secondary">Management action</Typography><Typography sx={{mt:.5}}>{selected.action}</Typography></Box><Alert severity="info">The dashboard preserves the gap as documented evidence. It does not substitute an estimate.</Alert></Stack>}
  </DialogContent></Dialog>
 </Box>
}
