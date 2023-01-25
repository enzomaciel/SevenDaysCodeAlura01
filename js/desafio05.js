let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let operador = true;
var texto = " ";

function adicionar(categoria,produto){
    categoria.push(produto);
}

do{
    console.log("Lista de Mercado");
    let produto = prompt("Qual o produto que deseja inserir no carrinho?");
    let categoria = prompt("Qual a categoria do produto?\nfruta, laticinios, congelados, doces");
    switch(categoria){
        case "fruta":
            adicionar(frutas,produto);
            break;
        case "laticinio":
            adicionar(laticinios,produto);
            break;
        case "congelado":
            adicionar(congelados,produto);
            break;
        case "doce":
            adicionar(doces,produto);
            break;
    }
    let confirmar = prompt("Digite confirmar para confirmar a compra ou continuar para continuar comprando");
    if(confirmar == "confirmar"){
        operador = false;   
    }if(confirmar == "continuar"){
        operador = true;
    }
}while(operador == true);
// for para lista de compras
for(let i=0; i<frutas.length; i++){
    console.log("Frutas "+ frutas[i]);
}
for(let i=0; i<doces.length; i++){
    texto += doces[i] + " ";
}
console.log("Lista de Compras");
console.log(texto);