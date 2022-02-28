class HomePage
{
    /**
     * Open profile dropdown 
     */
    profileDropdown(){
         cy.get("[aria-label='View profile and more']").click();
    }

    /**
     * Click on Logout button
     */
    logout(){
        cy.get('.logout-form > .dropdown-item').click()
    }

     /**
      *  Create new public repository 
      */
    createRepository(repoNameNew){
        if(cy.get('#dashboard-repos-filter-left').should('be.visible')){
            cy.get('#repos-container [href="/new"]').eq(0).click()
        }else{
            cy.get('#repos-container div a').eq(0).click()
        }
        cy.get('#repository_name').type(repoNameNew)
        cy.get('#repository_visibility_public').should('be.checked')
        cy.get('#repository_gitignore_template_toggle').click()
        cy.get('.details-reset.details-overlay.select-menu .select-menu-button.btn-sm.btn')
        .should('be.visible')
        .click()
        cy.get('#context-ignore-filter-field')
        .type('node')
        cy.wait(1000)
        cy.get('#context-ignore-filter-field')
        .type('{enter}')
        cy.get('.btn-primary.btn').click()
    }
}

export default HomePage