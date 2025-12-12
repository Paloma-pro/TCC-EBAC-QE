import cadastroPage from "../pages/cadastroPage";
const { faker } = require('@faker-js/faker');

describe('US-0001: Cadastro de Usuário', () => {

    it('Deve fazer o cadastro corretamente (Caminho Feliz)', async () => {
        const password = 'Senha@12345';
        await cadastroPage.cadastro(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.phone.number('11999999999'),            
            faker.internet.email(),
            password,
            password
       );
       await driver.pause(2000);
       await cadastroPage.homeScreenTitle.waitForDisplayed({ timeout: 15000 });
       expect(await cadastroPage.homeScreenTitle.isDisplayed()).toBe(true); // Verifica se o título da tela inicial está visível
    });
});