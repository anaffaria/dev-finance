# API & Platform Testing Project

## Overview
This project is designed for testing E2E and APIs using **Cypress** and **Postman**. It includes automation for functional testing to ensure the reliability of the APIs and web application.

## Technologies Used
- **Cypress**: End-to-end testing framework for UI and API testing.
- **Postman**: API testing tool for manual and automated API validation.
- **Node.js**: Runtime environment required for Cypress.

## Installation
### Prerequisites
- Install [Node.js](https://nodejs.org/) (v14 or later)
- Install [Postman](https://www.postman.com/downloads/)

### Setup
Clone the repository:
```sh
git clone git@github.com:anaffaria/dev-finance.git
cd dev-finance
```

Install dependencies:
```sh
npm install
```

## Running Tests
### Cypress Tests
To run Cypress tests for UI and API:
```sh
npm run cy:open  # Opens Cypress UI
```
OR run tests in headless mode:
```sh
npm run test
```

### Postman Tests
The postman files are located in [postman/api-test](https://github.com/anaffaria/dev-finance/tree/master/postman/api-test)

## Folder Structure
```
dev-finance/
├── cypress/
│   ├── e2e/
│   │   ├── dev-finance.cy.js/                                     # UI test cases
│   ├── fixtures/                                                  # Test data
│   ├── support/                                                   # Common functions file
├── postman/
│   ├── api-test/                                                  # Postman files
│   |    ├── Anime_Jikan_API_Testing.postman_collection            # Postman collection
│   |    ├── Dev_environment.postman_environment                   # Postman environment
├── package.json                                                   # Project dependencies
├── cypress.config.js                                              # Cypress config file
├── package-lock.json                                              # Dependencies version control file
├── README.md                                                      # Documentation
```

## Continuous Integration
You can integrate Cypress and Postman tests into CI/CD pipelines using **GitHub Actions**, **Jenkins**, **GitLab CI** or **Codefresh**. Example GitHub Actions workflow:
```yaml
name: API & UI Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Run Cypress Tests
        run: npm run cy:test
```

## Mindmap for gathering test cases:
Map1
Map2
Map3

## Roadmap for future improvements
1. Use newman to run postman tests in cli, which can be used for ci pipeline
