/// <reference types="cypress" />

import homepage from '../../support/pages/login'

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
	
});

When(/^eu insiro dados inválidos$/, () => {
	homepage.invalidLoginFillForm()
});

When(/^clico no botão Cadastrar$/, () => {
    homepage.submitLogin()
});

Then(/^meu cadastro não é realizado$/, () => {
	
});

When(/^eu clico no botão Cadastrar sem inserir nenhum dado$/, () => {
	homepage.submitLogin()
});

Then(/^meu cadastro não é realizado$/, () => {
	
});
