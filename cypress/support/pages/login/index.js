const el = require('../login/elements').ELEMENTS

class HomePage {
    accessPage(){
        cy.visit('teste/qa/');
    }
    fillForm(){
        cy.get(el.inputName).type(Cypress.config().user.name);
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);
    }
    submitLogin(){
        cy.get(el.buttonRegister).click();
    }
}

export default new HomePage();