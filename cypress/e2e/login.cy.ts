describe('template spec', () => {
  it('Valid password', () => {
    cy.visit('http://localhost:4200/valid');

    cy.get('input[type=text]').type('john');
    cy.get('input[type=password]').type('123');
    cy.get('#login').click();
    cy.get('#lbl').should('contain.text','Success..');
  });

  it('invalid password',()=>{
    cy.visit('http://localhost:4200/valid');
    cy.get('input[type=text]').type('john');
    cy.get('input[type=password]').type('1234');
    cy.get('#login').click();
    cy.get('#lbl').should('contain.text','Login Failed...')
  });
});
