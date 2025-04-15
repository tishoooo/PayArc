async function interceptTransactionAPI(page) {
  await page.route('**/api/transactions', route => {
    route.continue(); // тук може да добавиш логика за mock или logging
  });
}

module.exports = { interceptTransactionAPI };
