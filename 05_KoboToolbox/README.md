# KoboToolbox Data-Collection Tool

## Project

**Simulated Multipurpose Cash Assistance (MPCA) Flood Response**

This folder contains the KoboToolbox data-collection tool developed for the simulated humanitarian MEAL portfolio project.

The questionnaire was developed from the project's PMP/MEAL Plan and translated into an operational **XLSForm for KoboToolbox**.

## Purpose

The purpose of the tool is to collect the household-level data required to monitor selected project indicators and test parts of the Theory of Change.

The form was designed to demonstrate practical skills in:

- XLSForm design
- KoboToolbox deployment
- Skip logic
- Conditional questions
- Validation rules
- Calculations
- Data-quality controls
- Household survey design

## Survey Modules

The form includes modules covering:

### 1. Household Identification and Eligibility

Collects information needed to identify the household and determine whether it meets the simulated programme eligibility criteria.

### 2. Household Demographics

Collects key household characteristics, including:

- Household size
- Household head characteristics
- Children under five
- Pregnant/lactating household members
- Disability-related information
- Location and displacement context

### 3. Food Consumption Score (FCS)

The questionnaire includes the seven-day food-consumption information required to calculate the Food Consumption Score.

The form uses:

- Food-group frequency questions
- Conditional source questions
- Validation rules
- Automated FCS calculation
- FCS classification

### 4. Reduced Coping Strategies Index (rCSI)

The questionnaire collects the frequency of selected food-related coping strategies during the previous seven days.

The form calculates the rCSI score using the standard strategy weights.

### 5. Economic Capacity / ECMEN

The form includes an expenditure and resource module based on the ECMEN methodology.

It collects relevant:

- Food expenditure
- Short-term non-food expenditure
- Longer-term expenditure

The collected information is used to calculate monthly household economic capacity and per-capita economic capacity.

### 6. Cash-Transfer Monitoring

The form includes questions related to cash assistance, including:

- Whether the household has received the transfer
- Amount received
- Planned transfer amount
- Transfer status

Conditional logic prevents cash-transfer questions from appearing for households that have not yet received assistance.

### 7. Market and Context

The form collects contextual information relevant to the Theory of Change, including:

- Physical market accessibility
- Availability of essential goods
- Market-related barriers
- Price conditions

These variables help assess external conditions that may influence whether increased purchasing power can translate into improved access to essential goods.

## Data-Quality Features

The XLSForm includes several mechanisms designed to improve data quality.

### Skip Logic

Questions appear only when relevant based on previous responses.

For example, households that have not received the cash transfer do not complete the transfer-received module.

### Conditional Questions

Some questions are displayed only when a relevant condition is met.

For example, market-barrier questions are linked to the household's market-access response.

### Validation Rules

Validation rules are used to restrict responses to appropriate ranges and formats.

Examples include:

- FCS frequency ranges
- rCSI frequency ranges
- Numeric expenditure fields
- Household characteristics

### Calculations

The form automatically calculates selected derived values, including:

- FCS
- FCS classification
- rCSI
- Monthly economic capacity
- Per-capita economic capacity
- Cash-transfer status

## Baseline Logic

A specific baseline-control mechanism was incorporated into the questionnaire.

Households that had already received the simulated cash assistance are identified separately so that they are not incorrectly treated as clean baseline observations.

For the clean simulated baseline dataset, households follow the baseline rule that:

- Consent = yes
- Flood affected = yes
- MPCA eligible = yes
- Received MPCA = no

This allows the baseline dataset to represent households before receiving the intervention.

## Testing and Validation

The XLSForm was imported into KoboToolbox and tested.

Issues identified during development were corrected and the form was re-imported until the questionnaire validated successfully.

This testing process included checking:

- Question appearance
- Skip logic
- Conditional logic
- Calculations
- Validation rules
- Baseline controls
- Derived indicator calculations

## KoboToolbox Form

A public **view-only** version of the form was deployed for demonstration purposes.

[View the KoboToolbox form](https://eu.kobotoolbox.org/#/forms/aA4hzCsa7p3qrKSh3fdXKJ)

The form is view-only and does not expose the project's submissions.

## Relationship to the PMP

The KoboToolbox form translates the PMP into actual data-collection questions.

The progression was:

**PMP**

↓

Defines what information needs to be measured

↓

**XLSForm**

↓

Translates measurement requirements into questions, logic and calculations

↓

**KoboToolbox**

↓

Deploys the questionnaire for data collection

↓

**Baseline Dataset**

↓

Provides data for indicator analysis

## Portfolio Note

This is a **simulated humanitarian MEAL project created for learning and professional skills demonstration**.

The questionnaire, scenario and subsequent datasets are fictional.

No real beneficiary information or real humanitarian field data are contained in this portfolio.

## Reference

The questionnaire design follows the project's PMP and the **MEAL DPro Guide** as the primary methodological reference for the overall MEAL process.
