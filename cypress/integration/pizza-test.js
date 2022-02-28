describe('My First Test', () => {
    it('Visits my pizza ordering app', () => {
        cy.visit('localhost:3001')

        cy.contains('Click').click()

        cy.url().should('include', '/pizza')

        cy.get('#name-input')
        .type('Seth')
        .should('have.value', 'Seth')

        cy.get('[type="checkbox"]').check()

        cy.get('form').submit()
    })
  })