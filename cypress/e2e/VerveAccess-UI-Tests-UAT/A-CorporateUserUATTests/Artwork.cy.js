import artWorkPage from "../../../POM/corporate/artWorkPage";
import Login from "../../../POM/loginpage.js";
import  RandomNumber from "../../../pom/Random.js";

describe('visit Verve Access', () => {

  const varTest = new RandomNumber();
  const varTest2 = new RandomNumber();
  const varTest3 = new RandomNumber();

  const ArtworkPage = new artWorkPage();
  const ln=new Login();
  
  let usersData;

  //const ArtworkPage = new artworkPage()

    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test


    before(() => {

      cy.fixture('usersData.json').then((data) => {
        usersData = data;
      })

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
    ln.setUserName(Cypress.env('username4'))
    ln.setPassword(Cypress.env('password4'))
    ln.clickSubmit();
    cy.wait(6000)
    
     })

})

it("Create Artwork Request", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtWork().click();
  ArtworkPage.AddArtworkbutton()
cy.fixture('verve.jpg', { encoding: null }).as('myFixture')
cy.get('input[accept=".png, .jpg, .jpeg, .pdf, .svg"]').selectFile('@myFixture', {force: true})
cy.get("input[name='fileName']").clear().type(varTest.test)
cy.get('#createArtwork').click()
cy.wait(6000)
cy.contains('Artwork request successfully logged').should('be.visible')
ln.setLogout()
})


/* it("Create multiple Artwork Request", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtWork().click();
  ArtworkPage.AddArtworkbutton()
  
cy.fixture('verve.jpg', { encoding: null }).as('myFixture')
cy.get('input[accept=".png, .jpg, .jpeg, .pdf, .svg"]').selectFile('@myFixture', {force: true})
cy.get("input[name='fileName']").clear().type(varTest2.testname)
cy.get('#createArtwork').click()
cy.wait(6000)
cy.contains('




//ArtworkPage.AddArtworkbutton()
//cy.fixture('verve.jpg', { encoding: null }).as('myFixture')
cy.get('input[accept=".png, .jpg, .jpeg, .pdf, .svg"]').selectFile('@myFixture', {force: true})
cy.get("input[name='fileName']").clear().type(varTest2.newtest)
cy.get('#createArtwork').click()
cy.wait(6000)
cy.contains('Artwork request successfully logged').should('be.visible')
cy.reload()

ArtworkPage.AddArtworkbutton()
//cy.fixture('verve.jpg', { encoding: null }).as('myFixture')
cy.get('input[accept=".png, .jpg, .jpeg, .pdf, .svg"]').selectFile('@myFixture', {force: true})
cy.get("input[name='fileName']").clear().type('Artwork2023' + varTest.test)
cy.get('#createArtwork').click()
cy.wait(6000)
cy.contains('Artwork request successfully logged').should('be.visible')
cy.reload()

ArtworkPage.AddArtworkbutton()
//cy.fixture('verve.jpg', { encoding: null }).as('myFixture')
cy.get('input[accept=".png, .jpg, .jpeg, .pdf, .svg"]').selectFile('@myFixture', {force: true})
cy.get("input[name='fileName']").clear().type('Artwork2022' +varTest.test)
cy.get('#createArtwork').click()
cy.wait(6000)
cy.contains('Artwork request successfully logged').should('be.visible')
cy.reload()

ArtworkPage.AddArtworkbutton()
//cy.fixture('verve.jpg', { encoding: null }).as('myFixture')
cy.get('input[accept=".png, .jpg, .jpeg, .pdf, .svg"]').selectFile('@myFixture', {force: true})
cy.get("input[name='fileName']").clear().type('Artwork2024' + varTest.test)
cy.get('#createArtwork').click()
cy.wait(6000)
cy.contains('Artwork request successfully logged').should('be.visible')
cy.reload()

ArtworkPage.AddArtworkbutton()
//cy.fixture('verve.jpg', { encoding: null }).as('myFixture')
cy.get('input[accept=".png, .jpg, .jpeg, .pdf, .svg"]').selectFile('@myFixture', {force: true})
cy.get("input[name='fileName']").clear().type('Artwork2021' +varTest.test)
cy.get('#createArtwork').click()
cy.wait(6000)
cy.contains('Artwork request successfully logged').should('be.visible')
cy.reload()

ln.setLogout()


})*/

it("Create Artwork Request without Title", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtWork().click();
  ArtworkPage.AddArtworkbutton()
cy.fixture('verve.jpg', { encoding: null }).as('myFixture')
cy.get('input[accept=".png, .jpg, .jpeg, .pdf, .svg"]').selectFile('@myFixture', {force: true})
cy.get("input[name='fileName']").clear()
cy.get('#createArtwork').click()
cy.wait(6000)
cy.contains('fileName cannot be empty!').should('be.visible')
cy.get('.ant-modal-close-x').click()
ln.setLogout()
})

