describe('Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    });

    it('Credenciales válidas', () => {
        // Ingresar credenciales válidas
        cy.get('input[name="username"]').type('ehernandez');
        cy.get('input[name="password"]').type('123');
    
        // Enviar el formulario
        cy.get('button[type="submit"]').click();

        // Esperar
        cy.wait(2000);

        // Verificar redirección o mensaje de éxito
        cy.url().should('include', '/admin');
       // cy.contains('Inicio de sesión exitoso').should('be.visible');
  
        // Capturar un screenshot
        cy.screenshot('Credenciales-válidas');
    });
});
