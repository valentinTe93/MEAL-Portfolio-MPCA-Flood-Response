# Baseline Dataset

## Overview

This folder contains the **audited and locked simulated baseline dataset** for the MEAL portfolio project.

The project simulates a humanitarian **multipurpose cash assistance (MPCA)** response to flooding in coastal Côte d'Ivoire.

The baseline was generated from the KoboToolbox questionnaire developed for this project and prepared as an analysis-ready dataset for the next stages of the MEAL process.

---

## Dataset

**File:** `Baseline.xlsx`

The dataset contains **60 fictional flood-affected households** and follows the structure and variables of the KoboToolbox baseline survey developed for this project.

The dataset is not statistically representative and is used exclusively for portfolio demonstration and learning.

---

## Dataset Purpose

The baseline dataset is used to demonstrate:

* Baseline data preparation
* Data cleaning and quality assurance
* Indicator calculation
* Food Consumption Score (FCS) analysis
* Reduced Coping Strategies Index (rCSI) analysis
* ECMEN-based economic capacity analysis
* Baseline indicator interpretation
* Preparation for baseline-to-follow-up comparison
* Data lineage from KoboToolbox responses to analysis-ready indicators

---

## Data Lineage

The baseline follows this data flow:

```text
KoboToolbox questionnaire
        ↓
Simulated household responses
        ↓
Data quality checks and cleaning
        ↓
Indicator calculations
        ↓
Independent validation
        ↓
Audited and locked baseline
```

The calculation layer independently derives and validates the **FCS, rCSI and ECMEN indicators** from the underlying household responses and expenditure/resource data.

---

## Data Quality and Validation

The baseline was audited for:

* Unique household IDs
* Required-field completeness
* Consent and eligibility conditions
* FCS frequency validity
* FCS source-field logic
* rCSI frequency validity
* Conditional-question logic
* Expenditure data completeness
* Market-access logic
* Correct handling of skipped assistance fields
* FCS calculation accuracy
* rCSI calculation accuracy
* ECMEN calculation accuracy
* Consistency between raw responses and derived indicators

The household-level FCS, rCSI and ECMEN calculations were independently recalculated and matched the derived indicators for all **60 households**.

During validation, two validation flags initially returned false results. The underlying household records were independently reviewed and confirmed to be correct.

The validation logic was corrected and the correction was documented **without modifying the household-level baseline data**.

The final calculation and validation workbook is **audited and locked**.

---

## Baseline Indicator Values

The validated simulated baseline produces the following initial values:

| Indicator                                 |            Baseline |
| ----------------------------------------- | ------------------: |
| Households with acceptable FCS            |           **86.7%** |
| Mean FCS score                            |           **47.71** |
| Mean rCSI score                           |           **10.47** |
| Mean monthly household economic capacity  | **239,276.71 FCFA** |
| Mean monthly per-capita economic capacity |  **58,731.20 FCFA** |
| ECMEN above applicable MEB                |             **TBD** |

> **Note:** The ECMEN/MEB classification remains **TBD** because no contextual MEB/SMEB value has been specified for this simulated project. No MEB value has been invented for the baseline.

---

## Important Note

**This dataset is entirely simulated and fictional.**

It does not represent real households, real beneficiaries, real field observations or actual humanitarian programme results.

It was created exclusively for learning and professional skills demonstration.

The simulated results should therefore **not** be interpreted as evidence of the actual food security or economic situation of flood-affected households in Côte d'Ivoire.

---

## Status

**Baseline status: Audited and locked**

`Baseline.xlsx` is treated as the **authoritative baseline dataset** for the subsequent analysis stages of this portfolio project.

The locked baseline should not be modified directly.

Subsequent transformations and analysis should be performed from this source while preserving the original dataset as the baseline reference.

---

## Next Step

The next stage is **Indicator Analysis**, where the validated baseline indicators will be analyzed and interpreted using **Power Query and Power BI**.

The analysis will connect the baseline values to the project's indicators, targets and subsequent follow-up measurements.
