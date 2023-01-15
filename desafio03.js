function caminhoFrontEnd(){
    alert("Bem vindo ao Front-end");
    const linguagem = prompt("Qual linguagem você deseja aprender React ou Vue?\nDigite 1 para React\nDigite 2 para Vue");
    decisao();
}
function caminhoBackEnd(){
    alert("Bem vindo ao Back-End");
    const linguagem = prompt("Qual linguagem você deseja aprender C# ou Java?\nDigite 1 para C#\nDigite 2 para Java");
    decisao();
}
function decisao(){
    alert("Parabens por escolher a linguagem");
    const decisao = prompt("Você deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?\n1-Para se especializar\n2-Para se tornar Fullstack")
}
alert("Bem vindo a trilha do seu caminho");
const area = prompt("Qual carreira você deseja seguir?\nDigite 1 para Front-End\nDigite 2 para Back-End");
switch (area) {
    case '1':
        caminhoFrontEnd();
        break;
    case '2':
        caminhoBackEnd()
        break;
    default:
        alert("Opção errada");
        break;
}