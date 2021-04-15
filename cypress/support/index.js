// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

const el = require('./pages/login/elements').ELEMENTS

Cypress.Commands.add('backgroundRegister', () => {
    cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
    cy.get(el.inputName).type(Cypress.config().validUser1.name);
    cy.get(el.inputEmail).type(Cypress.config().validUser1.email);
    cy.get(el.inputPassword).type(Cypress.config().validUser1.password);
    cy.get(el.buttonRegister).click();

    cy.get(el.inputName).type(Cypress.config().validUser2.name);
    cy.get(el.inputEmail).type(Cypress.config().validUser2.email);
    cy.get(el.inputPassword).type(Cypress.config().validUser2.password);
    cy.get(el.buttonRegister).click();
})