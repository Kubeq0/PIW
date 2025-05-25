describe("Main page and search", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Wyświetla nagłówek", () => {
    cy.wait(1000); 
    cy.contains("Lista książek").should("be.visible");
  });

  it("Filtrowanie po tytule działa", () => {
    cy.wait(1000);
    cy.get('input[name="title"]').type("Tadeusz");
    cy.get(".book").each(($el) => {
      cy.wrap($el).contains(/Tadeusz/i);
    });
  });

  it("Filtrowanie po autorze działa", () => {
    cy.wait(1000);
    cy.get('input[name="author"]').type("Prus");
    cy.get('.book').should('not.exist');
  });

  it("Filtrowanie po autorze działa", () => {
    cy.wait(1000);
    cy.get('input[name="author"]').type("Mickiewicz");
    cy.get(".book").each(($el) => {
      cy.wrap($el).contains(/Mickiewicz/i);
    });
  });

  it("Poprawne filtry", () => {
    cy.get(".filters").should("exist");

    cy.get(".filters").find("input").should("have.length", 5);

    cy.get(".filters").find("select").should("have.length", 1);

    cy.get(".filters").find("button").should("have.length", 1);
  });
});