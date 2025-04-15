# 🔄 End-to-End Automation Project

This repository contains an end-to-end test automation framework covering both **web** and **mobile** platforms for a fictional financial transaction system.

---

## 📁 Project Structure

```
playwright-ui-tests/
├── web-tests/        → Web UI Automation with Playwright
├── mobile-tests/     → Mobile Automation Strategy with Appium
└── README.md         → This file
```

---

## 🌐 Web Automation (Playwright)

- Located in: `web-tests/`
- Includes test scenarios for:
  - Login
  - Transaction creation
  - Transaction history validation
- Page Object Model (POM) structure
- Configured with Playwright Test Runner

📄 More info: [`web-tests/README.md`](web-tests/README.md)

---

## 📱 Mobile Automation (Appium)

- Located in: `mobile-tests/`
- Includes theoretical strategy for React Native app
- Structured for scalability and API-UI consistency

📄 More info: [`mobile-tests/README.md`](mobile-tests/README.md)

---

## ✅ Benefits

- Clean structure separating platforms
- Reusable components
- CI/CD and performance testing friendly
