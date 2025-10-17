/// <reference types="cypress" />

export const loginPage = {
    acessarLogin() {
        cy.visit('minha-conta/')
    },     
    preencherEmail(email) {
        cy.get('[name="username"]').click();
        cy.get('[name="username"]').type(email);
    },
    preencherSenha(senha) {
        cy.get('#password').click();
        cy.get('#password').type(senha);
    },   
    submeterLogin() {
        cy.get('#customer_login [name="login"]').click();
    }
}


// class LoginPage {
//     acessarLogin() {
//         cy.visit('minha-conta/')
//     }

//     preencherEmail(email) {
//         cy.get('[name="username"]').click();
//         cy.get('[name="username"]').type(email);
//     }
//     preencherSenha(senha) {
//         cy.get('#password').click();
//         cy.get('#password').type(senha);
//     }
//     submeterLogin() {
//         cy.get('#customer_login [name="login"]').click();
//     }
// }

// module.exports = new LoginPage();