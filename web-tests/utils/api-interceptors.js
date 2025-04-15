async function interceptTransactionAPI(page) {
  await page.route('**/api/transactions', route => {
    route.continue();
  });
}

module.exports = { interceptTransactionAPI };
