class ContactDetails
{

    setGoToContactDetailsPage()
    {
        cy.get('#burger-cont > :nth-child(1)').click(); 
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(6) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
            
    }

    setAddContactButton()
    {
        cy.get('.add-button-container > .d-flx').click();           
    }


    setinputName(Name)
    {
        cy.get("input[name='name']").click().type(Name)           
    }

    setinputEmail(email)
    {
        cy.get("input[name='email']").click().type(email)           
    }

    setinputPhoneNumber(PhoneNumber)
    {
        cy.get("input[name='phoneNumber']").click().type(PhoneNumber)           
    }

    setinputRole(Role)
    {
        cy.get("input[name='designation']").click().type(Role)           
    }

    setinputDepartment()
    {
        cy.get("#outlined-select-currency").click()  
        cy.get("div[id='menu-'] li:nth-child(3)").click()         
    }

    setSummitButton()
    {
        cy.get("#submitUserForm").click()         
    }

    setConfirmAddContact(Contact)
    {
        cy.contains(Contact).should('be.visible')

    }

    setCloseTab()
    {
        cy.get(".ant-modal-close-x").click()         
    }

    setSearch(Search)
    {
        cy.get('.search-input').click().type(Search)         
    }

    setVerifySearcch(Verify)
    {
        cy.contains(Verify).should('be.visible')

    }

    setClickSearch()
    {
        cy.get('.input-container > .d-flx').click()         
    }

    setViewContact()
    {
        cy.get(':nth-child(1) > #table-dropdown > .anticon > svg').trigger('mouseover')
        cy.get('.view').click()        
    }


    setEditContact()
    {
        cy.get(':nth-child(1) > #table-dropdown > .anticon > svg').trigger('mouseover')
        cy.get('.Edit').click()        
    }


    setinputName2(Name)
    {
        cy.get("input[name='name']").click().clear().type(Name)           
    }

    setinputEmail2(email)
    {
        cy.get("input[name='email']").click().clear().type(email)           
    }

    setinputPhoneNumber2(PhoneNumber)
    {
        cy.get("input[name='phoneNumber']").click().clear().type(PhoneNumber)           
    }

    setinputRole2(Role)
    {
        cy.get("input[name='designation']").click().clear().type(Role)           
    }

    setinputDepartment2()
    {
        cy.get("#outlined-select-currency").click()  
        cy.get("div[id='menu-'] li:nth-child(4)").click()         
    }
    

}

export default ContactDetails;    