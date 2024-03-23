class institution 
{
setGoToInstitionPage()
{
    cy.get('#burger-cont > :nth-child(1)').click();
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(2) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()      
}
setInactiveTab()
{
    cy.get("div[class=' ant-tabs-tab'] span").click()
     
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

setAddbutton()
{
    cy.get('.add-button-container > :nth-child(2)').click()
}
setInstitionName(Name)
{
    cy.get("#institution_name").click().type(Name)
}

setInstitionType()
{
    cy.get("#outlined-select-currency").click()
    cy.get("div[id='menu-'] li:nth-child(1)").click()    
}

setphone_number(phoneNumber)
{
    cy.get( "#phoneNumber").click({force:true}).type(phoneNumber)
}
setemail(email)
{
    cy.get("#email").click().type(email)
}

setSubmitButton()
{
    cy.get("#createOrg").click()
}
setsuccessMessage()
{
    cy.contains('Organization was successfully created').should('be.visible')
}
setErrorMessage1()
{
    cy.contains('Institution name cannot be empty!').should('be.visible')
}

setErrorMessage2()
{
    cy.contains('Phone number cannot be empty!').should('be.visible')
}
setErrorMessage3()
{
    cy.contains('Email cannot be empty!').should('be.visible')
}
setErrorMessage4()
{
    cy.contains('Institution type cannot be empty!').should('be.visible')
}

setClosetab()
{
    cy.get(".ant-modal-close-x").click()
}

setErrorMessage6()
{
    cy.contains('PhoneNumber cannot be empty!').should('be.visible')
}


setClosetab()
{
    cy.get(".ant-modal-close-x").click()
}

setViewInstitutionDetails()
{
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > span:nth-child(6)").trigger('mouseover')
    cy.get('.view').click()
}

setIsArtwork()
{
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(1) > span').click()
}

setIsCards()
{
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2) > span').click()
}

setIsWhitelistsCard()
{
    cy.get(':nth-child(3) > span').click()
}

setIsUser()
{
    cy.get(':nth-child(4) > span').click()
}

setIsDecal()
{
    cy.get(':nth-child(5) > span').click()
}

setIsContactSetails()
{
    cy.get('.flex').click().click()
}

setGotoinstitutionUserTab()
{
    cy.get(':nth-child(4) > span').click()
}

setClickAddinstitutionAdminButton()
{
    cy.get('.add-button > .d-flx').click()
}

setOrgAdminFirstName(Firstname3)
{
    cy.get('#first_name').type(Firstname3)
}

setOrgAdminLastName(Lastname3)
{
    cy.get('#last_name').type(Lastname3)
}

setOrgAdminEmail(email)
{
    cy.get("#email").click().type(email)
}

setOrgAdminPhoneNumber(phoneNumber3)
{
    cy.get('#phoneNumber').type(phoneNumber3)
}

setCreateinstitutionAdminButton()
{
    cy.get('.save-button').click()
}

setsuccessMessage7()
{
    cy.contains('Organization user was successfully created').should('be.visible')
}

setErrorMessage9()
{
    cy.contains('First name cannot be empty!').should('be.visible')
}

setErrorMessage10()
{
    cy.contains('Last name cannot be empty!').should('be.visible')
}

setErrorMessage11()
{
    cy.contains('Email cannot be empty!').should('be.visible')
}

setErrorMessage12()
{
    cy.contains('PhoneNumber cannot be empty!').should('be.visible')
}

setCloseModal1()
{
   cy.get('.ant-modal-close-x').click()  
}

SetSeleteUser1()
{
    cy.get(':nth-child(2) > #table-dropdown > .anticon > svg').trigger('mouseover')
}

SetSeleteDisableUser()
{
    cy.get('.ant-dropdown-menu-item').click()
}

SetSelectComment(commentzero)
{
    cy.get('#outlined-multiline-flexible').type(commentzero)
}

SetSummitCommentbtn()
{
    cy.get('.submit-button').click()
}

SetConfirmCommentbtn()
{
    cy.get('#approveRequest').click()
}

SetRejectbtn()
{
    cy.get('.d-flx.al-i-c.j-c-c.custom-button.cancel-btn.cap').click()
}

setVerifyDisableUser(VerifyDisable)
{
    cy.contains(VerifyDisable).should('be.visible')
}


setActiveUser()
{
    cy.get(".select-dropdown").select(1).invoke("val").should("eq", "active")
}

setInactiveUser()
{
    cy.get(".select-dropdown").select(2).invoke("val").should("eq", "inactive")
}

SetEnableuser()
{
    cy.get('.enable').click()
}

SetDeleteuser()
{
    cy.get('.delete').click()
}



      
}

export default institution;