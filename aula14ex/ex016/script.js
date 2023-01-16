function contar() {
    let inicio = document.getElementById("txti")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("passo")
    let resultado = document.getElementById("resultado")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = "Impossível contar!"
        //window.alert("[ERRO] Faltam dados!")
    } else {
        resultado.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}










/* Meu código feito solo (com bugs)
// Variáveis para pegar recursos HTML
var inicio = document.getElementById("inicio")
var fim = document.getElementById("fim")
var passo = document.getElementById("passo")
var resultado = document.getElementById("resultado")

// Variáveis para conversão em número
var Valorinicio = Number(inicio.value)
var Valorfim = Number(fim.value)
var Valorpasso = Number(passo.value)

// Função clicar
function clicar() {
    for (Valorinicio; Valorinicio <= Valorfim; Valorpasso) {
        resultado.innerText = Valorinicio
    }
    
}
*/