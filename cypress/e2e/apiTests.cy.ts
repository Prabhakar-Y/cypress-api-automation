import "../support/commands";
import postPayload from "../data/postPayload.json";
import putPayload from "../data/putPayload.json";

const apiUrl = Cypress.env("apiUrl");

describe("Reqres API Testing Automation", () => {
  it("Perform GET request and validate response", () => {
    cy.getRequest(`${apiUrl}/users?page=2`).then((response) => {
      expect(response.status).to.eq(200);

      // Assertions on the response body 
      const responseBody = response.body;
      expect(responseBody).to.have.property("page", 2);
      expect(responseBody).to.have.property("per_page").that.is.a("number");
      expect(responseBody).to.have.property("total").that.is.a("number");
      expect(responseBody).to.have.property("total_pages").that.is.a("number");
      expect(responseBody)
        .to.have.property("data")
        .that.is.an("array")
        .with.lengthOf(6);
      expect(responseBody).to.have.property("support").that.is.an("object");

      // Validating each user in the data array
      responseBody.data.forEach((user: any) => {
        expect(user).to.have.property("id").that.is.a("number");
        expect(user).to.have.property("email").that.is.a("string");
        expect(user).to.have.property("first_name").that.is.a("string");
        expect(user).to.have.property("last_name").that.is.a("string");
        expect(user)
          .to.have.property("avatar")
          .that.is.a("string")
          .and.matches(/^https:\/\/reqres\.in\/img\/faces\/\d+-image\.jpg$/);
      });

      // Validating the support object
      expect(responseBody.support).to.have.property("url").that.is.a("string");
      expect(responseBody.support).to.have.property("text").that.is.a("string");
    });
  });

  it("Perform POST request and validate response ", () => {
    cy.postRequest(`${apiUrl}/users`, postPayload).then((response) => {
      expect(response.status).to.eq(201);

      const responseBody = response.body;
      expect(responseBody).to.have.property("name", "morpheus");
      expect(responseBody).to.have.property("job", "leader");
      expect(responseBody).to.have.property("id").that.is.a("string");
      expect(responseBody)
        .to.have.property("createdAt")
        .that.is.a("string")
        .and.matches(/^2024-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
    });
  });

  it("Perform PUT request and validate response", () => {
    cy.putRequest(`${apiUrl}/users/2`, putPayload).then((response) => {
      expect(response.status).to.eq(200);

      const responseBody = response.body;
      expect(responseBody).to.have.property("name", "morpheus");
      expect(responseBody).to.have.property("job", "zion resident");
      expect(responseBody)
        .to.have.property("updatedAt")
        .that.is.a("string")
        .and.matches(/^2024-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
    });
  });

  it("Perform DELETE request and validate response", () => {
    cy.deleteRequest(`${apiUrl}/users/2`).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
