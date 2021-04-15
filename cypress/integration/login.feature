#language: pt

Funcionalidade: Login
Eu como usuário do sistema
Desejo realizar o cadastro de novos usuários
Para que seja possível armazenar e gerenciar seus dados

Contexto:
    Dado que eu acesso a página

    Cenário: Realizar cadastro com credenciais válidas
    Quando eu insiro todos os meus dados corretamente
    E clico no botão Cadastrar
    Então meu cadastro é feito com sucesso

    Cenário: Realizar cadastro com credenciais inválidas
    Quando eu insiro dados inválidos
    E clico no botão Cadastrar
    Então meu cadastro não é realizado

    Cenário: Realizar cadastro sem credenciais
    Quando eu clico no botão Cadastrar sem inserir nenhum dado
    Então meu cadastro não é finalizado

    Cenário: Excluir usuário
    Quando eu clico em Excluir
    Então meu registro é deletado