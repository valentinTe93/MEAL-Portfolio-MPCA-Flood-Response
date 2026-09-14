# Stage 09: Findings, Decisions and Actions

## Purpose

This stage converts validated MEAL evidence into management-useful findings, decisions and follow-up actions.

The workflow is:

**Indicator result → Finding → Interpretation → Decision → Action → Follow-up evidence**

The stage uses the validated baseline/follow-up comparison and corrected IPTT from Stage 08 as its evidence base.

> **Important:** This portfolio uses simulated data. The management actions, responsible roles, timelines and statuses are illustrative planning fields, not observed project decisions.

---

## Stage 09 Workflow

Stage 09 follows the progression below:

1. Review validated indicator results.
2. Identify important findings from the evidence.
3. Interpret what the findings mean for programme performance.
4. Identify the management implication.
5. Record the decision required or recommended.
6. Define a practical management action.
7. Assign an illustrative responsible role and timeline.
8. Define the evidence needed to follow up.
9. Prepare structured inputs for the Stage 10 dashboard.

This ensures that analysis does not stop at reporting numbers.

---

## 01. Findings

The `01_Findings` sheet records the main evidence-based findings from Stage 08.

### F01. Food consumption improved

Acceptable FCS increased from **86.67% at baseline to 93.33% at follow-up**, an improvement of **6.67 percentage points**.

**Interpretation:** Food consumption status improved among the 60 panel households.

**Decision:** Maintain monitoring and examine whether the improvement is consistent across communities and relevant vulnerability groups.

**Action:** Review FCS results by community and relevant vulnerability characteristics.

**Limitation:** The comparison is descriptive before/after analysis and does not establish causal attribution.

---

### F02. Food-related coping decreased

Mean rCSI decreased from **10.47 to 8.15**, an improvement of **2.32 points**.

**Interpretation:** Households reported less use of the measured food-related coping strategies at follow-up.

**Decision:** Treat this as a positive signal while checking whether elevated coping remains concentrated among specific groups or locations.

**Action:** Disaggregate rCSI results and flag groups or communities with higher coping levels.

**Limitation:** The comparison does not establish that MPCA alone caused the observed change.

---

### F03. Economic capacity increased, but adequacy remains unclassified

Mean monthly per-capita economic capacity increased from approximately **58,731 FCFA to 68,290 FCFA**, an increase of approximately **9,559 FCFA**.

**Interpretation:** Economic capacity increased between baseline and follow-up.

**Decision:** Do not classify economic capacity as adequate or inadequate until the applicable contextual MEB/SMEB threshold has been obtained and validated.

**Action:** Obtain and validate the applicable MEB/SMEB before making an adequacy judgement.

**Limitation:** No contextual MEB/SMEB threshold was specified for this simulation.

---

### F04. Full transfer delivery did not meet the target

**83.33%** of eligible households received the planned transfer in full.

The follow-up dataset contains:

* 50 full transfers
* 6 partial transfers
* 4 non-receipts

**Interpretation:** Transfer completeness was below the portfolio target.

**Decision:** Investigate partial and non-receipt cases rather than considering the transfer cycle fully resolved.

**Action:** Reconcile the 6 partial transfers and 4 non-receipts with programme and payment records.

**Priority:** High.

---

### F05. Cash access was generally successful, but some barriers remained

Among the **56 households that received MPCA**, 53 successfully accessed the cash and 3 reported access problems.

This gives:

* **94.64%** successful cash access
* **5.36%** reporting access problems

**Interpretation:** The transfer mechanism broadly enabled access, but a small number of households experienced barriers.

**Decision:** Maintain the mechanism while investigating the reported access problems.

**Action:** Investigate the 3 households reporting access problems.

**Important denominator note:** Access indicators use the 56 assisted households as the denominator, not all 60 eligible households.

---

### F06. Four eligible households had not received MPCA

At follow-up, **56 of 60 eligible households** had received MPCA.

**Interpretation:** Four eligible households remained without recorded receipt.

**Decision:** The transfer cycle should not be considered fully closed until these cases are reconciled.

**Action:** Trace the 4 non-receipt cases through programme and payment records.

**Priority:** High.

---

### F07. Some indicators could not be assessed because required measurement elements were missing

Several PMP/IPTT indicators remained unassessable because the follow-up dataset did not contain sufficient variables, timing information or denominators.

Examples include:

* delivery timeframe
* follow-up targeting verification
* communication and feedback indicators

**Interpretation:** The limitation is a measurement-system gap rather than evidence that the programme failed.

**Decision:** Document the measurement gaps and avoid inventing values.

**Action:** Restore or define the required variables, denominators and measurement timing before the next follow-up.

**Priority:** High.

---

## 02. Decision and Action Register

The `02_Decision_Action_Register` sheet converts findings into explicit management follow-up.

Each action is linked to its source finding through the `Finding ID`.

