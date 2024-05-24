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
    [12345, [8, 4, 15, 3, 11, 30, 26, 19, 23, 18, 39, 43, 34, 41, 48, 56, 53, 49, 60, 63, 68, 74, 75, 71],  0],
    [1986,  [7, 2, 11, 15, 10, 25, 26, 30, 17, 22, 35, 33, 45, 34, 60, 52, 47, 55, 56, 67, 62, 70, 71, 75], 0],
    [1987,  [5, 15, 2, 8, 10, 23, 25, 30, 20, 17, 33, 34, 38, 45, 60, 47, 53, 50, 55, 62, 65, 68, 70, 75],  0]
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


//Monix Jeans
function exibirCartelasCadastradas() {
 let cartelasDiv = document.getElementById('cartelasCadastradas');
    cartelasDiv.innerHTML = ''; // Limpa o conteúdo atual

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
                
                // Verifica se é o termo do meio da cartela (índice 12)
                if (numIndex === 12) {
                    cell.textContent = ''; // Deixa o termo do meio em branco
                } else if (numIndex > 12) {
                    // Se o índice for maior que 12, ajusta para a próxima casa
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


