/// <reference types="cypress" />

describe('POST /user', () => {
    it('should return 201 if user is successfully created', () => {
        cy.request('POST', 'http://localhost:3000/api/v1/user/sign-up', { name: 'John Doe' })
            .its('status')
            .should('equal', 201)
    })
})
