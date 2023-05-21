/// <reference types ="cypress"/>

describe('Input forms tests', () => {
  beforeEach('Navigate to registration page', () => {
    // runs once before each test ccases in this block
    cy.clearCookies();
    cy.visit('/registration_form');
  });

  it.skip('Check different input box fields and verify ', () => {
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

    let email = `formTest${Math.floor(100000 + Math.random() * 900000)}@cydeo.com`;
    cy.get('input[name="email"]').type(email);
  });

  it.skip('Check different radio button actions', () => {
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


  it.skip('Check different checkbox  actions', () => {
    //get all checkboxes,


    cy.get('[type="checkbox"]').then((checkbox) => {

      //select Java text and verify
      cy.wrap(checkbox).eq(1).check().should('be.checked');
      //uncheck Java text and verify
      cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked');
      //verify that third checkbox has a value "Javascript" and check then verify
      cy.wrap(checkbox).eq(2).should('have.value', 'javascript')
        .check().should('be.checked');

    })

  })//endit


  it.skip('Check selection of a single choice from a select dropdown', () => {

    //select one element from dropdown
    cy.get('select[name="job_title"]').select('SDET');
    //assert that dropdown has correct text after selected
    cy.get('select[name="job_title"]').contains("SDET");

  })



  it.skip('Check selection of all select dropdown options', () => {

    //we will provide our test data using Fixtures folder as Json  object
    //then we will use that data for verifying select values
    cy.fixture('departments').then((departments) => {
      //get all options in the menu and iterate through them
      cy.get('select[name="department"]>option').each((option, index) => {
        //get each option's text
        const optionText = option.text();
        //print each option's text
        cy.log(optionText);
        //print each option's index
        cy.log(index);
        //print each option's index's name
        cy.log(departments[index]);

        cy.get('select[name="department"]>option').select(optionText)
        .should('have.value', option.val())
        .contains(departments[index]);
        


      })

    })

  })

  it('Check selection of all select dropdowns options', () => {
    // we will provide our test data through fixtures folder as JSON object, then use that data to verify select values
    cy.fixture('departments').then((departments) => {
        // Get all options in the menu, iterate through these options one by one
        cy.get('select[name="department"] > option').each((option, index) => {
            // get each option text
            const optionText = option.text();
           // cy.log(optionText);
           // cy.log(index);
           // cy.log(departments[index]);
           cy.get('select[name="department"]').select(optionText)
           .should('have.value',option.val())
           .contains(departments[index]);
        })
    })
  });



}); // enddescribe
