# MPCA Flood Response | MEAL Decision Intelligence Platform

**From evidence to findings, decisions and action**

A source-locked interactive React dashboard for a simulated humanitarian MPCA flood-response MEAL portfolio in coastal Côte d'Ivoire.

## What this dashboard demonstrates

- Performance intelligence: FCS, rCSI and economic capacity
- Operational intelligence: transfer completeness and cash access
- Finding intelligence: validated evidence translated into findings
- Decision intelligence: explicit management decisions linked to findings
- Action intelligence: decision-linked management action register
- Measurement intelligence: measurement gaps and data-quality safeguards
- Interactive navigation, detail views, status semantics and responsive layout

## Evidence chain

**Indicator result → Finding → Interpretation → Decision → Action → Follow-up evidence**

## Source control

The dashboard does not create new project evidence. Its source hierarchy is:

1. Stage 08 validated baseline/follow-up evidence
2. Stage 09 Findings, Decisions & Actions V2
3. Stage 10 presentation layer

Unsupported values are shown as TBD, Measurement Gap, Not available, or omitted.

## Analytical safeguards

- Descriptive before/after comparison only
- No causal attribution
- No invented MEB/SMEB threshold
- Cash-access indicators use the assisted-household denominator of 56
- No invented subgroup results
- Action statuses remain Open; no completion is claimed
- Responsible roles and timelines in the action register are illustrative planning fields
- Simulated data are fictional and intended for learning/portfolio demonstration

## Technology

- React 18
- Material UI 6
- Vite 6
- JavaScript
- Responsive application shell

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

A successful production build was not certified in the current build environment because dependency installation timed out. The final package therefore contains the complete source application, while local installation/build should be used for runtime certification.

## Portfolio status

**Stage 10: Final package prepared after source audit.**
