import Page from './base.js';
import Login from './login.js'
import {$} from '@wdio/globals';
//sub page object for logging in

class HomePage extends Page {

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
        return $('#react-burger-cross-btn')
    }

    get cartButton() {
        return $('[data-test="shopping-cart-link"]')
    }

    get addItemButton() {
        return $('#add-to-cart-sauce-labs-backpack')
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

export default new HomePage()