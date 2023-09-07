# Playwright-Cucumber-TS E2E Boilerplate

This boilerplate template provides a foundation for creating end-to-end (E2E) tests using Playwright, Cucumber-JS, and TypeScript. It offers a structured approach to writing E2E tests, incorporating Page-Object design patterns for better maintainability.

## Overview

[Playwright](https://playwright.dev/) is a powerful tool that allows you to automate web browsers like Chromium, Firefox, and WebKit with a single API. [Cucumber-JS](https://github.com/cucumber/cucumber-js) is a popular test framework that enables behavior-driven development (BDD) testing using Gherkin language specifications.

This project combines the best of both worlds, enabling you to write E2E tests in a clear and organized manner using Playwright and Cucumber-JS.

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

Clone this repository and navigate to the project folder:

```bash
git clone https://github.com/BurakVeziran/Cucumber-Playwright-Typescript-Boilerplate.git
cd playwright-cucumber-js-e2e-boilerplate
```

Install the project dependencies using npm:

```bash
npm install
```

## Running Tests

You can execute the E2E tests by running the following command:

```bash
npm test
```

This will trigger the Cucumber test runner, which will discover and execute your E2E tests using Playwright.

## Test Reports

After running the tests, a Cucumber HTML report will be generated. This report can be found in the `reports` folder. It provides a detailed overview of test results, including any failed scenarios, along with attached screenshots if applicable.

## Writing Tests

To write your E2E tests, follow these steps:

1. Create feature files in the `features` directory using Gherkin syntax. Describe the behavior you want to test in these files.

2. Implement step definitions in the `stepDefinitions` directory. These step definitions will map Gherkin steps to actual test actions using Playwright.

3. Organize your test code in the `pageObjects` directory using Page-Object design patterns. This helps maintain clean and reusable code for interacting with web pages.

4. Use the `config` directory for utility functions, such as setting up base URL.

5. Run the tests using `npm test` to execute the scenarios defined in your feature files.

## Contributing

Feel free to contribute to this boilerplate template by creating pull requests or reporting issues. Your feedback and contributions are highly appreciated!

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use it in your projects.
