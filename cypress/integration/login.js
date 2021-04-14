/// <reference types= "cypress" />

import homepage from '../support/pages/login'

context('Realize Login', () => {
    beforeEach(() => {
        homepage.accessPage()
    });
    it('Realize Login', () => {
        homepage.fillForm()
        homepage.submitLogin()
    });
});