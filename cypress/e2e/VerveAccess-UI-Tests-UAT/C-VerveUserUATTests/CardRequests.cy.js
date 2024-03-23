/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import Cards from "../../../pom/cards.js"


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
      ln.setUserName(Cypress.env('verveUser'))
      ln.setPassword(Cypress.env('verveUserPass'))
      ln.clickSubmit();
      cy.wait(6000)
      
       })
  
  })

    const varTest = new RandomNumber();
    const varTest2 = new RandomNumber();
    const varTest3 = new RandomNumber();

    const ln=new Login();
    const Cs=new Cards();
    


        it('should Verify User Role', () => {

        cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
        cy.contains('VERVE USER').should('be.visible')
        cy.get('.red').click()

        })
        

        it('View Card detail on Approved tab ', () => {    

          Cs.setGoToCardPage2();
          Cs.setpickCard1()
          //close Tab
          cy.wait(6000)
          Cs.setcloseModal1()
          ln.setLogout();
          cy.wait(6000)
  
          })
  

        it('Search by Complete Artwork on Approved tab  ', () => {    

        Cs.setGoToCardPage2();
        Cs.setSearch("Artwork I")
        Cs.setVerifySearch("Artwork I")
        ln.setLogout();
        cy.wait(6000)

        })


        it('Search by inComplete Artwork on Approved tab', () => { 

        Cs.setGoToCardPage2();
        Cs.setSearch("Artwo")
       // Cs.setVerifySearch("Artwo")
        ln.setLogout();
        cy.wait(6000)

        })

        it('Search by Complete Card Type on Approved tab', () => { 
             
        Cs.setGoToCardPage2();
        Cs.setSearch("CREDIT")
        Cs.setVerifySearch("CREDIT")
        ln.setLogout();
        cy.wait(6000)

        })
        
        it('Search by inComplete Card Type on Approved tab', () => { 

        Cs.setGoToCardPage2();
        Cs.setSearch("CRED")
        Cs.setVerifySearch("CRED")
        ln.setLogout();
        cy.wait(6000)

      })
        
      it('Search by innvalid parameter on on approved tab', () => { 
      
        Cs.setGoToCardPage2();
        Cs.setSearch("xxxxx903567")
        Cs.setVerifySearch("No Data to Display")
        ln.setLogout();
        cy.wait(6000)

    })

    it('View Card detail on Pending tab ', () => {    

      Cs.setGoToCardPage2();
      Cs.setPendingtab()
      //Cs.setpickpendingCard1()
      //close Tab
     // cy.wait(6000)
     // Cs.setcloseModal1()
      ln.setLogout();
      cy.wait(6000)

      })

    it('Search by Complete Artwork on pending tab ', () => { 
    
       Cs.setGoToCardPage2();
       Cs.setPendingtab()
       Cs.setSearch("TEMPLATE_133225687519972075.pdf")
       Cs.setVerifySearch("TEMPLATE_133225687519972075.pdf")
       ln.setLogout();
      cy.wait(6000)

    })

   it('Search by inComplete Artwork on pending tab ', () => { 
            
        Cs.setGoToCardPage2();
        Cs.setPendingtab()
        Cs.setSearch("ATEMPLATE")
      //Cs.setVerifySearch("Art")
      ln.setLogout();
      cy.wait(6000)

   })



   it('Search by Complete Card Type on pending tab', () => { 
                             
     Cs.setGoToCardPage2();
     Cs.setPendingtab()
     Cs.setSearch("BNBYK")
    // Cs.setVerifySearch("BNBYK")
     ln.setLogout();
     cy.wait(6000)

   })



   it('Search by inComplete Card Type on pending tab', () => { 
                      
        Cs.setGoToCardPage2();
        Cs.setPendingtab()
        Cs.setSearch("BNB")
      //Cs.setVerifySearch("Cre")
      ln.setLogout();
      cy.wait(6000)

   })

   it('View Card detail on Rejected tab ', () => {    

    Cs.setGoToCardPage2();
    Cs.setRejectedtab()
    //Cs.setpickCard1()
    //close Tab
   // cy.wait(6000)
    //Cs.setcloseModal1()
    ln.setLogout();
    cy.wait(6000)

    })

  it('Search by Complete Artwork Name on Rejected tab', () => { 
                      
        Cs.setGoToCardPage2();
        Cs.setRejectedtab()
        Cs.setSearch("PAY_ARTWORK_001")
        Cs.setVerifySearch("PAY_ARTWORK_001")
        ln.setLogout();
        cy.wait(6000)

  })

             
  it('Search by inComplete Artwork Name on Rejected tab', () => { 
        
              
        Cs.setGoToCardPage2();
        Cs.setRejectedtab()
        Cs.setSearch("Pay")
    //  Cs.setVerifySearch("Art")
        ln.setLogout();
        cy.wait(6000)


  })



      it(' Search by Complete Card Type on Rejected tab', () => { 

          
              
          Cs.setGoToCardPage2();
          Cs.setRejectedtab()
          Cs.setSearch("PREPAID")
          Cs.setVerifySearch("PREPAID")
          ln.setLogout();
          cy.wait(6000)

      })




      it('Search by inComplete Card Type on Rejected tab', () => { 
        
              
        Cs.setGoToCardPage2();
         Cs.setRejectedtab()
         Cs.setSearch("PRE")
         Cs.setVerifySearch("PRE")
         ln.setLogout();
         cy.wait(6000)

      })
        
     it('Search by invalid parameter on on inactive tab', () => { 
        
              
        Cs.setGoToCardPage2();
        Cs.setRejectedtab()
        Cs.setSearch("trjshdjdh udnskvfki")
        Cs.setVerifySearch("No Data to Display")
        ln.setLogout();
        cy.wait(6000)

                
        
     })

     
     
})