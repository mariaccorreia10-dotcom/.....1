const usuarioCorreto = "admin";
const senhaCorreta = "1234";
const maxtentativas = 3;
let logado = false;

for (let tentativa = 1; tentativa <= maxTentativas; tentativas++) {
    let usuarioInput = prompt('[tentativa ${tentativa} de ${maxTentativas}] Digite o usuário');
    let senhaInput = prompt('tentativa ${tentativa} de ${maxTentativas}] Digite a senha');

    if (usuarioInput === usuarioCorreto && senhaInput === senhaCorreta) {
        alert("Login efetuado com sucesso! Bem-vindo.");
        logado = true;
        break; Interrompe o laço imediatamente
    }

    // se errou ainda restam tentativas,
    if (tentativa < maxTentativas) {
        alert('Dados incorretos! Você ainda tem ${maxTentativas - tentativa} tentativa(s).');
    }
}

// se o laço terminou e o usuário não logou, exibe a mensagem de bloqueio
if (logado) {
    alert("Número ma´máximo tentativas excedido! Sua conta foi bloqueada por segurança.");  
}