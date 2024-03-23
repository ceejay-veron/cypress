class Request
{

    setGoToRequestPage()
{
    cy.get('#burger-cont > :nth-child(1)').click(); 
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(12) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
            
}

setSearch(search)
{
    cy.get('.input-container.d-flx.al-i-c.cmt-1.cmb-3').click().type(search)
}
setClickSearch()
{
    cy.get('.input-container > .d-flx').click()
}

setClickRequestSettings()
{
    cy.get('.ant-btn').click()
}

setClickAddNewRequestForm()
{
    cy.get('.ant-btn').click()
}

setClickSaveButton()
{
    cy.get('#uploadRequest').click()
}

setInputTitle(Title)
{
    cy.get('#request_title').click().type(Title)
}

setPickFile(Filename, newName)
{
    cy.fixture(Filename , { encoding: null }).as(newName)
}

setAttachFile(newName)
{
    cy.get('input[type="file"]').selectFile(newName, {force: true})
}

setClickSUploadRequestButton()
{
    cy.get('#uploadRequest').click()
}

setClickDownloadRequestTemplate()
{
    cy.get('.Download').click()
}

setSeleteRequestTemplate()
{
    cy.get(':nth-child(1) > #table-dropdown > .anticon > svg').trigger('mouseover')
}

setUpdateTitle()
{
    cy.get('.Update').click()
}

setInputEdittedTitle(Title2)
{
    cy.get('#request_title').clear().type(Title2) 
}


setVerifySearch(Searchpara)
{
    cy.contains(Searchpara).should('be.visible')
}

setClickAddRequest()
{
    cy.get('.ant-btn').click()
    cy.get('.ant-btn').click()
}

setInputTitle(Title)
{
    cy.get('#request_title').click().type(Title) 
}

setCloseTab()
{
    cy.get('.ant-modal-close-x').click() 
}


setSelectRequestJob()
{
    cy.get(':nth-child(1) > #table-dropdown > .anticon > svg').trigger('mouseover') 
}

setClickDownloadRequestJob()
{
    cy.get('.Download').click()
}

setClickonDownloadIcon()
{
    cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2)").click()
}


setClickApproveRequestJob()
{
    cy.get('.Approve').click()
}

setEnterCommentForRequest(RequestComment)
{
    cy.get("textarea[class='ant-input']").type(RequestComment)
}

setSubmitRequestApproval()
{
    cy.get("button[id='approveRejectRequest'] span").click()
}

setClickRejectRequestJob()
{
    cy.get('.Reject').click()
}


setEnterCommentForRejectRequest(RejectComment)
{
    cy.get("textarea[name='comment']").type(RejectComment)
}


setSubmitRequestRejection()
{
    cy.get('#approveRejectRequest').click()
}


setClickOnCloseRequestTab()
{
    cy.get('[aria-selected="false"] > span').click()
}








}



export default Request;