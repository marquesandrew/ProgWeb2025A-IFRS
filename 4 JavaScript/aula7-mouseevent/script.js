function sobre(){
    document.getElementById("cores").style.backgroundColor = "blue";
    document.getElementById("log").innerHTML += "<p>Mouse entrou na DIV.</p>";
}

function saindo(){
    document.getElementById("cores").style.backgroundColor = "green";
    document.getElementById("log").innerHTML += "<p>Mouse saiu da DIV.</p>";
}

function paraBaixo(){
    document.getElementById("cores").style.backgroundColor = "red";
    document.getElementById("log").innerHTML += "<p>Mouse pressionado dentro DIV.</p>";
}

function paraCima(){
    document.getElementById("cores").style.backgroundColor = "orange";
    document.getElementById("log").innerHTML += "<p>Mouse despressionado dentro DIV.</p>";
}

function movendo(){
    document.getElementById("cores").style.backgroundColor = "yellow";
    document.getElementById("log").innerHTML += "<p>Mouse movendo dentro DIV.</p>";
}