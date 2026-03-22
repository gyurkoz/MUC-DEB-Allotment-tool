import { test, expect, type Page } from "@playwright/test";

/**
 * E2E tests for the full booking flow in both directions:
 *   MUC → DEB  and  DEB → MUC
 *
 * Each test:
 *   1. Logs in with admin / admin
 *   2. Navigates to the flight-select page for a known date + direction
 *   3. Picks the first available flight
 *   4. Fills passenger data and submits
 *   5. Asserts the confirmation page shows PNR + booking details
 *   6. Visits the public booking-status page and verifies it loads
 *   7. Cancels the booking
 */

// Use a date a few days in the future so flights exist and are bookable
const TARGET_DATE = "2026-03-28";

// ─── helpers ──────────────────────────────────────────────────────────

async function login(page: Page) {
  await page.goto("/login");
  await page.getByTestId("username-input").locator("input").fill("admin");
  await page.getByTestId("password-input").locator("input").fill("admin");
  await page.getByTestId("login-button").click();
  // Wait until redirected away from login
  await expect(page).not.toHaveURL(/\/login/);
}

async function selectFirstFlight(page: Page, direction: string) {
  // Navigate directly to the date-specific flight list
  await page.goto(`/search/${TARGET_DATE}?direction=${direction}`);
  await expect(page.getByTestId("flight-select-page")).toBeVisible();

  // Wait for flights to load
  const flightList = page.getByTestId("flight-list");
  await expect(flightList).toBeVisible({ timeout: 15_000 });

  // Click the first "Select Flight" button
  const selectButtons = page.getByRole("button", { name: /Select Flight/i });
  await expect(selectButtons.first()).toBeVisible();
  await selectButtons.first().click();

  // Should navigate to /book/:flightId
  await expect(page).toHaveURL(/\/book\//);
}

async function fillPassengerAndBook(page: Page) {
  await expect(page.getByTestId("passenger-data-page")).toBeVisible();

  // Fill the passenger form
  await page.getByTestId("u-number-input").locator("input").fill("U1234567");
  await page.getByTestId("first-name-input").locator("input").fill("Test");
  await page.getByTestId("last-name-input").locator("input").fill("Traveler");
  await page
    .getByTestId("email-input")
    .locator("input")
    .fill("test@example.com");
  // Phone is a composite field: country code prefix (default +49) + phone number
  await page.getByLabel("Phone Number").fill("123456789");

  // Submit
  await page.getByTestId("book-flight-button").click();

  // Should navigate to confirmation
  await expect(page).toHaveURL(/\/confirmation\//, { timeout: 15_000 });
}

async function verifyConfirmation(page: Page) {
  await expect(page.getByTestId("confirmation-page")).toBeVisible();
  const confirmation = page.getByTestId("booking-confirmation");
  await expect(confirmation).toBeVisible();

  // PNR should be visible (6-character alphanumeric code)
  const pnrText = await confirmation.locator("h4").first().textContent();
  expect(pnrText).toBeTruthy();
  expect(pnrText!.trim()).toMatch(/^[A-Z]{6}$/);

  return pnrText!.trim();
}

function extractBookingId(url: string): string {
  const match = url.match(/\/confirmation\/(.+)$/);
  expect(match).toBeTruthy();
  return match![1];
}

async function verifyBookingStatus(page: Page, bookingId: string) {
  // The booking status page is public (no auth required)
  await page.goto(`/booking/${bookingId}`);
  await expect(page.getByTestId("booking-status-page")).toBeVisible({
    timeout: 10_000,
  });
}

async function cancelBooking(page: Page, bookingId: string) {
  await page.goto(`/booking/${bookingId}`);
  await expect(page.getByTestId("booking-status-page")).toBeVisible({
    timeout: 10_000,
  });

  const cancelBtn = page.getByTestId("cancel-booking-button");
  // Only try to cancel if the button is present (booking may not be cancellable)
  if (await cancelBtn.isVisible()) {
    await cancelBtn.click();

    // Fill the cancellation dialog email
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await dialog
      .locator('input[type="text"], input[type="email"], input')
      .first()
      .fill("test@example.com");
    await dialog
      .getByRole("button", { name: /confirm|cancel booking/i })
      .click();

    // Wait for the dialog to close or status to change
    await expect(dialog).not.toBeVisible({ timeout: 10_000 });
  }
}

// ─── test suites ──────────────────────────────────────────────────────

test.describe("MUC → DEB Booking Flow", () => {
  test("complete booking and cancellation flow", async ({ page }) => {
    // Step 1: Login
    await login(page);

    // Step 2: Select a flight for MUC-DEB
    await selectFirstFlight(page, "MUC-DEB");

    // Step 3: Fill passenger data and book
    await fillPassengerAndBook(page);

    // Step 4: Verify confirmation
    const pnr = await verifyConfirmation(page);
    const bookingId = extractBookingId(page.url());
    console.log(`[MUC→DEB] Booking created: PNR=${pnr}, ID=${bookingId}`);

    // Step 5: Verify public booking status page
    await verifyBookingStatus(page, bookingId);

    // Step 6: Cancel the booking
    await cancelBooking(page, bookingId);
  });
});

test.describe("DEB → MUC Booking Flow", () => {
  test("complete booking and cancellation flow", async ({ page }) => {
    // Step 1: Login
    await login(page);

    // Step 2: Select a flight for DEB-MUC
    await selectFirstFlight(page, "DEB-MUC");

    // Step 3: Fill passenger data and book
    await fillPassengerAndBook(page);

    // Step 4: Verify confirmation
    const pnr = await verifyConfirmation(page);
    const bookingId = extractBookingId(page.url());
    console.log(`[DEB→MUC] Booking created: PNR=${pnr}, ID=${bookingId}`);

    // Step 5: Verify public booking status page
    await verifyBookingStatus(page, bookingId);

    // Step 6: Cancel the booking
    await cancelBooking(page, bookingId);
  });
});

test.describe("Login", () => {
  test("shows error for invalid credentials", async ({ page }) => {
    await page.goto("/login");
    await page.getByTestId("username-input").locator("input").fill("wrong");
    await page.getByTestId("password-input").locator("input").fill("wrong");
    await page.getByTestId("login-button").click();

    // Should show error message
    await expect(page.getByTestId("login-error")).toBeVisible({
      timeout: 10_000,
    });
    await expect(page.getByTestId("login-error")).toContainText(
      "Invalid username or password",
    );
  });

  test("redirects to search after successful login", async ({ page }) => {
    await login(page);
    await expect(page).toHaveURL(/\/search/);
    await expect(page.getByTestId("flight-search-page")).toBeVisible();
  });
});

test.describe("Flight Search Page", () => {
  test("displays direction selector and calendar", async ({ page }) => {
    await login(page);
    await expect(page.getByTestId("direction-selector")).toBeVisible();
    await expect(page.getByTestId("flight-calendar")).toBeVisible();
  });

  test("can toggle direction between MUC-DEB and DEB-MUC", async ({ page }) => {
    await login(page);
    const mucDeb = page.getByTestId("direction-muc-deb");
    const debMuc = page.getByTestId("direction-deb-muc");

    await expect(mucDeb).toBeVisible();
    await expect(debMuc).toBeVisible();

    // Default should be MUC-DEB selected
    await expect(mucDeb).toHaveAttribute("aria-pressed", "true");

    // Switch to DEB-MUC
    await debMuc.click();
    await expect(debMuc).toHaveAttribute("aria-pressed", "true");
    await expect(mucDeb).toHaveAttribute("aria-pressed", "false");
  });
});
