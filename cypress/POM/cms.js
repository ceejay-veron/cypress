class cms {

    setGoTocmsPage()
    {
        cy.get('#burger-cont > :nth-child(1)').click();
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(8) > .isw-sideBarNavLink').click()      
    }

    setGoToDashboardSection()
    {
        cy.get(':nth-child(1) > .ant-collapse-header').click();
        cy.get('.ant-collapse-item-active > .ant-collapse-header').contains('Dashboard').should('be.visible');
        cy.get('h2').contains('Guides').should('be.visible')
    }

    UpdateIssuerDashboardTitle()
    {
        cy.get('#title').click().type('Issuer Dashboard');
        cy.get('.about-page > .d-flx > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click();
        cy.get('[data-value="2"]').click();
        cy.get('.about-page > .cmt-2 > span').click()
    }

    UpdateCorporateDashboardTitle()
    {
        cy.get('#title').type('{selectall}{backspace}').type('Corporate Dashboard');
        cy.get('.about-page > .cmt-2 > span').click()
    }

    UpdateAcquirerDashboardTitle()
    {
        cy.get('#title').click().type('Acquirer Dashboard');
        cy.get('.about-page > .d-flx > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click();
        cy.get('[data-value="3"]').click();
        cy.get('.about-page > .cmt-2 > span').click()
    }

    UpdatePersoDashboardTitle()
    {
        cy.get('#title').click().type('Card Perso Dashboard');
        cy.get('.about-page > .d-flx > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click();
        cy.get('[data-value="4"]').click();
        cy.get('.about-page > .cmt-2 > span').click()
    }

    VerifyPageTitleUpdate()
    {
        cy.contains('SUCCESS!').should('be.visible')
    }
//Update Artwork page Title for institutions
    setGoToArtworkSection()
    {
        cy.get(':nth-child(2) > .ant-collapse-header').click();
        //cy.get('#title').contains('Title').should('be.visible');
        //cy.get('#outlined-select-currency').contains('Corporate Types').should('be.visible')
    }

    UpdateCorporateArtworkPageTitle()
    {
        cy.get('#title').type('{selectall}{backspace}').type('Corporate Artwork Page');
        cy.get('.cmt-2 > span').click()
    }

    UpdateIssuerArtworkPageTitle()
    {
        cy.get('#title').type('{selectall}{backspace}').type('Issuer Artwork Page');
        cy.get('#outlined-select-currency').click();
        cy.get('[data-value="2"]').click()
        cy.get('.cmt-2 > span').click()
    }

    UpdateAcquirerArtworkPageTitle()
    {
        cy.get('#title').type('{selectall}{backspace}').type('Acquirer Artwork Page');
        cy.get('#outlined-select-currency').click();
        cy.get('[data-value="3"]').click()
        cy.get('.cmt-2 > span').click()
    }

    UpdateCardPersoArtworkPageTitle()
    {
        cy.get('#title').type('{selectall}{backspace}').type('Perso Artwork Page');
        cy.get('#outlined-select-currency').click();
        cy.get('[data-value="4"]').click()
        cy.get('.cmt-2 > span').click()
    }


//Update Cards Page Title for Institutions 

    setGoToCardSection()
    {
        cy.get(':nth-child(3) > .ant-collapse-header').click();
    }


    UpdateCorporateCardsPageTitle()
    {
        cy.get('#title').type('{selectall}{backspace}').type('Corporate Cards Page');
        cy.get('.cmt-2 > span').click()
    }

    UpdateIssuerCardsPageTitle()
    {
        cy.get('#title').type('{selectall}{backspace}').type('Issuer Cards Page');
        cy.get('#outlined-select-currency').click();
        cy.get('[data-value="2"]').click();
        cy.get('.cmt-2 > span').click()
    }

    UpdateAcquirerCardsPageTitle()
    {
        cy.get('#title').type('{selectall}{backspace}').type('Acquirer Cards Page');
        cy.get('#outlined-select-currency').click();
        cy.get('[data-value="3"]').click();
        cy.get('.cmt-2 > span').click()
    }

    UpdatePersoCardsPageTitle()
    {
        cy.get('#title').type('{selectall}{backspace}').type('Perso Cards Page');
        cy.get('#outlined-select-currency').click();
        cy.get('[data-value="4"]').click();
        cy.get('.cmt-2 > span').click()
    }

//Guides Update
    setGetCategoryList()
    {
        cy.get('.inputs-container-no-span > :nth-child(1) > .d-flx-c > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click()
    }

    setSelectCategory()
    {
        cy.get('.inputs-container-no-span > :nth-child(1) > .d-flx-c > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click()
        cy.get('[data-value="eb53e159-ddd4-40ce-a62f-4f0271471c9f"]').click()
    }

    setGetCategoryModal()
    {
        cy.get('.inputs-container-no-span > :nth-child(2) > .d-flx').click()
        cy.get('#rcDialogTitle0').contains('Add new Category').should('be.visible')
        cy.get('.ant-modal-close-x').click()
    }

    setGetCategoryModal1()
    {
        cy.get('.inputs-container-no-span > :nth-child(2) > .d-flx').click()
    }

    setCategoryTitle(CategoryName)
    {
        //cy.get('.inputs-container-no-span > :nth-child(2) > .d-flx').click()
        cy.get('#category_title').click().type(CategoryName)
    }

    setSaveCategory()
    {
        cy.get('#addCategory').click({force: true})
        //cy.get('#addCategory').parent()        
    }

    setSaveCategoryError()
    {
        cy.contains('RandomCategoryName already exist').should('be.visible')
        cy.get('.ant-modal-close-x').click()         
    }

    setSaveCategoryError1()
    {
        cy.contains('Category title cannot be empty!').should('be.visible')
        cy.get('.ant-modal-close-x').click()       
    }

    setSaveCategorySuccess()
    {
        cy.contains('Category successfully created').should('be.visible')
    }

    setGuideTitle(Title)
    {
        cy.get('#Title').click().type(Title)
    }

    setCategory()
    {
        cy.get('.inputs-container-no-span > :nth-child(1) > .d-flx-c > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click()
        cy.get('.MuiList-root > [tabindex="0"]')
    }

    setGuideDetailsCorp()
    {
        cy.get('.inputs-container-no-span > :nth-child(1) > .d-flx-c > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click()
        cy.get('.MuiList-root > [tabindex="0"]')
    }

    setGuideDetailsIss()
    {
        cy.get('#Title').click().type(Title)
        cy.get('.scheme-rules > .inputs-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click()
        cy.get('[data-value="2"]').click()
        cy.get('.inputs-container-no-span > :nth-child(1) > .d-flx-c > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click()
        cy.get('.MuiList-root > [tabindex="0"]')
    }

    setGuideDetailsAcq()
    {
        cy.get('#Title').click().type(Title)
        cy.get('.scheme-rules > .inputs-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click()
        cy.get('[data-value="3"]').click()
        cy.get('.inputs-container-no-span > :nth-child(1) > .d-flx-c > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click()
        cy.get('.MuiList-root > [tabindex="0"]')
    }

    setGuideDetailsPer()
    {
        cy.get('#Title').click().type(Title)
        cy.get('.scheme-rules > .inputs-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click()
        cy.get('[data-value="4"]').click()
        cy.get('.inputs-container-no-span > :nth-child(1) > .d-flx-c > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click()
        cy.get('.MuiList-root > [tabindex="0"]')
    }

    setGuideDetailsAll()
    {
        cy.get('#Title').click().type(Title)
        cy.get('.scheme-rules > .inputs-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click()
        cy.get('[data-value="5"]').click()
        cy.get('.inputs-container-no-span > :nth-child(1) > .d-flx-c > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click()
        cy.get('.MuiList-root > [tabindex="0"]')
    }

    setGuideDetailsIss()
    {
        cy.get('#Title').click().type(Title)
        cy.get('.scheme-rules > .inputs-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click()
        cy.get('[data-value="2"]').click()
        cy.get('.inputs-container-no-span > :nth-child(1) > .d-flx-c > .MuiFormControl-root > .MuiInputBase-root > #outlined-select-currency').click()
        cy.get('.MuiList-root > [tabindex="0"]')
    }

    setCreateGuide()
    {
        cy.get('.scheme-rules > .cmt-2 > span').click()
    }

    setCreateGuideError()
    {
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(2)').contains('Title Cannot Be Empty!').should('be.visible')
    }    

    setCreateGuideError1()
    {
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)').contains('Category Cannot Be Empty!').should('be.visible')
    }  

    setCreateGuideError2()
    {
        cy.get('.formats.cmb-2.red').contains('Upload a file').should('be.visible')
    }  

    setViewGuideTableDetails()
    {
        cy.get('.cms-table-part');
        cy.get('.guide-table-bodys > .ant-spin-nested-loading > .ant-spin-container > .d-flx-c')//.contains(':nth-child(1) > .filename').should('be.visible');
        cy.get('.input-container');
        cy.get('.custom-searchBox')//.contains('Search by Title and Category').should('be.visible');
        cy.get('.guide-table-pagi > .d-flx');
        cy.get('.guide-table-header').contains('Title').should('be.visible');
        cy.get('.guide-table-header').contains('Category').should('be.visible');
        cy.get('.guide-table-header').contains('Uploaded By').should('be.visible');
        cy.get('.guide-table-header').contains('Date Uploaded').should('be.visible');
        cy.get('.guide-table-header').contains('Action').should('be.visible');
    }


    setSearch(CategoryName)
    {
        cy.get('.input-container').click().type(CategoryName)
        cy.get('.input-container > .d-flx').click()
    }

    setVerifySearch(CategoryName)
    {
        cy.contains(CategoryName).should('be.visible')
    }

    VerifyNoResultsReturned()
    {
        cy.contains('No Data to Display').should('be.visible')
    }

    setViewDeleteGuidePopUp()
    {
        //cy.get('#burger-cont > :nth-child(1)').click();
        //cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(8) > .isw-sideBarNavLink').click();
        cy.get('.guide-table-bodys > .ant-spin-nested-loading > .ant-spin-container > .d-flx-c');
        cy.get('.guide-table-header > .d-flx > :nth-child(5)').contains('Action');
        cy.get(':nth-child(1) > .remove-icon').click();
        //cy.get(':nth-child(2) > .remove-icon > svg > g > path').click();
        cy.contains('Delete Guide').should('be.visible');
        cy.contains('Are you sure you want to delete').should('be.visible');
        cy.contains('Cancel').should('be.visible');
        cy.contains('Yes').should('be.visible');
        cy.contains('Close').should('be.visible');
    }

    setCancelDeleteGuideAction()
    {
        //cy.get('#burger-cont > :nth-child(1)').click();
        //cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(8) > .isw-sideBarNavLink').click();
        cy.get('.guide-table-bodys > .ant-spin-nested-loading > .ant-spin-container > .d-flx-c');
        cy.get(':nth-child(1) > .remove-icon').click();
        //cy.get(':nth-child(2) > .remove-icon > svg > g > path').click();
        cy.get('.d-flx.al-i-c.j-c-c.custom-button.left').click();
    }

    setCloseDeleteGuidePopUp()
    {
        //cy.get('#burger-cont > :nth-child(1)').click();
        //cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(8) > .isw-sideBarNavLink').click();
        cy.get('.guide-table-bodys > .ant-spin-nested-loading > .ant-spin-container > .d-flx-c');
        //cy.get(':nth-child(2) > .remove-icon > svg > g > path').click();
        cy.get(':nth-child(1) > .remove-icon').click();
        cy.get('.ant-modal-close-x').click();
    }

    setDeleteGuide()
    {
        //cy.get('#burger-cont > :nth-child(1)').click();
        //cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(8) > .isw-sideBarNavLink').click();
        cy.get('.guide-table-bodys > .ant-spin-nested-loading > .ant-spin-container > .d-flx-c');
        //cy.get(':nth-child(2) > .remove-icon > svg > g > path').click();
        cy.get(':nth-child(1) > .remove-icon').click();
        cy.get('.d-flx.al-i-c.j-c-c.custom-button.right').click();
    }

    setConfirmGuideDeletion()
    {
        cy.contains('Guide has been removed').should('be.visible');
    }


}

export default cms