const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { TransactionPage } = require('../pages/TransactionPage');

const validUser = {
  username: 'valid.user@example.com',
  password: 'CorrectPass123'
};

test('Create a new transaction', async ({ page }) => {
  const login = new LoginPage(page);
  const transaction = new TransactionPage(page);

  await login.goto();
  await login.loginWith(validUser.username, validUser.password);
  await transaction.goto();

  await transaction.createTransaction({ amount: '100', recipient: 'john.doe@example.com' });
  await expect(await transaction.isSuccessMessageVisible()).toBeTruthy();
});
