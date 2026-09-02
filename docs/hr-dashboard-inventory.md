# HR analytics inventory — Data(2).xlsx

## Source / grain
- Workbook sheets: `Data`, `Extended Data`, `Pivot Table`.
- Analytical grain: one row per employee/user (`N°`). 176 populated employee rows in the source/extended sheets; `Extended Data` contains 10 trailing formula/lookup rows without employee IDs and those are excluded from employee grain.
- `Data`: 19 populated source columns (plus blank trailing cells).
- `Extended Data`: 28 populated columns (plus blank trailing cells), including derived age, seniority and analytical bands.
- `Pivot Table`: existing summary surface, not an employee-grain source.
- Current source snapshot contains dates through 2026-08-01 for movement activity; the dashboard header uses 02 Sep 2026 as the viewing/data-as-of date.

## Column inventory
| Column | Type | Analytical use |
|---|---|---|
| N° | id/numeric | employee key, count, lookup |
| Nom | categorical | record identity/search |
| Prénom | categorical | record identity/search |
| اللقب | categorical | record identity/search |
| الإسم | categorical | record identity/search |
| الجنس | categorical/status | composition/filter |
| الرتبة_الحالية | categorical | workforce comparison/filter |
| تاريخ_الإزدياد | date | age, age distribution |
| العمر | numeric | average, thresholds, distribution |
| المجال_العمري | categorical | age segmentation/filter |
| تاريخ_الدخول | date | professional seniority, entry trends |
| الخبرة_المهنية | numeric | average, distribution |
| المجال_الخبرة_المهنية | categorical | seniority segmentation |
| الرتبة_الأصلية | categorical | origin-grade comparison |
| تعيين_في_الرتبة_الحالية | date | grade tenure, appointment trends |
| الخبرة_في_الرتبة | numeric | average, distribution |
| المجال_في_الرتبة_الحالية | categorical | grade-tenure segmentation |
| الدرجة | numeric | echelon distribution; source contains Excel date/time formatting errors that must be normalized |
| تاريخ_الأثر | date | echelon tenure |
| الخبرة_في_الدرجة | numeric | echelon-tenure KPI/distribution |
| المجال_في_الدرجات | categorical | advancement-tenure segmentation |
| المنصب_العالي | categorical/status | high-position occupancy/count |
| تاريخ_المنصب | date | high-position trends |
| الوظيفة_العليا | categorical/status | senior-function occupancy/count |
| تاريخ_الوظيفة | date | senior-function trends |
| الحركة | categorical/status | movement composition/filter |
| تاريخ_الحركة | date | movement trends |
| ملاحظة | categorical/free text | attention queue/search |
| famille_professionnelle | derived categorical | executive family comparison/filter |

## KPI / metric inventory
- Workforce headcount: count of employee IDs.
- Average age; median age; min/max age; counts and rates at age thresholds 55 and 60.
- Average professional seniority; median/min/max; counts/rates in `<5`, `5–9`, `10–19`, `20–29`, `30+` bands.
- Average tenure in current grade; counts/rates in `<5`, `5–9`, `10+` bands.
- Average tenure in current echelon/degree; counts/rates in `<2.5`, `2.5–2.9`, `3.0–3.4`, `3.5+` bands.
- Current-grade headcount and share by grade.
- Professional-family headcount and share.
- Gender headcount and share.
- High-position count and share (records with `المنصب_العالي` or `الوظيفة_العليا`).
- Movement count/share by movement status.
- Notes/attention-record count and share.
- Entry, current-grade appointment, echelon-effect, high-position and movement event counts by year/month/quarter where dates support the grain.
- Ratios with a meaningful denominator: age-threshold rate = threshold count / workforce; high-position rate = high-position count / workforce; movement rate = movement records / workforce; missingness rate = missing field values / workforce.
- No additive financial KPI exists: numeric fields are ages/tenures/echelons, so sums are not decision-useful except as computational intermediates.
- No defensible prior-period delta exists in the workbook because it is a point-in-time employee snapshot rather than a historical panel. KPI deltas therefore show `N/A` until a second dated snapshot is persisted.

## Dimensions / filters
Gender; age group; professional family; current grade; original grade; professional seniority band; current-grade seniority band; echelon seniority band; movement status; high-position presence; senior-function presence; note presence; employee number/name search; event-date year/quarter/month; and exact event dates.

## Supported time grains
The historical event dates support yearly and quarterly analysis across multiple years, and monthly analysis where the date density is sufficient. Daily is technically possible for exact event dates but is not a useful executive trend view for this snapshot. Trends should therefore default to yearly/quarterly, with monthly drill-down for recent activity.

## Candidate chart inventory — question first
### Workforce structure
- Bar: Which current grades have the largest headcount?
- Bar: Which professional families carry the workforce?
- Bar: How is the workforce distributed by age group?
- Donut: What is the gender composition?
- Bar: How is professional seniority distributed?
- Bar: Where is tenure in the current grade concentrated?
- Bar: Where is tenure in the current echelon concentrated?
- Bar: What movement statuses are represented?
- Bar: Which original grades feed the current workforce?

### Management / attention
- KPI + ranked table: How many employees are at age 55+ and 60+?
- KPI + ranked table: Which records have long echelon tenure or source notes requiring review?
- Bar: How many employees hold high positions / senior functions?
- Bar: Which current grades/families contain the attention population?

### Trends
- Line: How has institutional entry volume changed by year?
- Line: How have current-grade appointments changed by year?
- Line: How have echelon-effect dates changed by year?
- Line: How have high-position appointments changed by year?
- Line: How have movements changed by year?
- Area: What is the cumulative number of institutional entries over time?
- Quarterly line: What is the recent event cadence by quarter?
- Monthly line: What is the recent movement/appointment cadence by month?

### Relationships / distributions
- Scatter: Is age associated with professional seniority?
- Scatter: Is professional seniority associated with tenure in current grade?
- Scatter: Is age associated with tenure in current grade?
- Histogram: What is the distribution of age?
- Histogram: What is the distribution of professional seniority?
- Histogram: What is the distribution of current-grade tenure?
- Box plot: How does age vary across professional families?
- Box plot: How does professional seniority vary across professional families?

## Analytical tabs selected
1. **Dashboard** — executive KPIs, workforce structure, management attention.
2. **Trends** — yearly/quarterly/monthly event trends and cumulative entries.
3. **Records** — full row-level searchable/filterable data with Add record.

The UI intentionally keeps dense grade rankings full-width and lets simpler categorical views share rows.
