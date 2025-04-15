# ⚡ Performance Testing with k6

This folder contains performance tests using [k6](https://k6.io/) to simulate concurrent users performing transactions.

## ▶️ Running the test

```bash
k6 run transaction-load.test.js
```

## 📌 Options Explained
- `vus`: virtual users (e.g. 50)
- `duration`: how long to run the test (e.g. 30s)
- `thresholds`: define acceptable performance (e.g. 95% requests under 500ms)

## ✅ Checks
- Validate response status = 200
- Ensure API responses are fast enough under load

## 🧪 Use cases
- Detect API bottlenecks
- Validate backend under stress
- Monitor performance regression over time
