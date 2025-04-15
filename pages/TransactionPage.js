class TransactionPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/transactions/new');
  }

  async createTransaction({ amount, recipient }) {
    await this.page.fill('#amount', amount);
    await this.page.fill('#recipient', recipient);
    await this.page.click('#submit-transaction');
  }

  async isSuccessMessageVisible() {
    return this.page.locator('.success-message').isVisible();
  }
}

module.exports = { TransactionPage };
