describe('Admin Panel', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    });

    it('Debe permitir agregar una nueva pregunta a un examen existente', () => {
        // Ingresar credenciales válidas
        cy.get('input[name="username"]').type('ehernandez');
        cy.get('input[name="password"]').type('123');
    
        // Enviar el formulario
        cy.get('button[type="submit"]').click();

        // Esperar redirección
        cy.url().should('include', '/admin');

        // Navegar a la página de exámenes
        cy.visit('http://localhost:4200/admin/examenes');

        // Esperar a que se cargue la lista de exámenes
        cy.contains('Examen de Historia Actualizado').should('be.visible');

        // Seleccionar el examen "Examen de Historia Actualizado" y hacer clic en el botón "Preguntas"
        cy.contains('Examen de Historia Actualizado').parents('mat-card').within(() => {
            cy.contains('Preguntas').should('be.visible').click();
        });

    
        // Hacer clic en "Agregar pregunta"
        cy.contains('Agregar pregunta').should('be.visible').click();

        // Ingresar datos en el formulario de pregunta
        cy.get('textarea[name="contenido"]').type('¿Cuál es la capital de Francia?');
        cy.get('input[name="opcion1"]').type('París');
        cy.get('input[name="opcion2"]').type('Londres');
        cy.get('input[name="opcion3"]').type('Berlín');
        cy.get('input[name="opcion4"]').type('Madrid');

        // Seleccionar la respuesta correcta
        cy.get('mat-select[name="respuesta"]').click().then(() => {
            cy.get('mat-option').contains('París').click();
        });

        // Enviar el formulario
        cy.get('button[type="submit"]').click();

        // Esperar que aparezca el SweetAlert2 y hacer clic en el botón "OK"
        cy.get('button.swal2-confirm').should('be.visible').click();

 // Navegar a la página de exámenes
 cy.visit('http://localhost:4200/admin/examenes');
    });
});
