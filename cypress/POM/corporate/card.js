class CardUser
{

    setGoToCardPage()
    {
        cy.get('#burger-cont > :nth-child(1)').click(); 
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(3) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
            
    }

    clickRequestButton()
    {
        cy.get('.add-button-container > .d-flx').click(); 
                
    }

    SetSelectArtwork()
    {
        cy.get("body div[id='root'] div[class='layout null'] div[class='children'] div[id='modalContainer'] div div[class='ant-modal-root'] div[role='dialog'] div[role='document'] div[class='ant-modal-content'] div[class='ant-modal-body'] div[class='ant-spin-nested-loading'] div[class='ant-spin-container'] div[role='tablist'] div:nth-child(1) div:nth-child(1)").click(); 
                
    }

    SetQuatity(Quality)
    {
        cy.get("input[name='quantity']").click().type(Quality); 
                
    }

    SetCardType(cardType)
    {
        cy.get("input[name='cardType']").click().type(cardType);        
    }

    SetCardProgram(CardProgram)
    {
        cy.get("input[name='cardProgram']").click().type(CardProgram);        
    }

    SetChipType()
    {
        cy.get("#outlined-select-currency").click();       
    }

    PickChipType()
    {
        cy.get("div[id='menu-'] li:nth-child(1)").click();       
    }

    setSubmitRequest()
    {
        cy.get('.quantity-input-cont > .d-flx > .white').click();       
    }
    setsuccessMessage()
    {
            cy.contains('Card request was successful').should('be.visible')
    }

    seterrorMessage()
    {
            cy.contains('quantity cannot be empty!').should('be.visible')
    }


    seterrorMessage1()
    {
            cy.contains('cardType cannot be empty!').should('be.visible')
    }


    seterrorMessage2()
    {
            cy.contains('cardProgram cannot be empty!').should('be.visible')
    }

    seterrorMessage3()
    {
            cy.contains('chipId cannot be empty!').should('be.visible')
    }



    setcloseRequesttab()
    {
        cy.get('.ant-modal-close-x').click();       
    }

    setGoToArtworkPage()
{
    cy.get('#burger-cont > :nth-child(1)').click(); 
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(3) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
        
}
setSearch(search)
{
    cy.get('.input-container.d-flx.al-i-c.cmt-1.cmb-3').click().type(search)
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

setpickCard()
{
    cy.get(':nth-child(1) > #table-dropdown > .anticon > svg > path').trigger('mouseover')
    cy.get('.approve').click()
}


//Admin side


setInputComment(Text)
{
    cy.get('#outlined-multiline-flexible').click().type(Text)
}

setSummitComment()
{
    cy.get('#submit').click()
}

setConfirmYes()
{
    cy.get('.approve.custom-button').click()
}

setSuccessMessage4()
    {
            cy.contains('Card request approval done successfully').should('be.visible')
    }

    setCloseTestModal()
{
    cy.get('.ant-modal-close-x').click()
}
setConfirmNo()
{
    cy.get('.d-flx.al-i-c.j-c-c.custom-button.cmx-1').click()
}

setReject()
{
    cy.get(':nth-child(1) > #table-dropdown > .anticon > svg > path').trigger('mouseover')
    cy.get('.reject').click()
}

setRejectConfirmYes()
{
    cy.get('.reject.custom-button').click()
}

setSuccessMessage5()
    {
            cy.contains('Card request rejected').should('be.visible')
    }



}

export default CardUser;