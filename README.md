# 7 Days of Code (Alura)
> Diretorio reservado para o desafio 7 Days Of Code da Alura (iniciante em programação).

## Descrição do desafio
Eu estou pronta e muito animada para te desafiar em Lógica de Programação! E você?

Nos próximos 7 dias eu quero ver o seu comprometimento e dedicação. Tenho certeza que ao final desta experiência você vai sair com muuuitos conhecimentos novos e um projeto para o seu portfólio!

Separei algumas recomendações para tornar o seu mergulho mais seguro:

* Separe uma hora por dia para resolver os desafios;
* Convide uma pessoa para tornar essa experiência mais divertida;
* Compartilhe seus resultados usando a hashtag #7DaysOfCode no seu GitHub e nas suas redes sociais.

### Primeiro Desafio
Este primeiro dia é super importante! Ao final dele, **você terá um novo conhecimento que é essencial para os próximos desafios**.

Existe uma situação super comum para quem utiliza o Javascript: problemas com os tipos de variáveis na hora de comparar os valores de duas variáveis entre si. Eu já passei muito por isso!

Em linguagens de programação compiladas, como Java e C#, esse problema é detectado em *tempo de compilação*, e você que está desenvolvendo o código tem um aviso claro do erro.

Já no Javascript, esses erros passam despercebidos, já que o ***código não passa por um compilador***. Ou seja, os erros só aparecem em tempo de execução.

A parte mais confusa para quem está começando a aprender lógica com Javascript é a operação de ***igualdade entre valores***. Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo para um tipo booleano de maneira implícita (automática), e isso afetará variáveis que eram Strings, Numbers, Object, etc….

Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando true:

```
console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );
```

O que não faz necessariamente muito sentido.

*(Você pode testar tudo isso indo no seu navegador, clicando com o botão direito, escolhendo a opção ***"Inspecionar"*** e a aba ***"Console"***. Nessa aba, basta copiar e colar cada uma das linhas acima para confirmar que todas realmente retornam ***true***).*

Sendo assim, a sua tarefa de hoje é **reescrever o código abaixo de maneira que ele imprima as informações de maneira correta**, que faça sentido e sem erros:
```
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
```
### Segundo Desafio
Sabe quando você se cadastra em um site e, logo em seguida, quando faz o seu login, ele já te chama pelo seu nome? É isso que você vai fazer no desafio de hoje!

Quando você cria algum sistema, site ou aplicativo, é comum querer colocar alguns toques personalizados para tornar a **experiência na sua aplicação mais rica e dinâmica.**

Fazer isso através da programação pode não ser uma tarefa muito fácil. Dependendo do nível de customização que você quiser implementar, a quantidade de código que você precisará escrever pode ser imensa.

Mas é claro que você pode começar de uma maneira mais simples. Para isso, o importante é entender como capturar e armazenar valores dentro de variáveis. E é nisso que eu vou te ajudar hoje!

Variáveis são os blocos básicos de construção de qualquer sistema e são essenciais para processar qualquer tipo de informação, seja ela de uma pessoa logada no sistema ou mesmo para exibir detalhes de produtos em um catálogo de e-commerce.

Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o **usuário responder 3 perguntas:**

* Qual o seu nome?
* Quantos anos você tem?
* Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, **o sistema vai exibir a mensagem:**
```
"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
```
Note que cada informação entre [] é uma das respostas dadas pela pessoa.

#### EXERCÍCIO OPCIONAL

Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.

**Mas ele é 100% opcional.**

Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:
```
Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.
```
E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

> 1 = Muito bom! Continue estudando e você terá muito sucesso. <br>
> 2 = Ahh que pena... Já tentou aprender outras linguagens?
