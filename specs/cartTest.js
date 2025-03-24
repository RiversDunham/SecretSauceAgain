import Login from '../pageObjects/login.js';
import HomePage from '../pageObjects/homePage.js';
import CartPage from '../pageObjects/cartPage.js';

describe("Cart testing application", () => { 
    it("Should test all functions of the cart page", async() => {
            await Login.openURL("cart.html");
            await Login.loginError.isExisting();
            await Login.login("standard_user", "secret_sauce");
            await HomePage.cartButton.click();
            await CartPage.continueShoppingBtn.click();
            await HomePage.doItemAndCart();
            await CartPage.cartProductDiv.isExisting();
            await CartPage.productTitle.click();
            await HomePage.productPageDiv.isExisting();
            await HomePage.cartButton.click();
            await CartPage.removeButton.click();
            await CartPage.cartProductDiv.waitForExist({reverse: true});
            await CartPage.checkoutButton.click();
            await CartPage.checkoutAssersion.isExisting();
    });
});