#  End-to-End Automation Project

This repository showcases a complete test automation approach for a React-based web dashboard and a React Native mobile app used for financial transaction management.

---

##  Project Structure

```
playwright-ui-tests/
├── web-tests/        → Web UI Automation with Playwright
│   ├── tests/        → End-to-end tests (login, transactions, history, API)
│   ├── pages/        → Page Object Model (Login, Transaction, History)
│   ├── fixtures/     → Test data (e.g. users)
│   ├── utils/        → API helpers and interceptors
│   └── playwright.config.js
│
├── mobile-tests/     → Mobile Automation Strategy with Appium
│   └── README.md     → Theoretical design for React Native test suite
│
├── load-tests/       → Performance testing with k6 (API load simulation)
│   └── README.md     → k6 script and setup instructions
│
└── README.md         → This file
```

---

##  Web UI Automation (Playwright)

- Covers:
  -  Login flow
  -  Transaction creation
  -  Transaction history
  -  UI + API consistency
- Organized using Page Object Model
- Easily extendable and scalable

 Details: [`web-tests/README.md`](web-tests/README.md)

---

##  Mobile Automation Strategy (Appium)

- Focused on React Native apps
- Describes test flows, toolchain, and best practices
- Sample pseudocode provided using WebDriverIO

 Details: [`mobile-tests/README.md`](mobile-tests/README.md)

---

##  API Validation

- Playwright’s `waitForResponse` is used to validate API response data
- Ensures UI reflects accurate transaction status and values
- Located in: `web-tests/utils/api-validator.js`

---

##  Performance Testing (k6)

- Simulates concurrent users performing transactions
- Validates backend/API response times under load
- Helps identify performance regressions and bottlenecks

 Details: [`load-tests/README.md`](load-tests/README.md)

---

##  Highlights

-  Cross-platform test design
-  Clean, scalable code structure
-  API-aware and performance-driven
-  CI/CD-ready layout

This setup demonstrates not just automation, but a complete QA mindset.
