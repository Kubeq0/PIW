describe("Dodawanie nowej książki", () => {
  before(() => {
    cy.visit("/login");

    cy.get('input[name="email"]').first().type("test@test.test");
    cy.get('input[name="password"]').first().type("testtest");
    cy.get('button[type="submit"]').first().click();

    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("Dodaje nową książkę", () => {
    cy.visit("/new");

    cy.get('input[name="title"]').type("Testowa książka");
    cy.get('input[name="author"]').type("Autor Testowy");
    cy.get('input[name="pages"]').type("123");
    cy.get('select[name="cover"]').select("twarda");
    cy.get('input[name="price"]').type("45.99");
    cy.get('textarea[name="desc"]').type("Opis testowy");

    cy.get('button[type="submit"]').click();

    cy.url().should("eq", Cypress.config().baseUrl + "/");

    cy.contains("Testowa książka").should("exist");
  });

  it("Dodaje i usuwa książkę", () => {
    cy.visit("/");

    cy.contains(".book", "Testowa książka", { timeout: 10000 }).should("exist");

    cy.contains(".book", "Testowa książka")
      .find("button")
      .contains("Usuń")
      .click().wait(1000);
    

    cy.reload();

    cy.contains(".book", "Testowa książka").should("not.exist");
  });
});