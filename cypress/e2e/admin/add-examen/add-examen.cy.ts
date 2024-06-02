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
        // cy.contains('Inicio de sesión exitoso').should('be.visible');
  
        // Capturar un screenshot
        cy.screenshot('Credenciales-válidas');
    });

    it('Debe permitir agregar un nuevo examen', () => {
        // Ingresar credenciales válidas
        cy.get('input[name="username"]').type('ehernandez');
        cy.get('input[name="password"]').type('123');
    
        // Enviar el formulario
        cy.get('button[type="submit"]').click();

        // Esperar
        cy.wait(2000);

        // Verificar redirección o mensaje de éxito
        cy.url().should('include', '/admin');

        // Navegar a la página de agregar examen
        cy.visit('http://localhost:4200/admin/add-examen');

        // Ingresar datos en el formulario de examen
        cy.get('input[name="titulo"]').type('Examen de Matemáticas');
        cy.get('textarea[name="descripcion"]').type('Aquí vamos a dejar las preguntas de Álgebra');
        cy.get('input[name="puntosMaximos"]').type('100');
        cy.get('input[name="numeroDePreguntas"]').type('10');
        
        // Activar el mat-slide-toggle (ajustado para el nombre correcto)
        cy.get('mat-slide-toggle').click();

        // Seleccionar una categoría de la lista desplegable
        cy.get('mat-select[name="categoria"]').click().then(() => {
            cy.get('mat-option').contains('Matemática').click(); // Cambia 'Matemáticas' por la categoría correspondiente
        });

        // Enviar el formulario
        cy.get('button[type="submit"]').click();

        // Esperar que aparezca el SweetAlert2 y hacer clic en el botón "OK"
        cy.get('button.swal2-confirm').should('be.visible').click();


        // Verificar que el nuevo examen aparece en la lista
        cy.contains('Examen de Matemáticas').should('be.visible');

        // Capturar un screenshot
        cy.screenshot('Nuevo-Examen-Agregado');
    });
});
