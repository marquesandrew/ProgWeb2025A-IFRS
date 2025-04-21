var sair = confirm("Você deseja sair?");
if (sair) {
    window.location.href = "http://www.google.com"; // Redireciona para a página inicial
}else {
    alert("Você não saiu!"); // Exibe um alerta informando que o usuário não saiu
}