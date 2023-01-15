const nome = prompt("Qual o seu nome");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt(`Qual a linguagem de programação você está estudando ${nome}?`);
alert("Olá " + nome + ", você tem "+idade+" anos e já está aprendendo "+linguagem);
var questao = prompt("Você gosta de estudar " + linguagem + " ? Responda com o número 1 para SIM ou 2 para NÃO");
if(questao ==1){
  alert("Muito bom! Continue estudando e você terá muito sucesso.");
}else if(questao == 2 ){
  alert("Ahh que pena... Já tentou aprender outras linguagens?");
}else{
  alert("ERRO");
}
