import { test, expect } from "@playwright/test";

test("ログイン後、画面遷移を確認後、ログアウトする", async ({ page }) => {
  await page.goto("https://contractor.mtst-millvi.com/login");
  expect(await page.title()).toBe("ログイン | millvi");
  await page.getByPlaceholder("contractor_id").type("ikedacon");
  await page.getByPlaceholder("password").type("password");
  await page.getByRole("button", { name: "ログイン" }).click();

  await page.waitForLoadState("networkidle");
  await page.getByRole("button", { name: "Show profile menu" }).click();
  await page.waitForSelector("text=ログアウト");
  await page.getByRole("menuitem", { name: "ログアウト" }).click();
  await page.waitForSelector("text=管理画面ログイン");
  expect(await page.title()).toBe("ログイン | millvi");
});
