import { createBdd } from "playwright-bdd";
import {loginLocators} from "../../locators/loginPage.js";

const {Given, When, Then } = createBdd();

Given('I launch the browser', async ({}) => {
  // Step: Given I launch the browser
  // From: features\defendlogin.feature:4:5
});

When('I go to {string}', async ({page}, url) => {
  await page.goto(url) 
});

Then('I should see the title contains {string}', async ({page}, title) => {
  await page.getByTitle(title)
});

Then('Enter Organization Name {string}', async ({page}, organizationName) => {
  // Step: Then Enter Organization Name "donotdeleteautomation"
   await page.locator().fill(organizationName)
    await page.pause()
 console.log(loginLocators)
});