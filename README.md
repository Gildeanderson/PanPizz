# PanPiz 🍕🥐

Sistema para padaria e pizzaria completo. Este projeto de sistema de gerenciamento é dividido em um front-end moderno e um back-end funcional baseado em Node.js e banco de dados Supabase.

## 🛠️ Tecnologias Utilizadas

### Front-end
- [React.js](https://reactjs.org/) (com Hooks e componentes modernos)
- [Vite](https://vitejs.dev/) (Bundler extremamente rápido)
- [Lucide React](https://lucide.dev/) (Biblioteca de ícones)

### Back-end
- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) (Servidor Web)
- [Supabase](https://supabase.com/) (Banco de Dados / Backend-as-a-Service)
- [Cors](https://www.npmjs.com/package/cors) & [Dotenv](https://www.npmjs.com/package/dotenv)

## 📁 Estrutura do Projeto

O repositório é um monorepo simples contendo front-end na raiz e o back-end em uma pasta dedicada.

- `/` (Raiz) - Contém o código do Frontend (Vite + React)
- `/backend` - Contém a API Node.js e lógicas de comunicação com o Supabase

## 🚀 Como Executar Localmente

### 1. Pré-requisitos
Certifique-se de possuir o [Node.js](https://nodejs.org/) instalado na sua máquina.

### 2. Configurando o Back-end
Abra o terminal e navegue até a pasta `backend/`:
```bash
cd backend
npm install
```
Configure as variáveis de ambiente necessárias no arquivo `backend/.env` (como as chaves do Supabase).
Para rodar o servidor em modo de desenvolvimento com hot-reload:
```bash
npm run dev
```
*(O back-end roda por padrão observando sua `src/index.js`)*

### 3. Configurando o Front-end
Abra um novo terminal na pasta raiz do projeto:
```bash
npm install
```
Para iniciar a aplicação Vite do front-end:
```bash
npm run dev
```

E acesse pelo endereço local sugerido pelo Vite (ex: `http://localhost:5173`).

## ⚙️ Arquivo `.gitignore`
O projeto já conta com um `.gitignore` maduro que lida corretamente com as pastas `node_modules`, arquivos `.env` com senhas, relatórios de debug, além dos arquivos de compilação da pasta `dist/` do Vite.
