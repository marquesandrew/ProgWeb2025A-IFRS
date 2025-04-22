

function calculaIMC(){
    var nome = document.getElementById("nome").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
    if(nome == ""){
        alert("Para continuar digite o seu nome: ");
        document.getElementById("nome").focus();
        return false;
    }

    if (peso == ""){
        alert("Para continuar digite o seu peso: ");
        document.getElementById("peso").focus();
        return false;
    }
    if(altura == ""){
        alert("Para continuar digite a sua altura: ");
        document.getElementById("altura").style.borderColor = "red";
        document.getElementById("altura").focus();
        return false;   
    }

    var imc = peso / (altura * altura);

    alert("Olá " + nome + ", seu IMC é: " + imc);
}