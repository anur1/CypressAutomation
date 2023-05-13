/// <reference types ="cypress"/>

describe('Find or Get Elements using Different Locators', () => {
  beforeEach(() => {
    // runs once before each test ccases in this block
    cy.clearCookies();
    cy.visit('/login');
  });

  it.skip('Check different locator strategies', () => {
    cy.get("input[name='username']").type('CydeoStudentUsername'); // every statement s an object to be interacted.
    // Next cmmand makes operation to the object

    cy.get("[type='text']").clear(); // clear what is typed

    cy.get('input').each((item, index, list) => {
      expect(list).to.have.length(2);
      expect(item).to.have.attr('type');
    });

    // by attribute name
    cy.get('[type]');

    // by className
    cy.get('.btn.btn-primary');

    cy.get('#wooden_spoon');

    // if I want to use text: no path in cypress

    cy.get('button').should('contain', 'Login').click;
  });

  xit('Check finding elements by traveling throuth DOM', () => {
    // travel to find login button
    // locate username box
    // go to parent form then find button
    cy.get('input[name="username"]').parents('form').find('button').should('contain', 'Login')
      .click;
  });

  it.only('Check Different Type of Assertions', () => {
    // Cypress itself bundles assertions provided by Chai, Sinon and jQuery libraries
    // Should Assertion: does the assertion directly on the object itself
    cy.get('#wooden_spoon').should('contain', 'Login').and('have.class', 'btn btn-primary');
    // expect assertion: creates a subject of our test, then you implement different actions
    cy.get('#wooden_spoon').then((buttonElement) => {
      expect(buttonElement).to.have.text('Login');
      expect(buttonElement).to.have.class('btn btn-primary');
    });
  });
}); // enddescribe

// dsfafdafafaf
