async function interceptTransactionAPI(page) {
  await page.route('**/api/transactions', route => {
    route.continue(); // add mock or logging logic here if needed
  });
}

module.exports = { interceptTransactionAPI };
