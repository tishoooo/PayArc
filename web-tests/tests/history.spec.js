const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HistoryPage } = require('../pages/HistoryPage');

const validUser = {
  username: 'valid.user@example.com',
  password: 'CorrectPass123'
};

test('Transaction appears in history', async ({ page }) => {
  const login = new LoginPage(page);
  const history = new HistoryPage(page);

  await login.goto();
  await login.loginWith(validUser.username, validUser.password);
  await history.goto();

  const transaction = await history.findTransaction('100');
  await expect(transaction).toBeVisible();
});
