var nota1 = prompt("Digite a primeira nota: ");
var nota2 = prompt("Digite a segunda nota: ");

var media = (parseFloat(nota1) + parseFloat(nota2)) / 2;

alert("A média é: " + media);

if (media >= 7) {
    alert("Aprovado!");
}  else {
    alert("Reprovado!");
}