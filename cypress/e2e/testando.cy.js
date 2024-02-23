describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200');
    cy.contains ('a','Register now').click();
    cy.get('[formcontrolname="email"]').type('cyoressteste.1@email.com.br');
    cy.get('[formcontrolname="fullName"]').type('shrrgnien');
    cy.get('[formcontrolname="userName"]').type('shrrgnien');
    cy.get('[formcontrolname="password"]').type('catarina123');
    cy.contains ('button','Register').click();
  })
})