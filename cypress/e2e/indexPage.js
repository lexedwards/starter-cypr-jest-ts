describe('Navigate the Default Pages', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  it('Loads and goes to Page 2', () => {
    cy.findByText(/go to page 2/i).click()
  })

  it('Has no A11y Violations', () => {
    cy.checkA11y(null, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a'],
      },
    })
  })
})
