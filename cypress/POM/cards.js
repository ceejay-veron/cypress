class Cards 
{
setGoToCardPage()
{
    cy.get('#burger-cont > :nth-child(1)').click(); 
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(6) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()

        
}

setGoToCardPage2()
{
    cy.get('#burger-cont > :nth-child(1)').click(); 
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(5) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()

        
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

setpickCard1()
{
    cy.get(':nth-child(1) > #table-dropdown > .anticon > svg > path').trigger('mouseover')
    cy.get('.view').click()
}

setcloseModal1()
{
    cy.get('.ant-modal-close-x').click()
}

setpickpendingCard1()
{
    cy.get(':nth-child(1) > #table-dropdown > .anticon > svg > path').trigger('mouseover')
    cy.get('.view').click()
}

setGoToCardPage3()
{
    cy.get('#burger-cont > :nth-child(1)').click(); 
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(6) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()

        
}

setpickpendingCard2()
{
    cy.get("//li[1]//span[6]//i[1]//*[name()='svg']").trigger('mouseover')
    cy.get('.view').click()
}

setPickBulkCard()
{
    cy.get("label[for='checkboxd4d60ec6-32f3-46f9-a45a-c2a3f8cee962']").click()
    cy.get("label[for='checkbox86c9abda-a09b-4266-a57b-8624c2f2353a']").click()
}

setBulkApproveCard()
{
    cy.get('.add-button-container > .ant-dropdown-link').click()
    cy.get('.green').click()
}

setRate(Rate)
{
    cy.get('#rate').click().type(Rate)
}

setcomment22(Comment1)
{
    cy.get('#outlined-multiline-flexible').click().type(Comment1)
}


setSubmitComment(Comment1)
{
    cy.get('#submit').click()
}

setConfirmApproval(Comment1)
{
    cy.get('#approveRequest').click()
}


}

export default Cards;