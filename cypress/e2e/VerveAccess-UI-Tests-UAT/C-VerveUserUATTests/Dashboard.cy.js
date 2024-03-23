/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"


describe('visit Verve Access', () => {

  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();

  const ln=new Login();
  
  
  before(() => {

    cy.visit('https://verve-access-admin.k8.isw.la/admin/signin')
    cy.title().should('eq', 'Verve Access')
    cy.location('protocol').should('eq', 'https:')
    // /cy.contains('Get Started Now').click({timeout : 2000})

    cy.url().should('include', 'admin')
    cy.reload({timeout : 130000})


})



beforeEach(() => {
  // Cypress starts out with a blank slate for each test
  // so we must tell it to visit our website with the `cy.visit()` command.
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test
  // ok
  
  cy.get('form').within(($form) => {
    ln.setUserName(Cypress.env('verveUser'))
    ln.setPassword(Cypress.env('verveUserPass'))
    ln.clickSubmit();
    cy.wait(6000)
    
     })

})

/*
    it('This test views the dasboard elements', () => {
 
      //View Dashboard Widgets
      cy.get('.top-section')
      cy.get('.top-section > :nth-child(1)')
      cy.get('.top-section > :nth-child(1) > .top > :nth-child(1)').contains('Total Financial Institutions')
      cy.get('.top-section > :nth-child(2)')
      cy.get('.top-section > :nth-child(2) > .top > :nth-child(1)').contains('Total Artworks')
      cy.get('.top-section > :nth-child(3)')
      cy.get('.top-section > :nth-child(3) > .top > :nth-child(1)').contains('Total Whitelist Card')
      cy.get('.top-section > :nth-child(4)')
      cy.get(':nth-child(4) > .top > :nth-child(1)').contains('Total Users')  
      ln.setLogout()

  })

  */

   it('This test fetches the Dasboard chart for pending artworks', () => {
 
    cy.get('.ant-tabs-tab-active > span')
    cy.get(':nth-child(3) > [height="263"]')
    cy.get('.third-section > :nth-child(1)')
    cy.get('.third-section > :nth-child(1)')
    cy.get('.third-section > :nth-child(1)')    
    ln.setLogout()
       
  })

  it('This test fetches the Dasboard chart for approved artworks', () => {
 
    cy.get('.ant-tabs-tab-active > span')
    cy.get(':nth-child(2)>.ant-radio>.ant-radio-input').click()
    cy.get(':nth-child(3) > [y="81"]')
    cy.get('.third-section > :nth-child(1)')
    cy.get('.third-section > :nth-child(2)')
    cy.get('.third-section > :nth-child(3)')   
    ln.setLogout()
       
  })

  
});