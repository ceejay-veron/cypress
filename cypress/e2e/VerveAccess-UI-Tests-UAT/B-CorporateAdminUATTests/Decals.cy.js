/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import  Artwork from "../../../pom/artwork.js"
import Decal from "../../../POM/corporate/decal.js"


describe('visit Verve Access', () => {

  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();

  const ln=new Login();
  const Aw=new Artwork();
  const DC=new Decal();
  
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
/*
it('should view and approve ', () => {
  
  DC.setGoToDecalPage2();
  DC.setPendingTab();
  DC.setSelectDecal1()
  DC.setApproveDecal()
  DC.setInputValue(varTest.test)
  DC.setSummitDecal()
  DC.setConfirmApproval()
  DC.setVerifyRequest('Approval was successful.')
  ln.setLogout()
  


})

it('should close with close button ', () => {
  
  DC.setGoToDecalPage2();
  DC.setPendingTab();
  DC.setSelectDecal1()
  DC.setApproveDecal()
  DC.setInputValue(varTest.test)
  DC.setSummitDecal()
  DC.setCloseModal3()
  ln.setLogout()
  
   

})


it('should close with NO button ', () => {
  
  DC.setGoToDecalPage2();
  DC.setPendingTab();
  DC.setSelectDecal1()
  DC.setApproveDecal()
  DC.setInputValue(varTest.test)
  DC.setSummitDecal()
  DC.setCloseModalNo()
  ln.setLogout()
  

})

it('should view and reject ', () => {
  
  DC.setGoToDecalPage2();
  DC.setPendingTab();
  DC.setSelectDecal1()
  DC.setRejectDecal()
  DC.setInputValue(varTest.test)
  DC.setSummitDecal()
  DC.setConfirmReject()
  DC.setVerifyRequest('Rejection was successful.')
  ln.setLogout()
  

})



it('should not and reject without comment', () => {
  
  DC.setGoToDecalPage2();
  DC.setPendingTab();
  DC.setSelectDecal1()
  DC.setRejectDecal()
  //DC.setInputValue(varTest.test)
  DC.setSummitDecal()
  DC.setCloseModal2()
   ln.setLogout()
  

})


it('should close modal with No', () => {
  
  DC.setGoToDecalPage2();
  DC.setPendingTab();
  DC.setSelectDecal1()
  DC.setRejectDecal()
  DC.setInputValue(varTest.test)
  DC.setSummitDecal()
  DC.setCloseModalNo()
  ln.setLogout()
  

})


it('should close modal with close', () => {
  
  DC.setGoToDecalPage2();
  DC.setPendingTab();
  DC.setSelectDecal1()
  DC.setRejectDecal()
  DC.setInputValue(varTest.test)
  DC.setCloseModal2()
  ln.setLogout()
  

})



it('should view and  not approve without comment ', () => {
  
  DC.setGoToDecalPage2();
  DC.setPendingTab();
  DC.setSelectDecal1()
  DC.setApproveDecal()
  //DC.setInputValue(varTest.test)
  DC.setCloseModal2()
  ln.setLogout()

})


it('should approve decal', () => {
  
  DC.setGoToDecalPage2();
  DC.setPendingTab();
  DC.setSelectDecal2()
  DC.setInputValue(varTest.test)
  DC.setSummitDecal()
  DC.setConfirmApproval()
  DC.setVerifyRequest('Approval was successful.')
  ln.setLogout()

})

it('should not approve decal without comment', () => {
  
  DC.setGoToDecalPage2();
  DC.setPendingTab();
  DC.setSelectDecal2()
 // DC.setInputValue(varTest.test)
 DC.setCloseModal2()
 ln.setLogout()

})



*/




it('should Search for complete decal on Approved tab ', () => {
  
  DC.setGoToDecalPage2();
  DC.setinputSearch('Decal Item 41891')
  DC.setsearch()
//  DC.setVerifyRequest('Decal Item 41891')
  ln.setLogout()
  
})

it('should Search for incomplete decal on Approved tab', () => {
  
  DC.setGoToDecalPage2();
  DC.setinputSearch('Decal It')
  DC.setsearch()
//  DC.setVerifyRequest('Decal It')
  ln.setLogout()
  
})


it('should Search for invalid decal on Approved tab', () => {
  
  DC.setGoToDecalPage2();
  DC.setinputSearch('blahdadka amdakdja')
  DC.setsearch()
  DC.setVerifyRequest('No Data to Display')
  ln.setLogout()
  
})


it('should Search for complete decal on Pending tab ', () => {
  
  DC.setGoToDecalPage2();
  DC.setPendingTab()
  DC.setinputSearch('Decal Item 87545')
  DC.setsearch()
  //DC.setVerifyRequest('Decal Item 87545')
  ln.setLogout()
  
})

it('should Search for incomplete decal on Pending  tab', () => {
  
  DC.setGoToDecalPage2();
  DC.setPendingTab()
  DC.setinputSearch('Decal It')
  DC.setsearch()
 // DC.setVerifyRequest('Decal It')
  ln.setLogout()
  
})


it('should Search for invalid decal on Pending  tab', () => {
  
  DC.setGoToDecalPage2();
  DC.setPendingTab()
  DC.setinputSearch('blahdadka amdakdja')
  DC.setsearch()
  DC.setVerifyRequest('No Data to Display')
  ln.setLogout()
  
})


it('should Search for complete decal on Rejected tab ', () => {
  
  DC.setGoToDecalPage2();
  DC.setRejectedTab()
  DC.setinputSearch('Decal Item 53890')
  DC.setsearch()
 // DC.setVerifyRequest('Decal Item 53890')
  ln.setLogout()
  
})

it('should Search for incomplete decal on Rejected  tab', () => {
  
  DC.setGoToDecalPage2();
  DC.setRejectedTab()
  DC.setinputSearch('Decal It')
  DC.setsearch()
 // DC.setVerifyRequest('Decal It')
  ln.setLogout()
  
})


it('should Search for invalid decal on Rejected  tab', () => {
  
  DC.setGoToDecalPage2();
  DC.setRejectedTab()
  DC.setinputSearch('blahdadka amdakdja')
  DC.setsearch()
  DC.setVerifyRequest('No Data to Display')
  ln.setLogout()
  
})




})