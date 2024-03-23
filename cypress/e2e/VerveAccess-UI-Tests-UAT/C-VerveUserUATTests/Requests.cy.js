/*
/// <reference types="cypress" />

// using POM
import Login from "../../../POM/loginpage.js"
import ChipType from "../../../POM/chiptype.js"
import  RandomNumber from "../../../pom/Random.js"
import  institution from "../../../pom/institution.js"
import  Artwork from "../../../pom/artwork.js"
import  whitelistCards from "../../../pom/whitelistCards.js"
import Users from "../../../pom/users.js"
import Cards from "../../../pom/cards.js"
import department from "../../../pom/Department.js"
import userP from "../../../pom/userPermission.js"
import UserP from "../../../pom/userPermission.js"
import Reports from "../../../pom/report.js"
import Decals from "../../../pom/Decals.js"



describe('visit Verve Access', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      // ok
      cy.visit('https://verve-access-admin.k8.isw.la/admin/signin')
    })

    const varTest = new RandomNumber();
    const varTest2 = new RandomNumber();
    const varTest3 = new RandomNumber();

    const ct=new ChipType();
    const ln=new Login();
    const is=new institution();
    const Aw=new Artwork();
    const Wc=new whitelistCards();
    const Us=new Users();
    const Cs=new Cards();
    const dp=new department();
    const Up=new UserP();
    const Rp=new Reports();
    const Dc=new Decals();


    it('should test for url, Navigate to Request page and search', () => {
       // cy.title().should('eq', 'Verve Access')
        cy.location('protocol').should('eq', 'https:')
        // /cy.contains('Get Started Now').click({timeout : 2000})
  
        cy.url().should('include', 'admin')
        cy.reload({timeout : 130000})
        
  
        cy.get('form').within(($form) => {
            ln.setUserName(Cypress.env('verveUser'))
            ln.setPassword(Cypress.env('verveUserPass'))
            ln.clickSubmit();
            
        })
        cy.get('.ant-dropdown-link > .sidebar-svg').click().wait(3000)
        cy.contains('VERVE USER').should('be.visible')
        ln.setLogout()
        //cy.get('.red').click()        
   

      const yourFixturePath = 'files/verve.jpg';
      
        // Search by complete Request Title
        cy.get('#burger-cont > :nth-child(3)').click()
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(12) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click();
        // should see Request setting

        cy.contains('Request Setting').should('be.visible')

        // Navigate to request setting
        cy.get('.ant-btn').click()

        // return to Request page
        cy.get('.title-section > svg').click()

        // Navigate to open and closed tab
        
        cy.get('[aria-selected="false"] > span').click()

        cy.wait(8000)
        cy.reload()
        cy.get('#burger-cont > :nth-child(3)').click()
        cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > :nth-child(12) > .isw-sideBarNavLink > .isw-sideBarNavLabel').click();


        //Download request
       // ccy.get("//li[1]//span[5]//i[1]//*[name()='svg']").trigger('mouseover') 
      
        
        
     })

     
})

*/