it("Create Artwork Request without file", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtWork().click();
  ArtworkPage.AddArtworkbutton()
//cy.fixture('verve.jpg', { encoding: null }).as('myFixture')
//cy.get('input[accept=".png, .jpg, .jpeg, .pdf, .svg"]').selectFile('@myFixture', {force: true})
cy.get("input[name='fileName']").type(varTest.test)
cy.get('#createArtwork').click()
cy.wait(3000)
cy.contains('file not attached').should('be.visible')
cy.get('.ant-modal-close-x').click()
ln.setLogout()
})

  
  it("search by artwork Id on the approved tab", () => {
     ArtworkPage.selSvg().click();
     cy.wait(6000);
     ArtworkPage.selArtWork().click();
     cy.wait(6000);
     ArtworkPage.selArtWorkId().type(usersData.artWorkId);
     ArtworkPage.clickSearchBtn().click();
    // ArtworkPage.verArtworkId().should("have.text",usersData.artWorkId)
    ln.setLogout()
  

  });
  it("search by incomplete artworkId in the approved tab",()=>{
    ArtworkPage.selSvg().click();
    cy.wait(6000);
    ArtworkPage.selArtWork().click();
    ArtworkPage.selArtWorkId().type("VERVE-TES-2023-05-19-21505723");
    ArtworkPage.clickSearchBtn().click();
    //ArtworkPage.verArtworkId().should("have.text",usersData.artWorkId)
    ln.setLogout()

  })
  it("search by valid title in the approved tab",()=>{
    ArtworkPage.selSvg().click();
    cy.wait(6000);
    ArtworkPage.selArtWork().click();
    ArtworkPage.selArtWorkId().type("tester1");
    ArtworkPage.clickSearchBtn().click();
    ln.setLogout()
    

})

it("search by invalid tittle in the approved tab",()=>{
    ArtworkPage.selSvg().click();
    cy.wait(6000);
    ArtworkPage.selArtWork().click();
    ArtworkPage.selArtWorkId().type("tester11");
    ArtworkPage.clickSearchBtn().click();
    ln.setLogout()
    

})

it("search by invalid parametr in the approved tab",()=>{
    ArtworkPage.selSvg().click();
    cy.wait(6000);
    ArtworkPage.selArtWork().click();
    ArtworkPage.selArtWorkId().type("RGHSYWTY");
    ArtworkPage.clickSearchBtn().click();
    ln.setLogout()
   

})

  it("search by artwork id in the pending tab", () => {
     ArtworkPage.selSvg().click();
     cy.wait(6000);
     ArtworkPage.selArtWork().click();
     ArtworkPage.selPendTab().click();
     ArtworkPage.selArtWorkId().type(usersData.artWorkId1);
     ArtworkPage.clickSearchBtn().click();
     //ArtworkPage.verArtworkId1().should("have.text",usersData.artWorkId1);
     ln.setLogout()
  });
  
  it("search by invalid artwork id in the pending tab", () => {
    ArtworkPage.selSvg().click();
    cy.wait(6000);
    ArtworkPage.selArtWork().click();
    ArtworkPage.selPendTab().click();
    ArtworkPage.selArtWorkId().type("VERVE-TES-2023-05-24-20281051");
    ArtworkPage.clickSearchBtn().click();
   // ArtworkPage.verArtworkId1().should("have.text",usersData.artWorkId1);
   ln.setLogout()
 });
 
 it("search by valid title id in the pending tab", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtWork().click();
  ArtworkPage.selPendTab().click();
  ArtworkPage.selArtWorkId().type("IMG_1498.jpg");
  ArtworkPage.clickSearchBtn().click();
  ln.setLogout()

});

it("search by invalid title id in the pending tab", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtWork().click();
  ArtworkPage.selPendTab().click();
  ArtworkPage.selArtWorkId().type("IMG_1498.j");
  ArtworkPage.clickSearchBtn().click();
  ln.setLogout()
  
});

it("search by invalid parameter in the pending tab", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtWork().click();
  ArtworkPage.selPendTab().click();
  ArtworkPage.selArtWorkId().type("aggah2h");
  ArtworkPage.clickSearchBtn().click();
  ln.setLogout()
  
});

it("search by artwork id in the reject tab", () => {
     ArtworkPage.selSvg().click();
     cy.wait(6000);
     ArtworkPage.selArtWork().click();
     ArtworkPage.selRejTab().click();
     ArtworkPage.selArtWorkId().type(usersData.artWorkId2);
     ArtworkPage.clickSearchBtn().click();
   //  ArtworkPage.verArtworkId2().should("have.text",usersData.artWorkId2)
   ln.setLogout()
    
   
  })
  
  it("search by invalid artwork id in the reject tab", () => {
    ArtworkPage.selSvg().click();
    cy.wait(6000);
    ArtworkPage.selArtWork().click();
    ArtworkPage.selRejTab().click();
    ArtworkPage.selArtWorkId().type("VERVE-TES-2023-05-19-1005556");
    ArtworkPage.clickSearchBtn().click();
  //  ArtworkPage.verArtworkId2().should("have.text",usersData.artWorkId2)
  ln.setLogout()
  })
 
 it("search by valid title in the reject tab", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtWork().click();
  ArtworkPage.selRejTab().click();
  ArtworkPage.selArtWorkId().type("NYSCFinalClearance230044769.pdf");
  ArtworkPage.clickSearchBtn().click();
  ln.setLogout()
 
 })

 it("search by invalid title in the reject tab", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtWork().click();
  ArtworkPage.selRejTab().click();
  ArtworkPage.selArtWorkId().type("NYSCFinalClearance230044769");
  ArtworkPage.clickSearchBtn().click();
  ln.setLogout()

 })
 
 it("search by invalid parameter in the reject tab", () => {
  ArtworkPage.selSvg().click();
  cy.wait(6000);
  ArtworkPage.selArtWork().click();
  ArtworkPage.selRejTab().click();
  ArtworkPage.selArtWorkId().type("lusshsgfs");
  ArtworkPage.clickSearchBtn().click();
  ln.setLogout()
 
 })

})