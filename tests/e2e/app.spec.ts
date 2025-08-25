import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Vue SPA/)
})

test('counter functionality', async ({ page }) => {
  await page.goto('/')
  
  // Check initial state
  await expect(page.locator('[data-test="increment"]')).toBeVisible()
  
  // Test increment
  await page.click('[data-test="increment"]')
  await expect(page.locator('text=Count: 1')).toBeVisible()
  
  // Test decrement
  await page.click('[data-test="decrement"]')
  await expect(page.locator('text=Count: 0')).toBeVisible()
  
  // Test reset
  await page.click('[data-test="increment"]')
  await page.click('[data-test="increment"]')
  await expect(page.locator('text=Count: 2')).toBeVisible()
  
  await page.click('[data-test="reset"]')
  await expect(page.locator('text=Count: 0')).toBeVisible()
})