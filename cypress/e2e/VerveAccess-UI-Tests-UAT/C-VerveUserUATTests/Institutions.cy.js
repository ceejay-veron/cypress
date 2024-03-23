/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import  institution from "../../../pom/institution.js"



describe('visit Verve Access', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      // ok
      cy.visit('https://verve-access-admin.k8.isw.la/admin/signin')
    })

    const varTest = new RandomNumber();
    const varTest2 = new RandomNumber();
    const varTest3 = new RandomNumber();

    const ln=new Login();
    const is=new institution();
    
    

    it('should test for url, Navigate to instition Page and search', () => {
     // cy.title().should('eq', 'Verve Access')
      cy.location('protocol').should('eq', 'https:')
        // /cy.contains('Get Started Now').click({timeout : 2000})
  
        cy.url().should('include', 'admin')
        cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('verveUser'))
            ln.setPassword(Cypress.env('verveUserPass'))
            ln.clickSubmit();
            
        })
        cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
        cy.contains('VERVE USER').should('be.visible')
        //cy.get('.red').click()


        // Search by complete Institution Name
      
        is.setGoToInstitionPage();
        is.setSearch("njoku")
       // is.setVerifySearch("Njoku Ministries")
        cy.reload()

        
        // Search by incomplete Institution Name
      
        is.setGoToInstitionPage();
        is.setSearch("njoku")
       // is.setVerifySearch("Njoku")
        cy.reload()

         // Search by complete email
      
         is.setGoToInstitionPage();
         is.setSearch("amazing@qa.team")
         //is.setVerifySearch("amazing@qa.team")
         cy.reload()

         // Search by complete email
      
         is.setGoToInstitionPage();
         is.setSearch("amazing")
         is.setVerifySearch("amazing")
         cy.reload()

         // Search by complete Phone number
      
         is.setGoToInstitionPage();
         is.setSearch("09099002003")
         is.setVerifySearch("09099002003")

         // Search by incomplete phone number
      
         is.setGoToInstitionPage();
         is.setSearch("090990")
         is.setVerifySearch("090990")
         cy.reload()

         
         // Search by invalid phone number
      
         is.setGoToInstitionPage();
         is.setSearch("473890")
         is.setVerifySearch("No Data to Display")
         cy.reload()

        // Search by innvalid parameter
      
        is.setGoToInstitionPage();
        is.setSearch("caosasuddsds sdhsid")
        is.setVerifySearch("No Data to Display")
        cy.reload()
        
     })

     it('should Navigate to inactive instition Page and search', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('verveUser'))
            ln.setPassword(Cypress.env('verveUserPass'))
            ln.clickSubmit();
            
        })

        // Search by complete Institution Name
      
        is.setGoToInstitionPage();
        is.setInactiveTab()
        is.setSearch("goodbank XSMIG")
        //is.setVerifySearch("goodbank XSMIG")
        cy.reload()

        
        // Search by incomplete Institution Name
      
        is.setGoToInstitionPage();
        is.setInactiveTab()
        is.setSearch("good")
       // is.setVerifySearch("good")
        cy.reload()

        // Search by complete email
      
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("goodbank26086@qa.team")
        // is.setVerifySearch("goodbank26086@qa.team")
         cy.reload()

         // Search by complete email
      
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("good")
         is.setVerifySearch("good")
         cy.reload()

         // Search by complete Phone number
      
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("09099499350")
        // is.setVerifySearch("09099499350")

         // Search by incomplete phone number
      
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("09099")
         is.setVerifySearch("09099")
         cy.reload()

         
         // Search by invalid phone number
      
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("473890")
         is.setVerifySearch("No Data to Display")
         cy.reload()

        // Search by invalid parameter
      
        is.setGoToInstitionPage();
        is.setInactiveTab()
        is.setSearch("caosasuddsds sdhsid")
        is.setVerifySearch("No Data to Display")
        cy.reload()
        ln.setLogout()
       
     })
     
})