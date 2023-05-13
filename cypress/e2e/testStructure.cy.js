/// <reference types ="cypress"/>

describe('Context: My First Test', () => {
  before(() => {
    // runs once before all test ccases in this block
  });

  beforeEach(() => {
    // runs once before each test ccases in this block
  });

  after(() => {
    /// runs once after all test cases in this block
  });

  afterEach(() => {
    /// runs once after each test ccases in this block
  });

  it('Opening a web application', () => {
    cy.visit('https://practice.cydeo.com/');
    cy.visit('/registration_form');
  });

  it('Test 2', () => {
    expect(false).to.equal(false);
  });
  it('Test 3', () => {
    expect(false).not.to.equal(true);
  });
  it('Test 4', () => {
    expect(5).to.equal(5);
  });
  it('Test 5', () => {
    expect(true).to.equal('5' === 5);
  });
});
