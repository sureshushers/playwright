import { test, expect } from '@playwright/test';

test('MyBlue Home Page Validation', async ({ page }) => {
  await page.goto('https://askblue.fepblue.org/');
  
  await page.getByText('Use our product selection').click();
  await expect(page.locator('h1')).toContainText('Welcome to the AskBlueSM FEP Medical Plan Finder');
  await expect(page.locator('#is_member_group')).toContainText('Are you currently a member of the Blue Cross and Blue Shield Service Benefit Plan?');
  await expect(page.locator('#member_yes_lbl')).toContainText('Yes, I\'m a Member');
  await expect(page.locator('#member_no_lbl')).toContainText('No, I\'m not a Member');
  await expect(page.getByRole('contentinfo')).toContainText('fepblue.org');
  await expect(page.getByRole('contentinfo')).toContainText('Benefit Plans');
  await expect(page.getByRole('contentinfo')).toContainText('Contact Us');
  await expect(page.getByRole('contentinfo')).toContainText('Terms & Privacy');
  await expect(page.getByRole('contentinfo')).toContainText('Rights & Responsibilities');
  await expect(page.getByRole('contentinfo')).toContainText('Policies & Guidelines');
  await page.close();
});

