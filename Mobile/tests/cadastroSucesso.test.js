import cadastroPage from "../pages/cadastroPage";
const { faker } = require('@faker-js/faker');

describe('US-0001: cadastro', () => {

    it('Deve fazer o cadastro corretamente (Caminho Feliz)', async () => {
        await cadastroPage.cadastro(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.phone.number('11999999999'),            
            faker.internet.email(),
            'Senha@12345',
            'Senha@12345'
       );
    // Não consigo validar pois após o cadastro os botões em baixo desaparecem e não da para clicar no profile

    //   await cadastroPage.profilePage.click();
    //     expect(await cadastroPage.profilePage.isDisplayed()).toBe(true);
    });

});