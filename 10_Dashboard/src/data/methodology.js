export const methodology = {
  framework: 'Data → Finding → Interpretation → Decision → Action',
  evidenceBase: 'Validated baseline/follow-up panel comparison and corrected IPTT.',
  unitOfAnalysis: 'Same 60 households, joined by household_id.',
  analysisType: 'Descriptive before/after comparison; no causal attribution.',
  fcsDirection: 'Higher acceptable FCS proportion / higher FCS score indicates improvement.',
  rcsiDirection: 'Lower rCSI indicates improvement.',
  economicCapacity: 'Higher monthly per-capita economic capacity indicates improvement, but adequacy requires contextual MEB/SMEB.',
  cashAccessDenominator: 'Assisted households only: 56 households received some MPCA.',
  simulationNote: 'Fictional data for learning and portfolio demonstration; not a real humanitarian intervention.',
  sourceHierarchy: [
    'Stage 08 validated baseline/follow-up evidence',
    'Stage 09 findings, decisions and actions',
    'Stage 10 presentation layer',
  ],
};

export const sourceManifest = {
  stage09: 'Stage_09_Findings_Decisions_Actions_AUDITED_LOCKED_V2.xlsx',
  stage08Comparison: 'MPCA_Baseline_FollowUp_Comparison_08C2.xlsx',
  lockStatus: 'AUDITED AND LOCKED - V2',
  rule: 'Build the interface around the evidence. Do not generate additional evidence.',
};
