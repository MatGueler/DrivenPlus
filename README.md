# <p align = "center"> Driven Plus </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Mateus Gueler-4dae71?style=flat-square" />
      <img src="https://img.shields.io/github/languages/count/MatGueler/DrivenPlus?color=4dae71&style=flat-square" />
</p>

## :clipboard: Descrição

O projeto **Driven Plus** é uma plataforma de compra de serviços online. Essa aplicação permite que um usuário cadastrdo consiga comprar um determinado tipo de produto, também permite que o usuário atualize sua compra e troque de serviço.

## :computer: Tecnologias e Conceitos

- Node.js (v16.17.0)
- JavaScript
- React
- CSS
- Vercel

---

## :rocket: Rotas

```yml
Endpoint: '/'
    - Rota para o usuário logar sua conta
```

```yml
Endpoint: '/sign-up'
    - Rota para o usuário registrar uma conta
```

```yml
Endpoint: '/subscriptions (autenticada)'
    - Rota para selecionar o plano
```

```yml
Endpoint: '/subscriptions/id (autenticada)'
    - Rota para executar a compra do plano escolhido
```

```yml
Endpoint: '/home (autenticada)'
    - Rota para trocar de plano ou cancelar a inscrição
```

---

## 🏁 Rodando a aplicação

-Deploy

A aplicação front-end está disponível em deploy na plataforma [VERCEL](https://vercel.com), basta acessar o link abaixo:

[Driven Plus](https://driven-plus-plum.vercel.app/)

- Local

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app), portanto, certifique-se de ter a última versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, clone este repositório em sua máquina:

```
git clone git@github.com:MatGueler/DrivenPlus.git
```

Em seguida, entre na pasta criada e execute o seguinte comando para instalar as dependências.

```
npm install
```

Terminado o processo, basta iniciar a aplicação:

```
npm run start
```
