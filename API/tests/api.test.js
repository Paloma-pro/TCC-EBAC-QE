const request = require('supertest');
const { expect } = require('chai');

const BASE_URL = 'http://lojaebac.ebaconline.art.br/'; 

describe('Testes da API', () => {

    it('Deve listar produtos com sucesso e validar o contrato principal', async () => {

        const response = await request(BASE_URL).get('public/getProducts');

        expect(response.statusCode).to.equal(200); 
        
        expect(response.body).to.have.property('success').that.is.true; 
        expect(response.body).to.have.property('products').that.is.an('array'); 
        expect(response.body.products).to.have.length.above(0); 

        const primeiroProduto = response.body.products[0];
        expect(primeiroProduto).to.have.property('_id').that.is.a('string'); 
        expect(primeiroProduto).to.have.property('name').that.is.a('string'); 
        expect(primeiroProduto).to.have.property('price').that.is.a('number');
        expect(primeiroProduto).to.have.property('quantity').that.is.a('number');

    });

    it('Deve filtrar produtos por termo de busca (Caminho Alternativo)', async () => {
        const termoBusca = 'samsung'; 
        
        const response = await request(BASE_URL)
            .get('public/getProducts')
            .query({ search: termoBusca });

        expect(response.statusCode).to.equal(200); 

        expect(response.body.products).to.be.an('array').that.has.length.above(5);

        response.body.products.forEach(produto => {
            const nameOrDescription = (produto.name || '') + ' ' + (produto.description || '');
            expect(nameOrDescription).to.include(termoBusca);
        });
    });

    it('Deve retornar uma lista vazia ao buscar por termo inexistente (Caminho Negativo)', async () => {
        const termoInexistente = 'Termo Totalmente Invalido Que Nao Existe';
        
        const response = await request(BASE_URL)
            .get('public/getProducts')
            .query({ search: termoInexistente });

        expect(response.statusCode).to.equal(200); 
        
        expect(response.body.products).to.be.an('array').that.is.empty; 
    });
});
