import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://sgcweb.construtoralaterza.com.br/login');
  }

  async login(username: string, password: string) {
    await expect(this.page.getByRole('textbox', { name: 'Usuário' })).toBeVisible();
    await this.page.getByRole('textbox', { name: 'Usuário' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Senha' }).fill(password);
    await this.page.getByRole('button', { name: 'Entrar' }).click();
    await expect(this.page.getByRole('link', { name: 'Suprimentos' })).toBeVisible();
  }
}