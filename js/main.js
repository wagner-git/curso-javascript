function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //window.open("https://br.yahoo.com/");//abre em outra página
    window.location.href = "https://br.yahoo.com/";//abre mesma página
}

function trocar(elemento){
    elemento.innerHTML = "Passou o mouse!";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("página carregada");
}

function functionChange(elemento){
    console.log(elemento.value);
}

//alert("Meu primeiro js!");
/*var nome = "Wagner Alves";
var idade = 45;

alert(nome + idade);

console.log(nome);
console.log(idade);*/

/*var lista = ["maçã", "pêra", "laranja"];

console.log(lista);
console.log(lista.reverse());
console.log(lista.length);
console.log(lista.toString());
lista.push("goiaba");
console.log(lista);
lista.pop();//remove o último
console.log(lista);
console.log(lista.join(" - "));// separador da lista passa a ser -
*/
/*var frutas = [{nome:"Maçã", cor: "Vermelha"}, {nome:"goiaba", cor:"verde"}];
console.log(frutas);
console.log(frutas[0].cor);
console.log(frutas[0].nome);
*/

/*var idade = prompt("Qual sua idade?");
if(idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}*/

/*var count = 0;
while(count<=5){
    console.log(count);
    count++;
}*/
/*
for(var count = 0; count<=5; count++){
    console.log(count);
    alert(count);
}*/

/*for(var count = 5; count>=0; count--){
    console.log(count);
    alert(count);
}*/
/*function soma(n1, n2){
    return n1+n2;
}

function validaIdade(idade){
    if(idade>=18){
        return true;
    }else{
        return false;
    }
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/