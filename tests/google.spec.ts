import { test, expect } from '@playwright/test';

test('Deve buscar por Playwright no Google', async ({ page }) => {
  // Acessa o Google
  await page.goto('https://www.google.com');

  // Aceita os cookies (caso apareça o botão de aceitar)
  const aceitarCookies = page.locator('button:has-text("Aceitar tudo"), button:has-text("Aceitar")');
  if (await aceitarCookies.isVisible()) {
    await aceitarCookies.click();
  }
  //if has login with google, i click in not conect
  const closeLoginPopupButton = page.getByRole('button', { name: 'Não conectar' });
  if (await closeLoginPopupButton.isVisible()) {
    await closeLoginPopupButton.click();
  }


  // Digita "Playwright" no campo de busca
  await page.getByRole('textbox', { name: /Pesquisar|Search/ }).fill('Playwright');

  // Pressiona Enter para buscar
  await page.keyboard.press('Enter');

  // Aguarda os resultados aparecerem
  const resultados = page.locator('#search');
  await expect(resultados).toBeVisible();

  // Verifica se algum resultado menciona "playwright.dev"
  await expect(page.locator('a')).toHaveAttribute('href', /playwright\.dev/);
});
