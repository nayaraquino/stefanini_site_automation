Feature: Login
    Eu como usuário do sistema
    Desejo realizar o cadastro de novos usuários
    Para que seja possível armazenar e gerenciar seus dados

#Cenario: Realizar login
#    Dado que eu acesso a página
#    Quando eu insiro todos os meus dados corretamente
#    E clico no botão Cadastrar
#    Entao meu cadastro é feito com sucesso

Scenario: Realizar login
    Given que eu acesso a página
    When eu insiro todos os meus dados corretamente
    And clico no botão Cadastrar
    Then meu cadastro é feito com sucesso