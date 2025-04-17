async function simulateFailingTransactionAndRetry(page) {
  let attemptCount = 0;

  await page.route('**/api/transactions', async (route, request) => {
    attemptCount++;
    if (attemptCount === 1) {
      // Simulate API failure on first attempt
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Internal Server Error' })
      });
    } else {
      // Allow successful pass on retry
      await route.continue();
    }
  });

  await page.click('#submit-transaction');
  return attemptCount;
}

module.exports = { simulateFailingTransactionAndRetry };
