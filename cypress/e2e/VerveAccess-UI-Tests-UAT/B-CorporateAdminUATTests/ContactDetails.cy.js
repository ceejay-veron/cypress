/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import ContactDetails from "../../../POM/corporate/contactDetails.js"

describe('visit Verve Access', () => {

  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();

  const ln=new Login();
  const CD=new ContactDetails();
  
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


it('it should Add contact details', () => {
  CD.setGoToContactDetailsPage();
  CD.setAddContactButton()
  CD.setinputName(varTest.text + ' ' + varTest2.testname)
  CD.setinputEmail('softwaretest'+varTest3.number +'@qa.team')
  CD.setinputPhoneNumber('0901'+varTest2.number + '23')
  CD.setinputRole('sale/marketing')
  CD.setinputDepartment()
  CD.setSummitButton()
  CD.setConfirmAddContact('Contact details was successfully created.')
  ln.setLogout()
  
})

it('it should not Add contact details without name', () => {
  CD.setGoToContactDetailsPage();
  CD.setAddContactButton()
  //CD.setinputName(varTest.text + ' ' + varTest2.testname)
  CD.setinputEmail('softwaretest'+varTest3.number +'@qa.team')
  CD.setinputPhoneNumber('0901'+varTest2.number + '23')
  CD.setinputRole('sale/marketing')
  CD.setinputDepartment()
  CD.setSummitButton()
  CD.setConfirmAddContact('name cannot be empty!')
  CD.setCloseTab()
  ln.setLogout()
  
})

it('it should not Add contact details without email', () => {
  CD.setGoToContactDetailsPage();
  CD.setAddContactButton()
  CD.setinputName(varTest.text + ' ' + varTest2.testname)
  //CD.setinputEmail('softwaretest'+varTest3.number +'@qa.team')
  CD.setinputPhoneNumber('0901'+varTest2.number + '23')
  CD.setinputRole('sale/marketing')
  CD.setinputDepartment()
  CD.setSummitButton()
  CD.setConfirmAddContact('email cannot be empty!')
  CD.setCloseTab()
  ln.setLogout()
  
})

it('it should not Add contact details without phone number', () => {
  CD.setGoToContactDetailsPage();
  CD.setAddContactButton()
  CD.setinputName(varTest.text + ' ' + varTest2.testname)
  CD.setinputEmail('softwaretest'+varTest3.number +'@qa.team')
  CD.setinputPhoneNumber(' ')
  CD.setinputRole('sale/marketing')
  CD.setinputDepartment()
  //CD.setSummitButton()
  CD.setConfirmAddContact('phoneNumber cannot be empty!')
  CD.setCloseTab()
  ln.setLogout()
  
})

it('it should not Add contact details without Role', () => {
  CD.setGoToContactDetailsPage();
  CD.setAddContactButton()
  CD.setinputName(varTest.text + ' ' + varTest2.testname)
  CD.setinputEmail('softwaretest'+varTest3.number +'@qa.team')
  CD.setinputPhoneNumber('0901'+varTest2.number + '23')
 // CD.setinputRole('sale/marketing')
  CD.setinputDepartment()
  CD.setSummitButton()
  CD.setConfirmAddContact('designation cannot be empty!')
  CD.setCloseTab()
  ln.setLogout()
  
})

it('it should not Add contact details without department', () => {
  CD.setGoToContactDetailsPage();
  CD.setAddContactButton()
  CD.setinputName(varTest.text + ' ' + varTest2.testname)
  CD.setinputEmail('softwaretest'+varTest3.number +'@qa.team')
  CD.setinputPhoneNumber('0901'+varTest2.number + '23')
  CD.setinputRole('sale/marketing')
  //CD.setinputDepartment()
  CD.setSummitButton()
  CD.setConfirmAddContact('departmentId cannot be empty!')
  CD.setCloseTab()
  ln.setLogout()
  
})

it('it should view contact details Added', () => {
  CD.setGoToContactDetailsPage();
  CD.setViewContact()
  CD.setCloseTab()
  ln.setLogout()
  
})





it('it should  Edit name', () => {
  CD.setGoToContactDetailsPage();
  CD.setEditContact()
  CD.setinputName2('ab' + varTest.text + ' ' + 'ZY'+ varTest2.testname)
  CD.setSummitButton()
  CD.setConfirmAddContact('Contact details was successfully updated.')
  ln.setLogout()
    
})

it('it should  Edit Email', () => {
  CD.setGoToContactDetailsPage();
  CD.setEditContact()
  CD.setinputEmail2('newsoftwaretestzz'+varTest3.number +'@qa.team')
  CD.setSummitButton()
  CD.setConfirmAddContact('Contact details was successfully updated.')
  ln.setLogout()
    
})


it('it should  Phone number', () => {
  CD.setGoToContactDetailsPage();
  CD.setEditContact()
  CD.setinputPhoneNumber2('0901'+varTest2.number + '99')
  CD.setSummitButton()
  CD.setConfirmAddContact('Contact details was successfully updated.')
  ln.setLogout()
    
})

it('it should edit Role', () => {
  CD.setGoToContactDetailsPage();
  CD.setEditContact()
  CD.setinputRole2('Banker')
  CD.setSummitButton()
  CD.setConfirmAddContact('Contact details was successfully updated.')
  ln.setLogout()
    
})

it('it should edit Department', () => {
  CD.setGoToContactDetailsPage();
  CD.setEditContact()
  CD.setinputDepartment2()
  CD.setSummitButton()
  CD.setConfirmAddContact('Contact details was successfully updated.')
  ln.setLogout()
    
})

it('it should  Edit All', () => {
  CD.setGoToContactDetailsPage();
  CD.setEditContact()
  CD.setinputName2('cd' + varTest.text + ' ' + 'wx'+ varTest2.testname)
  CD.setinputEmail2('backsoftwaretest'+varTest3.number +'@qa.team')
  CD.setinputPhoneNumber2('0901'+varTest2.number + '11')
  CD.setinputRole2('Tech')
  CD.setinputDepartment2()
  CD.setSummitButton()
  CD.setConfirmAddContact('Contact details was successfully updated.')
  ln.setLogout()
    
})



it('it should  Edit name with empty field', () => {
  CD.setGoToContactDetailsPage();
  CD.setEditContact()
  CD.setinputName2(' ')
  CD.setSummitButton()
  CD.setConfirmAddContact('name cannot be empty!')
  CD.setCloseTab()
  ln.setLogout()
    
})

it('it should  Edit Email with empty field', () => {
  CD.setGoToContactDetailsPage();
  CD.setEditContact()
  CD.setinputEmail2(' ')
  CD.setSummitButton()
  CD.setConfirmAddContact('email cannot be empty!')
  CD.setCloseTab()
  ln.setLogout()
    
})


it('it should  edit Phone number with empty field', () => {
  CD.setGoToContactDetailsPage();
  CD.setEditContact()
  CD.setinputPhoneNumber2(' ')
  //CD.setSummitButton()
  CD.setConfirmAddContact('phoneNumber cannot be empty!')
  CD.setCloseTab()
  ln.setLogout()
    
})

it('it should edit Role with empty field', () => {
  CD.setGoToContactDetailsPage();
  CD.setEditContact()
  CD.setinputRole2(' ')
  CD.setSummitButton()
  CD.setConfirmAddContact('designation cannot be empty!')
  CD.setCloseTab()
  ln.setLogout()
    
})


it('it should  Edit All with empty field', () => {
  CD.setGoToContactDetailsPage();
  CD.setEditContact()
  CD.setinputName2(' ')
  CD.setinputEmail2(' ')
  CD.setinputPhoneNumber2(' ')
  CD.setinputRole2(' ')
  CD.setinputDepartment2()
 // CD.setSummitButton()
  CD.setConfirmAddContact('name cannot be empty!')
  CD.setConfirmAddContact('email cannot be empty!')
  CD.setConfirmAddContact('phoneNumber cannot be empty!')
  CD.setConfirmAddContact('designation cannot be empty!')
  CD.setCloseTab()
  ln.setLogout()
    
})












it('it should search for fullname', () => {
  CD.setGoToContactDetailsPage();
  CD.setSearch('CFFOV CREVKQCPAM')
  CD.setClickSearch()
  //CD.setVerifySearcch('CFFOV CREVKQCPAM')
  ln.setLogout()
    
})


it('it should search for incomplete name', () => {
  CD.setGoToContactDetailsPage();
  CD.setSearch('CFFOV')
  CD.setClickSearch()
  //CD.setVerifySearcch('CFFOV')
  ln.setLogout()
    
})

it('it should search for full email', () => {
  CD.setGoToContactDetailsPage();
  CD.setSearch('softwaretest79370@qa.team')
  CD.setClickSearch()
 // CD.setVerifySearcch('softwaretest79370@qa.team')
  ln.setLogout()
    
})

it('it should search for incomplete email', () => {
  CD.setGoToContactDetailsPage();
  CD.setSearch('softwaretest793')
  CD.setClickSearch()
  //CD.setVerifySearcch('softwaretest793')
  ln.setLogout()
    
})

it('it should search for full phonenumber', () => {
  CD.setGoToContactDetailsPage();
  CD.setSearch('09018464723')
  CD.setClickSearch()
  //CD.setVerifySearcch('09018464723')
  ln.setLogout()
    
})


it('it should search for full phonenumber', () => {
  CD.setGoToContactDetailsPage();
  CD.setSearch('090184')
  CD.setClickSearch()
 // CD.setVerifySearcch('090184')
  ln.setLogout()
    
})

it('it should search for full role', () => {
  CD.setGoToContactDetailsPage();
  CD.setSearch('sale/marketing')
  CD.setClickSearch()
  //CD.setVerifySearcch('sale/marketing')
  ln.setLogout()
    
})

it('it should search for full role', () => {
  CD.setGoToContactDetailsPage();
  CD.setSearch('sale/mark')
  CD.setClickSearch()
 // CD.setVerifySearcch('sale/mark')
  ln.setLogout()
    
})

it('it should search for full Department', () => {
  CD.setGoToContactDetailsPage();
  CD.setSearch('Dept-FEB-oiUq')
  CD.setClickSearch()
 // CD.setVerifySearcch('Dept-FEB-oiUq')
  ln.setLogout()
    
})

it('it should search for incomplete Department', () => {
  CD.setGoToContactDetailsPage();
  CD.setSearch('Dept-FE')
  CD.setClickSearch()
  //CD.setVerifySearcch('Dept-FE')
  ln.setLogout()
    
})





})