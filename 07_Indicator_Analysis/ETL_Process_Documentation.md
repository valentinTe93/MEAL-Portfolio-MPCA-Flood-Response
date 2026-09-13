# ETL Process Documentation

## Stage 07: Indicator Analysis

### 1. Purpose

This document describes the Extract, Transform, Validate and Load (ETL) process used to convert the clean simulated KoboToolbox baseline dataset into analysis-ready MEAL indicators.

The process was designed to preserve data lineage and reduce manual manipulation of indicator values.

The workflow supports the project's MEAL DPro-aligned monitoring and analysis process.

---

## 2. ETL Overview

The baseline analysis follows this structure:

**KoboToolbox baseline dataset**
↓
**Staging_Baseline_Kobo**
↓
**Baseline_Analysis**
↓
**Indicator calculations**
↓
**Validation**
↓
**Indicator summary**
↓
**IPTT baseline values**

The Power Query transformations are performed from the baseline analysis layer rather than manually editing the source dataset.

---

## 3. Extract

### Source

The source dataset was produced from the project's KoboToolbox MPCA flood-response baseline questionnaire.

The clean baseline dataset contains:

* 60 fictional households
* 165 original Kobo variables
* Household identification and demographic variables
* FCS variables
* rCSI variables
* ECMEN expenditure/resource variables
* Market-context variables
* Eligibility and assistance variables

The technical test submission was excluded from the clean analytical baseline.

### Source structure

The raw Kobo data were first loaded into Excel Power Query.

The original source query was named:

`Staging_Baseline_Kobo`

A reference query was then created:

`Baseline_Analysis`

Using a Reference query preserves the connection to the staging data while allowing analytical transformations without modifying the source layer.

---

## 4. Transform

### 4.1 FCS Calculation

The Food Consumption Score was calculated using the standard food-group weights.

The following variables were used:

* Cereals × 2
* Pulses × 3
* Dairy × 4
* Meat/fish/eggs × 4
* Vegetables × 1
* Fruits × 1
* Oils/fats × 0.5
* Sugar × 0.5
* Condiments × 0

The Power Query calculation created:

`FCS_Score_PQ`

The result was stored as a Decimal Number because the 0.5 weight can produce half-point scores.

A second transformation created:

`FCS_Classification_PQ`

Using the standard classification thresholds:

* Poor: ≤21
* Borderline: >21 and ≤35
* Acceptable: >35

Baseline validation produced:

* Acceptable: 52 households
* Borderline: 7 households
* Poor: 1 household
* Valid households: 60
* Acceptable FCS: **86.67%**

---

### 4.2 rCSI Calculation

The Reduced Coping Strategies Index was calculated using the five standard food-related coping strategies.

Weights applied:

* Less preferred food: ×1
* Borrowed food / relied on help: ×2
* Reduced number of meals: ×1
* Reduced portion size: ×1
* Adults reduced food so children could eat: ×3

The Power Query calculation created:

`rCSI_Score_PQ`

The resulting score was stored as a Whole Number because all component weights are integers.

The existing scalar summary query:

`rCSI_Baseline_Summary`

calculates the mean rCSI.

Baseline result:

**Mean rCSI = 10.47**

---

### 4.3 ECMEN Calculation

The ECMEN calculation uses the underlying expenditure/resource variables rather than relying on a pre-calculated summary field.

This distinction was important because the Kobo raw field `ecmen_food_7d` was not populated in the clean baseline dataset.

#### Food expenditure

The relevant `HHExpF...` variables were dynamically selected and summed.

Created field:

`ECMEN_Food_7D_PQ`

Monthlyization:

`ECMEN_Food_Monthly_PQ`

Formula:

`7-day food expenditure × 30 / 7`

---

#### Short-term non-food expenditure

The relevant variables beginning with `HHExpNF` and ending with `_MN_1M` were dynamically selected and summed.

Created field:

`ECMEN_ShortTerm_NonFood_Monthly_PQ`

These values represent the relevant 30-day expenditure period.

---

#### Long-term non-food expenditure

The relevant variables beginning with `HHExpNF` and ending with `_MN_6M` were dynamically selected and summed.

Created field:

`ECMEN_LongTerm_NonFood_6M_PQ`

Monthlyization:

`6-month expenditure / 6`

Created field:

`ECMEN_LongTerm_NonFood_Monthly_PQ`

---

#### Monthly household economic capacity

The three monthlyized components were combined:

`ECMEN_Food_Monthly_PQ`

*

`ECMEN_ShortTerm_NonFood_Monthly_PQ`

*

`ECMEN_LongTerm_NonFood_Monthly_PQ`

Result:

`ECMEN_Monthly_HH_Capacity_PQ`

---

#### Monthly per-capita economic capacity

Household monthly economic capacity was divided by household size.

Created field:

`ECMEN_Monthly_PerCapita_PQ`

Baseline mean:

**58,731.20 FCFA per person per month**

---

## 5. Validation

The transformed results were independently checked against the locked baseline dataset.

Validation included:

### Household-level checks

* 60 valid baseline households
* Unique household IDs
* No duplicate baseline household IDs
* Required baseline eligibility fields completed
* Technical test record excluded

