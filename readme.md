
# 📘 Guia de Configuração do Projeto Fullstack (Backend + MySQL + Frontend)

Este passo a passo foi feito para **iniciantes**, explicando com clareza como configurar o backend, conectar com o banco de dados MySQL e iniciar o frontend usando a extensão **Live Server** no VS Code.

---

## 🔧 1. Acessar a pasta do Backend

Antes de mais nada, você precisa entrar na pasta onde está o backend do projeto.

### 👉 O que fazer:
Abra o terminal e digite o seguinte comando:

```bash
cd backend
```

Esse comando muda a pasta atual para a pasta `backend`, onde estão os arquivos do servidor da aplicação.

---

## 📦 2. Instalar as dependências do backend

Agora vamos instalar todas as bibliotecas necessárias que o projeto precisa para funcionar.

### 👉 O que fazer:
Digite no terminal:

```bash
npm install
```

Esse comando lê o arquivo `package.json` e instala todas as dependências do projeto (como o Express, Knex, MySQL2 etc.).

---

## ⚙️ 3. Configurar a conexão com o banco de dados no `index.js`

Agora vamos configurar a conexão entre o código do backend e o banco de dados MySQL.

### 👉 O que fazer:

Abra o arquivo `index.js` que está dentro da pasta `backend` e procure por este trecho:

```js
const knexDb = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "seu_usuario",
    password: "sua_senha",
    database: "live",
  },
});
```

### ✏️ O que mudar:

- `seu_usuario`: troque pelo seu nome de usuário do MySQL (normalmente é `root`).
- `sua_senha`: troque pela senha que você usa para acessar o MySQL.
- O banco de dados utilizado aqui se chama `live`.

Exemplo preenchido:

```js
const knexDb = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "minhasenha",
    database: "live",
  },
});
```

---

## 🗄️ 4. Criar o banco de dados no MySQL

Agora precisamos **criar o banco de dados** no seu MySQL com base no script `live.sql`.

### 👉 O que fazer:

1. Abra o arquivo `live.sql` e **copie todo o conteúdo**.
2. Abra o terminal (CMD) e digite:

```bash
mysql -u seu_usuario -p
```

Depois pressione `Enter`.

3. O terminal vai pedir a senha do seu MySQL. Digite e pressione `Enter` novamente.
4. Agora que está dentro do MySQL, **cole o conteúdo que você copiou do `live.sql`**.

Isso vai criar o banco de dados chamado `live` com todas as tabelas necessárias para o projeto.

---

## 🌐 5. Acessar a pasta do Frontend

Vamos agora abrir a parte visual do projeto — o **frontend**.

### 👉 O que fazer:

No terminal, digite:

```bash
cd ..
cd frontend
```

- O primeiro `cd ..` serve para voltar uma pasta.
- O segundo `cd frontend` entra na pasta onde está o código da interface.

---

## 🚀 6. Iniciar o Frontend com Live Server

### 👉 O que é Live Server?

É uma extensão do VS Code que permite visualizar páginas HTML no navegador e atualiza automaticamente sempre que você salva uma mudança.

### 👉 O que fazer:

1. Certifique-se de ter a extensão **Live Server** instalada no VS Code.
2. No explorador de arquivos do VS Code, clique com o botão direito no arquivo `index.html`.
3. Escolha a opção **"Go Live"**.

Isso vai abrir seu navegador padrão e mostrar o projeto rodando.

---

## ✅ Pronto!

Se você seguiu todos os passos:

- O backend estará conectado ao banco de dados.
- O frontend estará rodando no navegador.
- Você poderá ver e testar as funcionalidades da aplicação.

---

💡 **Dica:** Se tiver algum erro, confira se você:
- Colocou corretamente seu nome de usuário e senha do MySQL.
- Instalou todas as dependências com `npm install`.
- Rodou corretamente o script `live.sql`.

Boa prática e bons estudos! 🚀