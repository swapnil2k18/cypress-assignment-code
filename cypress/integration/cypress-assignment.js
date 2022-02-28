import LoginPage from './pageObject/LoginPage'
import HomePage from './pageObject/HomePage';
const login = new LoginPage()
const homePage = new HomePage()
var configFile ;
var repoNameNew;

beforeEach(function () {
    cy.fixture('config').then(function (config) {
        configFile = config
    });
});

describe('Demo Scenario 1', () => {

    it('Cypress Assignment Scenario-1: Verify profile name', function () {
        login.visit(configFile.baseurl)
        login.fillUserName(configFile.UserName,configFile.password)
        cy.get("[aria-label='View profile and more']").should('be.visible');
        homePage.profileDropdown();

        //Verifying that user name is displayed below on "Signed in as" text
        cy.get(".header-nav-current-user.css-truncate a strong").should('have.text',configFile.UserName)
        homePage.logout()
    })
    
    it('Cypress Assignment Scenario-2: Verify repository created and gitignore file presence ', function () {
        repoNameNew = configFile.gitRepoName + Math.random().toString().slice(2, 5)
        login.visit(configFile.baseurl)
        login.fillUserName(configFile.UserName,configFile.password)
        cy.get("[aria-label='View profile and more']").should('be.visible');
        homePage.createRepository(repoNameNew)

        //Validating repo name
        cy.get('strong.mr-2.flex-self-stretch a').should('have.text',repoNameNew)

        //Validaing .gitignore file is present
        cy.get('[title=".gitignore"]').should('be.visible')
        homePage.profileDropdown();
        homePage.logout()
    })
})

