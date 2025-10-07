import { test, expect } from "@playwright/test";
import { levelAnalyze } from "@level-ci/a11y-playwright";

test("should have the right text in the headline", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("#logoLink")).toBeVisible();
  await levelAnalyze(page);
});
