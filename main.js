//Exemplo para apresentação do cónteudo.

// function addNovaTag(){
//     let novaTag = document.createElement("h1")
//     novaTag.innerHTML = "Eu sou uma nova TAG"

//     document.body.append(novaTag)
// }

// function rmTag(){
//     let tagASerRemovida = document.body.getElementsByTagName("h1")[3]
//     document.body.removeChild(tagASerRemovida)
//     document.remove
// }

//código utilizado pelo site do bingo.
let listaCartelas = [
    [id => 12345, numeros => [8, 4, 15, 3, 11, 30, 26, 19, 23, 18, 39, 43, 34, 41, 48, 56, 53, 49, 60, 63, 68, 74, 75, 71], quantNumerosSorteados => 0],
    [id => 1986, numeros => [7, 2, 11, 15, 10, 25, 26, 30, 17, 22, 35, 33, 45, 34, 60, 52, 47, 55, 56, 67, 62, 70, 71, 75], quantNumerosSorteados => 0],
    [id => 1987, numeros => [5, 15, 2, 8, 10, 23, 25, 30, 20, 17, 33, 34, 38, 45, 60, 47, 53, 50, 55, 62, 65, 68, 70, 75], quantNumerosSorteados => 0]
]
let listaCartelasProximasASeremBatidas = []
let vetorNumerosSorteados = []

function addNumeroSorteado() {
    let tagInputValor = document.getElementById("NumeroSorteado");
    let valorDigitado = tagInputValor.value;

    if (valorDigitado < 1 || valorDigitado > 81) {
        tagInputValor.className = "erro"
        tagInputValor.style.color = "red"
    } else if (vetorNumerosSorteados.includes(valorDigitado)) {
        alert("Numero já preenchido")
    }
    else {
        vetorNumerosSorteados.push(valorDigitado);
        document.getElementById("listaNumerosSorteados").innerHTML = vetorNumerosSorteados;
        tagInputValor.className = null
        tagInputValor.style.color = "black"
    }
}

//DeslocaETE
function marcarNumeroSorteadoNasCartelas() {

}

//Stone stock
function atualizarCartelasProximasASeremBatidas() {

}

//Monix Jeans
function exibirCartelasCadastradas() {

}

//Sandra Bife
function analisarSeACartelaVencedora() {

}

//CsC Junior Letal
function cadastrarCartela() {

}