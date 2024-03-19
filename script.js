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
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado"); 
 

function alertar(){


//Buscar endereço pelo CEP
const url = `https://viacep.com.br/ws/${cep}/json`;
fetch(url)
   .then(resposta=>resposta.json())
   .then(data => {
    logradouro.value = data.logradouro;
    bairro.value = data.bairro;
    cidade.value = data.cidade;
    estado.value = data.uf
 
     //alert( nome.value + " " + "Voce clicou no botão!!!")
     saida.innerText = "Nome: " + " " + nome.value +  
     "\n E-mail: " + "  "  + email.value +
      "\n Telefone:" + " " + telefone.value + 
     "\n CEP: " + " " + cep.value + 
     "\n Logradouro: " + " " + logradouro.value +
       "\n Numero: " + " " + numero.value + 
       "\n Complemento: " + " " +complemento.value + 
       "\n Bairro: " + " " + bairro.value + 
       "\n Cidade: " + " " + cidade.value +
       "\n Estado: " + " " + estado.value;

     })
     .catch(error=>alert(error))
    }
    