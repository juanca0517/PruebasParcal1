describe('Los estudiantes login', function() {
    it('Registro fallido por datos incompletos', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()

      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("NombrePrueba")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("ApellidoPrueba")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("correoejemplo@uiandes.edu.co")
      cy.get('.cajaSignUp').contains('Registrarse').click()
      cy.contains('Ingresa una contraseña')
    })

    it ('Registro exitoso', function() {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()
    cy.contains('Ingresar').click()
    cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("NombrePrueba")
    cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("ApellidoPrueba")
    cy.get('.cajaSignUp').find('input[name="correo"]').click().type("correoejemplo5@uiandes.edu.co")
    cy.get('.cajaSignUp').find('input[name="password"]').click().type("MariaAlejandra")
    cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes')
    cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Derecho')
    cy.get('.cajaSignUp').find('input[name="acepta"]').click()
    cy.get('.cajaSignUp').contains('Registrarse').click()
    cy.contains('Registro exitoso')

    })

    it ('Registro con usuario existente', function() {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()
    cy.contains('Ingresar').click()
    cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("NombrePrueba")
    cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("ApellidoPrueba")
    cy.get('.cajaSignUp').find('input[name="correo"]').click().type("correoejemplo5@uiandes.edu.co")
    cy.get('.cajaSignUp').find('input[name="password"]').click().type("MariaAlejandra")
    cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes')
    cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Derecho')
    cy.get('.cajaSignUp').find('input[name="acepta"]').click()
    cy.get('.cajaSignUp').contains('Registrarse').click()
    cy.contains('error activando tu cuenta')
    })
})