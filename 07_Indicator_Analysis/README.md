# Stage 07: Indicator Analysis

## Purpose

This stage demonstrates how a clean simulated baseline dataset is transformed into analysis-ready MEAL indicators and used to populate the project's Indicator Performance Tracking Table (IPTT).

The analysis follows the MEAL DPro approach used throughout this portfolio project.

## Analysis Workflow

The baseline analysis follows this data flow:

**KoboToolbox baseline data**
→ **Staging query**
→ **Baseline analysis query**
→ **Indicator calculations**
→ **Data validation**
→ **Baseline indicator summary**
→ **IPTT baseline values and targets**

The Power Query workflow preserves the connection between the original Kobo dataset and the final indicator results rather than manually entering calculated values.

## Source Data

The analysis uses the clean simulated baseline dataset developed in **Stage 06: Baseline Dataset**.

* 60 fictional flood-affected households
* Data collected using the project KoboToolbox XLSForm
* Baseline date: September 2026
* Dataset prepared for portfolio demonstration purposes
* Not statistically representative of the population

The technical test submission was excluded from the analytical baseline.

## Indicators Analysed

### Food Consumption Score (FCS)

**Indicator:**
% of surveyed flood-affected households with acceptable FCS

The standard FCS methodology was applied using the household's 7-day food consumption frequencies and the standard food-group weights.

**Baseline result:** **86.67% acceptable**

* 52 of 60 valid households had an acceptable FCS
* Mean FCS: **47.71**

### Reduced Coping Strategies Index (rCSI)

**Indicator:**
Mean rCSI score among surveyed flood-affected households

The standard five food-related coping strategies and their severity weights were applied using a 7-day recall period.

**Baseline result:** **10.47**

Lower rCSI values generally indicate less reliance on food-related coping strategies.

### ECMEN

The ECMEN module was used to calculate household economic capacity from the relevant expenditure/resource data.

The analysis:

* monthlyized 7-day food expenditure
* incorporated short-term non-food expenditure
* monthlyized relevant 6-month expenditure
* calculated monthly household economic capacity
* calculated monthly per-capita economic capacity

**Mean monthly per-capita economic capacity:** **58,731.20 FCFA**

The primary ECMEN outcome indicator is the percentage of households whose per-capita economic capacity is at or above the applicable MEB.

This percentage remains **TBD** because a contextual MEB/SMEB has not been established for this portfolio stage. No illustrative threshold was used to create a false baseline result.

## Data Quality and Validation

Indicator calculations were independently checked against the locked baseline dataset.

Validation covered:

* household count and unique household IDs
* FCS calculations and classifications
* rCSI calculations
* ECMEN monthlyization and aggregation
* per-capita calculations
* missing-value logic
* consistency with the KoboToolbox questionnaire structure

The Power Query results matched the validated baseline calculations.

## IPTT

The baseline analysis feeds the project's IPTT.

The Stage 07 IPTT contains:

* baseline values where valid baseline indicators are available
* project targets
* follow-up Actual values left as TBD
* Variance left as TBD until follow-up data are available

The IPTT is therefore treated as a monitoring tool that will be updated when follow-up data become available in **Stage 08: Follow-Up**.

## Key Baseline Results

| Indicator                                 |       Baseline | Status                  |
| ----------------------------------------- | -------------: | ----------------------- |
| % with acceptable FCS                     |         86.67% | Available               |
| Mean rCSI                                 |          10.47 | Available               |
| Mean monthly per-capita economic capacity | 58,731.20 FCFA | Available               |
| % at/above applicable MEB                 |            TBD | Contextual MEB required |

## Files

### `Baseline_Indicator_Analysis.xlsx`

Power Query analysis workbook containing:

* baseline analysis query
* FCS calculations
* rCSI calculations
* ECMEN calculations
* indicator summary
* analysis-ready baseline outputs

### `IPTT.xlsx`

Indicator Performance Tracking Table containing baseline values and targets.

Follow-up actuals and variance will be populated during Stage 08.

### `ETL_Process_Documentation.md`

Documentation of the data transformation process from the KoboToolbox baseline dataset to the analysis-ready indicator outputs.

## Relationship to Other Stages

**Stage 06: Baseline Dataset**
Provides the clean, validated baseline data.

**Stage 07: Indicator Analysis**
Transforms the baseline data into validated MEAL indicators and populates the IPTT baseline.

**Stage 08: Follow-Up**
Adds follow-up observations, calculates actual performance and variance, and updates the IPTT.

**Stage 09: Findings and Decisions**
Uses the analysed results to identify findings, interpret changes and document programme decisions or adaptations.

**Stage 10: Dashboard**
Presents selected indicators and findings through a Power BI dashboard.

## Important Note

This is a **simulated portfolio project** designed to demonstrate practical MEAL skills and workflow.

The household dataset and baseline results are fictional and should not be interpreted as evidence about real flood-affected households in Côte d'Ivoire.
