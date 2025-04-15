const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { TransactionPage } = require('../pages/TransactionPage');
const { waitForTransactionRequest } = require('../utils/api-validator');

const validUser = {
  username: 'valid.user@example.com',
  password: 'CorrectPass123'
};

test('Validate transaction reflects correct API response and UI feedback', async ({ page }) => {
  const login = new LoginPage(page);
  const transaction = new TransactionPage(page);

  await login.goto();
  await login.loginWith(validUser.username, validUser.password);
  await transaction.goto();

  const apiResponse = await waitForTransactionRequest(page);

  await expect(await transaction.isSuccessMessageVisible()).toBeTruthy();
  expect(apiResponse.status).toBe('success');
  expect(apiResponse.amount).toBe('100');
});
