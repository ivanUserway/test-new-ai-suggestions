import 'cypress-each'

const URLS = [
  'article.html',
  'index.html',
  'privacy.html',
  'terms.html',
];

it.each(URLS)('%s page', (page) => {
  console.log(`Testing page: ${page}`);
  cy.visit(page);
});

it('should have the right text in the headline', () => {
  cy.visit('/');

  cy.get('.headline').contains('Best Broadband');
  cy.get('.headline').contains('Internet Plans For You');
});