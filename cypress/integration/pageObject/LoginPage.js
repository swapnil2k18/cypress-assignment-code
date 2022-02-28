
class LoginPage 
{

    /**
     * Enter valid base url
     */
    visit(baseUrl)
    {
        cy.visit(baseUrl)
    }

    /**
     * Enter valid login credentials
     * Click on login button
     */
    fillUserName(UserName,password)
    {
        cy.get("#login_field").type(UserName)
        cy.get("#password").type(password)
        cy.get(".btn").click();
    }
}

export default LoginPage