class BasePage {
    constructor(pageName) {
        this.pageName = pageName;
    }
    open() {
        console.log(`Opening ${this.pageName} page.`);
    }
}

class AuthPage extends BasePage {
    constructor(pageName) {
        super(pageName);
    }   
    authenticate() {
        console.log(`Authenticating on ${this.pageName} page.`);
    }
}

class LoginPage extends AuthPage {
    constructor() {
        super("Login");
    }
    login() {
        console.log("Performing login action.");
    }
}

let loginPage = new LoginPage();
loginPage.open();
loginPage.authenticate();
loginPage.login();

let authPage = new AuthPage("Authentication");
authPage.open();
authPage.authenticate();
// authPage.login(); // This will throw an error because login method is not defined in AuthPage    
authPage.login(); // This will throw an error because login method is not defined in AuthPage