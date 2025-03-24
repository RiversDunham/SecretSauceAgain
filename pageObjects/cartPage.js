import Base from './base.js';
import {$} from '@wdio/globals';

class CartPage extends Base {
    get continueShoppingBtn() {
        return $('#continue-shopping');
    }

    get productTitle() {
        return $('(//div[contains(@class, "cart_item_label")])[1]/a');
    }

    get removeButton() {
        return $('(//button[contains(@id, "remove")])[1]');
    }

    get cartProductDiv() {
        return $('(//div[@class="cart_item"])[1]');
    }

    get checkoutButton() {
        return $('#checkout');
    }

    get checkoutAssersion() {
        return $('//span[contains(text(), "Checkout: Your Information")]');
    }

}

export default new CartPage();