/// <reference types="cypress" />
 
// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import  user from "../../../POM/corporate/user.js"
 
describe('visit Verve Access', () => {
 
  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();
 
  const ln=new Login();
  const Us=new user();
 
  before(() => {
 
    cy.visit('https://safetoken-admin-portal.k8.isw.la/login')
    cy.title().should('eq', 'Verve Safetoken')
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
    ln.setUserName(Cypress.env('username1'))
    ln.setPassword(Cypress.env('password1'))
    cy.get("button[type='submit']").click().wait(12000);
    //ln.clickSubmit();
    cy.wait(6000)
   
     })
 
})
 
     it.only('should navigate to the Users page and create a new user', () => {
   
     
        //Us.setGoToUserPage();
        cy.get('.false > svg').click()
        cy.get(':nth-child(3) > .bar-link').click()
       // Us.setAddUserButton2()
        //.get('.add-button-container > :nth-child(2)').click()
       // Us.setEnterFirstname(varTest.test)
       // Us.setEnterLastname('da'+varTest2.newtest)
      //  Us.setEnterEmail('softqa'+varTest2.number+'@qa.team')
      //  Us.setEnterPhoneNumber('080123'+varTest2.number)
      //  Us.setRole()
      //  Us.setSummitButton()
      //  cy.wait(12000)
      //  Us.setsuccessMessage()
      //  ln.setLogout()
 
     })
 
     it('should not create a new user without first name', () => {
   
     
      Us.setGoToUserPage();
      Us.setAddUserButton2()
     // Us.setEnterFirstname(varTest.test)
      Us.setEnterLastname('da'+varTest2.newtest)
      Us.setEnterEmail('softqa'+varTest2.number+'@qa.team')
      Us.setEnterPhoneNumber('080123'+varTest2.number)
      Us.setRole()
      Us.setSummitButton()
      Us.setErrorMessage()
      Us.setCloseTab()
      ln.setLogout()
 
   })
 
   it('should not create a new user without lastname', () => {
         
    Us.setGoToUserPage();
    Us.setAddUserButton2()
    Us.setEnterFirstname(varTest.test)
   // Us.setEnterLastname('da'+varTest2.newtest)
    Us.setEnterEmail('softqa'+varTest2.number+'@qa.team')
    Us.setEnterPhoneNumber('080123'+varTest2.number)
    Us.setRole()
    Us.setSummitButton()
    Us.setErrorMessage2()
    Us.setCloseTab()
    ln.setLogout()
 
 })
 
 it('should not create a new user without email', () => {
         
  Us.setGoToUserPage();
  Us.setAddUserButton2()
  Us.setEnterFirstname(varTest.test)
  Us.setEnterLastname('da'+varTest2.newtest)
 // Us.setEnterEmail('softqa'+varTest2.number+'@qa.team')
  Us.setEnterPhoneNumber('080123'+varTest2.number)
  Us.setRole()
  Us.setSummitButton()
  Us.setErrorMessage3()
  Us.setCloseTab()
  ln.setLogout()
 
})
 
it('should not create a new user without phoneNumber', () => {
         
  Us.setGoToUserPage();
  Us.setAddUserButton2()
  Us.setEnterFirstname(varTest.test)
  Us.setEnterLastname('da'+varTest2.newtest)
  Us.setEnterEmail('softqa'+varTest2.number+'@qa.team')
 // Us.setEnterPhoneNumber('080123'+varTest2.number)
  Us.setRole()
 // Us.setSummitButton()
  //Us.setErrorMessage4()
  Us.setCloseTab()
  ln.setLogout()
 
})
 
it('should Enable disable User', () => {
         
  Us.setGoToUserPage();
  Us.setinactiveTab()
  Us.setSelectInactiveUser()
  Us.setEnableUser()
  Us.setAddComment30('this is user is Active')
  Us.setSubmitComment()
  Us.setConfirmEnableYes()
  Us.setJobVerification('User enabled successfully')
  ln.setLogout()
 
})
 
 
it('should Close Enable disable User with no', () => {
         
  Us.setGoToUserPage();
  Us.setinactiveTab()
  Us.setSelectInactiveUser()
  Us.setEnableUser()
  Us.setAddComment30('this is user is Active')
  Us.setSubmitComment()
  Us.setConfirmEnableNo()
  //Us.setJobVerification('User enabled successfully')
  ln.setLogout()
 
})
 
