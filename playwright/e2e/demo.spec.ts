import { test, expect } from "@playwright/test";
import { setupUserway, userwayAnalysis } from "@userway/a11y-playwright";

test("should have the right text in the headline", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("#logoLink")).toBeVisible();
  setupUserway({
    issueScreenshots: true,
    detailedScreenshots: true,
    printViolationsTable: false,
  });
  await userwayAnalysis(page, {
    includeBestPractices: true,
    switchOff: false,
    strict: false,
  });
});
