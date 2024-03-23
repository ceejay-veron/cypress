describe('visit Pismos', () => {


    it('should  Talk to a specialist', () => {
        cy.visit('https://www.pismo.io/card-issuing/?utm_source=google&utm_medium=cpc&utm_campaign=asia-india&utm_term=online%20payment&utm_campaign=%5BAsia%5D+%5BIndia%5D+KW&utm_source=adwords&utm_medium=ppc&hsa_acc=4034198945&hsa_cam=14987270802&hsa_grp=126448748137&hsa_ad=554115033527&hsa_src=g&hsa_tgt=kwd-10521441&hsa_kw=online%20payment&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad=1&gclid=Cj0KCQjwi7GnBhDXARIsAFLvH4lhXbDglq4X2HbokXGMv6bTZiYXVxgkV19zhV6JQF3kO0pKKLme5Y4aApklEALw_wcB')

        cy.get('#firstname-5d8ee201-6827-4882-bca8-2922d8d22a84').click().type('John')
        cy.get('#lastname-5d8ee201-6827-4882-bca8-2922d8d22a84').type('Njoku')
        cy.get('#email-5d8ee201-6827-4882-bca8-2922d8d22a84').type('chijiokeNjoku85@gmail.com')
        cy.get('#jobtitle-5d8ee201-6827-4882-bca8-2922d8d22a84').type('Software quality Assurance Engineer')
        cy.get('#pais-5d8ee201-6827-4882-bca8-2922d8d22a84').select('Nigeria')
        cy.get('#what_is_your_business_segment_-5d8ee201-6827-4882-bca8-2922d8d22a84').select('Fintech')
        cy.get('#numemployees-5d8ee201-6827-4882-bca8-2922d8d22a84').select('1 - 10')
        cy.get('#numemployees-5d8ee201-6827-4882-bca8-2922d8d22a84').select('Core Banking')
        cy.get('#how_did_you_hear_about_us_-5d8ee201-6827-4882-bca8-2922d8d22a84').select('Linkedin')
        cy.get('#phone-5d8ee201-6827-4882-bca8-2922d8d22a84').type('+2348103399366')
        cy.get('#email-5d8ee201-6827-4882-bca8-2922d8d22a84').type('chijiokeNjoku85@gmail.com')
        cy.get('#email-5d8ee201-6827-4882-bca8-2922d8d22a84').type('chijiokeNjoku85@gmail.com')



    })

})