it('should Close Enable disable User with Close', () => {
         
  Us.setGoToUserPage();
  Us.setinactiveTab()
  Us.setSelectInactiveUser()
  Us.setEnableUser()
  Us.setAddComment30('this is user is Active')
  Us.setSubmitComment()
  Us.setCloseTab2()
  ln.setLogout()
 
})
 
 
it('should not Enable disable User without comment', () => {
         
  Us.setGoToUserPage();
  Us.setinactiveTab()
  Us.setSelectInactiveUser()
  Us.setEnableUser()
 // Us.setAddComment30('this is user is Active')
  Us.setSubmitComment()
  //Us.setConfirmEnableYes()
  Us.setJobVerification('comment cannot be empty!')
  Us.setCloseTab()
  ln.setLogout()
 
})
 
it('should Disable Enabled User', () => {
         
  Us.setGoToUserPage();
  Us.setSelectActiveUser()
  Us.setDisableUser()
  Us.setAddComment30('this is user is Active')
  Us.setSubmitComment()
  Us.setConfirmDisableYes()
  Us.setJobVerification('User disabled successfully')
  ln.setLogout()
 
})
 
it('should not Disable Enabled User without Comment', () => {
         
  Us.setGoToUserPage();
  Us.setSelectActiveUser()
  Us.setDisableUser()
  Us.setSubmitComment()
  Us.setCloseTab()
  ln.setLogout()
 
})
it('should close Disable Enabled User with no', () => {
         
  Us.setGoToUserPage();
  Us.setSelectActiveUser()
  Us.setDisableUser()
  Us.setAddComment30('this is user is Active')
  Us.setSubmitComment()
  Us.setConfirmDisableNo()
  //Us.setJobVerification('User disabled successfully')
  ln.setLogout()
 
 
})
 
it('should close Disable Enabled User with Close', () => {
         
  Us.setGoToUserPage();
  Us.setSelectActiveUser()
  Us.setDisableUser()
  Us.setAddComment30('this is user is Active')
  Us.setSubmitComment()
  Us.setCloseTab2()
  //Us.setJobVerification('User disabled successfully')
  ln.setLogout()
 
})
 
it('should delete User', () => {
         
  Us.setGoToUserPage();
  Us.setinactiveTab()
  Us.setSelectInactiveUser()
  Us.setDeleteUser()
  Us.setAddComment30('this is user is gone')
  Us.setSubmitComment()
  Us.setConfirmDeleteYes()
  Us.setJobVerification('User deleted successfully')
  ln.setLogout()
 
})
 
it('should close delete User with No Button', () => {
         
  Us.setGoToUserPage();
  Us.setinactiveTab()
  Us.setSelectInactiveUser()
  Us.setDeleteUser()
  Us.setAddComment30('this is user is gone')
  Us.setSubmitComment()
  Us.setConfirmDeleteNo()
  //Us.setJobVerification('User deleted successfully')
  ln.setLogout()
 
})
 
it('should close delete User with Close Button', () => {
         
  Us.setGoToUserPage();
  Us.setinactiveTab()
  Us.setSelectInactiveUser()
  Us.setDeleteUser()
  Us.setAddComment30('this is user is gone')
  Us.setSubmitComment()
  Us.setConfirmDeleteClose()
  //Us.setJobVerification('User deleted successfully')
  ln.setLogout()
 
})
 
 
it('should not delete User without user', () => {
         
  Us.setGoToUserPage();
  Us.setinactiveTab()
  Us.setSelectInactiveUser()
  Us.setDeleteUser()
 // Us.setAddComment30('this is user is gone')
  Us.setSubmitComment()
  //Us.setConfirmDeleteYes()
  Us.setJobVerification('comment cannot be empty!')
  Us.setCloseTab()
  ln.setLogout()
 
 
})
 
 
 
 
it('should Search user on active tab', () => {
         
  Us.setGoToUserPage()
  Us.setSearch('njoku102@qa.team')
  Us.setClickSearch()
  Us.setVerifySearch('njoku102@qa.team')
  ln.setLogout()
 
})
 
it('should Search user on inactive tab', () => {
         
  Us.setGoToUserPage()
  Us.setinactiveTab()
  Us.setSearch('softqa60380@qa.team')
  Us.setClickSearch()
  //Us.setVerifySearch('softqa60380@qa.team')
  ln.setLogout()
 
})
 
 
 
 
 
 
 
 
 
 
 
    })
 