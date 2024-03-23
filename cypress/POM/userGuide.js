class userGuide {

    GetDashboardGuidesSection()
    {
        cy.get('.category-header').should('be.visible');
        cy.get('.category-container > :nth-child(1)').should('be.visible');  
        cy.get('.category-container > :nth-child(2)').should('be.visible');  
        cy.get('.category-container > :nth-child(3)').should('be.visible');
        cy.get('.category-container > :nth-child(4)').should('be.visible');  
    }

    ViewAllGuidesFromDashboard()
    {
        cy.get('.all-category > :nth-child(1) > .view-all').click();
        cy.get('#burger-cont').click();      
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(1) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click();
    }

    ViewCategoryGuidesFromDashboard()
    {
        cy.get(':nth-child(1) > .view-card > :nth-child(1) > .view-all').click();
        cy.get('.header-title').should('be.visible');
              
    }

    GoToGuidesPage()
    {
        cy.get('#burger-cont > :nth-child(1)').click();
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(8) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click();
        cy.get('.header-title').should('be.visible')
        cy.get('.ant-pagination-item-2 > a').click();
        cy.get('.ant-pagination-item-3 > a').click();
        cy.get('.ant-pagination-item-4 > a').click();
    }

    GoToAdminGuidesPage()
    {
        cy.get('#burger-cont > :nth-child(1)').click();
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(13) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click();
        cy.get('.header-title').should('be.visible')
        cy.get('.ant-pagination-item-2 > a').click();
        cy.get('.ant-pagination-item-3 > a').click();
        cy.get('.ant-pagination-item-4 > a').click();
    }

    GoToCategoryGuidesPage()
    {
        cy.get('#burger-cont > :nth-child(1)').click();
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(8) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click();
        cy.get('.header-title').should('be.visible')
        cy.get('.category-container > :nth-child(1)').should('be.visible');
        cy.get(':nth-child(1) > .view-card > :nth-child(1) > .view-all').click();
        cy.get('.header-title').should('be.visible');
        cy.get('.custom-searchBox').should('be.visible');
    }

    GoToAdminCategoryGuidesPage()
    {
        cy.get('#burger-cont > :nth-child(1)').click();
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(13) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click();
        cy.get('.header-title').should('be.visible')
        cy.get('.category-container > :nth-child(1)').should('be.visible');
        cy.get(':nth-child(1) > .view-card > :nth-child(1) > .view-all').click();
        cy.get('.header-title').should('be.visible');
        cy.get('.custom-searchBox').should('be.visible');
    }

    DownloadGuide()
    {
        cy.get('#burger-cont > :nth-child(1)').click();
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(8) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click();
        cy.get('.header-title').should('be.visible')
        cy.get('.category-container > :nth-child(1)').should('be.visible');
        cy.get(':nth-child(1) > .view-card > :nth-child(1) > .view-all').click();
        cy.get('.category-file-container > :nth-child(1)').should('be.visible');
        cy.get(':nth-child(1) > .download-button > svg').click();

    }

    DownloadAdminGuide()
    {
        cy.get('#burger-cont > :nth-child(1)').click();
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(13) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click();
        cy.get('.header-title').should('be.visible')
        cy.get('.category-container > :nth-child(1)').should('be.visible');
        cy.get(':nth-child(1) > .view-card > :nth-child(1) > .view-all').click();
        cy.get('.category-file-container > :nth-child(1)').should('be.visible');
        cy.get(':nth-child(1) > .download-button > svg').click();

    }

    SearchGuides(CategoryName)
    {
        //cy.get('#burger-cont > :nth-child(1)').click();
        //cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(8) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click();
        cy.get('.input-container').click().type(CategoryName);
        cy.get('.input-container > .d-flx').click();
    }

    SetVerifySearch(CategoryName)
    {
        cy.contains(CategoryName).should('be.visible')
    }

    VerifyNoResultsReturned()
    {
        cy.contains('No Data to Display').should('be.visible')
    }


    ViewCategoryGuides()
    {
        cy.get('#burger-cont > :nth-child(1)').click();
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(8) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click();
        cy.get(':nth-child(1) > .view-card > :nth-child(1) > .view-all').click();
        cy.get('.header-title').should('be.visible')
    }

    ViewAdminCategoryGuides()
    {
        cy.get('#burger-cont > :nth-child(1)').click();
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(13) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click();
        cy.get(':nth-child(1) > .view-card > :nth-child(1) > .view-all').click();
        cy.get('.header-title').should('be.visible')
    }
    

}

export default userGuide