/// <reference types="cypress" />

import homepage from '../../support/pages/login'

Given(/^que eu acesso a página$/, () => {
    homepage.accessPage()
});

When(/^eu insiro todos os meus dados corretamente$/, () => {
    homepage.fillForm()
});

And(/^clico no botão Cadastrar$/, () => {
    homepage.submitLogin()
});

Then(/^meu cadastro é feito com sucesso$/, () => {
});
