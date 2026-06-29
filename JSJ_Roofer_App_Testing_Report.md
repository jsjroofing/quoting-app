# Comprehensive Testing Report: JSJ Roofer Field App

**Prepared by:** Manus AI
**Date:** June 29, 2026
**Subject:** Testing and Analysis of the New JSJ Roofer Quoting App and Pricing Cross-Reference

## Executive Summary

A comprehensive testing cycle was conducted on the new JSJ Roofer Field App (https://harmonious-salmiakki-84713d.netlify.app/) and the reference JSJ Pricing Tool (https://jsjpricing.netlify.app/). The field app demonstrates a solid foundation for field staff to generate quotes and reports on-site. The user interface is clean, the step-by-step wizard approach is intuitive, and the offline-first/local storage design is practical for field environments. 

However, critical discrepancies were identified in the pricing logic when compared to the reference tool, resulting in systematically underpriced quotes. Additionally, several user experience (UX) bottlenecks and missing features were noted that could slow down field staff or result in incomplete documentation.

This report details the pricing discrepancies, UX friction points, and provides actionable recommendations to simplify, speed up, and enhance the usability of the application.

## Pricing Discrepancies and Logic Issues

A thorough cross-reference between the Field App and the JSJ Pricing Tool revealed several inconsistencies that impact quote accuracy.

### 1. Missing Overhead Costs (Critical Issue)
The JSJ Pricing Tool includes three default overhead items that are added at cost to every quote: Admin ($127.00), Harnesses ($160.00), and Rubbish ($64.00), totaling $351.00 in overhead per job. 

**Finding:** The Field App completely omits these overhead costs in its calculations. Every quote generated through the Leak Report or Roof Inspection sections is systematically underpriced by $351.00.

### 2. Labour Rate Discrepancy
**Finding:** The Field App defaults to a labour rate of **$400.00/hour** per tradesman for standard jobs. The JSJ Pricing Tool uses a default rate of **$404.00/hour**. While a $4/hour difference seems minor, it scales with job size (e.g., a 2-man, 4-hour job is underpriced by $32.00).

### 3. Material Margin Consistency
**Finding:** Both tools correctly apply the same material margin formula: `Material Cost ÷ 0.3`. This ensures a consistent 70% margin on materials across both platforms.

### 4. Gutter Clean Pricing
**Finding:** The Field App introduces a separate labour rate of **$230.00/hour** per tradesman for Gutter Clean / Roof Report jobs. This rate does not exist in the reference pricing tool, so it cannot be cross-referenced, but the formula (`men × hours × $230.00`) functions correctly within the app.

## User Experience (UX) and Workflow Friction

The app requires field staff to navigate through multiple screens to generate a report. While structured, the current flow introduces unnecessary friction.

### 1. Excessive Clicks and Pagination
The Leak Report and Gutter Clean flows use a rigid, single-question-per-page wizard format. For example, the Leak Report requires clicking "Next" at least 8 times to reach the report generation screen, even for simple jobs. 
- **Impact:** This slows down experienced roofers who could fill out a single, scrolling form much faster.

### 2. Missing Contextual Data Capture
The generated reports lack crucial contextual information required for professional documentation.
- **Finding:** The app does not capture the client's name, property address, technician name, or date/time of inspection. The generated text is a raw list of defects and prices, lacking a client-facing narrative.

### 3. Grammar and Formatting Issues in Output
- **Finding:** The generated text output contains minor grammatical errors, such as "Broken tiles x 1 tiles" instead of "1 tile". 
- **Finding:** The output format relies heavily on raw text rather than a polished, formatted document (like a PDF), which requires the roofer to manually copy/paste the text into another system (like an email or invoicing software) to send to the client.

### 4. "Metal Roof Items" Section in Admin
As noted by the development team, the Metal Roof section is underdeveloped. 
- **Finding:** In the Admin panel, the "Metal Roof Items" section only contains 9 items (compared to 27 for Tile Roofs), and lacks specific repair items for common metal roof issues like box gutter replacement, custom flashings, or specific profile sheets (e.g., Klip-Lok vs. Corrugated).

## Recommendations for Improvement

To simplify the app, speed up the quoting process, and ensure pricing accuracy, the following recommendations should be implemented.

### Pricing and Logic Fixes
1. **Integrate Overhead Costs:** Update the Field App's calculation logic to include the standard $351.00 overhead (Admin, Harnesses, Rubbish) to match the JSJ Pricing Tool. These should ideally be visible and editable in the Admin panel.
2. **Align Default Labour Rates:** Change the default standard labour rate in the Field App from $400/hr to $404/hr to ensure parity with the reference tool.

### Workflow and UX Simplification
3. **Consolidate Wizard Steps:** Move away from the strict one-question-per-page wizard. Group related questions onto a single scrolling page (e.g., combine "Roof Access", "Leak Location", and "Observations" onto one "Site Assessment" page). This will significantly reduce the number of clicks required to generate a quote.
4. **Add Client Details Capture:** Introduce a mandatory first step in every flow to capture: Client Name, Property Address, and Technician Name. These details should be automatically injected into the final report header.
5. **Implement PDF Export:** Instead of just generating raw text to copy, add a "Generate PDF" button that places the text onto a JSJ-branded letterhead. This makes the output instantly client-ready.
6. **Improve Pluralization Logic:** Add simple logic to the report generator to handle pluralization correctly (e.g., outputting "1 tile" instead of "1 tiles").

### Feature Enhancements
7. **Expand Metal Roof Items:** Build out the Metal Roof checklist and repair items in the Admin panel. Include items for specific sheet profiles, box gutters, sump replacements, and custom flashings.
8. **Photo Integration:** A major limitation of the current app is the inability to attach photos to the report. Adding a feature to snap photos of defects and append them to the final report would drastically improve the value of the tool for both the company and the client.

## Conclusion
The JSJ Roofer Field App is a highly functional prototype that successfully digitizes the quoting process. By addressing the critical pricing discrepancies to align with the JSJ Pricing Tool, and streamlining the user interface to reduce clicks, the app will become a significantly faster and more reliable tool for field staff.
