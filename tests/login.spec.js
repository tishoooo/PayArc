const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

const validUser = {
  username: 'valid.user@example.com',
  password: 'CorrectPass123'
};

test('Успешно логване', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.loginWith(validUser.username, validUser.password);
  await expect(page).toHaveURL(/.*dashboard/);
});
