// variavies
let variavel_local = 10; // number
const constante = []; // array
const objeto = {}; // objeto
const msg = "Texto"; // string
let status = false; // bool

// funcoes
function soma(a, b) {
  return a + b;
}
let resultado = soma(1, 2);

const multiplica = (a, b) => a * b;
resultado = multiplica(1, 2);
/*
function multiplica(a, b) {
  return a * b;
}
*/

async function tempo(duracao) {
  await new Promise((r) => {
    setInterval(r, duracao);
  });
  console.log("passou o tempo!");
}

tempo(3000);

// objetos



const pessoa = {nome : "Kayã", email: "kaya@gmail.com" };
console.log(pessoa.nome);
pessoa.nome = "Kayã Vieira"
console.log(pessoa.nome);
const {nome} = nome;
console.log(nome);
const pessoa_fisica = {cpf: 111, ...pessoa}

const lista =[];
lista.push("uva");
const achou = lista.find((item) => item === "uva");


const texto = "olá";
texto.contact("mundo");
texto.toUpperCase();

// modulos

export {soma, multiplica};
