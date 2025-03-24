import Base from './base.js';
import {$} from '@wdio/globals';
//sub page object for logging in

class Login extends Base {

    get inputUsername() {
        return $('#user-name');
    }
    get inputPassword() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    get loginError() {
        return $('//h3[contains(text(), "You can only access")]')
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    openURL(endpoint) {
        return super.openURL(endpoint);
    }
}

export default new Login()