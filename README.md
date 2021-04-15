# QA Challenge
### Stefanini Group
---
Projeto desenvolvido para o desafio técnico do processo seletivo da Stefanini Group.

Optei por utilizar o framework Cypress, pois é o qual eu mais tenho aprofundado meus estudos ultimamente e é com ele que eu tenho mais afinidade.

## :bookmark_tabs: Guia do Projeto
- Feature - cypress/integration/login.feature
- Testes - cypress/integration/login/steps.js
- Page Objects - cypress/support/pages/elements.js
- Classes - cypress/support/pages/index.js
- Ações executadas em Background - cypress/support/index.js


## :hammer_and_wrench: Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/)
- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)


## ▶️ Testes em Execução
![stefanini](https://user-images.githubusercontent.com/71460952/114915973-a6c14180-9dfa-11eb-8cf7-49b8615430b9.gif)

## :checkered_flag: Pré-requisitos e como rodar os testes

> Backgound: Ter o [Node.JS](https://nodejs.org/en/) instalado.

```bash
# Instale o Cypress
$ npm install -D cypress@6.8.0

# Clone este repositório
$ git clone
```
A execução pode ser feita através da linha de comando ou do próprio framework.
- Através da linha de comando:
```bash
# Na pasta Stefanini, execute:
$ npx cypress open
```
- Através do framework:
Basta abrir o Cypress e através da interface dele escolher a pasta do projeto.

Após isso, é só escolher o arquivo de teste login.feature e assistir a execução dos testes.

![running test](https://user-images.githubusercontent.com/71460952/114319822-7ec79a80-9ae9-11eb-951e-66e0c20e730a.gif)


## :bookmark: Relatório de Execução
O relatório com o resultado dos testes está localizado em cypress/reports/cucumber_report.html

Basta abrir o arquivo no navegador para visualizá-lo.

![reporter](https://user-images.githubusercontent.com/71460952/114918869-f7866980-9dfd-11eb-9429-409fe1a352bc.gif)


##
Feito com ❤️ por <a href="https://www.linkedin.com/in/nayaraquino/">Nayara Aquino</a> :wave: Entre em contato!

[![Github](https://img.shields.io/badge/-Github-595D60?style=flat-square&logo=Github&logoColor=white&link=https://github.com/nayaraquino/)](https://github.com/nayaraquino/)
[![Linkedin](https://img.shields.io/badge/-LinkedIn-595D60?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nayaraquino//)](https://www.linkedin.com/in/nayaraquino/)
[![Gmail](https://img.shields.io/badge/-Gmail-595D60?style=flat-square&logo=Gmail&logoColor=white&link=mailto:nayaraquino7@gmail.com/)](mailto:nayaraquino7@gmail.com/)
