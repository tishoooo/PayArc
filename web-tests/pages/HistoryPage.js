class HistoryPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/transactions/history');
  }

  async findTransaction(amount) {
    return this.page.locator(`.transaction-item:has-text("${amount}")`).first();
  }
}

module.exports = { HistoryPage };
