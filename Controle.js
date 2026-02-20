const matrizGastos = [
    ["alimentacao",0],
    ["transporte",0],
    ["lazer",0],
    ["outros",0],
    ["total",0],
]
// Funçöes Utilitarias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;
const limparCampos = () => obterElemento('valor').value = '';
const formataMoeda = (valor) => valor.toFixed(2).replace(".",",");

// Obter Valore de Formulário
const obterValorInformado = () => parseFloat(obterElemento ('valor').value);
const obterCategoriaInformado = () => obterElemento ('categoria').value;

// Obter Categoria da Matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find ((item) => item[0] === nomeCategoria); 

// Atualizar valores da matriz
const atualizaValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

const atualizarInterface = () => {

    matrizGastos.forEach(([nome, valor]) =>{
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`
    })
}
   


function adicionarGasto() {

    const valorInformado = obterValorInformado();
    const categoriaInformada = obterCategoriaInformado();

    if(valorNegativo(valorInformado)){
        alert("Valor inválido. O valor näo pode ser negativo.");
        return;
    }
    const categoria = obterCategoria (matrizGastos, categoriaInformada);
    const total = obterCategoria(matrizGastos, "total");

    atualizaValorCategoria(categoria, valorInformado);
    atualizaValorCategoria(total, valorInformado);
    atualizarInterface();
    limparCampos();

}