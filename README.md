# Classify

API desenvolvida para o Trabalho de Conclusão de Curso da Universidade Católica de Pernambuco no Curso de Sistemas para Internet. 💻

## 🧾 Conteúdos

<p align="center">
 <a href="#-Tecnologias">Tecnologias</a> • 
 <a href="#-Requisitos">Requisitos</a> • 
 <a href="#-Local">Executando aplicação localmente</a> • 
</p>

## 🛠 Tecnologias

Tecnologias utilizadas na realização do projeto:

- [Node.js](https://nodejs.org/pt-br/)
- [Express](https://expressjs.com/pt-br/)
- [JWT](https://jwt.io)
- [Sequelize](https://sequelize.org)
- [PostgreSQL](https://www.postgresql.org)

## ⚙ Requisitos

- [Git](https://git-scm.com/)
- [Npm](https://www.npmjs.com)

## 🚀 Instalando

```bash
# Clone este repositório
$ git clone https://github.com/DenilsonnSilva/tcc-demanda-de-turmas.git

# Acesse a pasta raiz do projeto
$ cd tcc-demanda-de-turmas

# Instale as dependências
$ npm install
```

## ☕ Configurando e executando

Para configurar o projeto corretamente, realize os seguintes passos para criar um arquivo com todas as variáveis de ambiente usadas no projeto:

Crie um novo arquivo na pasta raiz do projeto e renomeie-o para ".env".

Abra o arquivo em qualquer editor de texto e copie as seguintes variáveis para dentro dele:

```
DATABASE_URL=
PORT=
JWT_SECRET=
JWT_EXPIRES_IN=
```

Em seguida, preencha os campos corretamente:

<p><code>DATABASE_URL=</code> URL de conexão com seu banco de dados</p>
<p><code>PORT=</code> Porta de acesso do servidor (Exemplo: 8080)</p>
<p><code>JWT_SECRET=</code> Chave secreta usada na encriptação do token de autenticação do usuário. É recomendado o uso de uma chave forte (pelo menos 32 caracteres, mas quanto mais, melhor) para uma maior proteção dos dados</p>
<p><code>JWT_EXPIRES_IN=</code> Tempo para expiração do token de autenticação (quando o usuário terá que fazer login novamente), expressado em segundos ou uma string descrevendo um intervalo de tempo <a href="https://github.com/vercel/ms">vercel/ms</a>. Ex: 60, "2 days", "10h", "7d"</p>

Após ter instalado as dependências e configurado o ambiente corretamente, basta executar a aplicação:

```bash
# Execute a aplicação diretamente
$ npm start

# Ou execute a aplicação em modo de desenvolvimento (utilizando nodemon)
$ npm run dev
```
