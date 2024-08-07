/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
      apiRequest(method: string, url: string, body?: any, headers?: any): Chainable<Response>;
      getRequest(url: string, headers?: any): Chainable<Response>;
      postRequest(url: string, body: any, headers?: any): Chainable<Response>;
      putRequest(url: string, body: any, headers?: any): Chainable<Response>;
      deleteRequest(url: string, headers?: any): Chainable<Response>;
    }
  }
  