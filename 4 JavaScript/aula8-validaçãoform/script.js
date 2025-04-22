/*function verificaForm(){
    if(document.getElementById("nome").value == ""){
      alert("Preencha o nome");
      document.getElementById("nome").style.borderColor = "red";
      document.getElementById("nome").style.backgroundColor = "#ffe5e5";
      document.getElementById("nome").focus();
      return false;
    }
    return true;
  }*/

function validaFormulario(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if(!validarNome(nome)){
        alert("Preencha o nome");
        document.getElementById("nome").style.borderColor = "red";
        document.getElementById("nome").style.backgroundColor = "#ffe5e5";
        document.getElementById("nome").focus();
        return false;
    }

    if(!validarEmail(email)){
        alert("Preencha o email com o formato correto");
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.backgroundColor = "#ffe5e5";
        document.getElementById("email").focus();
        return false;
    }
    return true;
}

function validarNome(nome){
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(nome);
}

function validarEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


