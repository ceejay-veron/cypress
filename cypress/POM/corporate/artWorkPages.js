class artworkPage  {
    //search by artwork Id on the approved tab
    selSvg(){return cy.get('#burger-cont > :nth-child(3)')}
    selArtwork(){return cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(2) > .isw-sideBarNavLink')}
    selArtworkId(){return cy.get('.input-container')}
    clickSearchBtn(){return cy.get('.input-container > .d-flx')}
    verArtworkId(){return cy.get('.table-body.d-flx > .d-flx-c > .d-flx > :nth-child(1)')}
    //search artwork Id on the pending tab
    selSvg(){return cy.get('#burger-cont > :nth-child(3)')}
    selArtwork(){return cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(2) > .isw-sideBarNavLink')}
    selPendingTab(){return cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2)')}
    selArtworkId(){return cy.get('.input-container')}
    clickSearchBtn(){return cy.get('.input-container > .d-flx')}
    verArtworkId1(){return cy.get('.table-body-with-cb > .d-flx-c > :nth-child(2) > :nth-child(2)')}
    verCreatedBy(){return cy.get(':nth-child(2) > :nth-child(4)')}
    //search artwork Id on reject tab
    selSvg(){return cy.get('#burger-cont > :nth-child(3)')}
    selArtwork(){return cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(2) > .isw-sideBarNavLink')}
    selRejectTab(){return cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(3)')}
    selArtworkId(){return cy.get('.input-container')}
    clickSearchBtn(){return cy.get('.input-container > .d-flx')}
    verArtworkId2(){return cy.get('.table-body-extra > .d-flx-c > .d-flx > :nth-child(1)')}
    verCreatedBy1(){return cy.get('.table-body-extra > .d-flx-c > .d-flx > :nth-child(2)')}


    




}
export default  artworkPage
/**
 it.only("search by artwork Id on the pending tab", () => {
  cy.get('#burger-cont > :nth-child(3)').click();
  cy.wait(6000);
  cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(2) > .isw-sideBarNavLink').click();
  cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2)').click();
  cy.get('.input-container').type("VERVE-TES-2023-05-25-0807216805");
  cy.get('.input-container > .d-flx').click();
  cy.get('.table-body-with-cb > .d-flx-c > :nth-child(2) > :nth-child(2)').should("have.text","VERVE-TES-2023-05-25-0807216805");
  cy.get(':nth-child(2) > :nth-child(4)').should("have.text","testing1 testing2"))
});
  it.only("search by artwork Id on the rejected tab", () => {
  cy.get('#burger-cont > :nth-child(3)').click();
  cy.wait(6000);
  cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(2) > .isw-sideBarNavLink').click();
  cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(3)').click();
  cy.get('.input-container').type("VERVE-TES-2023-05-19-0915230735");
  cy.get('.input-container > .d-flx').click();
  cy.get('.table-body-extra > .d-flx-c > .d-flx > :nth-child(1)').should("have.text","VERVE-TES-2023-05-19-0915230735");
  cy.get('.table-body-extra > .d-flx-c > .d-flx > :nth-child(2)').should("have.text","Contract Extension Letter - Lukman Olabanjo (1).pdf")

})
}) */