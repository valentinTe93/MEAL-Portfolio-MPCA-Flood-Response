// SOURCE-LOCKED Stage 09 findings registry.
export const findings = [
  {
    id: 'F01', title: 'Food consumption status improved', priority: 'Medium', type: 'MONITOR',
    evidence: 'Acceptable FCS increased from 86.67% at baseline to 93.33% at follow-up (+6.67 pp).',
    interpretation: 'Food consumption status improved among the 60 surveyed panel households.',
    decision: 'Maintain the current outcome-monitoring approach and examine whether the improvement is consistent across key subgroups.',
    actionId: 'A01', limitation: 'Descriptive before/after evidence. It does not establish that MPCA caused the improvement.',
  },
  {
    id: 'F02', title: 'Food-related coping decreased', priority: 'Medium', type: 'MONITOR',
    evidence: 'Mean rCSI decreased from 10.47 to 8.15 (-2.32 points).',
    interpretation: 'Households reported less use of the measured food-related coping strategies at follow-up.',
    decision: 'Treat the reduction as a positive outcome signal while checking for communities or groups where coping remains elevated.',
    actionId: 'A02', limitation: 'Descriptive before/after evidence; no causal attribution.',
  },
  {
    id: 'F03', title: 'Economic capacity increased, adequacy remains unclassified', priority: 'High', type: 'VALIDATE',
    evidence: 'Mean monthly per-capita economic capacity increased from 58,731 FCFA to 68,290 FCFA (+9,559 FCFA).',
    interpretation: 'Economic capacity increased in the panel, but adequacy cannot yet be judged against an applicable MEB/SMEB.',
    decision: 'Do not classify the result as adequate until the contextual MEB/SMEB is established.',
    actionId: 'A03', limitation: 'No contextual MEB/SMEB was established in the simulation; no threshold should be invented.',
  },
  {
    id: 'F04', title: 'Full-transfer delivery was below target', priority: 'High', type: 'INVESTIGATE',
    evidence: '83.33% of eligible households received the full planned transfer (50/60). Six households received a partial amount and four received no transfer.',
    interpretation: 'Outcome indicators improved, but delivery completeness has an operational weakness that can affect programme effectiveness and equity.',
    decision: 'Investigate partial and non-receipt cases rather than treating the aggregate transfer rate as sufficient.',
    actionId: 'A04', limitation: 'Full-transfer indicator denominator is all 60 eligible households.',
  },
  {
    id: 'F05', title: 'Cash access broadly succeeded, with barriers for three households', priority: 'Medium', type: 'MONITOR',
    evidence: 'Cash-access success was 94.64% among assisted households (53/56); 5.36% reported access problems (3/56).',
    interpretation: 'The transfer mechanism broadly enabled access, but a small group experienced barriers.',
    decision: 'Maintain the transfer mechanism while resolving individual access cases and checking whether barriers are concentrated in particular locations or groups.',
    actionId: 'A05', limitation: 'Correct denominator is assisted households (56), consistent with the indicator wording.',
  },
  {
    id: 'F06', title: 'Four eligible households did not receive MPCA', priority: 'High', type: 'INVESTIGATE',
    evidence: 'Any MPCA receipt was 93.33% (56/60); four eligible households did not receive the programme transfer.',
    interpretation: 'Non-receipt remains an operational exception requiring explanation and follow-up.',
    decision: 'Do not close the transfer cycle without reconciling non-receipt cases.',
    actionId: 'A06', limitation: 'The four non-receipt cases are part of the 60 eligible panel households.',
  },
  {
    id: 'F07', title: 'Several planned follow-up indicators are not assessable', priority: 'High', type: 'MEASUREMENT_GAP',
    evidence: 'Several PMP/IPTT indicators cannot be assessed at follow-up because the locked follow-up form did not capture the required variables (delivery timeframe, targeting verification denominator, communication/feedback indicators).',
    interpretation: 'The programme cannot fully judge all planned performance dimensions from the available follow-up dataset.',
    decision: 'Record these as measurement gaps rather than inventing values.',
    actionId: 'A07', limitation: 'This is a MEAL system/design finding, not an outcome finding.',
  },
];
