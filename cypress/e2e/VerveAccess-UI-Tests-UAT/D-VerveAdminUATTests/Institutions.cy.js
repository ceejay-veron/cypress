/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import  institution from "../../../pom/institution.js"


describe('visit Verve Access', () => {
  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();

  
  const ln=new Login();
  const is=new institution();

  
  
  
  before(() => {

    cy.visit('https://verve-access-admin.k8.isw.la/admin/signin')
   // cy.title().should('eq', 'verve access')
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




   
     
     it('Search by complete Institution Name', () => {
      
               
        is.setGoToInstitionPage();
        is.setSearch("njoku")
       // is.setVerifySearch("Njoku Ministries")
        ln.setLogout()

     })

     
     it('Search by incomplete Institution Name', () => {
            
        is.setGoToInstitionPage();
        is.setSearch("njoku")
       // is.setVerifySearch("Njoku")
        ln.setLogout()

    })


    it('Search by complete email', () => {

              
         is.setGoToInstitionPage();
         is.setSearch("amazing@qa.team")
         //is.setVerifySearch("amazing@qa.team")
         ln.setLogout()

     })


  it(' Search by by complete email', () => {
         
      
         is.setGoToInstitionPage();
         is.setSearch("amazing")
        // is.setVerifySearch("amazing")
         ln.setLogout()

})


it(' Search by complete Phone number', () => {
              
         is.setGoToInstitionPage();
         is.setSearch("09099002003")
        // is.setVerifySearch("09099002003")
         ln.setLogout()

})


it(' Search by incomplete phone number', () => {

      
         is.setGoToInstitionPage();
         is.setSearch("090990")
       //  is.setVerifySearch("090990")
         ln.setLogout()


})



it('Search by invalid phone number', () => {

        
      
         is.setGoToInstitionPage();
         is.setSearch("473890")
         is.setVerifySearch("No Data to Display")
         ln.setLogout()

})

it('Search by innvalid parameter', () => {

      
        is.setGoToInstitionPage();
        is.setSearch("caosasuddsds sdhsid")
        is.setVerifySearch("No Data to Display")
        ln.setLogout()
        
     })

     it(' Search by complete Institution Name', () => {
        
      
      
        is.setGoToInstitionPage();
        is.setInactiveTab()
        is.setSearch("Scheme Management-939388-Incorporated")
       // is.setVerifySearch("Scheme Management-939388-Incorporated")
        ln.setLogout()

      })



    it  ('Search by incomplete Institution Name', () => {
    
      
        is.setGoToInstitionPage();
        is.setInactiveTab()
        is.setSearch("scheme")
        //is.setVerifySearch("scheme")
        ln.setLogout()

    })


   it ('Search by complete email', () => {

      
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("fri1905@qa.team")
         //is.setVerifySearch("fri1905@qa.team")
         ln.setLogout()


  })

  it('Search by complete email', () => {

      
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("scheme")
         //is.setVerifySearch("scheme")
         ln.setLogout()

})

it(' Search by complete Phone number', () => {

      
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("09099816066")
        // is.setVerifySearch("09099816066")
         ln.setLogout()

})

it('Search by incomplete phone number', () => {
              
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("09099")
        // is.setVerifySearch("09099")
         ln.setLogout()

})


it('Search by invalid phone number', () => {
         
         // Serach by invalid phone number
      
         is.setGoToInstitionPage();
         is.setInactiveTab()
         is.setSearch("473890")
         is.setVerifySearch("No Data to Display")
         ln.setLogout()

})

it('search by invalid parameter', () => {

        // Serach by innvalid parameter
      
        is.setGoToInstitionPage();
        is.setInactiveTab()
        is.setSearch("caosasuddsds sdhsid")
        is.setVerifySearch("No Data to Display")
        ln.setLogout()
       
     })

     it('create organization with valid details', () => {
  
        is.setGoToInstitionPage();
        is.setAddbutton()
        is.setInstitionName("goodbank " + varTest.test)
        is.setInstitionType()
        is.setphone_number("08033271" + varTest.number)
        is.setemail("goodbank"+varTest.number+"@qa.team")
        is.setSubmitButton()
        cy.wait(8500)
        is.setsuccessMessage()
        ln.setLogout()

      })

      it('create organization without name ', () => {

        is.setGoToInstitionPage();
        is.setAddbutton()
        is.setInstitionName(" ")
        is.setInstitionType()
        is.setphone_number("08033271" + varTest.number)
        is.setemail("goodbank"+varTest.number+"@qa.team")
        is.setSubmitButton()
        is.setErrorMessage1()
        is.setClosetab()
        ln.setLogout()

      })

      it('create organization without phone number', () => {

        is.setGoToInstitionPage();
        is.setAddbutton()
        is.setInstitionName( "goodbank " + varTest.test)
        is.setInstitionType()
        is.setphone_number(" ")
        is.setemail("goodbank"+varTest.number+"@qa.team")
        //is.setSubmitButton()
        is.setErrorMessage6()
        is.setClosetab()
        ln.setLogout()

      })

        it('create organization without Email', () => {

          is.setGoToInstitionPage();
          is.setAddbutton()
          is.setInstitionName( "goodbank " + varTest.test)
          is.setInstitionType()
          is.setphone_number("08033271" + varTest.number)
          is.setemail(" ")
          is.setSubmitButton()
          is.setErrorMessage3()
          is.setClosetab()
          ln.setLogout()

        })

        it('create organization without institution Type', () => {
 
        is.setGoToInstitionPage();
        is.setAddbutton()
        is.setInstitionName("goodbank " + varTest.test)
        is.setphone_number("08033271" + varTest.number)
        is.setemail("goodbank"+varTest.number+"@qa.team")
        is.setSubmitButton()
        is.setErrorMessage4()
        is.setClosetab()
        ln.setLogout()


        })


        it('create organization without any details', () => {

          is.setGoToInstitionPage();
          is.setAddbutton()
          is.setInstitionName( " ")
          is.setphone_number(" ")
          is.setemail(" ")
          //is.setSubmitButton()
          is.setErrorMessage1()
          is.setErrorMessage6()
          is.setErrorMessage3()
         // is.setErrorMessage4()
          is.setClosetab()
          ln.setLogout()

        })
      
        it('should view institution detail', () => {
      
               
          is.setGoToInstitionPage();
          is.setViewInstitutionDetails()    
          is.setVerifySearch("Institution Name")
          is.setVerifySearch("Email")
          is.setVerifySearch("Phone Number")
          is.setVerifySearch("Institution Type")
          is.setVerifySearch("id")
          is.setIsArtwork()
          is.setIsCards()
          is.setIsWhitelistsCard()
          is.setIsUser()
          is.setIsDecal()
          is.setIsContactSetails()
          ln.setLogout()
      
      
       })
       

/*
     
     
     it('should Add institution user2', () => {
      
               
      is.setGoToInstitionPage();
      is.setViewInstitutionDetails() 
      is.setGotoinstitutionUserTab()
      is.setClickAddinstitutionAdminButton()
      is.setOrgAdminFirstName("wave" + varTest.test)
      is.setOrgAdminLastName("Tide" + varTest.test)
      is.setOrgAdminEmail("goodbank"+varTest.number+"@qa.team")
      is.setOrgAdminPhoneNumber("08033271" + varTest.number)
      is.setCreateinstitutionAdminButton()
      is.setsuccessMessage7()
      ln.setLogout()    
      
   })

   

 it('should Add institution user', () => {
      
               
    is.setGoToInstitionPage();
    is.setViewInstitutionDetails() 
    is.setGotoinstitutionUserTab()
    is.setClickAddinstitutionAdminButton()
    is.setOrgAdminFirstName("wave" + varTest.test)
    is.setOrgAdminLastName("Tide" + varTest.test)
    is.setOrgAdminEmail("goodbank"+varTest.number+"@qa.team")
    is.setOrgAdminPhoneNumber("08033271" + varTest.number)
    is.setCreateinstitutionAdminButton()
    is.setsuccessMessage7()
    ln.setLogout()    
    
 })
 
 */


     it('should not Add institution user without firstName', () => {
      
               
      is.setGoToInstitionPage();
      is.setViewInstitutionDetails() 
      is.setGotoinstitutionUserTab()
      is.setClickAddinstitutionAdminButton()
     // is.setOrgAdminFirstName("wave" + varTest.test)
      is.setOrgAdminLastName("Tide" + varTest.test)
      is.setOrgAdminEmail("goodbank"+varTest.number+"@qa.team")
      is.setOrgAdminPhoneNumber("08033271" + varTest.number)
      is.setCreateinstitutionAdminButton()
      is.setErrorMessage9()
      is.setCloseModal1()
      ln.setLogout()    
      
   })

   it('should not Add institution user without LastName', () => {
      
               
    is.setGoToInstitionPage();
    is.setViewInstitutionDetails() 
    is.setGotoinstitutionUserTab()
    is.setClickAddinstitutionAdminButton()
    is.setOrgAdminFirstName("wave" + varTest.test)
    //is.setOrgAdminLastName("Tide" + varTest.test)
    is.setOrgAdminEmail("goodbank"+varTest.number+"@qa.team")
    is.setOrgAdminPhoneNumber("08033271" + varTest.number)
    is.setCreateinstitutionAdminButton()
    is.setErrorMessage10()
    is.setCloseModal1()
    ln.setLogout()    
    
 })


 it('should not Add institution user without Email', () => {
      
               
  is.setGoToInstitionPage();
  is.setViewInstitutionDetails() 
  is.setGotoinstitutionUserTab()
  is.setClickAddinstitutionAdminButton()
  is.setOrgAdminFirstName("wave" + varTest.test)
  is.setOrgAdminLastName("Tide" + varTest.test)
  //is.setOrgAdminEmail("goodbank"+varTest.number+"@qa.team")
  is.setOrgAdminPhoneNumber("08033271" + varTest.number)
  is.setCreateinstitutionAdminButton()
  is.setErrorMessage11()
  is.setCloseModal1()
  ln.setLogout()    
  
})
    
it('should not Add institution user without Phone Number', () => {
      
               
  is.setGoToInstitionPage();
  is.setViewInstitutionDetails() 
  is.setGotoinstitutionUserTab()
  is.setClickAddinstitutionAdminButton()
  is.setOrgAdminFirstName("wave" + varTest.test)
  is.setOrgAdminLastName("Tide" + varTest.test)
  is.setOrgAdminEmail("goodbank"+varTest.number+"@qa.team")
  //is.setOrgAdminPhoneNumber("08033271" + varTest.number)
  is.setCreateinstitutionAdminButton()
  is.setErrorMessage12()
  is.setCloseModal1()
  ln.setLogout()    
  
})
   
it('should not Add institution user without All Details', () => {
      
               
  is.setGoToInstitionPage();
  is.setViewInstitutionDetails() 
  is.setGotoinstitutionUserTab()
  is.setClickAddinstitutionAdminButton()
  //is.setOrgAdminFirstName("wave" + varTest.test)
 // is.setOrgAdminLastName("Tide" + varTest.test)
  //is.setOrgAdminEmail("goodbank"+varTest.number+"@qa.team")
  //is.setOrgAdminPhoneNumber("08033271" + varTest.number)
  is.setCreateinstitutionAdminButton()
  is.setErrorMessage9()
  is.setErrorMessage10()
  is.setErrorMessage11()
  is.setErrorMessage12()
  is.setCloseModal1()
  ln.setLogout()    
  
})

it('should not Add institution user without All Details', () => {
      
               
  is.setGoToInstitionPage();
  is.setViewInstitutionDetails() 
  is.setGotoinstitutionUserTab()
  is.setClickAddinstitutionAdminButton()
  //is.setOrgAdminFirstName("wave" + varTest.test)
 // is.setOrgAdminLastName("Tide" + varTest.test)
  //is.setOrgAdminEmail("goodbank"+varTest.number+"@qa.team")
  //is.setOrgAdminPhoneNumber("08033271" + varTest.number)
  is.setCreateinstitutionAdminButton()
  is.setErrorMessage9()
  is.setErrorMessage10()
  is.setErrorMessage11()
  is.setErrorMessage12()
  is.setCloseModal1()
  ln.setLogout()    
  
})


/*
it('should be able to delete user with Comment', () => {
      
               
  is.setGoToInstitionPage();
  is.setViewInstitutionDetails() 
  is.setGotoinstitutionUserTab() 
  is.SetSeleteUser1()  
  is.SetSeleteDisableUser()
  is.SetSelectComment('it not good for records')
  is.SetSummitCommentbtn()
  is.SetConfirmCommentbtn()
  is.setVerifyDisableUser('User disabled successfully')
  ln.setLogout()
  
})



it('should be able cancel disable user', () => {
      
               
  is.setGoToInstitionPage();
  is.setViewInstitutionDetails() 
  is.setGotoinstitutionUserTab() 
  is.SetSeleteUser1()  
  is.SetSeleteDisableUser()
  is.SetSelectComment('it not good for records')
  is.SetSummitCommentbtn()
  is.SetRejectbtn()
  //is.setVerifyDisableUser('User disabled successfully')
  ln.setLogout()
  
})





it('should be able to disable user with Comment', () => {
      
               
  is.setGoToInstitionPage();
  is.setViewInstitutionDetails() 
  is.setGotoinstitutionUserTab()
  is.setActiveUser()
  is.SetSeleteUser1()  
  is.SetSeleteDisableUser()
  //is.SetSelectComment('it not good for records')
  is.SetSummitCommentbtn()
  is.setVerifyDisableUser('comment cannot be empty!')
  is.setClosetab()
  ln.setLogout()
  
})




it('should be able to Enable user with Comment', () => {
      
               
  is.setGoToInstitionPage();
  is.setViewInstitutionetails() 
  is.setGotoinstitutionUserTDab()
  is.setInactiveUser()
  is.SetSeleteUser1()  
  is.SetEnableuser()
  is.SetSelectComment('it good for records')
  is.SetSummitCommentbtn()
  is.SetConfirmCommentbtn()
  is.setVerifyDisableUser('User enabled successfully')
  ln.setLogout()
  
})




it('should not be able to Enaable user without Comment', () => {
      
               
  is.setGoToInstitionPage();
  is.setViewInstitutionDetails() 
  is.setGotoinstitutionUserTab()
  is.setInactiveUser()
  is.SetSeleteUser1()  
  is.SetEnableuser()
  //is.SetSelectComment('it not good for records')
  is.SetSummitCommentbtn()
  is.setVerifyDisableUser('comment cannot be empty!')
  is.setClosetab()
  ln.setLogout()
  
})


it('should be able to Cancel disable user without Comment', () => {
      
               
  is.setGoToInstitionPage();
  is.setViewInstitutionDetails() 
  is.setGotoinstitutionUserTab()
  is.setInactiveUser()
  is.SetSeleteUser1()  
  is.SetEnableuser()
  is.SetSelectComment('it not good for records')
  is.SetSummitCommentbtn()
  //is.setVerifyDisableUser('comment cannot be empty!')
  is.SetRejectbtn()
  ln.setLogout()
  
})

it('should be able to Delete user with Comment', () => {
      
               
  is.setGoToInstitionPage();
  is.setViewInstitutionDetails() 
  is.setGotoinstitutionUserTab()
  is.setInactiveUser()
  is.SetSeleteUser1()  
  is.SetDeleteuser()
  is.SetSelectComment('it good for records')
  is.SetSummitCommentbtn()
  is.SetConfirmCommentbtn()
  is.setVerifyDisableUser('User deleted successfully')
  ln.setLogout()
  
})

it('should be able to cancel Delete user with Comment', () => {
      
               
  is.setGoToInstitionPage();
  is.setViewInstitutionDetails() 
  is.setGotoinstitutionUserTab()
  is.setInactiveUser()
  is.SetSeleteUser1()  
  is.SetDeleteuser()
  is.SetSelectComment('it good for records')
  is.SetSummitCommentbtn()
  is.SetRejectbtn()
  ln.setLogout()
  
})

it('should not be able to Delete user without Comment', () => {
      
               
  is.setGoToInstitionPage();
  is.setViewInstitutionDetails() 
  is.setGotoinstitutionUserTab()
  is.setInactiveUser()
  is.SetSeleteUser1()  
  is.SetDeleteuser()
 // is.SetSelectComment('it good for records')
  is.SetSummitCommentbtn()
  //is.SetConfirmCommentbtn()
  is.setVerifyDisableUser('comment cannot be empty!')
  is.setClosetab()
  ln.setLogout()
  
})



*/
     
})