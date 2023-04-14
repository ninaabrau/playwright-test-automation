# Automation with Playwright Test #

Using the API given below create an automated test with the listed acceptance criteria:

API = https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false

## Acceptance Criteria ##

Name = "Carbon credits"
CanRelist = true
The Promotions element with Name = "Gallery" has a Description that contains the text "Good position in category"

## Tools used ##
* [Playwright](https://playwright.dev/)

## How do I get set up? ##

* [Have Node installed on your device](https://nodejs.org/en/download/)
* Enter `npm install` in your terminal, this will install all the necessary dependency

## How do I run the tests? ##

* Enter `npx playwright test` in your terminal

* For running a single test, you can do two things
    * Using the test name command: `npx playwright test -g "{TEST CASE NAME HERE}"
    * using `.only` after the test in the specs: `test.only('`





