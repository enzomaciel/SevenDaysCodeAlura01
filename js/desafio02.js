function pegarRegistro(registro){
  const nome = document.getElementById(registro).value;
  return nome;
}
function iniciar(){
  const nome = pegarRegistro("nome");
  const idade = pegarRegistro("idade");
  const linguagem = pegarRegistro("linguagem");
  alert("Olá " + nome + ", você tem "+idade+" anos e já está aprendendo "+linguagem);
  const questao = prompt("Você gosta de estudar " + linguagem + " ? Responda com o número 1 para SIM ou 2 para NÃO");
  if(questao ==1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
  }else if(questao == 2 ){
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
  }else{
    alert("ERRO");
}
}