### FCS checks

* Independent recalculation of FCS
* Classification verification
* Food-frequency range checks
* Source-field consistency
* 60/60 household calculations matched

### rCSI checks

* Independent recalculation
* Standard weights verified
* Score range verified
* 60/60 household calculations matched

### ECMEN checks

* Independent 7-day food expenditure calculation
* Independent monthlyization
* Independent short-term non-food calculation
* Independent long-term non-food monthlyization
* Independent household economic-capacity calculation
* Independent per-capita calculation
* 60/60 household calculations matched

The Power Query outputs therefore reproduce the validated baseline calculations.

---

## 6. Load

The final Power Query results were loaded back into Excel.

The main analysis workbook is:

`Baseline_Indicator_Analysis.xlsx`

The consolidated baseline summary query is:

`Baseline_Indicator_Summary`

It contains:

* Indicator
* Baseline value
* Unit
* Indicator direction
* Status

The summary currently contains four indicators:

| Indicator                                 |       Baseline | Status                        |
| ----------------------------------------- | -------------: | ----------------------------- |
| FCS acceptable                            |         86.67% | Available                     |
| Mean rCSI                                 |          10.47 | Available                     |
| Mean monthly per-capita economic capacity | 58,731.20 FCFA | Available                     |
| Households at/above applicable MEB        |            TBD | Contextual threshold required |

---

## 7. IPTT Integration

The validated baseline indicator results were then used to update the project's IPTT.

The Stage 07 IPTT contains:

* Baseline values where valid results are available
* Targets
* Actual values reserved for follow-up
* Variance reserved for follow-up

The FCS baseline was populated as:

**86.7%**

The rCSI baseline was populated as:

**10.47**

The ECMEN MEB-based baseline remains:

**TBD**

This is intentional.

No contextual MEB/SMEB has been established for this portfolio stage, so an illustrative threshold was not used to create a misleading baseline result.

---

## 8. Data Lineage

The complete baseline analysis lineage is:

```text
KoboToolbox
    │
    ▼
Staging_Baseline_Kobo
    │
    ▼
Baseline_Analysis
    │
    ├── FCS_Score_PQ
    │       └── FCS_Classification_PQ
    │
    ├── rCSI_Score_PQ
    │       └── rCSI_Baseline_Summary
    │
    ├── ECMEN_Food_7D_PQ
    │       └── ECMEN_Food_Monthly_PQ
    │
    ├── ECMEN_ShortTerm_NonFood_Monthly_PQ
    │
    ├── ECMEN_LongTerm_NonFood_6M_PQ
    │       └── ECMEN_LongTerm_NonFood_Monthly_PQ
    │
    ├── ECMEN_Monthly_HH_Capacity_PQ
    │
    └── ECMEN_Monthly_PerCapita_PQ
             │
             ▼
    Baseline_Indicator_Summary
             │
             ▼
           IPTT
```

---

## 9. Why Power Query Was Used

Power Query was used to make the analysis reproducible and traceable.

Instead of manually calculating and typing indicator values:

* source data remain separated from analytical transformations
* calculations can be refreshed when data change
* indicator calculations are visible in the query steps
* dynamic column selection reduces manual selection errors
* validation can be performed against the original clean dataset
* summary values remain linked to their calculation layers

This creates a clearer audit trail from raw data to programme-level indicator reporting.

---

## 10. MEAL Interpretation

The baseline values describe the situation of the simulated households at baseline.

They do not demonstrate programme impact.

A baseline establishes the starting point against which future observations can be compared.

The follow-up stage will therefore:

1. Collect or prepare follow-up observations using consistent methodologies.
2. Calculate follow-up indicator values.
3. Populate IPTT Actual values.
4. Calculate indicator-specific variance.
5. Interpret changes cautiously.
6. Identify findings requiring programme attention.
7. Document resulting decisions or adaptations.

Association between baseline and follow-up changes should not automatically be interpreted as causal programme impact.

---

## 11. Simulation and Limitations

This is a simulated portfolio project.

The 60 household records are fictional and are not statistically representative of flood-affected households in Côte d'Ivoire.

The analysis is intended to demonstrate practical MEAL skills, including:

* data preparation
* indicator calculation
* data quality assurance
* Power Query transformation
* baseline analysis
* IPTT integration
* data lineage
* interpretation and decision-use preparation

The ECMEN MEB comparison remains unresolved until an appropriate contextual MEB/SMEB is established.

---

## 12. Stage 07 Output

The main Stage 07 outputs are:

### `Baseline_Indicator_Analysis.xlsx`

Power Query-based baseline analysis workbook.

### `IPTT.xlsx`

IPTT containing baseline values and targets, with follow-up Actual and Variance pending.

### `ETL_Process_Documentation.md`

This document describing the baseline ETL and indicator-analysis process.

### `README.md`

Stage-level overview of the Indicator Analysis stage.

---

## 13. Next Stage

The next stage is:

**Stage 08: Follow-Up**

The follow-up process will build on the same indicator definitions and analytical logic so that baseline and follow-up results remain comparable.

The IPTT will then be updated with:

**Baseline → Target → Actual → Variance**

before proceeding to:

**Stage 09: Findings and Decisions**
