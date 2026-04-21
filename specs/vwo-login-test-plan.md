# VWO Login Page Test Plan

## Application Overview

Test plan for basic testing of the VWO login page at https://app.vwo.com. Assumptions: fresh browser state, network access, at least one valid test account available; tests are independent and can be run in any order.

## Test Scenarios

### 1. VWO Login Page - Basic

**Seed:** `web vwo/seed.spec.js`

#### 1.1. Happy path - successful login

**File:** `tests/vwo/login/happy-path.spec.js`

**Steps:**
  1. Navigate to https://app.vwo.com
    - expect: Login page loads and displays email and password inputs and a login button
  2. Enter valid email and valid password, click the login button
    - expect: User is redirected to dashboard/home within 10s
    - expect: No error messages shown
    - expect: A session cookie or token is set (visible to tester)

#### 1.2. Validation - empty fields

**File:** `tests/vwo/login/empty-fields.spec.js`

**Steps:**
  1. Navigate to the login page and click login with both fields empty
    - expect: Client-side validation displays required-field errors for email and password OR server returns validation errors
    - expect: Login is not performed
  2. Enter only email (leave password empty) and click login
    - expect: Password-required validation shown
    - expect: Login is not performed

#### 1.3. Validation - invalid email format

**File:** `tests/vwo/login/invalid-email.spec.js`

**Steps:**
  1. Enter an invalid email format (e.g., 'user@@example' or 'user') and a valid password, then click login
    - expect: Inline email-format validation message is shown
    - expect: No authentication request is sent or server returns a 4xx validation response

#### 1.4. Authentication - incorrect credentials

**File:** `tests/vwo/login/incorrect-credentials.spec.js`

**Steps:**
  1. Enter a known account email with an incorrect password and submit
    - expect: An appropriate error message is shown (e.g., 'Incorrect email or password')
    - expect: User remains on the login page and is not authenticated

#### 1.5. Security - account lockout / rate limit

**File:** `tests/vwo/login/account-lockout.spec.js`

**Steps:**
  1. Attempt to log in with incorrect credentials repeatedly (use the documented threshold if known, otherwise 5 attempts)
    - expect: After threshold is reached, account is temporarily locked OR a captcha/extra-auth step is required
    - expect: Further login attempts are blocked or require additional verification

#### 1.6. Forgot password flow

**File:** `tests/vwo/login/forgot-password.spec.js`

**Steps:**
  1. Click the 'Forgot password' or 'Reset password' link from the login page
    - expect: Navigates to password-reset page containing an email input and submit button
    - expect: Submitting a valid account email shows confirmation that reset instructions were sent (or displays next steps)

#### 1.7. Remember me / persistent session

**File:** `tests/vwo/login/remember-me.spec.js`

**Steps:**
  1. Check 'Remember me', sign in with valid credentials, then close and reopen browser (or clear only session storage)
    - expect: User remains logged in after browser restart (persistent cookie present)
    - expect: Session expiry is greater than a session-only login

#### 1.8. Accessibility & keyboard navigation

**File:** `tests/vwo/login/accessibility.spec.js`

**Steps:**
  1. Tab through the form (email → password → remember-me → login button) and use Enter to submit
    - expect: Focus order is logical and visible
    - expect: All inputs have accessible labels (aria-label/for)
    - expect: Form can be submitted via keyboard and announcements are made for validation/errors
  2. Run basic screen-reader checks (or inspect ARIA attributes)
    - expect: Fields have accessible names, error messages are programmatically associated with inputs

#### 1.9. Boundary testing - long input / special characters

**File:** `tests/vwo/login/boundary.spec.js`

**Steps:**
  1. Enter extremely long strings (e.g., 5000 chars) or inputs containing HTML/JS fragments into email and password fields and submit
    - expect: Application either truncates input safely or returns a validation error
    - expect: No XSS or unexpected rendering occurs
    - expect: Server responds with controlled error (4xx) rather than 5xx
