async function waitForTransactionRequest(page) {
  const [response] = await Promise.all([
    page.waitForResponse(resp =>
      resp.url().includes('/api/transactions') &&
      resp.status() === 200
    ),
    page.click('#submit-transaction')
  ]);
  const responseBody = await response.json();
  return responseBody;
}

module.exports = { waitForTransactionRequest };
