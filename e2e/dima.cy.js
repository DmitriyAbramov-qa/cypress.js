describe('тестирование пакемонов', function () {


    it('авторизация на сайте', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
        cy.get('#password').type('9RPAFl2V14');
        cy.get('.auth__button').click();
        cy.wait(3000); 
        cy.get('.top_menu_exit').click();
        })

    it('авторизация на сайте, переход в магазин, покупка №1', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
        cy.get('#password').type('9RPAFl2V14');
        cy.wait(3000);
        cy.get('.auth__button').click(); 
        cy.get('.header__btns > [href="/shop"]').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .shop__button').click();
        cy.wait(3000);
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ABRAMOV DMITRIY');
        cy.wait(1000);
        cy.get('.pay-btn').click();
        cy.wait(5000);
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
        })

        it('авторизация на сайте, переход в магазин,покупка№2', function () {
            cy.visit('https://pokemonbattle.me/');
            cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
            cy.get('#password').type('9RPAFl2V14');
            cy.wait(3000);
            cy.get('.auth__button').click(); 
            cy.get('.header__btns > [href="/shop"]').click();
            cy.wait(2000);
            cy.get(':nth-child(1) > .shop__button').click();
            cy.wait(3000);
            cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
            cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
            cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
            cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ABRAMOV DMITRIY');
            cy.wait(1000);
            cy.get('.pay-btn').click();
            cy.wait(5000);
            cy.get('#cardnumber').type('56456');
            cy.get('.payment__submit-button').click();
            cy.get('.payment__adv').click();
            })

        it('авторизация на сайте, неправильный пароль', function () {
            cy.visit('https://pokemonbattle.me/');
            cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
            cy.get('#password').type('eifuefhi9889');
            cy.wait(2000);
            cy.get('.auth__button').click();
            cy.get(':nth-child(2) > .auth__error'); 
            })

            it('авторизация на сайте, переход в магазин,покупка, карточка товара', function () {
                cy.visit('https://pokemonbattle.me/');
                cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
                cy.get('#password').type('9RPAFl2V14');
                cy.wait(2000);
                cy.get('.auth__button').click(); 
                cy.get('.header__btns > [href="/shop"]').click();
                cy.get(':nth-child(4) > .shop__button').click();
                cy.get('.payment__info-button-v2').click();
                cy.get('.payment__info-button-v2').click();
                cy.get('.pay__comeback-button').click();
                cy.wait(2000);
            })

            it('авторизация на сайте, переход в магазин, основные кнопки', function () {
                cy.visit('https://pokemonbattle.me/');
                cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
                cy.get('#password').type('9RPAFl2V14');
                cy.wait(3000);
                cy.get('.auth__button').click(); 
                cy.get('.header__btns > [href="/shop"]').click();
                cy.get('.header__btns > [href="/"]').click();
                cy.wait(2000);
                cy.get('.header__btns > [href="/trainers"]').click();
                cy.wait(2000);
                cy.get('.header__btns > [href="/shop"]').click();
                cy.wait(2000);
                cy.get('.header__container > .header__id').click();
                cy.wait(2000);
                cy.get('.header__btn-setting').click();
                cy.wait(2000);
                cy.get('.profile__back-button').click();
                cy.wait(2000);
                cy.get('.header__container > .top_menu_exit').click();
            })

            it('авторизация на сайте, переход в магазин,покупка, нет денег', function () {
                cy.visit('https://pokemonbattle.me/');
                cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
                cy.get('#password').type('9RPAFl2V14');
                cy.wait(3000);
                cy.get('.auth__button').click(); 
                cy.get('.header__btns > [href="/shop"]').click();
                cy.wait(2000);
                cy.get(':nth-child(4) > .shop__button').click();
                cy.wait(3000);
                cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
                cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
                cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('300');
                cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ABRAMOV DMITRIY');
                cy.wait(1000);
                cy.get('.pay-btn').click();
                cy.wait(5000);
                cy.get('#cardnumber').type('56456');
                cy.get('.payment__submit-button').click();
                cy.get('.payment__font-for-success').contains('При оплате произошла ошибка');
                cy.get('.payment__adv').click();
                })

                it('авторизация на сайте, переход в магазин, основные надписи', function () {
                    cy.visit('https://pokemonbattle.me/');
                    cy.get(':nth-child(1) > .auth__input').type('nik82388doo@mail.ru');
                    cy.get('#password').type('9RPAFl2V14');
                    cy.wait(3000);
                    cy.get('.auth__button').click(); 
                    cy.get('.header__btns > [href="/shop"]').click();
                    cy.wait(2000);
                    cy.get('.header__btns > [href="/"]').contains('Покемоны');
                    cy.get('.header__btns > [href="/trainers"]').contains('Тренеры');
                    cy.get('.header__btn_active').contains('Магазин');
                    cy.get('.pokemon__title').contains('Магазин');
                    cy.get(':nth-child(4) > .shop__button').contains('Купить');
                })
})
