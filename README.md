# ProjetoTestes
✅ README.md
md
Copiar
Editar
# 🧪 Testes Automatizados com Playwright

Este projeto contém testes automatizados E2E (fim a fim) usando [Playwright](https://playwright.dev/), focados no acesso e verificação de mapas de cotação no sistema SGCWeb da Construtora Laterza.

## 🚀 Tecnologias Utilizadas

- [Playwright](https://playwright.dev/)
- [Node.js](https://nodejs.org/)
- TypeScript (opcional)
- Dotenv para variáveis de ambiente

---

## 📁 Estrutura do Projeto

meu-projeto-playwright/
├── tests/ # Testes E2E organizados por funcionalidade
│ └── mapaCotacao.spec.ts
├── pages/ # Page Objects (POM) com interações encapsuladas
│ ├── LoginPage.ts
│ └── MapaCotacaoPage.ts
├── .env # Variáveis de ambiente (não subir para o Git)
├── playwright.config.ts # Configuração global do Playwright
├── package.json
└── README.md # Este arquivo

yaml
Copiar
Editar

---

## ⚙️ Pré-requisitos

- Node.js 18+ instalado
- Git
- Acesso ao sistema https://sgcweb.construtoralaterza.com.br com login válido

---

## 📦 Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/meu-projeto-playwright.git
cd meu-projeto-playwright

# 2. Instalar dependências
npm install
🔐 Configuração de Variáveis de Ambiente
Crie um arquivo .env na raiz com as seguintes chaves:

# 3. Atalhos para execultar e debugs

npx playwright test

npx playwright show-report

npx playwright test nomepasta/arquivo.spec.ts

npx playwright test nomepasta/arquivo.spec.ts --debug

env
Copiar
Editar
USERNAME=seu.usuario@empresa.com.br
PASSWORD=sua_senha_segura
⚠️ Nunca suba o .env para o Git (já está no .gitignore por padrão).

▶️ Como Executar os Testes
bash
Copiar
Editar
npx playwright test
Para rodar um teste específico:

bash
Copiar
Editar
npx playwright test tests/mapaCotacao.spec.ts
📸 Relatórios e Screenshots
Em caso de erro, screenshots serão salvos automaticamente na raiz do projeto com nomes como:

error-mapa-919.png

error-fatal-919.png

Para rodar com visualização (modo interativo):

bash
Copiar
Editar
npx playwright test --ui
🧱 Boas Práticas
Use o padrão Page Object Model (POM) para separar lógica de página dos testes.

Use try/catch com screenshot() nos métodos críticos.

Organize testes por contexto (describe) quando testar múltiplos perfis ou fluxos.

Utilize timeout e waitFor() para lidar com carregamentos dinâmicos.

📄 Licença
Este projeto é privado e de uso interno da equipe de QA da Construtora Laterza. Entre em contato com o time de automação para dúvidas ou colaboração.