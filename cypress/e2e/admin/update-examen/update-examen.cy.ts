describe('Admin Panel', () => {
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

        // Capturar un screenshot
        cy.screenshot('Credenciales-válidas');
    });

    it('Debe permitir actualizar un examen existente', () => {
        // Ingresar credenciales válidas
        cy.get('input[name="username"]').type('ehernandez');
        cy.get('input[name="password"]').type('123');

        // Enviar el formulario
        cy.get('button[type="submit"]').click();

        // Esperar
        cy.wait(2000);

        // Verificar redirección o mensaje de éxito
        cy.url().should('include', '/admin');

        // Navegar a la página de exámenes
        cy.visit('http://localhost:4200/admin/examenes');

        // Seleccionar el examen "Examen de Matemáticas" y hacer clic en el botón "Preguntas"
        cy.contains('Examen de Matemáticas').parents('mat-card').within(() => {
            cy.contains('Actualizar').should('be.visible').click();
        });

    

        // Ingresar datos nuevos en el formulario de examen
        cy.get('input[name="titulo"]').clear().type('Examen de Historia Actualizado');
        cy.get('textarea[name="descripcion"]').clear().type('Descripción actualizada del examen de historia');
        cy.get('input[name="puntosMaximos"]').clear().type('150');
        cy.get('input[name="numeroDePreguntas"]').clear().type('15');

        // Activar/desactivar el mat-slide-toggle según sea necesario
        cy.get('mat-slide-toggle').click();

        // Seleccionar una categoría de la lista desplegable (asegúrate de que la categoría exista)
        cy.get('mat-select[name="categoria"]').click().then(() => {
            cy.get('mat-option').contains('Historia').click(); // Cambia 'Historia' por la categoría correspondiente
        });

        // Enviar el formulario
        cy.get('button[type="submit"]').click();

        // Esperar que aparezca el SweetAlert2 y hacer clic en el botón "OK"
        cy.get('button.swal2-confirm').should('be.visible').click();

        // Verificar redirección a la lista de exámenes
        cy.url().should('include', '/admin/examenes');

        // Verificar que el examen actualizado aparece en la lista
        cy.contains('Examen de Historia Actualizado').should('be.visible');

        // Capturar un screenshot
        cy.screenshot('Examen-Actualizado');
    });
});
