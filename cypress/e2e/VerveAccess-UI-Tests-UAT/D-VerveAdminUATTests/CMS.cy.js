/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import RandomNumber from "../../../pom/Random.js"
import cms from "../../../POM/cms.js"


describe('visit Verve Access', () => {
   
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

    const varTest = new RandomNumber();
    const varTest2 = new RandomNumber();
    const varTest3 = new RandomNumber();

    const ln=new Login();
    const cm=new cms();
    
        it('should Verify User Role', () => {

        cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
        cy.contains('VERVE ADMIN').should('be.visible')
        cy.get('.red').click()

        })

        it('should View the dashboard section of the CMS page ', () => {    
            //Navigates to the Guides section of the CMS page
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            ln.setLogout()
                
        })

        it('should update the dashboard page title for corporates ', () => {    
            //Updates the page title for the dashboard for users belonging to corporate institutions
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.UpdateCorporateDashboardTitle();
            cm.VerifyPageTitleUpdate();
            ln.setLogout()
                
        })

        it('should update the dashboard page title for issuers ', () => {    
            //Updates the page title for the dashboard for users belonging to issuer institutions
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.UpdateIssuerDashboardTitle();
            cm.VerifyPageTitleUpdate();
            ln.setLogout()
                
        })

        it('should update the dashboard page title for acquirers ', () => {    
            //Updates the page title for the dashboard for users belonging to acquirer institutions
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.UpdateAcquirerDashboardTitle();
            cm.VerifyPageTitleUpdate();
            ln.setLogout()
                
        })

        it('should update the dashboard page title for card persos ', () => {    
            //Updates the page title for the dashboard for users belonging to card personalization institutions
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.UpdatePersoDashboardTitle();
            cm.VerifyPageTitleUpdate();
            ln.setLogout()
                
        })

        it('should update the artwork page title for corporates ', () => {    
            //Updates the page title for the artwork page for users belonging to corporate institutions
            cm.setGoTocmsPage();
            cm.setGoToArtworkSection();
            cm.UpdateCorporateArtworkPageTitle();
            cm.VerifyPageTitleUpdate();
            ln.setLogout()
                
        })

         it('should update the artwork page title for issuers ', () => {    
            //Updates the page title for the artwork page for users belonging to issuer institutions
            cm.setGoTocmsPage();
            cm.setGoToArtworkSection();
            cm.UpdateIssuerArtworkPageTitle();
            cm.VerifyPageTitleUpdate();
            ln.setLogout()
                
        })

        it('should update the artwork page title for acquirers ', () => {    
            //Updates the page title for the artwork page for users belonging to acquirer institutions
            cm.setGoTocmsPage();
            cm.setGoToArtworkSection();
            cm.UpdateAcquirerArtworkPageTitle();
            cm.VerifyPageTitleUpdate();
            ln.setLogout()
                
        })

        it('should update the artwork page title for card persos ', () => {    
            //Updates the page title for the artwork page for users belonging to card personalization institutions
            cm.setGoTocmsPage();
            cm.setGoToArtworkSection();
            cm.UpdateCardPersoArtworkPageTitle();
            cm.VerifyPageTitleUpdate();
            ln.setLogout()
                
        })

        it('should update the cards page title for corporates ', () => {    
            //Updates the page title for the cards page for users belonging to corporate institutions
            cm.setGoTocmsPage();
            cm.setGoToCardSection();
            cm.UpdateCorporateCardsPageTitle();
            cm.VerifyPageTitleUpdate();
            ln.setLogout()
                
        })

        it('should update the cards page title for issuers ', () => {    
            //Updates the page title for the cards page for users belonging to issuer institutions
            cm.setGoTocmsPage();
            cm.setGoToCardSection();
            cm.UpdateIssuerCardsPageTitle();
            cm.VerifyPageTitleUpdate();
            ln.setLogout()
                
        })

        it('should update the cards page title for acquirers ', () => {    
            //Updates the page title for the cards page for users belonging to acquirer institutions
            cm.setGoTocmsPage();
            cm.setGoToCardSection();
            cm.UpdateAcquirerCardsPageTitle();
            cm.VerifyPageTitleUpdate();
            ln.setLogout()
                
        })

        it('should update the cards page title for persos ', () => {    
            //Updates the page title for the cards page for users belonging to card personalization institutions
            cm.setGoTocmsPage();
            cm.setGoToCardSection();
            cm.UpdatePersoCardsPageTitle();
            cm.VerifyPageTitleUpdate();
            ln.setLogout()
                
        })

        it('should view the category modal ', () => {    
            //View the add category modal and it's elements
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setGetCategoryModal();
            ln.setLogout()
                    
        })

        it('should attempt to add a category without the title ', () => {    
            //This test attempts adding a new category without a title/name
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setGetCategoryModal1();
            cm.setSaveCategory();
            cm.setSaveCategoryError1();
            ln.setLogout()
                    
        })

        it('should create a new category', () => {    
            //This creates a new category for guide upload
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setGetCategoryModal1();
            cm.setCategoryTitle(varTest.CategoryName);
            cm.setSaveCategory();
            cm.setSaveCategorySuccess();
            ln.setLogout()
               
        })

        it('should create a category using a title/name that aleady exists', () => {    
            //This creates a category using a name/title that already exists in the database
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setGetCategoryModal1();
            cm.setCategoryTitle("RandomCategoryName");
            cm.setSaveCategory();
            cm.setSaveCategoryError();
            ln.setLogout()
                    
        })

        it('should view all categories created', () => {
            //This test views the category list and confirms that created categories are displayed
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setGetCategoryList();
            cy.reload({timeout : 6000})
            ln.setLogout()
        })

        /*it('should attempt to upload a guide without all parameters', () => {
            //This test attempts creating a user guide without the title, category and file attachment
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            //cm.setGuideTitle(varTest.GuideTitle);
            //cm.setSelectCategory();
            cm.setCreateGuide();
            cm.setCreateGuideError();
            cm.setCreateGuideError1();
            //cy.contains('supported format is .pdf').should('be.visible')
            cm.setCreateGuideError2();
            cy.reload()
            ln.setLogout()
        })

        it('should attempt to upload a guide without the guide category and attached file', () => {
            //This test attempts creating a user guide without the guide category and file attachment. Only the guide title is provided
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setGuideTitle(varTest.Title);
            //cm.setSelectCategory();
            cm.setCreateGuide();
            cm.setCreateGuideError1();
            cm.setCreateGuideError2();
            ln.setLogout()
        })

        it('should attempt to upload a guide without the file attachment', () => {
            //This test attempts creating a user guide without the file attachment. Only the category and guide title are supplied
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setGuideTitle(varTest.Title);
            cm.setSelectCategory();
            cm.setCreateGuide();
            cm.setCreateGuideError2();
            ln.setLogout()
        })*/

        it('should view the guides table ', () => {
            //This test views the guide table and ensures all columns are present
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setViewGuideTableDetails();
            ln.setLogout()
        })

        it('should search for a guide using the category name', () => {
            //This test searches for an uploaded guide using the category name
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setSearch('Verve-n3os5');
            cm.setVerifySearch('Verve-n3os5')
            cy.reload({timeout : 6000})
            ln.setLogout()
        })

        it('should search for a guide using the guide name', () => {
            //This test searches for an uploaded guide using the guide name
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setSearch('Verve-n3os5');
            cm.setVerifySearch('Verve-n3os5')
            cy.reload({timeout : 6000})
            ln.setLogout()
        })

        it('should search for a guide using a non-existing guide/category name', () => {
            //This test searches for guides using a name that does not exist (name used to search should not exist as a guide or category name)
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setSearch('NoCategoryGuide');
            cm.VerifyNoResultsReturned();
            cy.reload({timeout : 6000})
            ln.setLogout()
        })

        it('should view the delete modal', () => {
            //This test views the delete modal
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setViewDeleteGuidePopUp();
            cy.reload({timeout : 6000})
            ln.setLogout()
        })

        it('should close the delete pop-up confirmation', () => {
            //This test closes the delete pop-up confirmation after viewing
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setCloseDeleteGuidePopUp();
            //cy.reload({timeout : 6000})
            ln.setLogout()
        })

        it('should cancel delete action', () => {
            //This test cancels delete action
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setCancelDeleteGuideAction();
            //cy.reload({timeout : 6000})
            ln.setLogout()
        })

        it('should delete an uploaded guide', () => {
            //This test deletes a guide that is obsolete or needs to be updates
            cm.setGoTocmsPage();
            cm.setGoToDashboardSection();
            cm.setDeleteGuide();
            cm.setConfirmGuideDeletion();
            //cy.reload({timeout : 6000})
            ln.setLogout()
        })

        
    })