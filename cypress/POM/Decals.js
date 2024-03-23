class Decals
{
setGoToDecalsPage()
{
    cy.get('#burger-cont > :nth-child(1)').click(); 
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(13) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
    
        
}
setSearch(search)
{
    cy.get('.input-container.d-flx.al-i-c.cmt-1.cmb-3').click().type(search)
}
setClickSearch()
{
    cy.get('.input-container > .d-flx').click()
}

setVerifySearch(Searchpara)
{
    cy.contains(Searchpara).should('be.visible')
}

setPendingtab()
{

}
setGoToDecalPage5()
{
    cy.get('#burger-cont > :nth-child(1)').click(); 
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(8) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
        
}

setGoToRequestedDecal()
{
    cy.get('.viewAll-Link').click() 
}

      
}

export default Decals;