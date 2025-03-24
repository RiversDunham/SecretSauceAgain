import Login from '../pageObjects/login.js';
import HomePage from '../pageObjects/homePage.js';

describe('Test hamburger menu', () => {
    it('should test all of the hamburger menu', async() => {
        await Login.openURL("inventory.html");
        await Login.loginError.isExisting();
        await Login.login("standard_user", "secret_sauce");
        await HomePage.doTheHamburger("inventory.html");
        await Login.login("standard_user", "secret_sauce");
        await HomePage.doItemAndCart();
        await HomePage.doTheHamburger("cart.html");
    });
});