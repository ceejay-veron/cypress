/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import RandomNumber from "../../../pom/Random.js"
import corpVMMR from "../../../POM/vmmr.js"


describe('visit Verve Access', () => {
   
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

    const varTest = new RandomNumber();
    const varTest2 = new RandomNumber();
    const varTest3 = new RandomNumber();

    const ln=new Login();
    const CV=new corpVMMR();
    
        it('should Verify User Role', () => {

        cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
        cy.contains('CORPORATE_USER').should('be.visible')
        cy.get('.red').click()
        cy.wait(6000)
        //ln.setLogout()

        })

        it('should view the VMMR page and its elements ', () => {    
            //Views the VMMR page and the elements
            CV.GetCorpUserVMMRPage();
            CV.GetCorpUserVMMRTable();
            //CV.GetCreateVMMRModal();
            ln.setLogout()
                
        })

        it('should view the guides page ', () => {    
            //View the Guides Page
            
            ln.setLogout()                    
        })
        
    })