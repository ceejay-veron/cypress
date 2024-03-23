/*
<<<<<<< HEAD
=======

>>>>>>> baf7cde2a950d1b5b682e4e8aa9c4187e2d7cd12
/// <reference types="cypress" /> 

//const { setPageLoadTimeout } = require("wd/lib/commands")

describe('visit Verve Access', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      // ok
      cy.visit('https://verve-access-customer.k8.isw.la/corporate/signin').wait(20000)
    })

it('This test logs the corporate user into the Verve Access portal to search Pending reports', () => {

    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('joswitch@qa.team')
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Password@111')
    cy.get('#login').click()
    cy.wait(16000)
    cy.get('#burger-cont').click()
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > .active > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()
    cy.reload()
    
    //To search for a pending report by reportName
    cy.get('.input-container').type ('PRO-DEC-VMMR-PLAIN')
    cy.get('.input-container > .d-flx').click()
    cy.wait(4000)
    cy.contains('PRO-DEC-VMMR-PLAIN-01')
    cy.reload()

    //To search for a pending report by Corporate user's Name
    cy.get('.input-container').type ('Olanre')
    cy.get('.input-container > .d-flx').click()
    cy.wait(4000)
    cy.contains('Joe Olanre')
    cy.reload()

    //To search for a pending report by Approver's Name
    cy.get('.input-container').type ('Oge')
    cy.get('.input-container > .d-flx').click()
    cy.wait(4000)
    cy.contains('No data to display')
    cy.reload()
    
})

it('This logs the corporate user into the verve access portal searches approved reports', () => {

    cy.visit('https://verve-access-customer.k8.isw.la/corporate/signin')
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('joswitch@qa.team')
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Password@111')
    cy.get('#login').click()
    cy.wait(16000)
    cy.get('#burger-cont').click()
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > .active > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()

    //To search for an approved report by reportName
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2) > span').click()
    cy.get('.input-container').type ('PRO-DEC-VMMR-TEST')
    cy.get('.input-container > .d-flx').click()
    cy.wait(4000)
    cy.contains('PRO-DEC-VMMR-TEST-02')
    cy.get('.input-container').clear()

    //To search approved reports by Corporate User's name
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(2) > span').click()
    cy.get('.input-container').type ('Joe')
    cy.get('.input-container > .d-flx').click()
    cy.wait(4000)
    cy.contains('Joe Olanre')

    //To search approved reports by Corporate_Admin's Name
    cy.get('.input-container').clear().type('Oge')
    cy.get('.input-container > .d-flx').click()
    cy.wait(4000)
    cy.contains('No data to display')
    
})

it('This logs the corporate user into the verve access portal searches declined reports', () => {

    cy.visit('https://verve-access-customer.k8.isw.la/corporate/signin')
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('joswitch@qa.team')
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Password@111')
    cy.get('#login').click()
    cy.wait(16000)
    cy.get('#burger-cont').click()
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > .active > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()

    //To search for a declined report by reportName
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(3) > span').click()
    cy.get('.input-container').type ('PRO-DEC-VMMR-PLAIN')
    cy.get('.input-container > .d-flx').click()
    cy.wait(4000)
    cy.contains('PRO-DEC-VMMR-PLAIN-02')

    //To search declined reports by Corporate User's name
    cy.get('.input-container').clear().type ('Joe')
    cy.get('.input-container > .d-flx').click()
    cy.wait(4000)
    cy.contains('Joe Olanre')

    //To search declined reports by Corporate_Admin's Name
    cy.get('.input-container').clear().type('Oge')
    cy.get('.input-container > .d-flx').click()
    cy.wait(4000)
    cy.contains('No data to display')
    cy.reload()
    
})

it('This logs the corporate user into the verve access portal searches failed reports', () => {

    cy.visit('https://verve-access-customer.k8.isw.la/corporate/signin')
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('joswitch@qa.team')
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Password@111')
    cy.get('#login').click()
    cy.wait(16000)
    cy.get('#burger-cont').click()
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > .active > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()

    //To search for a declined report by reportName
    cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(4) > span').click()
    cy.get('.input-container').type ('VMMR Report - FNF')
    cy.get('.input-container > .d-flx').click()
    cy.wait(4000)
    cy.contains('VMMR Report - FNF')

    //To search declined reports by Corporate User's name
    cy.get('.input-container').clear().type ('Joe')
    cy.get('.input-container > .d-flx').click()
    cy.wait(4000)
    cy.contains('Joe Olanre')

    //To search declined reports by Corporate_Admin's Name
    cy.get('.input-container').clear().type('Oge')
    cy.get('.input-container > .d-flx').click()
    cy.wait(4000)
    cy.contains('No data to display')
    cy.reload()
    
})

it('This logs the corporate user into the verve access portal and filters Pending VMMR Reports by date range', () => {

    cy.visit('https://verve-access-customer.k8.isw.la/corporate/signin')
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('joswitch@qa.team')
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Password@111')
    cy.get('#login').click()
    cy.wait(16000)
    cy.get('#burger-cont').click()
    cy.get('#sidebar > .sidebar-container > #side-nav > .isw-sideBarNav > .active > .isw-sideBarNavLink > .isw-sideBarNavLabel').click()

    //To Filter Pending reports by Date - Today
    cy.get('.anticon-caret-down > svg > path').click()
    cy.get('.ranges > ul > .active'). click()
    cy.wait(4000)
    cy.reload()

    //To Filter Pending reports by Date - Yesterday
    cy.get('.anticon-caret-down > svg > path').click()
    cy.get('[data-range-key="Yesterday"]').click()
    cy.wait(4000)
    cy.reload()
    
    //To Filter Pending reports by Date - Last Seven Days 
    cy.get('.anticon-caret-down > svg > path').click()
    cy.get('[data-range-key="Last 7 Days"]').click()
    cy.wait(4000)
    cy.reload()

    //To Filter Pending reports by Date - Last Thirty Days 
    cy.get('.anticon-caret-down > svg > path').click()
    cy.get('[data-range-key="Last 30 Days"]').click()
    cy.wait(4000)
    cy.reload()

    //To Filter Pending reports by Date - This Month 
    cy.get('.anticon-caret-down > svg > path').click()
    cy.get('[data-range-key="This Month"]').click()
    cy.wait(4000)
    cy.reload()

    //To Filter Pending reports by Date - Last Month 
    cy.get('.anticon-caret-down > svg > path').click()
    cy.get('[data-range-key="Last Month"]').click()
    cy.wait(4000)
    cy.reload()

    //To Filter Pending reports by Date - Custom Date Range 
    cy.get('.anticon-caret-down > svg > path').click()
    cy.get('[data-range-key="Custom Range"]').click()
    cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(1) > [data-title="r0c1"]').click()
    cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c5"]').click()
    cy.get('.applyBtn').click()
    cy.wait(4000)
    cy.reload()

})

})
<<<<<<< HEAD
=======

>>>>>>> baf7cde2a950d1b5b682e4e8aa9c4187e2d7cd12
*/