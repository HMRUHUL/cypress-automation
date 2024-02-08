export class register {
  weblocators = {
    btnSignUp: "#signin2",
    txtUsername: "#sign-username",
    txtPassword: "#sign-password",
    txtPassword: "#sign-password",
    btnSignupSubmit: '[onclick="register()"]',
  };
  openURL() {
    cy.visit(Cypress.env("URL"));
  }
  clickSignUp() {
    cy.get(this.weblocators.btnSignUp).click();
  }
  enterUsername(username) {
    cy.get(this.weblocators.txtUsername).type(username);
  }
  enterPassword(password) {
    cy.get(this.weblocators.txtPassword).type(password);
  }
  clickSignupSubmit() {
    cy.get(this.weblocators.btnSignupSubmit).click();
  }
}
