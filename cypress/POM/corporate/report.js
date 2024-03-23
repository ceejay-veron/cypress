class Report
{

    setGoToReportPage()
    {
        cy.get('#burger-cont > :nth-child(1)').click();
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(6) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
        
    }

    setGoToReportPage2()
    {
        cy.get('#burger-cont > :nth-child(1)').click();
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(9) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
        
    }


    setinputValue(Value)
    {
        cy.get("input[placeholder='Search by report title']").click({ force: true }).type(Value)
    }


    setSummitButton()
    {
        cy.get('.input-container > .d-flx').click()
    }

    setVerify(VerifyValue)
    {
        cy.contains(VerifyValue).should('be.visible')
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

export default Report;