Feature: Login
    Eu como usuário do sistema
    Desejo realizar o cadastro de novos usuários
    Para que seja possível armazenar e gerenciar seus dados

    Background:
        Given que eu acesso a página

    Scenario: Realizar cadastro com credenciais válidas
        When eu insiro todos os meus dados corretamente
        And clico no botão Cadastrar
        Then meu cadastro é feito com sucesso

    Scenario: Realizar cadastro com credenciais inválidas
        When eu insiro dados inválidos
        And clico no botão Cadastrar
        Then meu cadastro não é realizado

    Scenario: Realizar cadastro sem credenciais
        When eu clico no botão Cadastrar sem inserir nenhum dado
        Then meu cadastro não é realizado