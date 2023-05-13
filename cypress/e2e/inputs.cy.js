/// <reference types ="cypress"/>

describe('Input forms tests', () => {
    beforeEach('Navigate to registration page', () => {
      // runs once before each test ccases in this block
      cy.clearCookies();
      cy.visit('/registration_form');
    });
  
    it('Check different input box fields and verify ', () => {
      // fill the form 
      // username ... etc
      cy.get('input[name="firstname"]').type('Mike');
      cy.get('input[name="lastname"]').type('Brown');
      cy.get('input[name="username"]').type('MuhittinKozalakFromKazliCesme');
      cy.get('input[name="email"]').type('dynamic_fake_email');
      
       /**
        * Math.random(): creates a number between 0 - 1 ~ 0.005678
        * Math.floor : makes it a whole number
        *  */ 

       let email = `formTest${Math.floor(100000+Math.random()*900000)}@cydeo.com` ;
       cy.get('input[name="email"]').type(email);
    });

    it('Check different radio button actions', () => {
      cy.get('.radio')
      .find('[type=radio]')
      .then((radio => {
       // get all radio buttons, select the first one and verify that it is checked
       cy.wrap(radio).first().check().should('be.checked'); // cypres works in a chainable functions structure
       /**
        * radio : is Jquery element, cy.wrap(radio) : turns it into Cypress Object so that I can use cypress functions
        * first() : selects first element
        * check() : checks it out
        * should(): verifes whatever I provide as parameter 'be.checked'
        */



       //get all radio buttons, select the seccond one and verify that it is checked and confirmation label is visible
       cy.wrap(radio).eq(1).check().should('be.checked');
        cy.get('[data-bv-icon-for="gender"]').should('be.visible'); // common function used in tests
        // Third radio button is NOT checked
        cy.wrap(radio).eq(2).should('not.be.checked');


       
      })) 
 })





     
  }); // enddescribe
  