import React from 'react';
import {Box,Chip,Divider,Drawer,Stack,Typography} from '@mui/material';
import {actions,indicators} from '../data';
export default function FindingDrawer({finding,onClose}){
 if(!finding)return null;
 const action=actions.find(a=>a.id===finding.actionId);
 const indicator=indicators.find(i=>i.findingId===finding.id);
 return <Drawer anchor="right" open={Boolean(finding)} onClose={onClose} PaperProps={{sx:{width:{xs:'100%',sm:520},p:3,bgcolor:'#0a1020'}}}>
  <Stack spacing={2.3}>
   <Stack direction="row" justifyContent="space-between" alignItems="flex-start"><Box><Typography variant="overline" color="secondary.main" fontWeight={900}>FINDING · {finding.id}</Typography><Typography variant="h5" fontWeight={900} sx={{mt:.4}}>{finding.title}</Typography></Box><Chip label={finding.priority.toUpperCase()} size="small" color={finding.priority==='High'?'error':'warning'} variant="outlined"/></Stack>
   {indicator && <Box sx={{p:2,borderRadius:3,bgcolor:'rgba(96,165,250,.05)',border:'1px solid rgba(96,165,250,.12)'}}><Typography variant="caption" color="text.secondary">SOURCE INDICATOR</Typography><Typography fontWeight={850} sx={{mt:.4}}>{indicator.id} · {indicator.label}</Typography><Typography variant="body2" color="primary.light" sx={{mt:.4}}>{indicator.followUp==null?'TBD':indicator.unit==='%'?`${indicator.followUp.toFixed(2)}%`:indicator.unit==='FCFA'?`${indicator.followUp.toLocaleString('en-US')} FCFA`:indicator.followUp}</Typography></Box>}
   <Box><Typography variant="overline" color="text.secondary" fontWeight={900}>EVIDENCE</Typography><Typography variant="body2" sx={{mt:.5}}>{finding.evidence}</Typography></Box>
   <Box><Typography variant="overline" color="text.secondary" fontWeight={900}>INTERPRETATION</Typography><Typography variant="body2" sx={{mt:.5}}>{finding.interpretation}</Typography></Box>
   <Divider/>
   <Box sx={{p:2,borderRadius:3,bgcolor:'rgba(167,139,250,.06)',border:'1px solid rgba(167,139,250,.14)'}}><Typography variant="overline" color="secondary.main" fontWeight={900}>DECISION</Typography><Typography variant="body2" fontWeight={850} sx={{mt:.5}}>{finding.decision}</Typography></Box>
   {action && <Box><Typography variant="overline" color="primary.main" fontWeight={900}>ACTION · {action.id}</Typography><Typography variant="body2" fontWeight={800} sx={{mt:.5}}>{action.action}</Typography><Typography variant="caption" color="text.secondary" sx={{display:'block',mt:.6}}>{action.responsible} · {action.timeline} · {action.status}</Typography></Box>}
   <Box><Typography variant="caption" color="text.secondary">ANALYTICAL LIMITATION</Typography><Typography variant="body2" color="text.secondary" sx={{mt:.4}}>{finding.limitation}</Typography></Box>
  </Stack>
 </Drawer>
}
