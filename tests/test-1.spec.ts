import { test, expect } from '@playwright/test';

test('Eample Test', async ({ page }) => {
  await page.goto('https://affordableassignments.co.uk/');
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('te');
  await page.getByRole('textbox', { name: 'Name', exact: true }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('testnig');
  await page.getByRole('textbox', { name: 'Name', exact: true }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('sdmfeteesting@yopmail.com');
  await page.getByRole('textbox', { name: 'Name', exact: true }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Name', exact: true }).press('ControlOrMeta+c');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('sdmfeteesting@yopmail.com');
  await page.getByPlaceholder('2345678').click();
  await page.getByPlaceholder('2345678').fill('+9243543534333');
  await page.frameLocator('iframe[name="a-uib7e2yccymt"]').getByLabel('I\'m not a robot').click();
  await page.getByRole('button', { name: 'Sign Up', exact: true }).click();
  await page.getByRole('link', { name: 'Affordable Assignments' }).click();
});