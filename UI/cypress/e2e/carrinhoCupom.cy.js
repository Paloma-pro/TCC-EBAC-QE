/// <reference types="cypress" />

const { carrinhoPage } = require('../fixtures/page_objects/carrinho.page');

describe('Funcionalidade Carrinho', () => {

  beforeEach(() => {
    cy.login('teste@ebac.com.br', 'senha123');
    cy.visit("carrinho/")
  });

  after(() => {
    cy.get('#main a.woocommerce-remove-coupon').click();    
  });

  it('1- Deve aplicar um cupom VÁLIDO e verificar o desconto', () => {
    carrinhoPage.adicionarCupom('DESCONTO10');
    cy.get('#main div.woocommerce-message').should('have.text', '\n\t\tCódigo de cupom aplicado com sucesso.\t');
    cy.get('#main td[data-title="Cupom: desconto10"] span.amount').should('have.class', 'woocommerce-Price-amount');

  })

  it('2- Deve rejeitar um cupom INEXISTENTE e exibir mensagem de erro', () => {
    carrinhoPage.adicionarCupom('CUPOM20');
    cy.get('#main li').should('have.text', '\n\t\t\tO cupom "cupom20" não existe!\t\t');
  });

  it('3- Deve tentar aplicar cupom sem digitar o cupom e exxibir mensagem de aviso', () => {
    cy.get('[name="coupon_code"]').click();
    cy.get('#main [name="apply_coupon"]').click();
    cy.get('#main li').should('have.text', '\n\t\t\tInforme o código do cupom.\t\t');
  });

})