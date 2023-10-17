describe('Тестирование формы логина и пороля на [login.qa.studio]', function () {
    it('вход на сайт', function () {
        cy.visit('https://login.qa.studio');
    })

    it('авторизация верный логин и пороль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно'); 
    })

    it('авторизация верный логин и пороль , наличие крестика в ответе', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('восстановление пароля , наличие крестика в ответе', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click()
        cy.get('#mailForgot').type('nik822@dolniko.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('авторизация,  верный логин, не верный пороль , наличие крестика в ответе', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('b1782n');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('авторизация, не верный логин,  верный пороль , наличие крестика в ответе', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('nik82388@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('авторизация, невалидный логин и верный пороль , наличие крестика в ответе', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('авторизация верный логин и пороль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно'); 
    })
 })
 