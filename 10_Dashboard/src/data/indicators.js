// SOURCE-LOCKED Stage 10 indicator registry.
// Values are transcribed from Stage 09 03_Dashboard_Inputs and 08C.2 Indicator_Summary.
// Do not add or infer unsupported values here.
export const indicators = [
  {
    id: 'K01', key: 'fcsAcceptable', label: 'Acceptable FCS', unit: '%',
    baseline: 86.67, followUp: 93.33, target: 90, targetLabel: '≥90%',
    direction: 'higher', status: 'MET', change: 6.67, changeLabel: '+6.67 pp',
    findingId: 'F01', actionId: 'A01', denominator: '60 panel households',
  },
  {
    id: 'K02', key: 'meanRcsi', label: 'Mean rCSI', unit: 'score',
    baseline: 10.47, followUp: 8.15, target: 9, targetLabel: '≤9.0',
    direction: 'lower', status: 'MET', change: -2.32, changeLabel: '-2.32',
    findingId: 'F02', actionId: 'A02', denominator: '60 panel households',
  },
  {
    id: 'K03', key: 'economicCapacity', label: 'Mean monthly per-capita economic capacity', unit: 'FCFA',
    baseline: 58731, followUp: 68290, target: null, targetLabel: 'Context threshold required',
    direction: 'context', status: 'TBD', change: 9559, changeLabel: '+9,559 FCFA',
    findingId: 'F03', actionId: 'A03', denominator: '60 panel households',
  },
  {
    id: 'K04', key: 'fullTransfer', label: 'Full transfer received', unit: '%',
    baseline: null, followUp: 83.33, target: 90, targetLabel: '≥90%',
    direction: 'higher', status: 'NOT_MET', change: null, changeLabel: '-6.67 pp vs target',
    findingId: 'F04', actionId: 'A04', denominator: '60 eligible households',
  },
  {
    id: 'K05', key: 'cashAccessSuccess', label: 'Cash access success among assisted households', unit: '%',
    baseline: null, followUp: 94.64, target: 90, targetLabel: '≥90%',
    direction: 'higher', status: 'MET', change: null, changeLabel: '+4.64 pp vs target',
    findingId: 'F05', actionId: 'A05', denominator: '56 assisted households',
  },
  {
    id: 'K06', key: 'cashAccessProblems', label: 'Cash access problems among assisted households', unit: '%',
    baseline: null, followUp: 5.36, target: 10, targetLabel: '≤10%',
    direction: 'lower', status: 'MET', change: null, changeLabel: '+4.64 pp margin',
    findingId: 'F05', actionId: 'A05', denominator: '56 assisted households',
  },
  {
    id: 'K08', key: 'deliveryTimeframe', label: 'Delivery timeframe indicator', unit: '%',
    baseline: null, followUp: null, target: 90, targetLabel: '≥90%',
    direction: 'higher', status: 'MEASUREMENT_GAP', change: null, changeLabel: 'TBD',
    findingId: 'F07', actionId: 'A07', denominator: 'Not available',
  },
  {
    id: 'K07', key: 'anyMpcaReceipt', label: 'Any MPCA receipt among eligible households', unit: '%',
    baseline: null, followUp: 93.33, target: null, targetLabel: 'Operational monitoring',
    direction: 'reference', status: 'REFERENCE', change: null, changeLabel: '56/60',
    findingId: 'F06', actionId: 'A06', denominator: '60 eligible households',
  },
];

export const measurementGap = {
  id: 'F07',
  type: 'MEASUREMENT_GAP',
  label: 'Follow-up measurement gaps',
  status: 'MEASUREMENT GAP',
  items: [
    'Delivery timeframe',
    'Targeting verification denominator',
    'Communication/feedback indicators',
  ],
  findingId: 'F07',
  actionId: 'A07',
};
