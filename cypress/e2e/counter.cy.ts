describe('counter template spec', () => {
  it('increment test', () => {
    cy.visit('http://localhost:4200/counter');
    cy.get("button[class='btn btn-success']").should('contain.text','Increase').click();
    cy.get('h1').should('contain.text','1');  
  });
  
  it('decrement test',()=>{
    cy.visit('http://localhost:4200/counter');
    cy.get('#b1').click();
    cy.get('h1').should('contain.text',-1);
  });

  it('when clicked set css class to one',()=>{
    cy.visit('http://localhost:4200/counter');
    cy.get("button[class='btn btn-warning']").click();
    cy.get('p').should('have.class','one');
  });

  it('when Apply Class2 button add one more class [two] to the classlist',()=>{
    cy.visit('http://localhost:4200/counter');
    cy.get("button[class='btn btn-danger']").click();
    cy.get('p').should('have.class', 'two');
  });

  it('When both buttons are clicked one and two classes are added',()=>{
    cy.visit('http://localhost:4200/counter');
    cy.get("button[class='btn btn-warning']").click();
    cy.get("button[class='btn btn-danger']").click();
    cy.get('p').should('have.class', 'one two');
  });
})