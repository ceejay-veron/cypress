/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import userGuide from "../../../POM/userGuide.js"


describe('visit Verve Access', () => {

  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();

  const ln=new Login();
  const guide=new userGuide();
  
  
  before(() => {

    cy.visit('https://verve-access-customer.k8.isw.la/corporate/signin')
    cy.title().should('eq', 'Verve Access')
    cy.location('protocol').should('eq', 'https:')
    // /cy.contains('Get Started Now').click({timeout : 2000})

    cy.url().should('include', 'customer')
    cy.reload({timeout : 130000})


})

beforeEach(() => {
  // Cypress starts out with a blank slate for each test
  // so we must tell it to visit our website with the `cy.visit()` command.
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test
  // ok
  
  cy.get('form').within(($form) => {
    ln.setUserName(Cypress.env('username4'))
    ln.setPassword(Cypress.env('password4'))
    ln.clickSubmit();
    cy.wait(6000)
    
     })

})

    it('This test views the dashboard elements', () => {
 
      //View Dashboard Widgets
      cy.get('.top-section')
      cy.get('.top-section > :nth-child(1)').contains('Total Decals')
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)')  //Artwork widget
      cy.get('.top-section > :nth-child(3)') //Whitelist Cards Widget
      cy.get('.top-section > :nth-child(4)') //Users widget
      ln.setLogout()

  })

    it('should View guides section from the dashboard after login ', () => {    
    //Views the guides section, views all categories from the dashboard and views category guides from the dashboard
      guide.GetDashboardGuidesSection();
      guide.ViewAllGuidesFromDashboard();
      guide.ViewCategoryGuidesFromDashboard();
      ln.setLogout()
        
  })

  /*it('This test checks for live fx rate', () => {
 
    //FX rates
    cy.get('.live-fx-container').contains('Live FX Rates')
    cy.get('.top > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input')
    //cy.get('.anticon > svg > path').click()
    cy.get(dropdownOptions).contains('Pound Sterling').click()
    cy.get('.d-flx-c > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('1000')
    cy.get('.ant-select-selection__rendered').type('Pound Sterling')
    cy.contains('pound sterling').click()
    cy.get('.top > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').should('not.be.empty')
    ln.setLogout()
   
    
})*/

it('This test navigates the user to the verve certification portal', () => {
 
    //Verve Certification Portal
  cy.get('.verve-cert-container').contains('Go to Verve Certification Portal')
  cy.get('.verve-cert-click').click()  
  ln.setLogout()
  
})

});