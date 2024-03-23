import artworkPage from "../../../POM/corporate/artWorkPages";
import Login from "../../../POM/loginpage.js";

describe('visit Verve Access', () => {
 let userData;
 const ArtworkPage = new artworkPage();
 const ln=new Login();
  
  before(()=>{
    
    cy.fixture('userData.json').then((data)=>{
      
      userData=data
    })
  })
    beforeEach(() => {
      
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      // ok
      cy.visit('https://verve-access-customer.k8.isw.la/corporate/signin')
      cy.title().should('eq', 'Verve Access');
      cy.location('protocol').should('eq', 'https:');
      cy.url().should('include','customer');
     // cy.login(userData.email,userData.password)

     cy.get('form').within(($form) => {
      ln.setUserName(Cypress.env('username1'))
      ln.setPassword(Cypress.env('password1'))
      ln.clickSubmit();
      cy.wait(6000)
      
       })

      cy.wait(6000);
      
})

    it("search by artwork Id on the approved tab", () => {
    ArtworkPage.selSvg().click();                                                  
    cy.wait(6000);
    ArtworkPage.selArtwork().click()
    ArtworkPage.selArtworkId().type(userData.artWorkId);
    ArtworkPage.clickSearchBtn().click();
   /// ArtworkPage.verArtworkId().should("have.text",userData.artWorkId)

});

it("search by invalid artwork Id on the approved tab", () => {
  ArtworkPage.selSvg().click();                                                  
  cy.wait(6000);
  ArtworkPage.selArtwork().click()
  ArtworkPage.selArtworkId().type("VERVE-TES-2023-05-19-07333028");
  ArtworkPage.clickSearchBtn().click();
  //ArtworkPage.verArtworkId().should("have.text",userData.artWorkId)

});

it("search by valid title Id on the approved tab", () => {
  ArtworkPage.selSvg().click({force:true});                                                  
  cy.wait(6000);
  ArtworkPage.selArtwork().click()
  ArtworkPage.selArtworkId().type("Contract Extension Letter - Lukman Olabanjo.pdf");
  ArtworkPage.clickSearchBtn().click();
 
});

it("search by invalid title Id on the approved tab", () => {
  ArtworkPage.selSvg().click();                                                  
  cy.wait(6000);
  ArtworkPage.selArtwork().click()
  ArtworkPage.selArtworkId().type("Contract Extension Letter - Lukman Olabanjo");
  ArtworkPage.clickSearchBtn().click();
 
});

 it("search by invalid parameter on the approved tab", () => {
  ArtworkPage.selSvg().click();                                                  
  cy.wait(6000);
  ArtworkPage.selArtwork().click()
  ArtworkPage.selArtworkId().type("hgshsjsj");
  ArtworkPage.clickSearchBtn().click();
  cy.contains('No Data to Display')


});
  it("search by artwork Id on the pending tab", () => {
    ArtworkPage.selSvg().click();
    cy.wait(6000);
    ArtworkPage.selArtwork().click();
    ArtworkPage.selPendingTab().click();
    ArtworkPage.selArtworkId().type(userData.artWorkId1);
    ArtworkPage.clickSearchBtn().click();
  //  ArtworkPage.verArtworkId1().should("have.text",userData.artWorkId1);
   // ArtworkPage.verCreatedBy().should("have.text",userData.artWorkTxt)
 
});

it("search by invalid artwork Id on the pending tab", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtwork().click();
  ArtworkPage.selPendingTab().click();
  ArtworkPage.selArtworkId().type("VERVE-TES-2023-05-25-08072168");
  ArtworkPage.clickSearchBtn().click();
  //ArtworkPage.verCreatedBy().should("have.text",userData.artWorkTxt)

});

it("search by valid title on the pending tab", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtwork().click();
  ArtworkPage.selPendingTab().click();
  ArtworkPage.selArtworkId().type("IMG_1498.jpg");
  ArtworkPage.clickSearchBtn().click();

});

it("search by invalid title on the pending tab", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtwork().click();
  ArtworkPage.selPendingTab().click();
  ArtworkPage.selArtworkId().type("IMG_1498.j");
  ArtworkPage.clickSearchBtn().click();
  
});

it("search by invalid parameter on the pending tab", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtwork().click();
  ArtworkPage.selPendingTab().click();
  ArtworkPage.selArtworkId().type("fgeehewwhwhwj");
  ArtworkPage.clickSearchBtn().click();
  
});
  it("search by artwork Id on the rejected tab", () => {
   ArtworkPage.selSvg().click();
   cy.wait(6000);
   ArtworkPage.selArtwork().click();
   ArtworkPage.selRejectTab().click();
   ArtworkPage.selArtworkId().type(userData.artWorkId2);
   ArtworkPage.clickSearchBtn().click();
  // ArtworkPage.verArtworkId2().should("have.text",userData.artWorkId2);
  // ArtworkPage.verCreatedBy1().should("have.text",userData.artWorkTxt1)

})

it("search by invalid artwork Id on the rejected tab", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtwork().click();
  ArtworkPage.selRejectTab().click();
  ArtworkPage.selArtworkId().type("VERVE-TES-2023-05-19-09152307");
  ArtworkPage.clickSearchBtn().click();
  //ArtworkPage.verArtworkId2().should("have.text",userData.artWorkId2);
  //ArtworkPage.verCreatedBy1().should("have.text",userData.artWorkTxt1)

})

it("search by valid title on the rejected tab", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtwork().click();
  ArtworkPage.selRejectTab().click();
  ArtworkPage.selArtworkId().type("Contract Extension Letter - Lukman Olabanjo (1).pdf");
  ArtworkPage.clickSearchBtn().click();
 // ArtworkPage.verArtworkId2().should("have.text",userData.artWorkId2);

})

it("search by invalid title on the rejected tab", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtwork().click();
  ArtworkPage.selRejectTab().click();
  ArtworkPage.selArtworkId().type("Contract Extension Letter - Lukman Olabanjo (1)");
  ArtworkPage.clickSearchBtn().click();
  })

  it("search by invalid parameter on the rejected tab", () => {
    ArtworkPage.selSvg().click();
    cy.wait(6000);
    ArtworkPage.selArtwork().click();
    ArtworkPage.selRejectTab().click();
    ArtworkPage.selArtworkId().type("sfsgshsh");
    ArtworkPage.clickSearchBtn().click();
    })
})