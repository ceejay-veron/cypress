/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import CardUser from "../../../POM/corporate/card.js"

describe('visit Verve Access', () => {

  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();

  const ln=new Login();
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


/*it('it should Approve Card request', () => {
  Cu.setGoToCardPage();
  Cu.setPendingtab()
  cy.get('input[class="checkbox"]').first().check({force: true})
  //cy.document().then(doc => doc.querySelectorAll("input .checkbox")).click();
})*/


it('it should Approve Card request', () => {
  Cu.setGoToCardPage();
  Cu.setPendingtab()
  Cu.setpickCard()
  Cu.setInputComment(varTest.test + ' Good')
  Cu.setSummitComment()
  Cu.setConfirmYes()
  Cu.setSuccessMessage4()
  ln.setLogout()
})

it('it should not Approve Card request without Comment', () => {
  Cu.setGoToCardPage();
  Cu.setPendingtab()
  Cu.setpickCard()
  //Cu.setInputComment(varTest.test + ' Good')
  Cu.setSummitComment()
  Cu.setCloseTestModal()
  ln.setLogout()
})




/*it('it should Close Comment Area', () => {
  Cu.setGoToCardPage();
  Cu.setPendingtab()
  Cu.setpickCard()
  Cu.setInputComment(varTest.test + ' Good')
  Cu.setCloseTestModal()
  ln.setLogout()
  
})*/

/*it('it should not Approve Card request when confirm with NO', () => {
  Cu.setGoToCardPage();
  Cu.setPendingtab()
  Cu.setpickCard()
  Cu.setInputComment(varTest.test + ' Good')
  Cu.setSummitComment()
  Cu.setConfirmNo()
  ln.setLogout()
})

*/

/*
it('it should Reject Card request', () => {
  Cu.setGoToCardPage();
  Cu.setPendingtab()
  Cu.setReject()
  Cu.setInputComment(varTest.test + ' Bad')
  Cu.setSummitComment()
  Cu.setRejectConfirmYes()
  Cu.setSuccessMessage5()
  ln.setLogout()
})
*/

it('it should not Reject Card request without comment', () => {
  Cu.setGoToCardPage();
  Cu.setPendingtab()
  Cu.setReject()
  //Cu.setInputComment(varTest.test + ' Bad')
  Cu.setSummitComment()
  Cu.setCloseTestModal()
  ln.setLogout()
})

it('it should not Reject Card request when confirm with NO', () => {
  Cu.setGoToCardPage();
  Cu.setPendingtab()
  Cu.setReject()
  Cu.setInputComment(varTest.test + ' Bad')
  Cu.setSummitComment()
  Cu.setConfirmNo()
  ln.setLogout()
})

it('it should Close Comment Area', () => {
  Cu.setGoToCardPage();
  Cu.setPendingtab()
  Cu.setReject()
  Cu.setInputComment(varTest.test + ' Good')
  Cu.setCloseTestModal()
  ln.setLogout()
  
})










it('Search by complete Artwork ID on Approved tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setSearch("VERVE-NEW-2023-02-23-1116398733")
  //Cu.setVerifySearch(" ")
  ln.setLogout()

})

it('Search by incomplete Artwork ID on Approved tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setSearch("VERVE-NEW")
  Cu.setVerifySearch("VERVE-NEW")
  ln.setLogout()

})


it('Search by complete Artwork Title on Approved tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setSearch("new Card")
  //Cu.setVerifySearch("new Card")
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
  //Cu.setVerifySearch("VERVE-NEW")
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
 // Cu.setVerifySearch("chev.png")
  ln.setLogout()

})

it('Search by incomplete Artwork Title on Rejected tab', () => {
  
  Cu.setGoToCardPage();
  Cu.setRejectedtab()
  Cu.setSearch("chev")
 // Cu.setVerifySearch("chev")
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