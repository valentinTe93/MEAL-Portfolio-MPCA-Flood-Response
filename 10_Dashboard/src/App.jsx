import React from 'react';
import {ThemeProvider,CssBaseline} from '@mui/material';
import {theme} from './theme/theme';
import AppShell from './components/AppShell';
import EmptyPage from './pages/EmptyPage';
import Methodology from './pages/Methodology';
import Overview from './pages/Overview';
import IndicatorDrawer from './pages/IndicatorDrawer';
import FindingDrawer from './pages/FindingDrawer';
import Performance from './pages/Performance';
import Operations from './pages/Operations';
import Findings from './pages/Findings';
import Actions from './pages/Actions';
import Measurement from './pages/Measurement';

const descriptions={Overview:'Executive entry point for validated performance, operational signals, findings, decisions and actions.', 'Performance Intelligence':'Outcome-level performance evidence: FCS, rCSI and economic capacity.', 'Operational Intelligence':'Delivery and access performance, with denominator discipline.', 'Findings & Decisions':'Traceable findings and management decisions derived from validated evidence.', 'Action Management':'Decision-linked action register with responsibility, priority, status and follow-up evidence.', 'Measurement & Data Quality':'Measurement gaps, contextual validation requirements and analytical safeguards.', Methodology:'Indicator methods, analytical approach, source hierarchy and simulation note.'};

export default function App(){
 const [page,setPage]=React.useState('Overview');
 const [indicator,setIndicator]=React.useState(null);
 const [finding,setFinding]=React.useState(null);
 const content=page==='Overview'
   ? <Overview onOpenIndicator={setIndicator} onOpenFinding={setFinding}/>
   : page==='Performance Intelligence'
   ? <Performance/>
   : page==='Operational Intelligence'
   ? <Operations onOpenFinding={setFinding}/>
   : page==='Findings & Decisions'
   ? <Findings onOpenFinding={setFinding}/>
   : page==='Action Management'
   ? <Actions/>
   : page==='Measurement & Data Quality'
   ? <Measurement/>
   : <EmptyPage title={page} eyebrow={page==='Overview'?'MPCA FLOOD RESPONSE':'MEAL INTELLIGENCE'} description={descriptions[page]}/>;
 return <ThemeProvider theme={theme}><CssBaseline/><AppShell page={page} onPage={setPage}>{content}</AppShell><IndicatorDrawer indicator={indicator} onClose={()=>setIndicator(null)}/><FindingDrawer finding={finding} onClose={()=>setFinding(null)}/></ThemeProvider>
}
