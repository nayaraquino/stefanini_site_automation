const el = require('../login/elements').ELEMENTS

class HomePage {
    accessPage() {
        cy.visit('teste/qa/');
    }
    validLoginFillForm() {
        cy.get(el.inputName).type(Cypress.config().validUser1.name);
        cy.get(el.inputEmail).type(Cypress.config().validUser1.email);
        cy.get(el.inputPassword).type(Cypress.config().validUser1.password);
    }

    invalidLoginFillForm() {
        cy.get(el.inputName).type(Cypress.config().invalidUser.name);
        cy.get(el.inputEmail).type(Cypress.config().invalidUser.email);
        cy.get(el.inputPassword).type(Cypress.config().invalidUser.password);
    }

    submitLogin() {
        cy.get(el.buttonRegister).click();
    }

    verifySuccessfulRegister() {
        cy.get('#tdUserId1').should('exist');
    }

    verifyUnccessfulRegister() {
        cy.get('p[class="error"]').should('include.text', 'O campo Nome é obrigatório.');
        cy.get('p[class="error"]').should('include.text', 'O campo E-mail é obrigatório.');
        cy.get('p[class="error"]').should('include.text', 'O campo Senha é obrigatório.');
    }

    verifyInvalidRegister() {
        //cy.get('p[class="error"]').should('include', 'Por favor, insira um nome completo.');
        cy.get('p[class="error"]').should('include.text', 'Por favor, insira um nome completo.');
        cy.get('p[class="error"]').should('include.text', 'Por favor, insira um e-mail válido.');
        cy.get('p[class="error"]').should('include.text', 'A senha deve conter ao menos 8 caracteres.');
    }

    removeUser() {
        cy.backgroundRegister()
        cy.get(el.tdRemoveUser1).click();
    }

}

export default new HomePage();