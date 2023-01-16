# Open Genes E2E tests

E2E tests for Open Genes verify that the web application functions and performs as expected in a product-like
environment with actual data. These tests use a headless browser to open the web application, interact with it (e.g.
clicking buttons, filling out forms, etc.), and then verifying that the application behaves correctly. This approach
enables the team to test the entire application from end-to-end in a production-like environment.

## Project setup

This project should not be compiled; instead, it should be run in an environment similar to the development environment.

## Environment setup

Application should be run under Node v. 16.

CMS tests require the following environment variables to be set:
- `CMS_LOGIN_PAGE`
- `CMS_LOGIN`
- `CMS_PASSWORD`
