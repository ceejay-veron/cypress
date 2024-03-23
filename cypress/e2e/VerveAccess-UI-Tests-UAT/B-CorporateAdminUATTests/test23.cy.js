/*
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

    cy.get('form').within(($form) => {
      ln.setUserName(Cypress.env('username4'))
      ln.setPassword(Cypress.env('password4'))
      ln.clickSubmit();
      cy.wait(6000)
      
       })


})



/* beforeEach(() => {
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



it('Search by complete Artwork ID on Approved tab', () => {

  
  
  //const imageFile = "./files/IMG_1498.jpg"
  cy.get('#burger-cont > :nth-child(1)').should('be.visible').click()
  cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(7) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
  cy.get('[style="display: flex;"] > .j-c-c').click()
  // cy.wait(10000)
  cy.get("input[name='name']").should('be.visible').type('manmnauyi')
  // cy.get('input[accept=".csv"]').attachFile('verve.jpg')

 

})

it('upload file', () => {

  //cy.get('input[accept=".csv"]').attachFile('verve.jpg')
  cy.fixture('VMMR_30.csv', { encoding: null }).as('myFixture')
cy.get('input[accept=".csv"]').selectFile('@myFixture', {force: true})
cy.wait(6000)
cy.get('input:has-text("Save")').click()
//cy.get('text=Save').click()
//cy.get("input[Disabled type='button']").click()
//cy.get("(//div[@class='ant-form-item-control'])[2]").shadow().find('Save').click()
//cy.get('button').contains('span', 'Save').should('be.visible').click({force: true});
//cy.get("button[class='ant-btn ant-btn-primary']").contains('Save').click({force: true})
//cy(").children().find('Save').click()

//cy.get(".class='ant-form-item-control']").children("button[class='ant-btn ant-btn-primary']").click()
//cy.find('Save').click()
//cy.contains('Save').click({force: true})
cy.wait(8000)


//cy.find('Save').click()
//cy.get("button[class='ant-btn ant-btn-primary']").click()
//cy.get("input[type='button']").click()
//cy.find('Save').click()
//cy.get("body > div:nth-child(9) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1)").click()
//cy.get(".class='ant-form-item-control']").children("button[class='ant-btn ant-btn-primary']").click()
//cy.get(".class='ant-form-item-control']").children().find('Save').click()
 // cy.get('input[accept=".csv"]').selectFile('fixtures\\VMMR.30.CSV', { action: 'drag-drop' })
//cy.document().selectFile('file.json', { action: 'drag-drop' })
})



})

*/