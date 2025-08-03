/// <reference types="cypress" />

describe('POST /user/sign-up', () => {
    it('should return 201 if user is successfully created', () => {
        console.log(Cypress.env('BASE_URL'))
        cy.request('POST', `${Cypress.env('BASE_URL')}${Cypress.env('API_PREFIX')}/user/sign-up`, {
            email: 'john.doe@example.com',
            password: 'password123',
        })
            .its('status')
            .should('equal', 201)
    })
})

describe('POST /user/sign-in', () => {
    it('should return 200 if user is successfully signed in', () => {
        cy.request('POST', `${Cypress.env('BASE_URL')}${Cypress.env('API_PREFIX')}/user/sign-in`, {
            email: 'john.doe@example.com',
            password: 'password123',
        })
            .its('status')
            .should('equal', 200)
    })
})
