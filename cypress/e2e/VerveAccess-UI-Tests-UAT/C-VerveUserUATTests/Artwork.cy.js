/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import  Artwork from "../../../pom/artwork.js"





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
    const Aw=new Artwork();
 
    

    it('should test for url, Navigate to the Artwork page and search', () => {
        cy.title().should('eq', 'Verve Access')
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

     // Search by complete Artwork ID on Approved tab
      
        Aw.setGoToArtworkPage();
        Aw.setSearch("VERVE-NEW-2023-02-23-1116398733")
        Aw.setVerifySearch("VERVE-NEW-2023-02-23-1116398733")
        cy.reload()

        
        // Search by incomplete Artwork ID on Approved tab
      
        Aw.setGoToArtworkPage();
        Aw.setSearch("VERVE-NEW-2023")
        Aw.setVerifySearch("VERVE-NEW-2023")
        cy.reload()

         // Search by complete Artwork Title on Approved tab
      
         Aw.setGoToArtworkPage();
         Aw.setSearch("Perso artwork")
         Aw.setVerifySearch("Perso artwork")
         cy.reload()

         // Search by incomplete email on Approved tab
      
         Aw.setGoToArtworkPage();
         Aw.setSearch("Pers")
         Aw.setVerifySearch("Pers")
         cy.reload()


        // Search by innvalid parameter on Approved tab
      
        Aw.setGoToArtworkPage();
        Aw.setSearch("caosasuddsds sdhsid")
        Aw.setVerifySearch("No Data to Display")
        cy.reload()


 // Search by complete Artwork ID on pending tab
      
        Aw.setGoToArtworkPage();
        Aw.setPendingtab()
        Aw.setSearch("VERVE-PRO-2023-02-28-")
        //Aw.setVerifySearch("VERVE-PRO-2023-02-28-")
        cy.reload()

        
        // Search by incomplete Artwork ID on pending tab
      
      
        Aw.setGoToArtworkPage();
        Aw.setPendingtab()
        Aw.setSearch("VERVE-PRO-2023")
       // Aw.setVerifySearch("VERVE-PRO-2023")
        cy.reload()

         // Search by complete Artwork Title on pending tab
      
      
         Aw.setGoToArtworkPage();
         Aw.setPendingtab()
         Aw.setSearch("New ArtworkII")
         //Aw.setVerifySearch("New ArtworkII")
         cy.reload()

         // Search by incomplete email on pending tab
      
      
         Aw.setGoToArtworkPage();
         Aw.setPendingtab()
         Aw.setSearch("New")
         //Aw.setVerifySearch("New")
         cy.reload()


        // Search by innvalid parameter on pending tab
      
      
        Aw.setGoToArtworkPage();
        Aw.setPendingtab()
        Aw.setSearch("caosasuddsds sdhsid")
        Aw.setVerifySearch("No Data to Display")
        cy.reload()



         // Search by complete Artwork ID on Reject tab
      
         Aw.setGoToArtworkPage();
         Aw.setRejectedtab()
         Aw.setSearch("VERVE-PRO-2023-01-03-0918424864")
         Aw.setVerifySearch("VERVE-PRO-2023-01-03-0918424864")
         cy.reload()
 
         
         // Search by incomplete Artwork ID on Reject tab
       
       
         Aw.setGoToArtworkPage();
         Aw.setRejectedtab()
         Aw.setSearch("VERVE-PRO-2023")
         Aw.setVerifySearch("VERVE-PRO-2023")
         cy.reload()
 
          // Search by complete Artwork Title on Reject tab
       
       
          Aw.setGoToArtworkPage();
          Aw.setRejectedtab()
          Aw.setSearch("Amelia Huff")
          //Aw.setVerifySearch("Amelia Huff")
          cy.reload()
 
          // Search by incomplete Artwork Title on Reject tab
       
       
          Aw.setGoToArtworkPage();
          Aw.setRejectedtab()
          Aw.setSearch("Amelia")
          //Aw.setVerifySearch("Amelia")
          cy.reload()
 
 
         // Search by invalid parameter on Reject tab
       
       
         Aw.setGoToArtworkPage();
         Aw.setRejectedtab()
         Aw.setSearch("caosasuddsds sdhsid")
         Aw.setVerifySearch("No Data to Display")
         cy.reload()
         ln.setLogout()
        
     })
     

     
})