/// <reference types="cypress" />

export const carrinhoPage = {
    adicionarCupom(cupom) {
        cy.get('[name="coupon_code"]').click();
        cy.get('[name="coupon_code"]').type(cupom);
        cy.get('#main [name="apply_coupon"]').click();
    }
}
