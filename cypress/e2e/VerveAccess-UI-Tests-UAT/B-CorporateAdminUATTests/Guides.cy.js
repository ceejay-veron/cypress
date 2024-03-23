/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import RandomNumber from "../../../pom/Random.js"
import userGuide from "../../../POM/userGuide.js"


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
      ln.setUserName(Cypress.env('username1'))
      ln.setPassword(Cypress.env('password1'))
      ln.clickSubmit();
      cy.wait(6000)
      
       })
  
  })

    const varTest = new RandomNumber();
    const varTest2 = new RandomNumber();
    const varTest3 = new RandomNumber();

    const ln=new Login();
    const guide=new userGuide();
    
        it('should Verify User Role', () => {

        cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
        cy.contains('CORPORATE_ADMIN').should('be.visible')
        cy.get('.red').click()
        cy.wait(6000)
        //ln.setLogout()

        })

        it('should View guides section from the dashboard after login ', () => {    
            //Views the guides section, views all categories from the dashboard and views category guides from the dashboard
            guide.GetDashboardGuidesSection();
            guide.ViewAllGuidesFromDashboard();
            guide.ViewCategoryGuidesFromDashboard();
            ln.setLogout()
                
        })

        it('should view the guides page ', () => {    
            //View the Guides Page
            guide.GoToAdminGuidesPage()
            ln.setLogout()                    
        })

        it('should view the category guides page ', () => {    
            //View the Guides uploaded for the selected category
            guide.GoToAdminCategoryGuidesPage()
            ln.setLogout()                    
        })

        it('should download selected guide from a category ', () => {    
            //Download an uploaded guide
            guide.DownloadAdminGuide()
            cy.wait(16000)
            ln.setLogout()                    
        })

        it('should search for an existing category ', () => {    
            //Search for an existing category on the Guides Page
            guide.GoToAdminGuidesPage()
            guide.SearchGuides('Scheme Rules');
            guide.SetVerifySearch('Scheme Rules')
            ln.setLogout()
                    
        })  

        it('should search for a non-existing category ', () => {    
            //Search for a non-existing category on the Guides Page
            guide.GoToAdminGuidesPage()
            guide.SearchGuides('Non-existing Category');
            guide.VerifyNoResultsReturned();
            ln.setLogout()
                    
        })

        it('should search for an existing category without guides uploaded for the organizationType', () => {    
            //Search for a existing category on the Guides Page that does not have categories uploaded for the user's organization type
            guide.GoToAdminGuidesPage()
            guide.SearchGuides('Card Perso Category');
            guide.VerifyNoResultsReturned();
            ln.setLogout()
                    
        })

        it('should search for existing guides within a category ', () => {    
            //Search for guides existing within the selected category
            guide.GoToAdminCategoryGuidesPage();
            guide.SearchGuides('Verve Scheme_Guides');
            guide.SetVerifySearch('Verve Scheme_Guides');
            ln.setLogout()                    
        })

        it('should search for guides not existing within the selected category ', () => {    
            //Search for guides not existing within the selected category but uploaded for the same organization Type of the user
            guide.GoToAdminCategoryGuidesPage()
            guide.SearchGuides('Issuer_Guides-88590')
            guide.VerifyNoResultsReturned();
            ln.setLogout()                    
        })

        it('should search for existing guides within a category uploaded for a different organization type', () => {    
            //Search for guides existing within the selected category but uploaded for a different organization Type
            guide.GoToAdminCategoryGuidesPage()
            guide.SearchGuides('Corporate_Guides-63694')
            guide.VerifyNoResultsReturned();
            ln.setLogout()                    
        })

        it('should search for existing guides within a category uploaded for a different organization type', () => {    
            //Search for non-existing guides
            guide.GoToAdminCategoryGuidesPage()
            guide.SearchGuides('UserManual00001')
            guide.VerifyNoResultsReturned();
            ln.setLogout()                    
        })

        
    })