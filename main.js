let numero = document.querySelectorAll("h1")[1];
let valor = 0;
numero.textContent=valor;

let btn_disminuir = document.querySelectorAll("button")[0];
let btn_resetear = document.querySelectorAll("button")[1];
let btn_incrementar = document.querySelectorAll("button")[2];

btn_disminuir.addEventListener("click", () => (valor--,numero.textContent = valor));
btn_resetear.addEventListener("click", () => (valor=0,numero.textContent=valor));
btn_incrementar.addEventListener("click", () => (valor++,numero.textContent = valor));

