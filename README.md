# cypress-api-automation

## Cypress API Automation Framework
This repository contains a Cypress-based API automation framework designed for testing RESTful APIs. The framework leverages TypeScript for improved code quality and Allure reporting for enhanced visualization of test results.

## Getting Started
### Prerequisites
- Node.js (>= v18.16.0)
- npm (>= 9.5.1)
- Cypress (>= 13.x)
  - Cypress package version: 13.13.1
  - Cypress binary version: 13.13.1
  - Electron version: 27.3.10
  - Bundled Node version: 18.17.1
- Typescript (>=v5.5.3)

### Reporting plugin
- @mmisty/cypress-allure-adapter
- Refer https://www.npmjs.com/package/@mmisty/cypress-allure-adapter

## Features
- **TypeScript**: Ensures static typing and improved code quality.
- **Cypress**: Utilized for end-to-end testing of APIs.
- **HTTP Methods**: Supports GET, POST, PUT, DELETE requests.
- **Allure Reporting**: Integrated for generating detailed test reports.


## Installation

### Clone the repository:
```bash
git clone https://github.com/yourusername/Cypress_API_Automation.git
cd Cypress_API_Automation
```

## Configuration
The framework is configured via a Cypress configuration file, which sets up the environment, base URL, and Allure reporting.

## Custom Commands
The framework includes custom commands for making API requests using different HTTP methods (GET, POST, PUT, DELETE).

## Test Data
Sample payloads for POST and PUT requests are stored in JSON files within the data directory.

## Project Structure
Cypress_API_Automation/
- cypress/
 - e2e/
   - apiTests.cy.ts
  - support/
    -  commands.ts
    -  data/
       - postPayload.json
       - putPayload.json
  - cypress.config.ts
  - package.json
  - tsconfig.json
