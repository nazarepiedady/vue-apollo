describe('updateQuery', () => {
  beforeEach(() => {
    cy.task('db:reset')
    cy.visit('/update-query')
  })

  it('should add new message to cache using updateQuery', () => {
    cy.get('.channel-btn').eq(0).click()
    cy.get('.message-input').type('hello 1')
    cy.get('.message').should('have.lengthOf', 0)
    cy.get('.send-message-btn').click()
    cy.get('.message').should('have.lengthOf', 1)
    cy.get('.message-input').type('hello 2')
    cy.get('.send-message-btn').click()
    cy.get('.message').should('have.lengthOf', 2)
    cy.contains('.message', 'hello 1')
    cy.contains('.message', 'hello 2')

    cy.get('.channel-btn').eq(1).click()
    cy.get('.message-input').type('hello 3')
    cy.get('.message').should('have.lengthOf', 0)
    cy.get('.send-message-btn').click()
    cy.get('.message').should('have.lengthOf', 1)
    cy.get('.message-input').type('hello 4')
    cy.get('.send-message-btn').click()
    cy.get('.message').should('have.lengthOf', 2)
    cy.contains('.message', 'hello 3')
    cy.contains('.message', 'hello 4')
  })
})
