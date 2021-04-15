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
Cypress.Commands.add('backgroundRegister', () => {
    cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/');
    cy.get('input[id="name"]').type('Nayara Aquino');
    cy.get('input[id="email"]').type('nayara@nayara.com');
    cy.get('input[id="password"]').type('12345678');
    cy.get('button[id="register"]').click();

    cy.get('input[id="name"]').type('Claudio Teles');
    cy.get('input[id="email"]').type('claudio@claudio.com');
    cy.get('input[id="password"]').type('12345678');
    cy.get('button[id="register"]').click();
})