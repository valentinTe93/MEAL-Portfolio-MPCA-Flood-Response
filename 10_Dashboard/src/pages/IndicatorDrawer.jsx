import React from 'react';
import {Box,Chip,Divider,Drawer,Stack,Typography} from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import {findings,actions} from '../data';

export default function IndicatorDrawer({indicator,onClose}){
  if(!indicator) return null;
  const finding=findings.find(f=>f.id===indicator.findingId);
  const action=actions.find(a=>a.id===indicator.actionId);
  return <Drawer anchor="right" open={Boolean(indicator)} onClose={onClose} PaperProps={{sx:{width:{xs:'100%',sm:500},p:3,bgcolor:'#0a1020'}}}>
    <Stack spacing={2.4}>
      <Box><Typography variant="overline" color="primary.main" fontWeight={900}>EVIDENCE CHAIN · {indicator.id}</Typography><Typography variant="h5" fontWeight={900} sx={{mt:.4}}>{indicator.label}</Typography></Box>
      <Box sx={{p:2,borderRadius:3,bgcolor:'rgba(96,165,250,.06)',border:'1px solid rgba(96,165,250,.15)'}}>
        <Typography variant="caption" color="text.secondary">FOLLOW-UP RESULT</Typography>
        <Typography variant="h3" fontWeight={900} sx={{mt:.4}}>{indicator.followUp==null?'TBD':indicator.unit==='%'?`${indicator.followUp.toFixed(2)}%`:indicator.unit==='FCFA'?`${indicator.followUp.toLocaleString('en-US')} FCFA`:indicator.followUp.toFixed(2)}</Typography>
        <Stack direction="row" spacing={1} sx={{mt:1}}><Chip size="small" label={indicator.status.replace('_',' ')} color={indicator.status==='MET'?'success':indicator.status==='NOT_MET'?'error':indicator.status==='TBD'?'info':'secondary'} variant="outlined"/><Chip size="small" label={indicator.targetLabel} variant="outlined"/></Stack>
      </Box>
      {indicator.baseline!=null && <Box><Typography variant="caption" color="text.secondary">BASELINE → FOLLOW-UP</Typography><Typography fontWeight={850} sx={{mt:.4}}>{indicator.baseline.toLocaleString('en-US')} → {indicator.followUp.toLocaleString('en-US')} {indicator.unit==='%'?'%':indicator.unit}</Typography><Typography variant="body2" color="success.main" fontWeight={800} sx={{mt:.3}}>{indicator.changeLabel}</Typography></Box>}
      <Divider/>
      {finding && <Box><Typography variant="overline" color="secondary.main" fontWeight={900}>FINDING · {finding.id}</Typography><Typography fontWeight={850} sx={{mt:.5}}>{finding.title}</Typography><Typography variant="body2" color="text.secondary" sx={{mt:.6}}>{finding.evidence}</Typography><Typography variant="body2" sx={{mt:1}}>{finding.interpretation}</Typography></Box>}
      {finding && <Box sx={{p:1.8,borderRadius:2.5,bgcolor:'rgba(167,139,250,.06)',border:'1px solid rgba(167,139,250,.16)'}}><Typography variant="caption" color="text.secondary">DECISION</Typography><Typography variant="body2" fontWeight={800} sx={{mt:.4}}>{finding.decision}</Typography></Box>}
      {action && <Box><Stack direction="row" justifyContent="space-between" alignItems="center"><Typography variant="overline" color="primary.main" fontWeight={900}>ACTION · {action.id}</Typography><Chip size="small" label={action.priority} color={action.priority==='High'?'error':'warning'} variant="outlined"/></Stack><Typography variant="body2" fontWeight={800} sx={{mt:.5}}>{action.action}</Typography><Typography variant="caption" color="text.secondary" sx={{display:'block',mt:.6}}>{action.responsible} · {action.timeline} · {action.status}</Typography></Box>}
      <Stack direction="row" spacing={1} alignItems="center" sx={{color:'text.secondary'}}><ArrowForwardRoundedIcon fontSize="small"/><Typography variant="caption">Follow-up evidence: {action?.followUpEvidence || 'Pending'}</Typography></Stack>
    </Stack>
  </Drawer>;
}
