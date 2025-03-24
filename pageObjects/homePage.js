import Base from './base.js';
import Login from './login.js';
import {$} from '@wdio/globals';

class HomePage extends Base {
    get hamburgerButton() {
        return $('#react-burger-menu-btn');
    }
    get inventoryButton() {
        return $('#inventory_sidebar_link');
    }
    get aboutButton() {
        return $('#about_sidebar_link');
    }
    get logoutButton() {
        return $('#logout_sidebar_link');
    }
    get resetButton() {
        return $('#reset_sidebar_link');
    }
    get xButton() {
        return $('#react-burger-cross-btn');
    }

    get cartButton() {
        return $('[data-test="shopping-cart-link"]');
    }

    get addItemButton() {
        return $('(//button[contains(@id, "add-to-cart")])[1]');
    } 

    get productPageDiv() {
        return $('#inventory_item_container');
    }

    async doTheHamburger(endpoint) {
        await this.hamburgerButton.click();
        await this.inventoryButton.click();
        await Login.openURL(endpoint);
        await this.hamburgerButton.click();
        await this.aboutButton.click();
        await Login.openURL(endpoint);
        await this.hamburgerButton.click();
        await this.resetButton.click();
        await this.xButton.click();
        await this.hamburgerButton.click();
        await this.logoutButton.click();
    }

    async doItemAndCart() {
        await this.addItemButton.click();
        await this.cartButton.click();
    }
}

export default new HomePage();