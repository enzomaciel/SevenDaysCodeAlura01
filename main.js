// Desafio dia 1
let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor');
}
// Desafio dia 2
var nome = prompt("Qual o seu nome");
var idade = prompt("Quantos anos você tem?");
var linguagem = prompt("Qual a linguagem de programação você está estudando " + nome);
alert("Olá " + nome + ", você tem "+idade+" anos e já está aprendendo "+linguagem);
var questao = prompt("Você gosta de estudar " + linguagem + " ? Responda com o número 1 para SIM ou 2 para NÃO");
if(questao ==1){
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
}else if(questao == 2 ){
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
}else{
  alert("ERRO");
}
