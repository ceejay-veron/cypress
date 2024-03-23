class Reports
{
setGoToReportPage()
{
    cy.get('#burger-cont > :nth-child(1)').click(); 
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(11) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
    
        
}

setGoToReportPage2()
{
    cy.get('#burger-cont > :nth-child(1)').click(); 
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(6) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
    
        
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
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2) > span').click()
}
setRejectedtab()
{
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(3) > span').click()
}

setselectFilter()
{
    cy.get('#reportrange > .d-flx').click()
}

setDateTolast30days()
{
    cy.get('.ranges > ul > .active').click()
}

setDateToThisMonth()
{
    cy.get('[data-range-key="This Month"]').click()
}

setDateToLastMonth()
{
    cy.get('.anticon-caret-down > svg').click()
}


setDateToToday()
{
    cy.get('[data-range-key="Today"]').click()
}

setDateToYesterday()
{
    cy.get('[data-range-key="Yesterday"]').click()
}

setDateToLast7Days()
{
    cy.get('[data-range-key="Last 7 Days"]').click()
}
      
}

export default Reports;