The register includes:

* Action ID
* Finding ID
* Evidence / Finding
* Decision
* Management Action
* Responsible Role
* Illustrative Timeline
* Priority
* Status
* Follow-up Evidence
* Decision Rationale / Note

The seven actions are:

| Action | Finding                                            | Priority |
| ------ | -------------------------------------------------- | -------- |
| A01    | F01: Review FCS by community/vulnerability         | Medium   |
| A02    | F02: Disaggregate rCSI and flag higher-risk groups | Medium   |
| A03    | F03: Obtain/validate MEB/SMEB                      | High     |
| A04    | F04: Reconcile partial and non-receipt cases       | High     |
| A05    | F05: Investigate cash access problems              | Medium   |
| A06    | F06: Trace non-receipt cases                       | High     |
| A07    | F07: Restore missing measurement elements          | High     |

Action status is initially recorded as **Open** because this is a simulated portfolio workflow.

---

## 03. Dashboard Inputs

The `03_Dashboard_Inputs` sheet provides the structured handoff from Stage 09 to Stage 10.

It translates findings into dashboard-ready performance information.

The dashboard input structure includes:

* KPI ID
* Indicator
* Baseline
* Follow-up / Actual
* Target
* Status
* Variance / Change
* Finding ID
* Notes

Current dashboard inputs include:

| KPI | Indicator            | Status                |
| --- | -------------------- | --------------------- |
| K01 | Acceptable FCS       | Met                   |
| K02 | Mean rCSI            | Met                   |
| K03 | Economic capacity    | TBD                   |
| K04 | Full transfer        | Not met               |
| K05 | Cash access success  | Met                   |
| K06 | Cash access problems | Met                   |
| K07 | Any MPCA receipt     | Operational reference |
| K08 | Delivery timeframe   | Measurement gap       |

This sheet is deliberately separated from the findings register so that the Stage 10 dashboard can consume structured inputs without replacing the analytical record.

---

## 04. Stage Logic

The `04_Stage_Logic` sheet documents the relationship between Stage 08, Stage 09 and Stage 10.

### Core management chain

**Indicator result**
↓
**Finding**
↓
**Interpretation**
↓
**Decision**
↓
**Action**
↓
**Follow-up evidence**

The principle is:

> A finding is not complete when the number has been reported. It becomes management-useful when its implication for decision-making is made explicit.

Stage 09 therefore acts as the analytical bridge between indicator monitoring and dashboard-based decision support.

---

## Key Analytical Safeguards

### No causal attribution

The baseline/follow-up comparison is descriptive.

Observed changes are reported as changes over time and are not presented as proof that MPCA alone caused the changes.

### Denominator consistency

Indicator calculations use the appropriate denominator for each indicator.

In particular, cash access indicators use the **56 assisted households**, not all 60 eligible households.

### No invented values

Indicators that cannot be calculated because required variables, denominators or thresholds are missing are explicitly recorded as **TBD** or **Measurement gap**.

### MEB/SMEB limitation

Economic-capacity adequacy is not classified because a contextual MEB/SMEB threshold has not been specified.

### Simulated management fields

Responsible roles, timelines, priorities and statuses are illustrative portfolio planning fields.

They should not be interpreted as actual organisational decisions.

---

## Portfolio Learning

The main learning from Stage 09 is:

> **Data should drive findings and decisions, not the reverse.**

The workflow demonstrates how validated MEAL data can move from:

**Data → Indicator → Finding → Decision → Action → Follow-up**

This is an important distinction between simply reporting MEAL results and using MEAL evidence for programme management.

---

## Relationship with Stage 10

Stage 09 prepares the analytical content that will be presented visually in Stage 10.

Stage 10 will use the structured `03_Dashboard_Inputs` together with the findings and action register to create a **MEAL Performance and Decision Dashboard**.

The dashboard should help answer:

* What changed?
* Which indicators met their targets?
* Which results require attention?
* What are the important findings?
* What decisions are required?
* What actions should follow?
* What evidence should be monitored next?

The dashboard therefore complements, rather than replaces, the underlying MEAL analysis.

---

## File

### Main Stage 09 deliverable

`Stage_09_Findings_Decisions_Actions_AUDITED_LOCKED_V2.xlsx`

The workbook contains:

1. `01_Findings`
2. `Methodology_Notes`
3. `LOCK_STATUS`
4. `Learning_Note`
5. `Review_Summary`
6. `02_Decision_Action_Register`
7. `03_Dashboard_Inputs`
8. `04_Stage_Logic`

No PDF is included as an official Stage 09 portfolio deliverable.

---

## Data and Simulation Note

This project is a simulated humanitarian MPCA flood-response MEAL portfolio.

The datasets, indicator results and management actions are designed for learning and demonstration purposes.

They do not represent real programme participants, real payments or actual organisational decisions.
