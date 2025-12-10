import cadastroPage from "../pages/cadastroPage";
const { faker } = require('@faker-js/faker');

describe('US-0001: cadastro', () => {

    it('Deve validar mensagens de erro ao tentar cadastrar com senhas que não coincidem', async () => {

        await cadastroPage.cadastro(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.phone.number('11999999999'),            
            faker.internet.email(),
            'Senha@12345',
            'Senha@123456'  // senhas não coincidem
       );
       expect (await cadastroPage.errorMessagePasswordMismatch.isDisplayed()).toBe (true);
    });

});