const request = require('supertest');
const { expect } = require('chai');

const BASE_URL = 'http://lojaebac.ebaconline.art.br/'; 
const SESSION_COOKIE = 'wp_woocommerce_session_cf6aa4b3d6c71965ba4f1e159b6a07f6=8245%7C%7C1761229194%7C%7C1761225594%7C%7C3879cb1651e6329745cd3970628fccd9; woocommerce_items_in_cart=1';

describe('Testes da API de Cupons [US-0003]', () => {

    it('Deve aplicar um cupom VÁLIDO com sucesso (POST - Caminho Feliz)', async () => {
           
        const payload = {
            coupon_code: 'DESCONTO10',
            'woocommerce-cart-nonce': '87b786b8ef',
            _wp_http_referer: '/carrinho/'
        };

        const response = await request(BASE_URL)
            .post('/?wc-ajax=apply_coupon')
            .send(payload)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('X-Requested-With', 'XMLHttpRequest')
            .set('Cookie', SESSION_COOKIE)

            console.log('Status Code Recebido:', response.statusCode);
            console.log('Headers de Resposta:', response.headers);
            console.log('Corpo da Resposta (HTML):', response.text.substring(0, 500));

        expect(response.statusCode).to.equal(200); 
        expect(response.text).to.include('Código de cupom aplicado com sucesso.');

    });

    it('Deve retornar erro ao aplicar um cupom INEXISTENTE (POST - Caminho Negativo)', async () => {
        
        const payload = {
            coupon_code: 'CUPOMINVALIDO',
            'woocommerce-cart-nonce': '87b786b8ef',
            _wp_http_referer: '/carrinho/'
        };
        
        const response = await request(BASE_URL)
            .post('/?wc-ajax=apply_coupon')
            .send(payload)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('X-Requested-With', 'XMLHttpRequest')
            .set('Cookie', SESSION_COOKIE)

        expect(response.statusCode).to.equal(200);
        expect(response.text).to.include('O cupom "cupominvalido" não existe!');
    });
});