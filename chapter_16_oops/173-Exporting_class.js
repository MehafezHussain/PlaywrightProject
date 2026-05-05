import {BasePage} from "./utils.js";

export class LoginPage extends BasePage {
    constructor() {
        super("Login");
        this.pageName = "Login";
    }
    open() {
        console.log(`Opening ${this.pageName} page.`);
    }
    close() {
        console.log(`Closing ${this.pageName} page.`);
    }
}

export class DashboardPage extends BasePage {
    constructor() {
        super("Dashboard");
        this.pageName = "Dashboard";
    }
    open() {
        console.log(`Opening ${this.pageName} page.`);
    }
    close() {
        console.log(`Closing ${this.pageName} page.`);
    }
}