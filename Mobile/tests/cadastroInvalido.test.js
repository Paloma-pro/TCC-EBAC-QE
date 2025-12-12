import cadastroPage from "../pages/cadastroPage";
const { faker } = require('@faker-js/faker');

describe('US-0001: Cadastro de Usuário', () => {

    it('Deve validar mensagens de erro ao tentar cadastrar com dados inválidos', async () => {
        await cadastroPage.cadastro(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.phone.number('11999999999'),            
            'email@ebac',  // email inválido
            'Senha@12345',
            'Senha@12345'
       ); 
       expect (await cadastroPage.errorMessageEmailInvalid.isDisplayed()).toBe (true);
    });
});