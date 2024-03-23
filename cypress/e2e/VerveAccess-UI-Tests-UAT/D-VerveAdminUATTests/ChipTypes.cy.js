/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import ChipType from "../../../POM/chiptype.js"
import  RandomNumber from "../../../pom/Random.js"







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
   


    

    it('should test for url, Navigate to Chiptype Page and add chiptype', () => {
       // cy.title().should('eq', 'Verve Access')
        cy.location('protocol').should('eq', 'https:')
        // cy.contains('Get Started Now').click({timeout : 2000})
  
        cy.url().should('include', 'admin')
        cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })
        cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
       // cy.contains('VERVE ADMIN').should('be.visible')
        //cy.get('.red').click()

        ct.setGoToChipTypePage();
        //cy.url().should('include', 'admin/chiptypes')
      
        ct.setAddChipButton();
        ct.setCardType(varTest.test)
        ct.setCardMan(varTest2.newtest)
        ct.setChipprod(varTest2.testname)
        ct.setDate('28/09/2024')
        ct.setSubmitbutton()
        ct.setsuccessMessage()
        cy.wait(6000)


        //should not add existing chiptype
        ct.setAddChipButton()
        ct.setCardType(varTest.test)
        ct.setCardMan(varTest2.newtest)
        ct.setChipprod(varTest2.testname)
        ct.setDate('28/09/2024')
        ct.setSubmitbutton()
        ct.setErrorMessage1()
        cy.wait(6000)
        ct.setclose()


        //should not adding any chiptype dtails
        ct.setAddChipButton(' ')
        ct.setCardType(' ')
        ct.setCardMan(' ')
        ct.setChipprod(' ')
        ct.setSubmitbutton()
        ct.setErrorMessage2()
        ct.setErrorMessage3()
        ct.setErrorMessage4()
        cy.wait(6000)
        ct.setclose()

        //should not add chiptype without Card type
        ct.setAddChipButton();
        ct.setCardType(' ')
        ct.setCardMan(varTest2.newtest)
        ct.setChipprod(varTest2.testname)
        ct.setDate('28/09/2024')
        ct.setSubmitbutton()
        ct.setErrorMessage2()
        cy.wait(6000)
        ct.setclose()


          //should not add chiptype without Card man
          ct.setAddChipButton();
          ct.setCardType(varTest.test)
          ct.setCardMan(' ')
          ct.setChipprod(varTest2.testname)
          ct.setDate('28/09/2024')
          ct.setSubmitbutton()
          ct.setErrorMessage3()
          cy.wait(6000)
          ct.setclose()

          //should not add chiptype without Card man
          ct.setAddChipButton();
          ct.setCardType(varTest.test)
          ct.setCardMan(varTest2.newtest)
          ct.setChipprod(' ')
          ct.setDate('28/09/2024')
          ct.setSubmitbutton()
          ct.setErrorMessage4()
          cy.wait(6000)
          ct.setclose()


           //should not add chiptype without expiry date
           ct.setAddChipButton();
           ct.setCardType(varTest.test)
           ct.setCardMan(varTest2.newtest)
           ct.setChipprod(varTest2.testname)
           ct.setDate(' ')
           ct.setSubmitbutton()
           ct.setErrorMessage5()
           cy.wait(6000)
           ct.setclose()

           //Table header should contain Name Card Type, Card Manufacturer, Chip Product, Expiry Date and  Action
           cy.contains('Card Type').should('be.visible')
           cy.contains('Card Manufacturer').should('be.visible')
           cy.contains('Chip Product').should('be.visible')
           cy.contains('Expiry Date').should('be.visible')
           cy.contains('Action').should('be.visible')
           cy.contains('Active').should('be.visible')
           ln.setLogout()



        

    })

    it('should Navigate to inactive tab', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })
      
      ct.setGoToChipTypePage();
      ct.setNavigateinactive()
      cy.wait(3000)
      cy.contains('Card Type').should('be.visible')
      cy.contains('Card Manufacturer').should('be.visible')
      cy.contains('Chip Product').should('be.visible')
      cy.contains('Expiry Date').should('be.visible')
      cy.contains('Inactive').should('be.visible')
        
     })

     /*it('should edit chip type ', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })
      //should not edit chip type without Cardtype

      ct.setGoToChipTypePage();
      ct.setpickChiptype()
      ct.setEditCardType(' ')
      ct.setEditCardMan(varTest2.newtest)
      ct.setEditCardproduct(varTest2.testname)
      ct.setEditExDate('28/03/2023')
      ct.setEditUpdateButton()
      ct.setErrorMessage2()
      cy.wait(6000)
      ct.setclose()

       //should not edit chip type without Card manufacturing
      
       ct.setGoToChipTypePage();
       ct.setpickChiptype()
       ct.setEditCardType(varTest.test)
       ct.setEditCardMan(' ')
       ct.setEditCardproduct(varTest2.testname)
       ct.setEditExDate('28/03/2023')
       ct.setEditUpdateButton()
       ct.setErrorMessage3()
       cy.wait(6000)
       ct.setclose()

       //should not edit chip type without Card product
      
       ct.setGoToChipTypePage();
       ct.setpickChiptype()
       ct.setEditCardType(varTest.test)
       ct.setEditCardMan(varTest2.newtest)
       ct.setEditCardproduct(' ')
       ct.setEditExDate('28/03/2023')
       ct.setEditUpdateButton()
       ct.setErrorMessage4()
       cy.wait(6000)
       ct.setclose()

       

       //should not edit chip type without Any details
      
       ct.setGoToChipTypePage();
       ct.setpickChiptype()
       ct.setEditCardType(' ')
       ct.setEditCardMan(' ')
       ct.setEditCardproduct(' ')
       ct.setEditExDate(' ')
       ct.setEditUpdateButton()
       ct.setErrorMessage2()
       ct.setErrorMessage3()
       ct.setErrorMessage4()
       cy.wait(6000)
       ct.setclose()


        //should edit chip type 'Card type'
      
        ct.setGoToChipTypePage();
        ct.setpickChiptype()
        ct.setEditCardType(varTest.test  + 'th3')
        ct.setEditCardMan(varTest2.newtest)
        ct.setEditCardproduct(varTest2.testname)
        ct.setEditExDate('28/03/2023')
        ct.setEditUpdateButton()
        ct.setsuccessMessage2()
        cy.wait(3000)

        //should edit chip type 'Card Man'
      
        ct.setGoToChipTypePage();
        ct.setpickChiptype()
        ct.setEditCardType(varTest.test)
        ct.setEditCardMan(varTest2.newtest + 'new')
        ct.setEditCardproduct(varTest2.testname)
        ct.setEditExDate('28/03/2023')
        ct.setEditUpdateButton()
        ct.setsuccessMessage2()
        cy.wait(3000)

          //should edit chip type 'Card Product'
      
          ct.setGoToChipTypePage();
          ct.setpickChiptype()
          ct.setEditCardType(varTest.test)
          ct.setEditCardMan(varTest2.newtest)
          ct.setEditCardproduct(varTest2.testname + 'Grt')
          ct.setEditExDate('28/03/2023')
          ct.setEditUpdateButton()
          ct.setsuccessMessage2()
          cy.wait(3000)


          //should edit chip type 'All details'

          ct.setGoToChipTypePage();
          ct.setpickChiptype()
          ct.setEditCardType(varTest.test + 'thk')
          ct.setEditCardMan(varTest2.newtest + 'Pan')
          ct.setEditCardproduct(varTest2.testname + 'guap')
          ct.setEditExDate('12/05/2026')
          ct.setEditUpdateButton()
          ct.setsuccessMessage2()
          cy.wait(3000)
              
     })*/

     it('should Search for chip type on active tab', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })
      // Serach by complete card Type
      ct.setGoToChipTypePage();
      ct.setSearch(varTest.test )
      ct.setVerifySearch(varTest.test )
      cy.reload()

      // Serach by incomplete card Type
      ct.setGoToChipTypePage();
      ct.setSearch(varTest.test)
      ct.setVerifySearch(varTest.test)
      cy.reload()

      // Serach by complete card Man
      ct.setGoToChipTypePage();
      ct.setSearch(varTest2.newtest )
      ct.setVerifySearch(varTest2.newtest )
      cy.reload()

       // Serach by incomplete card Man
       ct.setGoToChipTypePage();
       ct.setSearch(varTest2.newtest )
       ct.setVerifySearch(varTest2.newtest)
       cy.reload()
       

       // Serach by complete card product
      ct.setGoToChipTypePage();
      ct.setSearch(varTest2.testname )
      ct.setVerifySearch(varTest2.testname )
      cy.reload()

       // Serach by incomplete card Product
       ct.setGoToChipTypePage();
       ct.setSearch(varTest2.testname)
       ct.setVerifySearch(varTest2.testname)
       cy.reload()


        // Serach by non-existing chip type details
        ct.setGoToChipTypePage();
        ct.setSearch('zabrosdjdwriyfdjncsljds')
        ct.setVerifySearch('No Data to Display')
        cy.reload()

        // Serach by empty space 
        ct.setGoToChipTypePage();
        ct.setSearch(' ')
        ct.setVerifySearch('1')
        cy.reload()
        ln.setLogout()

        
     })

     /*it('should Deactivate chip type', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })
      
      ct.setGoToChipTypePage();
      ct.setpickChiptype2()
      ct.setsuccessMessage3()
      
        
     })*/

     /*it('should Search for chip type on inactive tab and search', () => {
    
      
      cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('vervAdminUser'))
            ln.setPassword(Cypress.env('verveAdminPass'))
            ln.clickSubmit();
            
        })
      // Serach by complete card Type
      ct.setGoToChipTypePage();
      ct.setNavigateinactive()
      ct.setSearch(varTest.test + 'thk')
      ct.setVerifySearch(varTest.test + 'thk')
      cy.reload()

      // Serach by incomplete card Type
      ct.setGoToChipTypePage();
      ct.setNavigateinactive()
      ct.setSearch(varTest.test)
      ct.setVerifySearch(varTest.test)
      cy.reload()

      // Serach by complete card Man
      ct.setGoToChipTypePage();
      ct.setNavigateinactive()
      ct.setSearch(varTest2.newtest + 'Pan')
      ct.setVerifySearch(varTest2.newtest + 'Pan')
      cy.reload()

       // Serach by incomplete card Man
       ct.setGoToChipTypePage();
       ct.setNavigateinactive()
       ct.setSearch(varTest2.newtest )
       ct.setVerifySearch(varTest2.newtest)
       cy.reload()
       

       // Serach by complete card product
      ct.setGoToChipTypePage();
      ct.setNavigateinactive()
      ct.setSearch(varTest2.testname + 'guap')
      ct.setVerifySearch(varTest2.testname + 'guap')
      cy.reload()

       // Serach by incomplete card Product
       ct.setGoToChipTypePage();
       ct.setNavigateinactive()
       ct.setSearch(varTest2.testname)
       ct.setVerifySearch(varTest2.testname)
       cy.reload()


        // Serach by non-existing chip type details
        ct.setGoToChipTypePage();
        ct.setNavigateinactive()
        ct.setSearch('zabrosdjdwriyfdjncsljds')
        ct.setVerifySearch('No Data to Display')
        cy.reload()

        // Serach by non-existing chip type details
        ct.setGoToChipTypePage();
        ct.setNavigateinactive()
        ct.setSearch(' ')
        ct.setVerifySearch('1')
        cy.reload()

        
     })*/


     
})