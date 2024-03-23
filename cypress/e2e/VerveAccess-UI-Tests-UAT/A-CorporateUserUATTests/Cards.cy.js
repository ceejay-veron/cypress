/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import  Artwork from "../../../pom/artwork.js"
import CardUser from "../../../POM/corporate/card.js"


describe('visit Verve Access', () => {

  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();

  const ln=new Login();
  const Aw=new Artwork();
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
    ln.setUserName(Cypress.env('username4'))
    ln.setPassword(Cypress.env('password4'))
    ln.clickSubmit();
    cy.wait(6000)
    
     })

})


it('it should create Card request', () => {
  Cu.setGoToCardPage();
  cy.wait(6000)
  Cu.clickRequestButton()
  Cu.SetSelectArtwork()
  Cu.SetQuatity(varTest.number)
  Cu.SetCardType(varTest.test)
  Cu.SetCardProgram(varTest2.test)
  Cu.SetChipType()
  Cu.PickChipType()
  Cu.setSubmitRequest()
  cy.wait(6000)
  Cu.setsuccessMessage()
  ln.setLogout()
  cy.reload()

})


it.skip('it should not create Card request without Quality', () => {
  Cu.setGoToCardPage();
  Cu.clickRequestButton()
  Cu.SetSelectArtwork()
  //Cu.SetQuatity()
  Cu.SetCardType(varTest.test)
  Cu.SetCardProgram(varTest2.test)
  Cu.SetChipType()
  Cu.PickChipType()
  Cu.setSubmitRequest()
  cy.wait(6000)
 // Cu.seterrorMessage()
 Cu.setcloseRequesttab()
 ln.setLogout()
  
})


it('it should not create Card request without Card-Type', () => {
  Cu.setGoToCardPage();
  Cu.clickRequestButton()
  Cu.SetSelectArtwork()
  Cu.SetQuatity(varTest.number)
  //Cu.SetCardType()
  Cu.SetCardProgram(varTest2.test)
  Cu.SetChipType()
  Cu.PickChipType()
  Cu.setSubmitRequest()
  cy.wait(6000)
 //Cu.seterrorMessage1()
   Cu.setcloseRequesttab()
 ln.setLogout()
})


it('it should not create Card request without Card-Program', () => {
  Cu.setGoToCardPage();
  Cu.clickRequestButton()
  Cu.SetSelectArtwork()
  Cu.SetQuatity(varTest.number)
  Cu.SetCardType(varTest.test)
  //Cu.SetCardProgram()
  Cu.SetChipType()
  Cu.PickChipType()
  Cu.setSubmitRequest()
  cy.wait(6000)
 //Cu.seterrorMessage2()
 Cu.setcloseRequesttab()
 ln.setLogout()
  
})

it('it should not create Card request without ChipType', () => {
  Cu.setGoToCardPage();
  Cu.clickRequestButton()
  Cu.SetSelectArtwork()
  Cu.SetQuatity(varTest.number)
  Cu.SetCardType(varTest.test)
  Cu.SetCardProgram(varTest2.test)
  //Cu.SetChipType()
  //Cu.PickChipType()
  Cu.setSubmitRequest()
  cy.wait(6000)
  Cu.seterrorMessage3()
  Cu.setcloseRequesttab()
  ln.setLogout()

})






it('it should not create Card request without Any details', () => {
  Cu.setGoToCardPage();
  Cu.clickRequestButton()
  Cu.SetSelectArtwork()
  //Cu.SetQuatity()
 // Cu.SetCardType()
  //Cu.SetCardProgram()
  //Cu.SetChipType()
  //Cu.PickChipType()
  Cu.setSubmitRequest()
  cy.wait(6000)
  Cu.seterrorMessage3()
  Cu.setcloseRequesttab()
  ln.setLogout()

})





it('Search by complete Artwork ID on Approved tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setSearch("VERVE-NEW-2023-02-23-1116398733")
 // Cu.setVerifySearch("VERVE-NEW-2023-02-23-1116398733")
  ln.setLogout()

})

it('Search by incomplete Artwork ID on Approved tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setSearch("VERVE-NEW")
  //Cu.setVerifySearch("VERVE-NEW")
  ln.setLogout()

})


it('Search by complete Artwork Title on Approved tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setSearch("new Card")
 // Cu.setVerifySearch("new Card")
  ln.setLogout()

})

it('Search by incomplete Artwork Title on Approved tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setSearch("new")
 // Cu.setVerifySearch("new")
  ln.setLogout()

})

it('Search by invalid Artwork ID on Approved tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setSearch("caosasuddsds sdhsid")
  Cu.setVerifySearch("No Data to Display")
  ln.setLogout()

})

it('Search by complete Artwork ID on pending tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setPendingtab()
  Cu.setSearch("VERVE-NEW-2023-05-10-1919011132")
 // Cu.setVerifySearch("VERVE-NEW-2023-05-10-1919011132")
  ln.setLogout()

})

it('Search by incomplete Artwork ID on Pending tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setPendingtab()
  Cu.setSearch("VERVE-NEW")
 // Cu.setVerifySearch("VERVE-NEW")
  ln.setLogout()

})


it('Search by complete Artwork Title on pending tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setPendingtab()
  Cu.setSearch("TEMPLATE_133225687519972075.pdf")
 // Cu.setVerifySearch("TEMPLATE_133225687519972075.pdf")
  ln.setLogout()

})

it('Search by incomplete Artwork Title on Pending tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setPendingtab()
  Cu.setSearch("TEMPLATE")
 // Cu.setVerifySearch("TEMPLATE")
  ln.setLogout()

})

it('Search by invalid Artwork ID on Pending tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setPendingtab()
  Cu.setSearch("caosasuddsds sdhsid")
  Cu.setVerifySearch("No Data to Display")
  ln.setLogout()

})


it('Search by complete Artwork ID on Rejected tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setRejectedtab()
  Cu.setSearch("VERVE-NEW-2023-04-26-2059481354")
 // Cu.setVerifySearch("VERVE-NEW-2023-04-26-2059481354")
  ln.setLogout()

})

it('Search by incomplete Artwork ID on Rejected tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setRejectedtab()
  Cu.setSearch("VERVE-NEW")
 // Cu.setVerifySearch("VERVE-NEW")
  ln.setLogout()

})


it('Search by complete Artwork Title on Rejected tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setRejectedtab()
  Cu.setSearch("chev.png")
//  Cu.setVerifySearch("chev.png")
  ln.setLogout()

})

it('Search by incomplete Artwork Title on Rejected tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setRejectedtab()
  Cu.setSearch("chev")
//  Cu.setVerifySearch("chev")
  ln.setLogout()

})

it('Search by invalid Artwork ID on Rejected tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setRejectedtab()
  Cu.setSearch("caosasuddsds sdhsid")
  Cu.setVerifySearch("No Data to Display")
  ln.setLogout()

})

})