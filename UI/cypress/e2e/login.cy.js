/// <reference types="cypress" />

const { loginPage } = require('../fixtures/page_objects/login.page');

describe('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit("minha-conta/")
  });

  it('1- Deve fazer login com sucesso', () => {
    loginPage.preencherEmail('teste@ebac.com.br');
    loginPage.preencherSenha('senha123');
    loginPage.submeterLogin();
    cy.get('#main p:nth-child(2)').should('have.text', '\n\tOlá, teste-4917 (não é teste-4917? Sair)'); 
  })

  it('2- Deve exibir uma mensagem de erro ao inserir senha incorreta', () => {
    loginPage.preencherEmail('teste@ebac.com.br');
    loginPage.preencherSenha('senhaErrada');
    loginPage.submeterLogin();
    cy.get('#main li').should('have.text', '\n\t\t\tErro: A senha fornecida para o e-mail teste@ebac.com.br está incorreta. Perdeu a senha?\t\t');
  });

  it('3- Deve exibir uma mensagem de usuário não cadastrado', () => {
    loginPage.preencherEmail('naoexiste@ebac.com.br');
    loginPage.preencherSenha('qualquerSenha');
    loginPage.submeterLogin();
    cy.get('#main li').should('have.text', '\n\t\t\tEndereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.\t\t');
  });

  it('4- Deve exibir uma mensagem informando que um campo não foi preenchido', () => {
    loginPage.preencherSenha('senha123');
    loginPage.submeterLogin();
    cy.get('#main li').should('have.text', '\n\t\t\tErro: Nome de usuário é obrigatório.\t\t');
  });

})