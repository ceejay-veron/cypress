/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import Reports from "../../../pom/report.js"


describe('visit Verve Access', () => {

  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();

  const ln=new Login();
  const Rp=new  Reports();
  
  before(() => {

    cy.visit('https://verve-access-admin.k8.isw.la/admin/signin')
    cy.title().should('eq', 'Verve Access')
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
     

        it('Search by  complete Report Title', () => {
                
          // Search by  complete Report Title
          Rp.setGoToReportPage();
          Rp.setSearch('unwhitelistcardtemplate - without PAN (1).xls')
          //Rp.setVerifySearch('unwhitelistcardtemplate - without PAN (1).xls')
          ln.setLogout()

        })

        it('Search by  Incomplete Report Title', () => {
         
         // Search by  Incomplete Report Title
         Rp.setGoToReportPage();
         Rp.setSearch('unwhitelistcardtemplate')
        // Rp.setVerifySearch('unwhitelistcardtemplate')
         ln.setLogout()

        })

        it('Search by  non-existing Title', () => {
           
       
            // Search by  non-existing Title
            Rp.setGoToReportPage();
            Rp.setSearch("trjshdjdh udnskvfki")
            Rp.setClickSearch()
            Rp.setVerifySearch("No Data to Display")
            ln.setLogout()

        })


        
it('it should search for Report of last 30 days', () => {
  Rp.setGoToReportPage();
  Rp.setselectFilter()
  Rp.setDateTolast30days()
  ln.setLogout()
})


it('it should search for Report of This Month', () => {
  Rp.setGoToReportPage();
  Rp.setselectFilter()
  Rp.setDateToThisMonth() 
  ln.setLogout()
})
  
  
it('it should search for Report of last Month', () => {
  Rp.setGoToReportPage();
  Rp.setselectFilter()
  Rp.setDateToLastMonth()
  ln.setLogout()
})

it('it should search for Report of Today', () => {
  Rp.setGoToReportPage();
  Rp.setselectFilter()
  Rp.setDateToToday()
  ln.setLogout()
})
 

it('it should search for Report of Yesterday', () => {
  Rp.setGoToReportPage();
  Rp.setselectFilter()
  Rp.setDateToYesterday()
  ln.setLogout()
})

it('it should search for Report of last seven days', () => {
  Rp.setGoToReportPage();
  Rp.setselectFilter()
  Rp.setDateToLast7Days()
  ln.setLogout()
})

      
    
      
            
      
       
})


