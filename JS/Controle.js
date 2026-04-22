
//Modularizaçäo (ES Modules)
import { categoria, listaGastosPorCategoria } from "./Classes.js";
import { valorNegativo, atualizarInterface } from "./Utils.js";
//POO
const gastosPorCategoria = new listaGastosPorCategoria(
    new categoria ("alimentacao"),
    new categoria ("transporte"),
    new categoria ("lazer"),
    new categoria ("outros")
)

//Manipulação de DOM
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) => {
    
    //Prevençao de Comportamento padrão
    evento.preventDefault();

    const valorInformado = parseFloat(formulario.elements.valor.value);
    const categoriaInformada = formulario.elements.categoria.value;

    if(valorNegativo(valorInformado)){
        alert("Valor inválido. O valor näo pode ser negativo.");
        return;
    }
    
    const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada);
    categoria.adicionarValor(valorInformado);


    atualizarInterface(gastosPorCategoria);
    formulario.reset();
});