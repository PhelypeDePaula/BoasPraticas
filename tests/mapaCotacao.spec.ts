import { test } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { LoginPage } from '../pages/LoginPage';
import { MapaCotacaoPage } from '../pages/MapaCotacaoPage';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

test('Buscar e abrir mapa de cotação pelo SCGC', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mapaPage = new MapaCotacaoPage(page);
  const codigoMapa = '919';
  const statusMapa = 'Autorizado';

  try {
    // 1. Login
    await loginPage.goto();
    await loginPage.login(process.env.USERNAME || '', process.env.PASSWORD || '');
    console.log('✅ Login realizado com sucesso!');

    // 2. Navegar para Mapas de Cotação
    await mapaPage.navegarParaMapas();
    console.log('✅ Acesso à Mapas de Cotação realizado.');

    // 3. Buscar mapa pelo código
    await mapaPage.buscarPorCodigo(codigoMapa);

    // 4. Acessar os detalhes da busca
    await mapaPage.abrirDetalhes();

    // 5. Abrir o mapa pelo código e status
    await mapaPage.abrirMapaPorCodigoEStatus(codigoMapa, statusMapa);

    // 6. Tirar screenshot final
    await mapaPage.tirarScreenshot(`screenshot-mapa-${codigoMapa}.png`);

    console.log('✅ Teste completo com sucesso!');
  } catch (err) {
    console.error('❌ Teste falhou:', err);
    await page.screenshot({ path: `error-fatal-${codigoMapa}.png`, fullPage: true });
    throw err;
  }
});
