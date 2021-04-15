/// <reference types="cypress" />

import homepage from '../../support/pages/login'
const el = require('../../support/pages/login/elements').ELEMENTS

Given(/^que eu acesso a página$/, () => {
    homepage.accessPage()
});

When(/^eu insiro todos os meus dados corretamente$/, () => {
    homepage.validLoginFillForm()
});

When(/^clico no botão Cadastrar$/, () => {
    homepage.submitLogin()
});

Then(/^meu cadastro é feito com sucesso$/, () => {
    homepage.verifySuccessfulRegister()
});

When(/^eu insiro dados inválidos$/, () => {
    homepage.invalidLoginFillForm()
});

When(/^clico no botão Cadastrar$/, () => {
    homepage.submitLogin()
});

Then(/^meu cadastro não é realizado$/, () => {
    homepage.verifyInvalidRegister()
});

When(/^eu clico no botão Cadastrar sem inserir nenhum dado$/, () => {
    homepage.submitLogin()
});

Then(/^meu cadastro não é finalizado$/, () => {
    homepage.verifyUnccessfulRegister()
});

When(/^eu clico em Excluir$/, () => {
    homepage.removeUser()
});

Then(/^meu registro é deletado$/, () => {
    cy.get(el.tdUserId1).should('not.exist');
    cy.get(el.tdUserId2).should('exist');
});