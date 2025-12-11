import { expect } from "@playwright/test"; 

class defendloginpage{
    constructor(page){
        //define Here locators which you want to user 
        this.page = page
        this.next_btn = page.locator("#submitBtn");
        this.organizationName_box = page.locator("[name='tenantName']");
        this.a10DefendThreadControl_text = page.locator("//div[text()='A10 Defend Threat Control']");
        this.keycloakUserName_box = page.locator("[name='username']");
        this.keycloakPassword_box = page.locator("[name='password']");
        this.keyclockSubmit_button = page.locator("[type='submit']")
        this.pageTitle_title = page.getByTitle(title)
    textEmailA10 = "[type='email']";
    pageAzureIdp = '#kc-social-providers';
    buttonAzure = '#social-Azure';
    inputEmailFieldAzure = "[type='email']";
    }
    async navigateToUrl(url){
        await this.page.goto(url)
    }

    async clickonNextButton(){
        await this.next_btn.click()
    }

    async enterOrganizationName(organizationName){
        await this.organizationName_box.fill(organizationName)
    }

    async enterKeyclockUserName(userName){
        await this.keycloakUserName_box.fill(userName)
    }

    async enterKeyclockPassword(password){
        await this.keycloakPassword_box.fill(password)
    }

    async verifyPageTitle(pageTitle){
        await this.pageTitle_title(pageTitle) 
    }

    async verifyUserLandsonDashboardPage(logged_url){
        await expect(this.page).toHaveURL(new RegExp(logged_url))
    }
}