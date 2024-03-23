class artWorkPage {
    //accept tab
    selSvg(){return cy.get('#burger-cont > :nth-child(3)')}
    selArtWork(){return cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(2) > .isw-sideBarNavLink')}
    selArtWorkId(){return cy.get('.input-container')}
    clickSearchBtn(){return cy.get("button[class='d-flx al-i-c j-c-c custom-button ']")}
    verArtworkId(){return cy.get('.table-body.d-flx > .d-flx-c > .d-flx > :nth-child(1)')}
    //pending tab
    selSvg(){return cy.get('#burger-cont > :nth-child(3)')}
    selArtWork(){return cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(2) > .isw-sideBarNavLink')}
    selPendTab(){return cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2) > span')}
    selArtWorkId(){return cy.get('.input-container')}
    clickSearchBtn(){return cy.get("button[class='d-flx al-i-c j-c-c custom-button ']")}
    verArtworkId1(){return cy.get('.table-body-with-cb > .d-flx-c > .d-flx > :nth-child(2)')}
    //reject tab
    selSvg(){return cy.get('#burger-cont > :nth-child(3)')}
    selArtWork(){return cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(2) > .isw-sideBarNavLink')}
    selRejTab(){return cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(3) > span')}
    selArtWorkId(){return cy.get('.input-container')}
    clickSearchBtn(){return cy.get("button[class='d-flx al-i-c j-c-c custom-button ']")}
    verArtworkId2(){return cy.get('.table-body-extra > .d-flx-c > .d-flx > :nth-child(1)')}
    AddArtworkbutton(){return cy.get('.add-button-container > .d-flx').click()}

}
export default artWorkPage
