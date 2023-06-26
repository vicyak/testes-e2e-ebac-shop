///<reference types="cypress"/>
const perfil =require ('../fixtures/perfil.json')
context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
   
    beforeEach(() => {
        cy.visit('/minha-conta')
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()//faz login usando fixtures
    });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        cy.get('#primary-menu > .menu-item-629 > a').click()//vai para pagina de produtos


        cy.addProdutos('Atlas Fitness Tank', 'M', 'Blue', 3)//adc o produto. tamanho e quantidade
        cy.get('#primary-menu > .menu-item-629 > a').click()//vai para pagina de produtos

        cy.addProdutos('Abominable Hoodie', 'XS', 'Blue', 3)//adc o produto. tamanho e quantidade
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(5) > a').click()//vai para pagina de produtos
        
        cy.addProdutos('Oslo Trek Hoodie', 'M', 'Purple', 2)//adc o produto. tamanho e quantidade
        cy.get('.woocommerce-message > .button').click()// vai para o carrinho

        cy.get('.checkout-button').click()//vai para concluir compra
        cy.wait(3000)//espera a pagina carregar


        cy.get('.woocommerce-terms-and-conditions-checkbox-text').click()//seleciona o checkbox de termos e condicoes
        cy.get('#place_order').click()// finaliza o pedido

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')//verifica se o pedido foi recebido corretamente


  


        
    });
 


