class Request 
{
setGoToRequestPage()
{
    cy.get('#burger-cont').click()
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(10) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
     
}
setCreateRequest()
{

    cy.get('.add-button-container > button.d-flx').click()
}

setRequestType()
{
    cy.get('#outlined-select-currency').click()
  cy.wait(6000)
  cy.get("div[id='menu-'] li:nth-child(1)").click()
}

SetPath(path, filename)
{
    cy.fixture(path, { encoding: null }).as(filename)
}

setAttachFile(filename)
{
    cy.get('input[type="file"]').selectFile(filename, {force: true})
   
}


setAttachFile2(filename, Filename2)
{
    cy.get('input[type="file"]').selectFile([filename, Filename2], {force: true})
}

SetComment(comment)
{
    cy.get('#outlined-multiline-flexible').type(comment)
}

SetSummit()
{
    cy.get('#Save').click()
}

SetVerifyUpload(message)
{
    cy.contains(message).should('be.visible')
}

SetVerifyDownload(message)
{
    cy.contains(message).should('be.visible')
}

setCloseTab()
{
    cy.get('.ant-modal-close-x').click()
}

setClickRequestForm()
{
    cy.get('.white').click()
}

setSelectForm()
{
    cy.get('.template-div > :nth-child(2)').click()
}

}    

export default Request;