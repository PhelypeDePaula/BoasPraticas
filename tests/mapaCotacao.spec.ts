import { test } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { LoginPage } from '../pages/LoginPage';
import { MapaCotacaoPage } from '../pages/MapaCotacaoPage';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

test('Buscar e abrir mapa de cotação pelo SCGC', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mapaPage = new MapaCotacaoPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.USERNAME || '', process.env.PASSWORD || '');
  console.log('✅ Login realizado com sucesso!');

  await mapaPage.navegarParaMapas();
  console.log('✅ Acesso à Mapas de Cotação realizado.');

  await mapaPage.buscarPorCodigo('919');
  await mapaPage.abrirDetalhes();
  console.log('✅ Detalhes do mapa acessados.');

  await mapaPage.abrirMapa('919');
  console.log('✅ Mapa aberto!');

  await mapaPage.ativarModoEdicao();
  console.log('✅ Modo de edição ativado!');

  await mapaPage.tirarScreenshot('screenshot-mapaCot.png');
  console.log('📸 Screenshot salva com sucesso!');
});
