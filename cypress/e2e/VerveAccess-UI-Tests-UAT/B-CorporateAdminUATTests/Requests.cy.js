/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import  Request from "../../../pom/corporate/request.js"

describe('visit Verve Access', () => {

  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();

  const ln=new Login();
  const Rq=new Request();
  
  
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

it('it should Create Request with single file', () => {
   Rq.setGoToRequestPage()
   cy.wait(6000)
   Rq.setCreateRequest()
   Rq.setRequestType()
   Rq.SetPath('Verve-AID-FORM_OK.pdf' , 'myFixture')
   Rq.setAttachFile('@myFixture')
   Rq.SetComment('My corporate comment for Request')
   Rq.SetSummit()
   cy.wait(33000)
   Rq.SetVerifyUpload('Request submitted successfully')
   ln.setLogout()
  
  })

 /* it('it should Create Request with single file', () => {
    Rq.setGoToRequestPage()
    cy.wait(6000)
    Rq.setCreateRequest()
    Rq.setRequestType()
    Rq.SetPath('Verve-AID-FORM_OK.pdf' , 'myFixture')
    Rq.setAttachFile('@myFixture')
    //Rq.SetComment('My corporate comment for Request')
    Rq.SetSummit()
    cy.wait(33000)
    Rq.SetVerifyUpload('Request submitted successfully')
    ln.setLogout()
   
   })*/

  it('it should Create Request with Multiple file', () => {
    Rq.setGoToRequestPage()
    cy.wait(6000)
    Rq.setCreateRequest()
    Rq.setRequestType()
    Rq.SetPath('Verve-AID-FORM_OK.pdf' , 'myFixture')
    Rq.SetPath('Verve-IPK-CERT_OK.pdf' , 'myFixture2')
    Rq.setAttachFile2('@myFixture', '@myFixture2')
    Rq.SetComment('My corporate comment for Request')
    Rq.SetSummit()
    cy.wait(40000)
   Rq.SetVerifyUpload('Request submitted successfully')
   ln.setLogout()
   cy.reload()

  })

 /* it('it should Create Request without Comment', () => {
    Rq.setGoToRequestPage()
    cy.wait(6000)
    Rq.setCreateRequest()
    Rq.setRequestType()
    Rq.SetPath('Verve-AID-FORM_OK.pdf' , 'myFixture')
    Rq.SetPath('Verve-IPK-CERT_OK.pdf' , 'myFixture2')
    Rq.setAttachFile2('@myFixture', '@myFixture2')
   // Rq.SetComment('My corporate comment for Request')
    Rq.SetSummit()
    cy.wait(40000)
   Rq.SetVerifyUpload('Request submitted successfully')
   ln.setLogout()

  })

  */

  it('it should not Create Request without Request Type', () => {
    Rq.setGoToRequestPage()
    cy.wait(6000)
    Rq.setCreateRequest()
   // Rq.setRequestType()
    Rq.SetPath('Verve-AID-FORM_OK.pdf' , 'myFixture')
    Rq.setAttachFile('@myFixture')
    Rq.SetComment('My corporate comment for Request')
   // Rq.SetSummit()
   // cy.wait(33000)
   // Rq.SetVerifyUpload('Request submitted successfully')
   Rq.setCloseTab()
   ln.setLogout()
   
   })

   it('it should not Create Request without file', () => {
    Rq.setGoToRequestPage()
    cy.wait(6000)
    Rq.setCreateRequest()
    Rq.setRequestType()
    //Rq.SetPath('Verve-AID-FORM_OK.pdf' , 'myFixture')
    //Rq.setAttachFile('@myFixture')
    Rq.SetComment('My corporate comment for Request')
    //Rq.SetSummit()
   // cy.wait(33000)
    //Rq.SetVerifyUpload('Request submitted successfully')
    Rq.setCloseTab()
    ln.setLogout()
   
   })

   it('it should Close Request Tab after filling form', () => {
    Rq.setGoToRequestPage()
    cy.wait(6000)
    Rq.setCreateRequest()
    Rq.setRequestType()
    Rq.SetPath('Verve-AID-FORM_OK.pdf' , 'myFixture')
    Rq.setAttachFile('@myFixture')
    Rq.SetComment('My corporate comment for Request')
    //Rq.SetSummit()
    //cy.wait(33000)
   // Rq.SetVerifyUpload('Request submitted successfully')
    Rq.setCloseTab()
    ln.setLogout()
   
   })

   it('it should Create Request without Comment', () => {
    Rq.setGoToRequestPage()
    cy.wait(6000)
    Rq.setCreateRequest()
    Rq.setRequestType()
    Rq.SetPath('Verve-AID-FORM_OK.pdf' , 'myFixture')
    Rq.setAttachFile('@myFixture')
   // Rq.SetComment('My corporate comment for Request')
   cy.wait(6000)
   // Rq.SetSummit()
   Rq.setCloseTab()
    cy.wait(33000)
   // Rq.SetVerifyUpload('Request submitted successfully')
    ln.setLogout() 
   })





   it('it Download request form', () => {
    Rq.setGoToRequestPage()
    cy.wait(6000)
    Rq.setClickRequestForm()
    Rq.setSelectForm()
   // Rq.SetVerifyDownload('MPIN Request Template - 83357 downloaded')
    ln.setLogout() 
   })


  
   

  

})