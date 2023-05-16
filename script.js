const input = document.querySelector ("#input");
const counter = document.querySelector(".counter");
const contadorBotao = document.querySelector("#contador");

let mode = "caracteres" 

contadorBotao.addEventListener ("click", () =>{

if (mode === "caracteres") {
    mode = "words";
    contadorBotao.textContent = "Contar caracteres";
} else{
    mode = "caracteres"
    contadorBotao.textContent = "Contar palavras";
}
input.dispatchEvent (new Event ("input"));
});

input.addEventListener("input", () => {
    let count = 0;

    if (mode === "caracteres") {
        count = input.value.length;

        counter.textContent = `${count} caractere(s)`;

    }else{

        const words = input.value.trim().split(/\s+/);
        count = input.value.trim() === "" ? 0 : words.length;
        counter.textContent = `${count} palavra(s)`

    }


});