//var
//let
//const

//Abaixo os 3 tipos de VARIAVEIS.
var nome = "Bernardo";
let ano = 2004;
const possuiFaculdade = false;

//Abaixo var com mais de um dado.
var nome = "Bernardo",
  idade = 19,
  PossuiExp = true;

console.log("Dados do Usuario:" + nome + ",", idade + " anos,", PossuiExp);

//Também posso imprimir uma variavel usando "${valor}" sem usar o simbolo '+' para concatenar.//
//Porém posso usar apenas dentro destas aspas (``)//

var nome = 'Bernardo Haupt'
console.log(`Meu nome é ${nome}`)

//dica do .replace//
console.log(nome.replace('Bernardo Haupt', 'Be Haupt'))
