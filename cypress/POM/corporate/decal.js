
class Decal
{

    setGoToDecalPage()
    {
        cy.get('#burger-cont > :nth-child(1)').click(); 
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(5) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
            
    }

    setGoToDecalPage2()
    {
        cy.get('#burger-cont > :nth-child(1)').click(); 
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(7) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
            
    }
    setGoToDecalPage5()
    {
        cy.get('#burger-cont > :nth-child(1)').click(); 
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(8) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
            
    }



    setRequestDecals()
    {
        cy.get('.add-button-container > .d-flx').click(); 
          
    }


    setSelectDecals()
    {
        cy.get("body div[id='root'] div[class='layout null'] div[class='children'] div[id='modalContainer'] div div[class='ant-modal-root'] div[role='dialog'] div[role='document'] div[class='ant-modal-content'] div[class='ant-modal-body'] div[class='ant-spin-nested-loading'] div[class='ant-spin-container'] div[role='tablist'] div:nth-child(2) div:nth-child(1)").click()
 
           
   }
   

   setInputValue(value)
   {
    cy.get("input[type='text']").click().type(value)
          
   }

  setSubmitDecalButton()
  {
    cy.get("div[class='ant-modal-footer'] button[class='d-flx al-i-c j-c-c custom-button white']").click()
         
 }
 
 setVerifyRequest(verify)
{
    cy.contains(verify).should('be.visible')
}


setCloseModal()
    {
        cy.get('.ant-modal-close-x').click(); 
          
    }

    setinputSearch(decalname)
    {
        cy.get('.search-input').click().type(decalname) 
          
    }

    setsearch()
    {
        cy.get('.input-container > .d-flx').click() 
          
    }

    setPendingTab()
    {
        cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2) > span').click() 
          
    }


    setRejectedTab()
    {
        cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(3) > span').click() 
          
    }

    setSelectDecal1()
    {
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(1) > span:nth-child(5)").trigger('mouseover')
        cy.get(':nth-child(2) > #table-dropdown > .anticon > svg > path').trigger('mouseover')
        cy.get('.view').click() 
        
    }

    setSelectDecal2()
    {
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(1) > span:nth-child(5)").trigger('mouseover')
        cy.get(':nth-child(2) > #table-dropdown > .anticon > svg > path').trigger('mouseover')
        cy.get('.approve').click() 
        
    }


    setViewDecal()
    {
        cy.get('.view').click() 
    }


    setApproveDecal()
    {
        cy.get('.green').click() 
    }

    setRejectDecal()
    {
        cy.get('.red').click() 
    }


    setInputValue(comment)
    {
        cy.get('#outlined-multiline-flexible').click().type(comment) 
    }

    setSummitDecal()
    {
        cy.get('#submit').click() 
    }

    setConfirmApproval()
    {
        cy.get('.approve.custom-button').click()
    }

    setConfirmReject()
    {
        cy.get('.reject.custom-button').click()
    }

    setCloseModal2()
    {
        cy.get("div[class='ant-modal'] span[class='ant-modal-close-x']").click()
    }

    setCloseModal3()
    {
        cy.get('.d-flx.al-i-c.j-c-c.custom-button.cmx-1').click()
    }


    setCloseModalNo()
    {
        cy.get("div[class='ant-modal confirm-request-modal'] span[class='ant-modal-close-x']").click()
    }

   
    setGotoDecalRequest1()
    {
        cy.get('.viewAll-Link').click() 
    }
    
    
    

}

export default Decal;