/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import department from "../../../pom/Department.js"


    const varTest = new RandomNumber();
    const varTest2 = new RandomNumber();
    const varTest3 = new RandomNumber();

    const ln=new Login();
    const dp=new department();

    describe('visit Verve Access', () => {

    before(() => {

      cy.visit('https://verve-access-admin.k8.isw.la/admin/signin')
     // cy.title().should('eq', 'Verve Access')
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
    


    

 
     

     it('should Add Department', () => {
      
        dp.setGoToDepartmentPage();
        dp.setAddButton()
        dp.setAddDepartButton(varTest.test + varTest2.newname)
        dp.setSuccessMessage()
        cy.reload()
        ln.setLogout()

     })



     it('should Search by Complete Department', () => {


        dp.setGoToDepartmentPage();
        dp.setSearch(varTest.test + varTest2.newname)
        dp.setVerifySearch(varTest.test + varTest2.newname)
        cy.reload()
        ln.setLogout()


     })


     it('should Search by incomplete Department', () => {

        dp.setGoToDepartmentPage();
        dp.setSearch(varTest.test)
        dp.setVerifySearch(varTest.test)
        cy.reload()
        ln.setLogout()


     })


     it('should Search by invalid Department', () => {
        

        dp.setGoToDepartmentPage();
        dp.setSearch("trjshdjdh udnskvfki")
        dp.setVerifySearch("No Data to Display")
        cy.reload()
        ln.setLogout()
        
     })
    

     
})