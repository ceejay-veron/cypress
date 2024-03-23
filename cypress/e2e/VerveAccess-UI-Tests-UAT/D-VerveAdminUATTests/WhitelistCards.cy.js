/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import ChipType from "../../../POM/chiptype.js"
import  RandomNumber from "../../../pom/Random.js"
import  institution from "../../../pom/institution.js"
import  Artwork from "../../../pom/artwork.js"
import  whitelistCards from "../../../pom/whitelistCards.js"
import Users from "../../../pom/users.js"
import Cards from "../../../pom/cards.js"
import department from "../../../pom/Department.js"
import userP from "../../../pom/userPermission.js"
import UserP from "../../../pom/userPermission.js"
import Reports from "../../../pom/report.js"
import Decals from "../../../pom/Decals.js"






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
    const Wc=new whitelistCards();
      


     it('should Navigate to whitelist cards and search', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })

        // Search by first three pan number      
        Wc.setGoTowhitelistPage();
        Wc.setSearch("506")
        Wc.setVerifySearch("506")
        cy.reload()

        
        // Search by last four pan number
      
        Wc.setGoTowhitelistPage();
        Wc.setSearch("1858")
        Wc.setVerifySearch("1858")
        cy.reload()

         

        // Serach by innvalid parameter 
      
        Wc.setGoTowhitelistPage();
        Wc.setSearch("xxxxx903567")
        Wc.setVerifySearch("No Data to Display")
        cy.reload()
        ln.setLogout()

        
     })


     
})