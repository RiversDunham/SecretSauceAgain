import Login from '../pageObjects/login';
import HomePage from '../pageObjects/homePage';

describe('Test hamburger menu', () => {
    it('should test all of the hamburger menu', async() => {
        await Login.openURL("");
        await Login.enterInfo("standard_user", "secret_sauce");
        await Login.clickLogin();
        await HomePage.doTheHamburger("inventory.html");
        await Login.enterInfo("standard_user", "secret_sauce");
        await Login.clickLogin();
        await HomePage.doItemAndCart();
        await HomePage.doTheHamburger("cart.html");
    });
});