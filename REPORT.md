#  QA Test Execution Report

Project: End-to-End Automation for React Web & React Native App  
Date: April 2025  
Tester: Tihomir Nenov

---

##  Test Executions Summary

| Test Scenario                          | Environment | Status   | Notes |
|----------------------------------------|-------------|----------|-------|
| Web Login                              | Web (Playwright) | ✅ Pass  | Login successful with valid user |
| Invalid Login                          | Web (Playwright) | ✅ Pass  | Error message displayed correctly |
| Create Transaction                     | Web (Playwright) | ✅ Pass  | UI shows confirmation; data posted to API |
| Transaction Appears in History         | Web (Playwright) | ⚠️ Partial | Transaction sometimes delayed in appearing |
| API ↔ UI Consistency                   | Web (Playwright) | ✅ Pass  | API response matches UI display |
| Load Testing (50 VUs for 30s)          | API (k6)         | ⚠️ Partial | 92% under 500ms (threshold was 95%) |
| Mobile Login Flow                      | Mobile (Appium plan) | ⏳ Planned | Strategy documented, not executed |
| Mobile Transaction + History Validation| Mobile (Appium plan) | ⏳ Planned | Pseudocode only |

---

##  Issues Found

1. **Transaction appears late in history (UI delay):**
   - On slower API response (~1s+), transaction doesn't show immediately.
   - Requires page refresh or navigating away and back.

2. **Load testing shows borderline performance:**
   - With 50 concurrent users, 8% of requests exceeded 500ms.
   - Backend API may have inconsistent response times under load.

3. **No retry logic on failed transaction:**
   - API request failure (simulated via mock) shows no retry attempt or UI fallback.

---

##  Test Evidence

- Screenshots from Playwright (optional)
- k6 output:
  - Avg duration: 320ms
  - 95th percentile: 620ms
  - Errors: 0
- Console logs from browser for API failures

---

##  Recommendations

- Add loading indicator and refresh polling for transaction history page.
- Implement automatic retry for failed POST /transactions.
- Optimize API for better scalability (review DB indexing, caching).
- Monitor API performance via APM tools (e.g., New Relic, Datadog).
- Run mobile scenarios on real/emulated devices to validate selectors and timing.

---

##  Conclusion

The test suite successfully covers all critical web scenarios and validates the UI ↔ API sync. Load testing and error simulation exposed important areas for improvement, notably with transaction visibility and backend response stability. A retry strategy and mobile test execution are recommended next steps.

