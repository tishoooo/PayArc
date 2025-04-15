# End-to-End UI Automation Template with Playwright (JavaScript)

## Installation
npm install

## Running the Tests
npx playwright test

## Generating the Report
npx playwright show-report

## Project Structure
tests/ – test scenarios  
pages/ – page objects  
utils/ – API interception or other helper functions  
fixtures/ – test data  
playwright.config.js – Playwright configuration

## Advantages
Scalability  
Easy maintenance  
Covers login, transaction creation, and history validation flows
---

## 🔁 Retry Mechanism (API Failover Simulation)

To simulate an API retry scenario, we intercept the first transaction request and force it to fail with a 500 status. On the next attempt, we allow it to proceed successfully.

This demonstrates that the UI:
- Handles API failures gracefully
- Retries the request after failure (manually or automatically)
- Notifies the user if retry fails again

Example logic in `api-validator.js`:

```js
let attemptCount = 0;
page.route('**/api/transactions', async (route) => {
  attemptCount++;
  if (attemptCount === 1) {
    await route.fulfill({ status: 500, body: 'Internal Server Error' });
  } else {
    await route.continue();
  }
});
```

You can assert the retry by counting how many times the endpoint is hit or monitoring UI retry behavior.