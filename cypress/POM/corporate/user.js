class Users
{


    setGoToUserPage()
    {
        cy.get('#burger-cont > :nth-child(1)').click(); 
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(5) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
            
    }


    setAddUserButton()
    {
        cy.get('.add-button-container > .d-flx').click()
            
    }

    setAddUserButton2()
    {
        cy.get('.add-button-container > :nth-child(2)').click()
            
    }


    setEnterFirstname(firstname)
    {
        cy.get("input[name='firstName']").click().type(firstname)
            
    }

    setEnterLastname(Lastname)
    {
        cy.get("input[name='lastName']").click().type(Lastname)
            
    }

    setEnterEmail(email)
    {
        cy.get("input[name='email']").click().type(email)
            
    }


    setEnterPhoneNumber(PhoneNumber)
    {
        cy.get("input[name='phoneNumber']").click().type(PhoneNumber)
           
    }

    setRole()
    {
        cy.get("#outlined-select-currency").click()
        cy.get(".MuiButtonBase-root.MuiListItem-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiListItem-gutters.MuiListItem-button[tabindex='-1']").click()

           
    }

    setSummitButton()
    {
        cy.get("#submitUserForm").click()
           
    }

    setSummitButton2()
    {
        cy.get("#submitUserForm").click()
           
    }







    setsuccessMessage()
    {
        cy.contains('User Successfully Created').should('be.visible')
    }

    setErrorMessage()
    {
        cy.contains('firstName cannot be empty!').should('be.visible')

    }

    setErrorMessage2()
    {
        cy.contains('lastName cannot be empty!').should('be.visible')

    }

    setErrorMessage3()
    {
        cy.contains('email cannot be empty!').should('be.visible')

    }

    setErrorMessage4()
    {
        cy.contains('phoneNumber cannot be empty!').should('be.visible')

    }

    setCloseTab()
    {
        cy.get('.ant-modal-close-x').click()

    }

    setinactiveTab()
    {
        cy.get("div[class=' ant-tabs-tab'] span").click()

    }

    setSearch(search)
{
    cy.get('.search-input').click().type(search)

}
       
    
setClickSearch()
{
    cy.get('.input-container > .d-flx').click()

}

setVerifySearch(Searchpara)
    {
        cy.contains(Searchpara).should('be.visible')

    }

setSelectInactiveUser()
{
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > span:nth-child(6)").trigger('mouseover')
}

setSelectActiveUser()
{
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > span:nth-child(6)").trigger('mouseover')
}


setDeleteUser()
{
    cy.get('.delete').click()

}

setEnableUser()
{
    cy.get('.enable').click()
}

setEditUser()
{
    cy.get('.edit').click()
}

setViewUser()
{
    cy.get('.view').click()
}



setDisableUser()
{
    cy.get('.ant-dropdown-menu > .disable').click()
}


setAddComment30(Comment)
{
    cy.get('#outlined-multiline-flexible').type(Comment)

}

setSubmitComment()
{
    cy.get('#submit').click()

}

setConfirmDeleteYes()
{
    cy.get('.cap.reject.custom-button').click()

}

setConfirmEnableYes()
{
    cy.get('.cap.approve.custom-button').click()

}

setConfirmDisableYes()
{
    cy.get('.cap.reject.custom-button').click()

}

setConfirmDisableNo()
{
    cy.get(".d-flx.al-i-c.j-c-c.custom-button.cancel-btn.cap").click()

}

setConfirmEnableNo()
{
    cy.get('.d-flx.al-i-c.j-c-c.custom-button.cancel-btn.cap').click()

}

setCloseTab2()
{
    cy.get("div[class='ant-modal confirm-request-modal'] span[class='ant-modal-close-x']").click()

}


setConfirmDeleteNo()
{
    cy.get('.d-flx.al-i-c.j-c-c.custom-button.cancel-btn.cap').click()

}

setConfirmDeleteClose()
{
    cy.get("div[class='ant-modal confirm-request-modal'] span[class='ant-modal-close-x']").click()

}


setJobVerification(VerificationText)
{
    cy.contains(VerificationText).should('be.visible')

}



setEditEnterFirstname(firstname2)
{
    cy.get("input[name='firstName']").click().clear().type(firstname2)
        
}

setEditEnterLastname(Lastname2)
{
    cy.get("input[name='lastName']").click().clear().type(Lastname2)
        
}

setEditEnterEmail(email2)
{
    cy.get("input[name='email']").click().clear().type(email2)
        
}



setEditEnterPhoneNumber(PhoneNumber2)
{
    cy.get("input[name='phoneNumber']").click().clear().type(PhoneNumber2)
       
}

setEditRole2()
{
    cy.get("#outlined-select-currency").click()
    cy.get(".MuiButtonBase-root.MuiListItem-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiListItem-gutters.MuiListItem-button[tabindex='-1']").click()

       
}

setEditSummitButton()
{
    cy.get("#submitUserForm").click()
       
}



}

export default Users;