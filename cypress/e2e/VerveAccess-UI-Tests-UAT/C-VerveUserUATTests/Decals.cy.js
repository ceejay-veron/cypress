/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import  Artwork from "../../../pom/artwork.js"
import Decal from "../../../POM/corporate/decal.js"
import Decals from "../../../POM/Decals.js"


describe('visit Verve Access', () => {

  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();

  const ln=new Login();
  const Aw=new Artwork();
  const DC=new Decal();
  const DC1=new Decals();
  
  
  before(() => {

    cy.visit('https://verve-access-admin.k8.isw.la/admin/signin')
   // cy.title().should('eq', 'verve access')
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



it('should Search for complete decal on Approved tab ', () => {
  
  DC.setGoToDecalPage5();
  DC.setinputSearch('Decal Item 41891')
  DC.setsearch()
  DC.setVerifyRequest('Decal Item 41891')
  ln.setLogout()
  
})

it('should Search for incomplete decal on Approved tab', () => {
  
  DC.setGoToDecalPage5();
  DC.setinputSearch('Decal It')
  DC.setsearch()
  DC.setVerifyRequest('Decal It')
  ln.setLogout()
  
})


it('should Search for invalid decal on Approved tab', () => {
  
  DC.setGoToDecalPage5();
  DC.setinputSearch('blahdadka amdakdja')
  DC.setsearch()
  DC.setVerifyRequest('No Data to Display')
  ln.setLogout()
  
})


it('should Search for complete decal on Pending tab ', () => {
  
  DC.setGoToDecalPage5();
  DC.setPendingTab()
  DC.setinputSearch('Decal Item 87545')
  DC.setsearch()
 //DC.setVerifyRequest('Decal Item 87545')
  ln.setLogout()
  
})

it('should Search for incomplete decal on Pending  tab', () => {
  
  DC.setGoToDecalPage5();
  DC.setPendingTab()
  DC.setinputSearch('Decal It')
  DC.setsearch()
  DC.setVerifyRequest('Decal It')
  ln.setLogout()
  
})


it('should Search for invalid decal on Pending  tab', () => {
  
  DC.setGoToDecalPage5();
  DC.setPendingTab()
  DC.setinputSearch('blahdadka amdakdja')
  DC.setsearch()
  DC.setVerifyRequest('No Data to Display')
  ln.setLogout()
  
})


it('should Search for complete decal on Rejected tab ', () => {
  
  DC.setGoToDecalPage5();
  DC.setRejectedTab()
  DC.setinputSearch('Decal Item 74266')
  DC.setsearch()
  DC.setVerifyRequest('Decal Item 74266')
  ln.setLogout()
  
})

it('should Search for incomplete decal on Rejected  tab', () => {
  
  DC.setGoToDecalPage5();
  DC.setRejectedTab()
  DC.setinputSearch('Decal It')
  DC.setsearch()
  DC.setVerifyRequest('Decal It')
  ln.setLogout()
  
})


it('should Search for invalid decal on Rejected  tab', () => {
  
  DC.setGoToDecalPage5();
  DC.setRejectedTab()
  DC.setinputSearch('blahdadka amdakdja')
  DC.setsearch()
  DC.setVerifyRequest('No Data to Display')
  ln.setLogout()
  
})


it('should Search for complete requested decal on Approved tab ', () => {
  
  DC.setGoToDecalPage5();
  DC.setGotoDecalRequest1()
  DC.setinputSearch('Decal Item 41891')
  DC.setsearch()
  DC.setVerifyRequest('Decal Item 41891')
  ln.setLogout()
  
})

it('should Search for incomplete requested decal on Approved tab', () => {
  
  DC.setGoToDecalPage5();
  DC.setGotoDecalRequest1()
  DC.setinputSearch('Decal It')
  DC.setsearch()
  DC.setVerifyRequest('Decal It')
  ln.setLogout()
  
})


it('should Search for invalid requested decal on Approved tab', () => {
  
  DC.setGoToDecalPage5();
  DC.setGotoDecalRequest1()
  DC.setinputSearch('blahdadka amdakdja')
  DC.setsearch()
  DC.setVerifyRequest('No Data to Display')
  ln.setLogout()
  
})


it('should Search for complete requested decal on Pending tab ', () => {
  
  DC.setGoToDecalPage5();
  DC.setGotoDecalRequest1()
  DC.setPendingTab()
  DC.setinputSearch('Decal Item 87545')
  DC.setsearch()
  DC.setVerifyRequest('Decal Item 87545')
  ln.setLogout()
  
})

it('should Search for incomplete requested decal on Pending  tab', () => {
  
  DC.setGoToDecalPage5();  
  DC.setGotoDecalRequest1()
  DC.setPendingTab()
  DC.setinputSearch('Decal It')
  DC.setsearch()
  DC.setVerifyRequest('Decal It')
  ln.setLogout()
  
})


it('should Search for invalid requested decal on Pending  tab', () => {
  
  DC.setGoToDecalPage5();
  DC.setGotoDecalRequest1()
  DC.setPendingTab()
  DC.setinputSearch('blahdadka amdakdja')
  DC.setsearch()
  DC.setVerifyRequest('No Data to Display')
  ln.setLogout()
  
})


it('should Search for complete requested decal on Rejected tab ', () => {
  
  DC.setGoToDecalPage5();
  DC.setGotoDecalRequest1()
  DC.setRejectedTab()
  DC.setinputSearch('Decal85225')
  DC.setsearch()
  DC.setVerifyRequest('Decal85225')
  ln.setLogout()
  
})

it('should Search for incomplete requested decal on Rejected  tab', () => {
  
  DC.setGoToDecalPage5();  
  DC.setGotoDecalRequest1()
  DC.setRejectedTab()
  DC.setinputSearch('Decal')
  DC.setsearch()
 // DC.setVerifyRequest('Decal')
  ln.setLogout()
  
})


it('should Search for invalid requested decal on Rejected  tab', () => {
  
  DC.setGoToDecalPage5();
  DC.setGotoDecalRequest1()
  DC.setRejectedTab()
  DC.setinputSearch('blahdadka amdakdja')
  DC.setsearch()
  DC.setVerifyRequest('No Data to Display')
  ln.setLogout()
  
})


})