var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email"); 
 
var telefone = document.getElementById("telefone"); 
 
var cep = document.getElementById("cep"); 

var logradouro = document.getElementById("logradouro"); 
 
var numero = document.getElementById("numero"); 
 
var complemento = document.getElementById("complemento"); 
 

function alertar(){
     //alert( nome.value + " " + "Voce clicou no botão!!!")
     saida.innerText = "Nome: " + " " + nome.value +  
     "\n email: " + "  "  + email.value;
}