
Cypress.Commands.add('clickNewTransactionButton', (selector, data) => {
    cy.get(selector)
        .should('be.visible')
        .and('have.text', data)
        .click();
});

Cypress.Commands.add('modalNewTransactionOpen', (selector, data) => {
    cy.get(selector, { timeout: 5000 })
        .should('be.visible')
        .and('have.text', data);
});

Cypress.Commands.add('fillMandatoryFields', (fields) => {
    fields.forEach(([selector, value]) => {
        cy.get(selector)
            .should('be.visible')
            .clear()
            .type(value);
    });
});


Cypress.Commands.add('modalActionTransaction', (selector, data) => {
    cy.get(selector)
        .should('be.visible')
        .and('have.text', data)
        .click();
});

Cypress.Commands.add('validInfoValues', (fields) => {
    const trimSpacesRegex = /\s/g;

    fields.forEach(([selector, value]) => {
        cy.get(selector)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                const cleanedText = text.replace(trimSpacesRegex, '');
                expect(cleanedText).to.eq(value);
            });
    });
});
