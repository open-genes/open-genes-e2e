# Open Genes E2E tests

E2E tests for Open Genes verify that the web application functions and performs as expected in a product-like
environment with actual data. These tests use a headless browser to open the web application, interact with it (e.g.
clicking buttons, filling out forms, etc.), and then verifying that the application behaves correctly. This approach
enables the team to test the entire application from end-to-end in a production-like environment.

## Project launch

```
npm i
```

```
npm run start
```

Running the `start` task will launch all the tests in the **tests** directory. 
Use these tasks to launch an individual group of tests:

- `npm run website` — e2e tests for Open Genes frontend
- `npm run cms` — e2e tests for Open Genes CMS for biologists
- `npm run api` — e2e tests for Open Genes API

## Project deployment

This project should not be compiled; instead, it should be run in an environment similar to the development environment.
Recommended Node version is v. 16.

## Environment setup

CMS tests require the following environment variables to be set:
- `CMS_LOGIN_PAGE`
- `CMS_LOGIN`
- `CMS_PASSWORD`
