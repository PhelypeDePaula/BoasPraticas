import { Page, expect } from '@playwright/test';

export class MapaCotacaoPage {
  constructor(private page: Page) {}

  async navegarParaMapas() {
    try {
      await this.page.getByRole('link', { name: 'Suprimentos' }).click();
      await expect(this.page.getByRole('link', { name: 'Mapas Cotações' })).toBeVisible();
      await this.page.getByRole('link', { name: 'Mapas Cotações' }).click();
      console.log('✅ Acesso à seção Mapas de Cotação realizado com sucesso!');
    } catch (err) {
      console.error('❌ Erro ao navegar para Mapas de Cotação', err);
      await this.page.screenshot({ path: 'error-navegarMapas.png', fullPage: true });
      throw err;
    }
  }

  async buscarPorCodigo(codigo: string) {
    try {
      const input = this.page.getByPlaceholder('Código Mapa Cotação');
      await expect(input).toBeVisible();
      await input.fill(codigo);
      await this.page.getByRole('button', { name: 'Buscar por código' }).click();
      console.log(`🔍 Busca realizada para o código ${codigo}`);
    } catch (err) {
      console.error(`❌ Erro ao buscar código ${codigo}`, err);
      await this.page.screenshot({ path: `error-busca-${codigo}.png`, fullPage: true });
      throw err;
    }
  }

  async abrirDetalhes() {
    try {
      const detalhesBtn = this.page.getByRole('cell', { name: 'Detalhes' }).getByRole('button');
      await expect(detalhesBtn).toBeVisible();
      await detalhesBtn.click();
      console.log('✅ Detalhes do mapa acessados.');
    } catch (err) {
      console.error('❌ Erro ao clicar em Detalhes', err);
      await this.page.screenshot({ path: `error-detalhes.png`, fullPage: true });
      throw err;
    }
  }

  async abrirMapaPorCodigoEStatus(codigo: string, status: string = 'Autorizado') {
    const linhaMapa = this.page.locator('tr', {
      hasText: codigo,
    }).filter({ hasText: status });

    try {
      await linhaMapa.waitFor({ state: 'visible', timeout: 10000 });

      const link = linhaMapa.locator('a');
      await expect(link).toBeVisible();
      await link.click();

      console.log(`✅ Mapa ${codigo} com status "${status}" aberto com sucesso!`);
    } catch (err) {
      console.error(`❌ Erro ao abrir mapa ${codigo} com status "${status}"`, err);
      await this.page.screenshot({ path: `error-mapa-${codigo}.png`, fullPage: true });
      throw err;
    }
  }

  async tirarScreenshot(nome: string) {
    await this.page.screenshot({ path: nome, fullPage: true });
    console.log(`📸 Screenshot salva: ${nome}`);
  }
}
