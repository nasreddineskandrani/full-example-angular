// https://www.technouz.com/4830/getting-started-with-cypress-to-e2e-test-angular-apps/
// https://deliciousbrains.com/cypress-testing/

describe('My First Test', () => {
  it('Application has the correct title!', () => {
    cy.visit('http://localhost:4200');
    cy.title().should('include', 'Testngrx');
  });

  it('my own first test', () => {
    cy.get('.job-link').should('have.text', 'job Page');
  });
});
