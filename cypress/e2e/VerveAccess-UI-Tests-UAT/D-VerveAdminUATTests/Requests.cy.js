/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import  RandomNumber from "../../../pom/Random.js"
import Reports from "../../../pom/report.js"
import Request from "../../../POM/request.js"


describe('visit Verve Access', () => {

  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();

  const ln=new Login();
  const Rq=new  Request();
  const Rp=new  Reports();
  
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
     
it('Add request Template without file', () => {
                
  Rq.setGoToRequestPage();
  Rq.setClickRequestSettings()
  Rq.setClickAddNewRequestForm()
  Rq.setInputTitle('bin' + varTest.number)
  Rq.setClickSaveButton()
  Rp.setVerifySearch('Template saved')
  ln.setLogout()

})


it('Add request Template with file', () => {
                
  Rq.setGoToRequestPage();
  Rq.setClickRequestSettings()
  Rq.setClickAddNewRequestForm()
  Rq.setInputTitle('mpin' + varTest.number)
  Rq.setPickFile('Verve-AID-FORM_OK.pdf', 'myFixture')
  Rq.setAttachFile('@myFixture')
  Rq.setClickSUploadRequestButton()
  Rp.setVerifySearch('Template saved')
  ln.setLogout()

})

it('Add request Template without name and file', () => {


  Rq.setGoToRequestPage();
  Rq.setClickRequestSettings()
  Rq.setClickAddNewRequestForm()
  Rq.setClickSaveButton()
  Rp.setVerifySearch('The Title field is required.')
  Rq.setCloseTab()
  ln.setLogout()
                

})

it('Download request Template', () => {


  Rq.setGoToRequestPage();
  Rq.setClickRequestSettings()
  Rq.setSeleteRequestTemplate()
  Rq.setClickDownloadRequestTemplate()
   // check download folder for download
  ln.setLogout()
                

})


it('should Edit Template Title', () => {


  Rq.setGoToRequestPage();
  Rq.setClickRequestSettings()
  Rq.setSeleteRequestTemplate()
  Rq.setUpdateTitle()
  Rq.setInputEdittedTitle('MpinNew' + varTest.number)
  Rq.setClickSaveButton()
  Rp.setVerifySearch('Template updated')
  ln.setLogout()
                

})


it('should Edit Template file', () => {


  Rq.setGoToRequestPage();
  Rq.setClickRequestSettings()
  Rq.setSeleteRequestTemplate()
  Rq.setUpdateTitle()
  Rq.setPickFile('Verve-AID-FORM_OK.pdf', 'myFixture')
  Rq.setAttachFile('@myFixture')
  //Rq.setInputEdittedTitle('MpinNew' + varTest.number)
  Rq.setClickSaveButton()
  Rp.setVerifySearch('Template updated')
  ln.setLogout()
                

})

it('should Edit both Template file and Title', () => {


  Rq.setGoToRequestPage();
  Rq.setClickRequestSettings()
  Rq.setSeleteRequestTemplate()
  Rq.setUpdateTitle()
  Rq.setInputEdittedTitle('MpinNew' + varTest.number)
  Rq.setPickFile('Verve-AID-FORM_OK.pdf', 'myFixture')
  Rq.setAttachFile('@myFixture')
  Rq.setClickSaveButton()
  Rp.setVerifySearch('Template updated')
  ln.setLogout()
                

})

it('should Edit both Template file and Title with empty Tittle', () => {


  Rq.setGoToRequestPage();
  Rq.setClickRequestSettings()
  Rq.setSeleteRequestTemplate()
  Rq.setUpdateTitle()
  Rq.setInputEdittedTitle(' ' )
  Rq.setClickSaveButton()
  Rp.setVerifySearch('Form Template update requires one of File or Title')
  Rq.setCloseTab()
  ln.setLogout()
                

})

it('should download requested template', () => {

  Rq.setGoToRequestPage();
  Rq.setSelectRequestJob()
  Rq.setClickDownloadRequestJob()
  Rq.setClickonDownloadIcon()
  Rq.setCloseTab()
  ln.setLogout()
                
})


it.skip('should Approve requested with comment and file', () => {

  Rq.setGoToRequestPage();
  Rq.setSelectRequestJob()
  Rq.setClickApproveRequestJob()
  Rq.setEnterCommentForRequest('Approve This Request')
  Rq.setPickFile('Verve-AID-FORM_OK.pdf', 'myFixture')
  Rq.setAttachFile('@myFixture')
  Rq.setSubmitRequestApproval()
  Rp.setVerifySearch('Request Approved successfully')
  ln.setLogout()
                
})

it('should Approve requested without comment and with file', () => {

  Rq.setGoToRequestPage();
  Rq.setSelectRequestJob()
  Rq.setClickApproveRequestJob()
  //Rq.setEnterCommentForRequest('Approve This Request')
  Rq.setPickFile('Verve-AID-FORM_OK.pdf', 'myFixture')
  Rq.setAttachFile('@myFixture')
  Rq.setSubmitRequestApproval()
  Rp.setVerifySearch('Comment is Required.')
  Rq.setCloseTab()
  ln.setLogout()
                
})

it('should Approve requested with comment and without attached file', () => {

  Rq.setGoToRequestPage();
  Rq.setSelectRequestJob()
  Rq.setClickApproveRequestJob()
  Rq.setEnterCommentForRequest('Approve This Request')
 // Rq.setPickFile('Verve-AID-FORM_OK.pdf', 'myFixture')
  //Rq.setAttachFile('@myFixture')
  Rq.setSubmitRequestApproval()
  Rp.setVerifySearch('Certificate PDF file is required for approval action on pending request')
  Rq.setCloseTab()
  ln.setLogout()
                
})

it('should Approve requested without comment and without attached file', () => {

  Rq.setGoToRequestPage();
  Rq.setSelectRequestJob()
  Rq.setClickApproveRequestJob()
  //Rq.setEnterCommentForRequest('Approve This Request')
  //Rq.setPickFile('Verve-AID-FORM_OK.pdf', 'myFixture')
 // Rq.setAttachFile('@myFixture')
  Rq.setSubmitRequestApproval()
  Rp.setVerifySearch('Comment is Required.')
  Rq.setCloseTab()
  ln.setLogout()
                
})


it('should Reject request with comment ', () => {

  Rq.setGoToRequestPage();
  Rq.setSelectRequestJob()
  Rq.setClickRejectRequestJob()
  Rq.setEnterCommentForRejectRequest('Rejected due to non-diligence')
  Rq.setSubmitRequestRejection()
  Rp.setVerifySearch('Request Rejected successfully')
  ln.setLogout()

})

it('should Reject request without comment ', () => {

  Rq.setGoToRequestPage();
  Rq.setSelectRequestJob()
  Rq.setClickRejectRequestJob()
  //Rq.setEnterCommentForRejectRequest('Rejected due to non-diligence')
  Rq.setSubmitRequestRejection()
  Rp.setVerifySearch('Comment is Required.')
  Rq.setCloseTab()
  ln.setLogout()

})

it('should go to Close Tab ', () => {

  Rq.setGoToRequestPage();
  Rq.setClickOnCloseRequestTab()
  ln.setLogout()

})

it('should go to Open Tab ', () => {

  Rq.setGoToRequestPage();
  Rq.setClickOnCloseRequestTab()
  Rq.setClickOnCloseRequestTab()
  ln.setLogout()

})




it.skip('should view closed request  ', () => {

  Rq.setGoToRequestPage();
  Rq.setSelectRequestJob()
  Rq.setClickOnCloseRequestTab()
  
  //cy.get('[aria-selected="false"] > span').click()

  ln.setLogout()

})

        it('Search by  complete institution Name', () => {
                
          Rq.setGoToRequestPage();
          Rq.setSearch('GRANDE CORPORATION')
          //Rp.setVerifySearch('GRANDE CORPORATION')
          ln.setLogout()

        })

        
        it('Search by  incomplete institution Name', () => {
                
            Rq.setGoToRequestPage();
            Rq.setSearch('GRANDE ')
          //  Rp.setVerifySearch('GRANDE')
            ln.setLogout()
  
          })



          it('Search by  complete Request Type', () => {
                
            Rq.setGoToRequestPage();
            Rq.setSearch('BIN Request Template - 77110')
          //  Rp.setVerifySearch('BIN Request Template - 77110')
            ln.setLogout()
  
          })
  
          
          it('Search by  incomplete Request Type', () => {
                  
              Rq.setGoToRequestPage();
              Rq.setSearch('BIN Request')
              Rq.setClickSearch()
            //  Rp.setVerifySearch('BIN Request')
              ln.setLogout()
    
            })


            it('Search by  invalid parameter', () => {
                  
                Rq.setGoToRequestPage();
                Rq.setSearch('dsrfsgwwrgfsrfw')
                Rq.setClickSearch()
                Rp.setVerifySearch('No Data to Display')
                ln.setLogout()
      
              })

    
            
      
       
})


