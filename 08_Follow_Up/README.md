# Stage 08 - Follow-Up, Comparison & IPTT Update

## Purpose

Stage 08 extends the MEAL cycle from baseline measurement to follow-up measurement and performance review.

It demonstrates how validated baseline data can be compared with follow-up data, translated into indicator results, and used to update the Indicator Performance Tracking Table (IPTT).

This stage uses **simulated data for portfolio learning and demonstration purposes**.

## Stage 08 workflow

The stage follows this sequence:

**08A Follow-Up Design**
→ **08B Follow-Up Dataset**
→ **08C Baseline vs Follow-Up Comparison**
→ **IPTT Actuals & Variance**
→ **Stage 09 Findings, Decisions & Actions**

## 08A - Follow-Up Design

A separate follow-up questionnaire was developed from the locked baseline XLSForm.

### Design principles

* The same 60 baseline households were retained as a panel.
* `household_id` was used to link baseline and follow-up observations.
* Variables that could change over time were re-collected.
* Follow-up monitoring included MPCA receipt and transfer-delivery experience.
* Derived comparison indicators were calculated during analysis rather than entered manually in the questionnaire.
* The follow-up form was tested in Kobo before dataset simulation.

The follow-up design therefore supports a descriptive before/after comparison while preserving comparability with the baseline methodology.

## 08B - Follow-Up Dataset

A simulated follow-up dataset was created for the same 60 households, from `BL001` to `BL060`.

The simulated intervention exposure included:

* **50 households** receiving the full planned transfer
* **6 households** receiving a partial transfer
* **4 households** receiving no transfer

The follow-up dataset was independently checked for:

* household ID uniqueness and panel coverage;
* valid FCS and rCSI inputs;
* non-negative ECMEN inputs;
* conditional MPCA fields;
* independent FCS recalculation;
* independent rCSI recalculation;
* independent ECMEN and per-capita calculations.

The dataset was subsequently **audited and locked**.

## 08C - Baseline vs Follow-Up Comparison

Baseline and follow-up records were joined using `household_id`.

The comparison used:

**Change = Follow-Up - Baseline**

For interpretation:

* positive FCS change indicates improvement;
* negative rCSI change indicates improvement;
* positive economic-capacity change indicates improvement.

The comparison remains **descriptive**. It does not establish that MPCA caused the observed changes.

### Overall results

| Indicator                                 |    Baseline |   Follow-Up |      Change |
| ----------------------------------------- | ----------: | ----------: | ----------: |
| Households with acceptable FCS            |      86.67% |      93.33% |    +6.67 pp |
| Mean rCSI                                 |       10.47 |        8.15 |       -2.32 |
| Mean monthly per-capita economic capacity | 58,731 FCFA | 68,290 FCFA | +9,559 FCFA |

Economic-capacity adequacy remains **TBD** because no contextual MEB/SMEB threshold was established for this simulated response.

## IPTT update

The follow-up results were transferred into the IPTT to compare actual performance with the planned targets.

Examples:

| Indicator             | Target | Actual | Performance    |
| --------------------- | -----: | -----: | -------------- |
| Acceptable FCS        |   ≥90% | 93.33% | Target met     |
| Mean rCSI             |   ≤9.0 |   8.15 | Target met     |
| Full planned transfer |   ≥90% | 83.33% | Target not met |
| Cash-access success   |   ≥90% | 94.64% | Target met     |
| Cash-access problems  |   ≤10% |  5.36% | Target met     |

### Denominator correction

During the Stage 08 review, an important denominator issue was identified.

The cash-access indicators are defined for **assisted households**, not all eligible households.

Therefore:

* cash-access success = **53 / 56 = 94.64%**
* cash-access problems = **3 / 56 = 5.36%**

The corrected IPTT reflects these denominators and corresponding variances.

This demonstrates an important MEAL quality principle:

> **The denominator must match the indicator definition.**

## Measurement gaps identified

Not every planned IPTT indicator could be assessed from the follow-up dataset.

Some indicators remained **TBD** because the required variables or denominators were not captured, including:

* delivery timeframe;
* targeting verification follow-up denominator;
* communication and feedback indicators;
* proportion of households above the applicable MEB/SMEB threshold.

These values were not invented. Instead, they were treated as **measurement-system gaps** and carried forward for management action in Stage 09.

## Methodological safeguards

### No causal attribution

The comparison describes changes between baseline and follow-up. It does not demonstrate causal impact.

### Consistent methodology

FCS, rCSI and ECMEN calculations use the same measurement approach across baseline and follow-up to support comparability.

### Denominator discipline

Indicator denominators were reviewed against their definitions before IPTT interpretation.

### Data-driven interpretation

The simulated follow-up outcomes were generated independently of IPTT targets. Findings were derived from validated data rather than designed to make targets appear achieved.

## Portfolio learning demonstrated

Stage 08 demonstrates the practical MEAL chain:

**Follow-up design → Data collection → Data validation → Indicator calculation → Before/after comparison → IPTT update → Identification of performance gaps → Management action**

The stage therefore connects technical data work with programme performance monitoring and prepares the evidence base for **Stage 09 - Findings, Decisions & Actions**.

## Files

* `Follow_Up_XLSForm.xlsx` - follow-up data-collection form.
* `Follow_Up_Dataset.xlsx` - audited simulated follow-up dataset.
* `Baseline_FollowUp_Comparison.xlsx` - household-level and aggregate baseline/follow-up comparison.
* `IPTT_FINAL.xlsx` - corrected IPTT with follow-up actuals and variances.

## Important note

This is a **simulated humanitarian MEAL portfolio project**. The household data, intervention results and performance figures are fictional and are used solely to demonstrate MEAL design, data management, analysis, monitoring and decision-support skills.
