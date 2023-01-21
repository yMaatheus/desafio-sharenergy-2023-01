# Desafio SHARENERGY

## 📱 Sobre

### Não consegui entregar esse desafio completo, devido a alguns projetos para entregar e me formar no [curso de Desenvolvimento Web na Trybe](https://www.betrybe.com),
### Como pode ver nos commits iniciei o desafio apenas no dia 16/01. Mesmo diante dos imprevistos fiz o máximo que pude no tempo limitado que tive.
### De qualquer forma agradeço pela oportunidade!


[Link video de aprensentação](https://youtu.be/yAIXgf1yg7A)

## 🔧 Instalação

```
Primeiro clone o projeto:

git clone git@github.com:yMaatheus/desafio-sharenergy-2023-01.git

cd desafio-sharenergy-2023-01/

Entre na pasta backend e instale as dependencias:

cd backend/
yarn install

Entre na pasta do frontend e instale as depêndencias:

cd frontend/
yarn install
```

**Crie um arquivo .env** dentro da pasta **backend** e **frontend**.
Siga o [exemplo backend](backend/.env.example) e [exemplo frontend](frontend/.env.example)

  - No **env** do **backend** ponha a porta que irá rodar o backend e as chaves do banco de dados MongoDB.
  - No **env** do **frontend** ponha o url da aplicação backend com a sua porta.

### 🌱 Populando o banco de dados:

```
cd backend/

npm run seed
```

## 🚀 Iniciando Aplicação:

#### Depois de ter instalado as dependências e populado nosso banco de dados estamos prontos!
#### Para iniciar ambas as aplicações basta entrar na pasta e digitar: **npm start**

```
cd backend/

npm start

cd frontend/

npm start
```

## 🛠️Tecnologias Utilizadas:

### Backend:
  - [Express](https://expressjs.com/pt-br/)
  - [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
  - [Cors](https://www.npmjs.com/package/cors)
  - [Express-async-errors](https://www.npmjs.com/package/express-async-errors)
  - [Joi](https://joi.dev/)
  - [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  - [Mongoose](https://mongoosejs.com/)
  - [Eslint](https://eslint.org/)
  - [Mocha](https://mochajs.org/)
  - [Chai](https://www.chaijs.com/)
  - [Sinon](https://sinonjs.org/)
  - [Http-status-codes](https://www.npmjs.com/package/http-status-codes)
  - [Typescript](https://www.typescriptlang.org/)

### Frontend:
  - [React](https://pt-br.reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [Axios](https://axios-http.com/ptbr/docs/intro)
  - [Redux](https://redux.js.org/)
  - [React Router](https://reactrouter.com/en/main)
  - [Eslint](https://eslint.org/)
  - [Stylelint](https://stylelint.io/)
  - [React Icons](https://react-icons.github.io/react-icons/)
  - [React Input Mask](https://www.npmjs.com/package/react-input-mask)
