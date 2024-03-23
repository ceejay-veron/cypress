/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import  Report from "../../../pom/corporate/report.js"
import CardUser from "../../../POM/corporate/card.js"


describe('visit Verve Access', () => {

  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();

  const ln=new Login();
  const Rp=new Report();
  const Cu=new CardUser();
  
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
    ln.setUserName(Cypress.env('username1'))
    ln.setPassword(Cypress.env('password1'))
    ln.clickSubmit();
    cy.wait(6000)
    
     })

})


it('it should search for valid report', () => {
  Rp.setGoToReportPage2();
  Rp.setinputValue('Issuer-Reports')
  Rp.setSummitButton()
  //Rp.setVerify('Issuer-Reports')
  ln.setLogout()

})


it('it should search for invalid report', () => {
  Rp.setGoToReportPage2();
  Rp.setinputValue('Issuedfdfdr-Reportddds')
  Rp.setSummitButton()
 // Rp.setVerify('No Data to Display')
  ln.setLogout()

})

it('it should search for empty Value', () => {
  Rp.setGoToReportPage2();
  Rp.setinputValue(' ')
  Rp.setSummitButton()
  //Rp.setVerify('No Data to Display')
  ln.setLogout()

})


it('it should search for Report of last 30 days', () => {
  Rp.setGoToReportPage2();
  Rp.setselectFilter()
  Rp.setDateTolast30days()
  ln.setLogout()
})


it('it should search for Report of This Month', () => {
  Rp.setGoToReportPage2();
  Rp.setselectFilter()
  Rp.setDateToThisMonth() 
  ln.setLogout()
})
  
  
it('it should search for Report of last Month', () => {
  Rp.setGoToReportPage2();
  Rp.setselectFilter()
  Rp.setDateToLastMonth()
  ln.setLogout()
})

it('it should search for Report of Today', () => {
  Rp.setGoToReportPage2();
  Rp.setselectFilter()
  Rp.setDateToToday()
  ln.setLogout()
})
 

it('it should search for Report of Yesterday', () => {
  Rp.setGoToReportPage2();
  Rp.setselectFilter()
  Rp.setDateToYesterday()
  ln.setLogout()
})

it('it should search for Report of last seven days', () => {
  Rp.setGoToReportPage2();
  Rp.setselectFilter()
  Rp.setDateToLast7Days()
  ln.setLogout()
})





 

})