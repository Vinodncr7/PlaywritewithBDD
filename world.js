import { chromium } from "@playwright/test";


this.browser = await chromium.launch({
  headless: false,
  slowMo: 50000, // ⏳ adds 500ms delay between each action
});