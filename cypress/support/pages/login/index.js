const el = require('../login/elements').ELEMENTS

class HomePage {
    accessPage(){
        cy.visit('teste/qa/');
    }
    validLoginFillForm(){
        cy.get(el.inputName).type(Cypress.config().validUser.name);
        cy.get(el.inputEmail).type(Cypress.config().validUser.email);
        cy.get(el.inputPassword).type(Cypress.config().validUser.password);
    }

    invalidLoginFillForm(){
        cy.get(el.inputName).type(Cypress.config().invalidUser.name);
        cy.get(el.inputEmail).type(Cypress.config().invalidUser.email);
        cy.get(el.inputPassword).type(Cypress.config().invalidUser.password);
    }

    submitLogin(){
        cy.get(el.buttonRegister).click();
    }
}

export default new HomePage();