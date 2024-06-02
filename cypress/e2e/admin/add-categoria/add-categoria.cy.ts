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

    it('Debe permitir agregar una nueva categoría de Matemática', () => {
        // Ingresar credenciales válidas
        cy.get('input[name="username"]').type('ehernandez');
        cy.get('input[name="password"]').type('123');
    
        // Enviar el formulario
        cy.get('button[type="submit"]').click();

        // Esperar
        cy.wait(2000);

        // Verificar redirección o mensaje de éxito
        cy.url().should('include', '/admin');

        // Hacer clic en el botón de agregar categoría
        cy.get('button[routerlink="/admin/add-categoria"]').click();

        // Verificar redirección al formulario de agregar categoría
        cy.url().should('include', '/admin/add-categoria');

        // Ingresar datos en el formulario
        cy.get('input[name="titulo"]').type('Matemática');
        cy.get('textarea[name="descripcion"]').type('Aquí vamos a dejar las preguntas de Álgebra');

        // Enviar el formulario
        cy.get('button[type="submit"]').click();

        // Esperar que aparezca el SweetAlert2 y hacer clic en el botón "OK"
        cy.get('button.swal2-confirm').should('be.visible').click();
        
        // Verificar redirección a la lista de categorías
        cy.url().should('include', '/admin/categorias');

        // Verificar que la nueva categoría aparece en la lista
        cy.contains('Matemática').should('be.visible');
        cy.contains('Aquí vamos a dejar las preguntas de Álgebra').should('be.visible');

        // Capturar un screenshot
        cy.screenshot('Nueva-Categoría-Matemática-Agregada');
    });

    it('Debe permitir agregar una nueva categoría de Historia', () => {
        // Ingresar credenciales válidas
        cy.get('input[name="username"]').type('ehernandez');
        cy.get('input[name="password"]').type('123');

        // Enviar el formulario
        cy.get('button[type="submit"]').click();

        // Esperar
        cy.wait(2000);

        // Verificar redirección o mensaje de éxito
        cy.url().should('include', '/admin');

        // Hacer clic en el botón de agregar categoría
        cy.get('button[routerlink="/admin/add-categoria"]').click();

        // Verificar redirección al formulario de agregar categoría
        cy.url().should('include', '/admin/add-categoria');

        // Ingresar datos en el formulario
        cy.get('input[name="titulo"]').type('Historia');
        cy.get('textarea[name="descripcion"]').type('Preguntas relacionadas con eventos históricos importantes.');

        // Enviar el formulario
        cy.get('button[type="submit"]').click();

        // Esperar que aparezca el SweetAlert2 y hacer clic en el botón "OK"
        cy.get('button.swal2-confirm').should('be.visible').click();

        // Verificar redirección a la lista de categorías
        cy.url().should('include', '/admin/categorias');

        // Verificar que la nueva categoría aparece en la lista
        cy.contains('Historia').should('be.visible');
        cy.contains('Preguntas relacionadas con eventos históricos importantes.').should('be.visible');

        // Capturar un screenshot
        cy.screenshot('Nueva-Categoría-Historia-Agregada');
    });
});
