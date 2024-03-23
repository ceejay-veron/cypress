/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import  Artwork from "../../../pom/artwork.js"

describe('visit Verve Access', () => {

  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();

  const ln=new Login();
  const Aw=new Artwork();
  
  before(() => {

    cy.visit('https://verve-access-admin.k8.isw.la/admin/signin')
    //cy.title().should('eq', 'Verve Access')
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
    ln.setUserName(Cypress.env('vervAdminUser'))
    ln.setPassword(Cypress.env('verveAdminPass'))
    ln.clickSubmit();
    cy.wait(6000)
    
     })

})

     it('Search by complete Artwork ID on Approved tab', () => {
    

        // Search by complete Artwork ID on Approved tab
      
        Aw.setGoToArtworkPage();
        Aw.setSearch("VERVE-NEW-2023-02-23-1116398733")
        Aw.setVerifySearch("VERVE-NEW-2023-02-23-1116398733")
        ln.setLogout()

     })


        it('Search by incomplete Artwork ID on Approved tab', () => {
      
        Aw.setGoToArtworkPage();
        Aw.setSearch("VERVE-NEW-2023")
        Aw.setVerifySearch("VERVE-NEW-2023")
        ln.setLogout()

        })

        it('Search by complete Artwork Title on Approved tab', () => {
      
         Aw.setGoToArtworkPage();
         Aw.setSearch("Perso artwork")
         Aw.setVerifySearch("Perso artwork")
         ln.setLogout()

        })

        it('Search by incomplete email on Approved tab', () => {
      
         Aw.setGoToArtworkPage();
         Aw.setSearch("Pers")
         Aw.setVerifySearch("Pers")
         ln.setLogout()

        })


        it('Search by innvalid parameter on Approved tab', () => {
              
        Aw.setGoToArtworkPage();
        Aw.setSearch("caosasuddsds sdhsid")
        Aw.setVerifySearch("No Data to Display")
        ln.setLogout()

        })


        it('Search by complete Artwork ID on pending tab', () => {
      
        Aw.setGoToArtworkPage();
        Aw.setPendingtab()
        Aw.setSearch("VERVE-GRA-2023-05-20-1026505673")
        Aw.setVerifySearch("VERVE-GRA-2023-05-20-1026505673")
        ln.setLogout()

        })

        it('Search by incomplete Artwork ID on pending tab', () => {        
            
        Aw.setGoToArtworkPage();
        Aw.setPendingtab()
        Aw.setSearch("VERVE-GRA-2023")
        Aw.setVerifySearch("VERVE-GRA-2023")
        ln.setLogout()

        })

        it('Search by complete Artwork Title on pending tab', () => { 
      
         Aw.setGoToArtworkPage();
         Aw.setPendingtab()
         Aw.setSearch("Artwork41884")
         Aw.setVerifySearch("Artwork41884")
         ln.setLogout()

        })


        it('Search by incomplete email on pending tab', () => { 
             
         Aw.setGoToArtworkPage();
         Aw.setPendingtab()
         Aw.setSearch("Art")
        // Aw.setVerifySearch("Artwork41884")
         ln.setLogout()

        })

        it('Search by innvalid parameter on pending tab', () => {
     
        Aw.setGoToArtworkPage();
        Aw.setPendingtab()
        Aw.setSearch("caosasuddsds sdhsid")
        Aw.setVerifySearch("No Data to Display")
        ln.setLogout()

        })


        it('Search by complete Artwork ID on Reject tab', () => {

      
         Aw.setGoToArtworkPage();
         Aw.setRejectedtab()
         Aw.setSearch("VERVE-PRO-2023-01-03-0918424864")
        // Aw.setVerifySearch("VERVE-PRO-2023-01-03-0918424864")
         ln.setLogout()

        })
 
        it('Search by incomplete Artwork ID on Reject tab', () => {
            
       
         Aw.setGoToArtworkPage();
         Aw.setRejectedtab()
         Aw.setSearch("VERVE-PRO-2023")
        // Aw.setVerifySearch("VERVE-PRO-2023")
         ln.setLogout()

        })

        it('Search by complete Artwork Title on Reject tab', () => {
                
          Aw.setGoToArtworkPage();
          Aw.setRejectedtab()
          Aw.setSearch("Artwork59042")
          //Aw.setVerifySearch("Artwork59042")
          ln.setLogout()

        })

        it('Search by incomplete Artwork Title on Reject tab', () => {
         
          Aw.setGoToArtworkPage();
          Aw.setRejectedtab()
          Aw.setSearch("Artwork")
         // Aw.setVerifySearch("Artwork59042")
          ln.setLogout()

        })

        it('Search by innvalid parameter on Reject tab', () => {
           
       
         Aw.setGoToArtworkPage();
         Aw.setRejectedtab()
         Aw.setSearch("caosasuddsds sdhsid")
         Aw.setVerifySearch("No Data to Display")
         ln.setLogout()

        })
      
        
       
})