const tentativas = 3;
let max = 10;
let min = 0;
var sorte = gerandoNumeroAleatorio(min,max);
console.log(sorte);
tentativa();

function tentativa(){
    for(var i=0 ; i< tentativas; i++){
        const numero = prompt("Digite um número de 0 a 10");
        if(numero == sorte){
            alert("parabens você ganhou");
            break;
        }else{
            alert("Você errou tente denovo");
        } 
        if(i == 2){
            alert("Game Over");
        }  
    }
}
function gerandoNumeroAleatorio(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}