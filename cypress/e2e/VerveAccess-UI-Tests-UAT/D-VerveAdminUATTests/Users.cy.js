/*
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

    const ct=new ChipType();
    const ln=new Login();
    const is=new institution();
    const Aw=new Artwork();
    const Wc=new whitelistCards();
    const Us=new Users();
    const Cs=new Cards();
    const dp=new department();
    const Up=new UserP();
    const Rp=new Reports();
    const Dc=new Decals();


    

  

     it('should Navigate to user and search', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })

        // Search by Complete first name  on active tab     
        Us.setGoToUserPage();
        Us.setSearch("Onyedikachi")
        Us.setVerifySearch("Onyedikachi")
        cy.reload()

        // Search by inComplete first name  on active tab     
        Us.setGoToUserPage();
        Us.setSearch("Onye")
        Us.setVerifySearch("Onye")
        cy.reload()

        
        // Search by Complete last Name on active tab
      
        Us.setGoToUserPage();
        Us.setSearch("Anumudu")
        Us.setVerifySearch("Anumudu")
        cy.reload()

        // Search by inComplete last Name on active tab
      
        Us.setGoToUserPage();
        Us.setSearch("Anu")
        Us.setVerifySearch("Anu")
        cy.reload()

        // Search by Complete Email name on active tab
      
        Us.setGoToUserPage();
        Us.setSearch("mayowa.onaolapo@interswitchgroup.com")
        Us.setVerifySearch("mayowa.onaolapo@interswitchgroup.com")
        cy.reload()

        // Search by inComplete email on active tab
      
        Us.setGoToUserPage();
        Us.setSearch("mayowa.onaolapo")
        Us.setVerifySearch("mayowa.onaolapo")
        cy.reload()

         

        // Serach by innvalid parameter on on active tab
      
        Us.setGoToUserPage();
        Us.setSearch("xxxxx903567")
        Us.setVerifySearch("No Data to Display")
        cy.reload()

                // Search by Complete first name  on inactive tab     
                Us.setGoToUserPage();
                Us.setInactiveTab()
                Us.setSearch("Ijeoma")
                Us.setVerifySearch("Ijeoma")
                cy.reload()
        
                // Search by inComplete first name  on inactive tab     
                Us.setGoToUserPage();
                Us.setInactiveTab()
                Us.setSearch("Ije")
                Us.setVerifySearch("Ije")
                cy.reload()
        
                
                // Search by Complete last Name on inactive tab
              
                Us.setGoToUserPage();
                Us.setInactiveTab()
                Us.setSearch("Olebuezi")
                Us.setVerifySearch("Olebuezi")
                cy.reload()
        
                // Search by inComplete last Name on inactive tab
              
                Us.setGoToUserPage();
                Us.setInactiveTab()
                Us.setSearch("Ole")
                Us.setVerifySearch("Ole")
                cy.reload()
        
                // Search by Complete Email name on inactive tab
              
                Us.setGoToUserPage();
                Us.setInactiveTab()
                Us.setSearch("lynda.okoro@interswitchgroup.com")
                //Us.setVerifySearch("lynda.okoro@interswitchgroup.com")
                cy.reload()
        
                // Search by inComplete email on inactive tab
              
                Us.setGoToUserPage();
                Us.setInactiveTab()
                Us.setSearch("lynda.okoro")
                //Us.setVerifySearch("lynda.okoro")
                cy.reload()
        
                 
        
                // Serach by innvalid parameter on on inactive tab
              
                Us.setGoToUserPage();
                Us.setInactiveTab()
                Us.setSearch("trjshdjdh udnskvfki")
                Us.setVerifySearch("No Data to Display")
                cy.reload()
                ln.setLogout()

        
     })

 
})
*/