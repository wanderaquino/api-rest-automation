# Paraná Banco Challenge - Testes de API REST Automatizados
## Descrição
Aplicação desenvolvida para antender ao requisito de testes de API REST automatizados.

## Stack
- [NodeJS]
- [Mocha]
- [Chai]
- [Axios]
- [MochAwesome Reporter]

## Instalação

Esse projeto foi desenvolvido utilizando Javascript com NodeJs em sua versão 16 (LTS), utilizando frameworks de teste Mocha (Em sua versão 10) e Chai (4.3.6). E com MochAwesome em sua versão 7. 

- Pré-requisitos: NodeJS 16+ previamente instalado com NPM.

Uma vez instalados os itens acima, e clonado o repositório localmente

1. Navegar até o diretório raiz do projeto:

```sh
cd parana-banco-challenge
```
2. Executar o comando:

```sh
npm install
```

3. O npm irá instalar as dependências necessárias e quando concluir, irá exibir um texto análogo ao abaixo:

```sh
28 packages are looking for funding
  run `npm fund` for details
 
found 0 vulnerabilities
```

4. Executar o comando:

```sh
npm run test
```

5. A suíte de teste irá ser executada e exibirá o relatório de execução conforme exemplo abaixo:

```sh
> parana-banco-challenge@1.0.0 test
> mocha test/**/*.test.js --reporter mochawesome

  Test suite for /GET Users endpoint
    ✔ Shoud return a array of users (161ms)
    ✔ Shoud return an user by id (607ms)
    ✔ Shoud not find a user by unknown id (74ms)

  Test suite for /POST Users endpoint
    ✔ Should create a new user (424ms)

  Test suite for /DELETE Users endpoint
    ✔ Should delete a existing user (304ms)

  Test suite for /PUT Users endpoint
    ✔ Should update an existing user by id (471ms)
    ✔ Should not update a user by unknown id  (285ms)

  7 passing (2s)

[mochawesome] Report JSON saved to parana-banco-challenge/mochawesome-report/mochawesome.json
[mochawesome] Report HTML saved to parana-banco-challenge/mochawesome-report/mochawesome.html
```
6. Ao final da execução é gerado um report do teste em HTML diretório do projeto;

[NodeJS]: <https://nodejs.org>
[Mocha]: <https://mochajs.org/>
[Chai]: <https://www.chaijs.com/>
[Axios]: <https://axios-http.com/>
[MochAwesome Reporter]: <https://www.npmjs.com/package/mochawesome>