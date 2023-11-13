describe('Search city', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/weather-app');
    cy.get('[data-cy="search-bar"]').as('input').click().type('los');
    cy.get('#downshift-1-menu #downshift-1-item-0').click();
    cy.get('[data-cy="search-bar"]').should('have.attr', 'placeholder', 'Los Angeles');
    cy.get('[data-cy="search-btn"]').click();
  });
});

describe('Forecast type trigger', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/weather-app');
    cy.get('[data-cy="forecast-type-selector"]').click().should('contain', 'Hourly');
  });
});

describe('Forecast container', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/weather-app');
    cy.get('[data-cy="forecast"]').find('[data-cy="weather-card"] ').should('have.length', 7);
  });
});
