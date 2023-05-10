/// <reference types ="cypress"/>

describe('My first tests', ()=>{



    beforeEach(()=>{
     //runs once before each test ccases in this block
     cy.clearCookies();
     cy.visit('/multiple_buttons');
 }) 
 
 
 
 it('Check different button actions', ()=> {
     //select a button with text
     cy.contains('Button 2')
     .should('be.visible').click();
     cy.contains('Clicked on button two!').should('be.visible');

     
   //get a list of webelements 
   //find element with class attribute and select 3rd element from the list
cy.get('.btn.btn-primary').then((buttons)=>{
    cy.wrap(buttons).eq(2).click();
//assert the text
cy.contains('Clicked on button three!').should('be.visible');
})//end

//you got all buttons with tagName;each method is a loop
cy.get('button').each((item, index, list) => {
    //assert length of the list, verify number of buttons
    expect(list).to.have.length(6);
    expect(item).to.have.attr("onclick");
})

//I will get all buttons
//then get only the item for text of each item
//click to one that equal to Button 4
cy.get('button').each((item) => {
    if(item.text() == "Button 4"){
        cy.log(item.text());  // this command write the text at the test console
        cy.wrap(item).click();
        cy.contains('Clicked on button four!').should('be.visible');
    }
})


//npx cypress run -b chrome
//npx cypress run --headless -b chrome

 })//endit

 })//enddescribe
 
 
 
 