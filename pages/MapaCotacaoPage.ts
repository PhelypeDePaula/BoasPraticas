import { Page, expect } from '@playwright/test';

export class MapaCotacaoPage {
  constructor(private page: Page) {}

  async navegarParaMapas() {
    await this.page.getByRole('link', { name: 'Suprimentos' }).click();
    await expect(this.page.getByRole('link', { name: 'Mapas Cotações' })).toBeVisible();
    await this.page.getByRole('link', { name: 'Mapas Cotações' }).click();
  }

  async buscarPorCodigo(codigo: string) {
    const input = this.page.getByPlaceholder('Código Mapa Cotação');
    await expect(input).toBeVisible();
    await input.fill(codigo);
    await this.page.getByRole('button', { name: 'Buscar por código' }).click();
  }

  async abrirDetalhes() {
    const detalhesBtn = this.page.getByRole('cell', { name: 'Detalhes' }).getByRole('button');
    await expect(detalhesBtn).toBeVisible();
    await detalhesBtn.click();
  }

  async abrirMapa(codigo: string) {
    const linhaMapa = this.page.getByRole('row', { name: new RegExp(`${codigo}.*Autorizado`) });
    await expect(linhaMapa).toBeVisible();
    await linhaMapa.locator('a').click();
  }

  async ativarModoEdicao() {
    const editarBtn = this.page.getByRole('button', { name: /modo de edição/i });
    await expect(editarBtn).toBeVisible();
    await editarBtn.click();
  }

  async tirarScreenshot(nome: string) {
    await this.page.screenshot({ path: nome, fullPage: true });
  }
}
