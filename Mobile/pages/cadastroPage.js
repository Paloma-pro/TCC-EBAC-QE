import { $ } from '@wdio/globals'

class CadastroPage {

    get profilePage() { 
        return $('//android.widget.TextView[@resource-id="tab-profile"]'); 
    }
    get singUpButton() {
        return $('//android.widget.TextView[@text="Sign up"]');
    }
    get fisrtNameField() {
        return $('//android.widget.EditText[@resource-id="firstName"]');
    }
    get lastNameField() {
        return $('//android.widget.EditText[@resource-id="lastName"]');
    }
    get phoneNumberField() {
        return $('//android.widget.EditText[@resource-id="phone"]');
    }
    get emailField() {
        return $('//android.widget.EditText[@resource-id="email"]');
    }
    get passwordField() {
        return $('//android.widget.EditText[@resource-id="password"]');
    }
    get confirmPasswordField() {
        return $('//android.widget.EditText[@resource-id="repassword"]');
    }
    get signUpSubmitButton() {
        return $('~Create');
    }
    get errorMessageEmailInvalid() {
        return $('//android.widget.TextView[@text="Enter a valid email address"]');
    }
    get errorMessagePasswordMismatch() {
        return $('//android.widget.TextView[@text="Password and confirm password do not match"]');
    }
    get homeScreenTitle() {
        return $('//*[contains(@text, "EBAC")]');
    }
    async cadastro(fisrtName, lastName, phoneNumber, email, password, confirmPassword) {
        await this.profilePage.waitForDisplayed({ timeout: 15000 });
        await this.profilePage.click();
        await this.singUpButton.click();
        await this.fisrtNameField.setValue(fisrtName);
        await this.lastNameField.setValue(lastName);
        await this.phoneNumberField.setValue(phoneNumber);
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.confirmPasswordField.setValue(confirmPassword);
        await this.signUpSubmitButton.click();
    }
}

export default new CadastroPage();