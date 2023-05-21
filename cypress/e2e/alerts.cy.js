/// <reference types ="cypress"/>

describe('Alerts in Cypress Test Environment', { baseUrl: 'https://demoqa.com' }, () => {
    beforeEach(() => {
      // run before each test case, beforeMethod in TestNG
      cy.clearCookies();
      cy.visit('/alerts');
    });
    
    it('Check alert confirmation', () => {

        /**
         * Browser commands, windows:alert, window:confirm, window:on
         * 
         * 
         */

      cy.get('#confirmButton').click();

            const stub = cy.stub();
            cy.on('window:confirm', stub); //when this confirmation command initiated sotre and give the control to stub function
cy.get('#confirmButton').click().then(   ()=>    {
expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?');

})

cy.on('window:confirm', ()=>true); //confirm the alert

cy.contains('You selected Ok').should('be.visible');

    });
    
  });
