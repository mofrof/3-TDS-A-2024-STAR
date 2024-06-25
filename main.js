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
    [12345, [8, 4, 15, 3, 11, 30, 26, 19, 23, 18, 39, 43, 34, 41, 48, 56, 53, 49, 60, 63, 68, 74, 75, 71], 0],
    [1986, [7, 2, 11, 15, 10, 25, 26, 30, 17, 22, 35, 33, 45, 34, 60, 52, 47, 55, 56, 67, 62, 70, 71, 75], 0],
    [1987, [5, 15, 2, 8, 10, 23, 25, 30, 20, 17, 33, 34, 38, 45, 60, 47, 53, 50, 55, 62, 65, 68, 70, 75], 0]
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
    } else {
        vetorNumerosSorteados.push(valorDigitado);
        document.getElementById("listaNumerosSorteados").innerHTML = vetorNumerosSorteados;
        tagInputValor.className = null
        tagInputValor.style.color = "black"
    }
}

//DeslocaETE
function marcarNumeroSorteadoNasCartelas() {
    function marcarNumeroSorteadoNasCartelas() {
        let tagInputValor = document.getElementById("NumeroSorteado");
        let valorDigitado = parseInt(tagInputValor.value);
    
        if (valorDigitado >= 1 && valorDigitado <= 81) {
            let countNumeros = 0;
    
            while (countNumeros < listaCartelas.length) {
                let cartela = listaCartelas[countNumeros];
                let numeros = cartela[1];
    
                let contadorNumeros = 0;
    
                while (contadorNumeros < numeros.length) {
                    if (numeros[contadorNumeros] === valorDigitado) {
                        numeros[contadorNumeros] = -1;
                    }
                    contadorNumeros++;
                }
    
                countNumeros++;
            }
        }
    }
}
//Stone stock
function atualizarCartelasProximasASeremBatidas() {
    let listaDeCartelas = document.getElementById("listaDeCartelas");
    listaDeCartelas.innerHTML = ""; // Limpa a lista antes de atualizar

    listaCartelas.forEach(cartela => {
        let idCartela = cartela[0];
        let numerosCartela = cartela[1];
        let numerosMarcados = numerosCartela.filter(num => vetorNumerosSorteados.includes(num.toString())).length;
        let porcentagemMarcada = (numerosMarcados / numerosCartela.length) * 100;

        // Cria um item de lista para cada cartela
        let itemLista = document.createElement("li");
        itemLista.textContent = `Cartela ${idCartela}: ${porcentagemMarcada.toFixed(2)}% marcada`;
        listaDeCartelas.appendChild(itemLista);
    });

}

//Monix Jeans
function exibirCartelasCadastradas() {

    let cartelasDiv = document.getElementById('cartelasCadastradas');
    cartelasDiv.innerHTML = ''; 

    listaCartelas.forEach(cartela => {
        let cartelaDiv = document.createElement('div');
        cartelaDiv.className = 'cartela';

        let tituloDiv = document.createElement('h2');
        tituloDiv.textContent = `Código da Cartela: ${cartela[0]}`;
        cartelaDiv.appendChild(tituloDiv);

        let tabela = document.createElement('table');
        tabela.className = 'cartelaBingo';

        let headerRow = document.createElement('tr');
        ['B', 'I', 'N', 'G', 'O'].forEach(letra => {
            let th = document.createElement('th');
            th.textContent = letra;
            headerRow.appendChild(th);
        });
        tabela.appendChild(headerRow);

        for (let i = 0; i < 5; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < 5; j++) {
                let cell = document.createElement('td');
                let numIndex = j * 5 + i;
                

                if (numIndex === 12) {
                    cell.textContent = ''; 
                } else if (numIndex > 12) {
                    cell.textContent = cartela[1][numIndex - 1] || '';
                } else {
                    cell.textContent = cartela[1][numIndex] || '';
                }
                row.appendChild(cell);
            }
            tabela.appendChild(row);
        }
        

        cartelaDiv.appendChild(tabela);
        cartelasDiv.appendChild(cartelaDiv);
    });
}


//Sandra Bife
function analisarSeACartelaVencedora() {

}

//CsC Junior Letal
function cadastrarCartela() {
    function exibirNumero() {
        var numero = document.getElementById("numeroInput").value;

        document.getElementById("numeroExibido").innerText = numero;
    }
    
    let listaCartelasProximasASeremBatidas = []
    let vetorNumerosCadastrado = []
    function addNumeroCadastrado() {
        let tagInputValor = document.getElementById("NumeroCadastrado");
        let valorDigitado = tagInputValor.value;
    
        if (valorDigitado < 1 || valorDigitado > 81) {
            tagInputValor.className = "erro"
            tagInputValor.style.color = "red"
        } else if (vetorNumerosCadastrado.includes(valorDigitado)) {
            alert("Numero já preenchido")
        } else {
            vetorNumerosCadastrado.push(valorDigitado);
            document.getElementById("listaNumerosCadastrado").innerHTML = vetorNumerosCadastrado;
            tagInputValor.className = null
            tagInputValor.style.color = "black"
        }
        }
}