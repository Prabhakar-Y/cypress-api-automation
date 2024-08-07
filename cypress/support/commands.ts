import '@mmisty/cypress-allure-adapter';

Cypress.Commands.add("apiRequest", (method, url, body = null, headers = {}) => {
  cy.request({
    method,
    url,
    body,
    headers,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("getRequest", (url, headers = {}) => {
  cy.apiRequest("GET", url, null, headers);
});

Cypress.Commands.add("postRequest", (url, body, headers = {}) => {
  cy.apiRequest("POST", url, body, headers);
});

Cypress.Commands.add("putRequest", (url, body, headers = {}) => {
  cy.apiRequest("PUT", url, body, headers);
});

Cypress.Commands.add("deleteRequest", (url, headers = {}) => {
  cy.apiRequest("DELETE", url, null, headers);
});


