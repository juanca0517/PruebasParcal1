describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()

      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("NombrePrueba")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("ApellidoPrueba")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("correoejemplo@uiandes.edu.co")
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Ingresa una contraseña')
    })
})