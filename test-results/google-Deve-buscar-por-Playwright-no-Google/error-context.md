# Test info

- Name: Deve buscar por Playwright no Google
- Location: /home/horisen/Documentos/ProjetoTestes/tests/google.spec.ts:3:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox', { name: /Pesquisar|Search/ })

    at /home/horisen/Documentos/ProjetoTestes/tests/google.spec.ts:19:65
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Deve buscar por Playwright no Google', async ({ page }) => {
   4 |   // Acessa o Google
   5 |   await page.goto('https://www.google.com');
   6 |
   7 |   // Aceita os cookies (caso apareça o botão de aceitar)
   8 |   const aceitarCookies = page.locator('button:has-text("Aceitar tudo"), button:has-text("Aceitar")');
   9 |   if (await aceitarCookies.isVisible()) {
  10 |     await aceitarCookies.click();
  11 |   }
  12 |   //if has login with google, i click in not conect
  13 |   const recusarLoginGoogle = page.locator('button:has-text("Não conectar"), button:has-text("Não conectar")');
  14 |   if(await recusarLoginGoogle.isVisible()){
  15 |     await recusarLoginGoogle.click();
  16 |   }
  17 |
  18 |   // Digita "Playwright" no campo de busca
> 19 |   await page.getByRole('textbox', { name: /Pesquisar|Search/ }).fill('Playwright');
     |                                                                 ^ Error: locator.fill: Target page, context or browser has been closed
  20 |
  21 |   // Pressiona Enter para buscar
  22 |   await page.keyboard.press('Enter');
  23 |
  24 |   // Aguarda os resultados aparecerem
  25 |   const resultados = page.locator('#search');
  26 |   await expect(resultados).toBeVisible();
  27 |
  28 |   // Verifica se algum resultado menciona "playwright.dev"
  29 |   await expect(page.locator('a')).toHaveAttribute('href', /playwright\.dev/);
  30 | });
  31 |
```