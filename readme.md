# Paraná Banco Challenge - Testes de API REST Automatizados
## Descrição
Aplicação desenvolvida para antender ao requisito de testes de API REST automatizados.

## Stack
- [NodeJS]
- [Mocha]
- [Chai]
- [Axios]
- [MochAwesome Reporter]
- [Docker]

## Sobre

Esse projeto foi desenvolvido utilizando Javascript com NodeJs em sua versão 16 (LTS), utilizando frameworks de teste Mocha (Em sua versão 10) e Chai (4.3.6). E com MochAwesome em sua versão 7. Para melhor visualização / execução, utilizando execução em container Docker.

## Execução via Docker
- Pré-requisitos: Docker v 20+
- A execução via docker considera o envio de dois parâmetros:

```dockerfile
ARG REPO
ARG PROJECT_NAME
```
- Onde REPO = Repositório que deseja clonar
- E PROJECT_NAME = Nome do projeto em que será criado o diretório.

Baixar o dockerfile e executar:

```sh
docker image build .
```
A saída deverá contemplar algo análogo a:

```sh
> parana-banco-challenge@1.0.0 test
> mocha test/**/*.test.js --reporter mochawesome



  Test suite for /GET Users endpoint
    ✔ Shoud return a array of users (233ms)
    ✔ Shoud return an user by id (527ms)
    ✔ Shoud not find a user by unknown id (315ms)

  Test suite for /POST Users endpoint
    ✔ Should create a new user (568ms)

  Test suite for /DELETE Users endpoint
    ✔ Should delete a existing user (506ms)

  Test suite for /PUT Users endpoint
    ✔ Should update an existing user by id (515ms)
    ✔ Should not update a user by unknown id  (345ms)


  7 passing (3s)

[mochawesome] Report JSON saved to /test/mochawesome-report/mochawesome.json

[mochawesome] Report HTML saved to /test/mochawesome-report/mochawesome.html

 ---> 10bd19c1ee28
Successfully built 10bd19c1ee28
Successfully tagged test:latest

```

## Execução via NodeJS / npm 
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
[Docker]: <https://www.docker.com/>