import { excluirItem } from "./excluirItem.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { editarItem } from "./editarItem.js";
import { dataAtualizada } from "./dataAtualizada.js";

const listaComprados=document.getElementById("lista-comprados");
let contador=0;
const listaDeCompras=document.getElementById("lista-de-compras");

export function criarItemDaLista(item){

    const itemDaLista=document.createElement("li");
    
    const containerItemDaLista=document.createElement("div");
    containerItemDaLista.classList.add("item-lista-container");
    itemDaLista.appendChild(containerItemDaLista);

    const containerCheckbox=document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");
    const checkboxInput=document.createElement("input");
    checkboxInput.type="checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id="checkbox-"+ contador++;

    const checkboxLabel=document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);
    

    checkboxLabel.addEventListener("click", function (evento){
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado=evento.currentTarget.querySelector(".checkbox-customizado")
        const itemTitulo=evento.currentTarget.closest("li").querySelector("#item-titulo");
        
        if (checkboxInput.checked){
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration="line-through";
            listaComprados.appendChild(itemDaLista);
            
        } else {checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration="none";
            listaDeCompras.appendChild(itemDaLista);
            
        }
        verificarListaComprados(listaComprados);
    })

        const checkboxCustomizado=document.createElement("div");
        checkboxCustomizado.classList.add("checkbox-customizado");

        checkboxLabel.appendChild(checkboxInput);
        checkboxLabel.appendChild(checkboxCustomizado);
        const containerNomeDoItem=document.createElement("div");

        containerCheckbox.appendChild(checkboxLabel);
        containerNomeDoItem.appendChild(containerCheckbox);
        containerNomeDoItem.classList.add("container-nome-compra");


        const nomeDoItem=document.createElement("p");
        nomeDoItem.id="item-titulo";
        nomeDoItem.innerText=item;
        containerNomeDoItem.appendChild(nomeDoItem);
        containerItemDaLista.appendChild(containerNomeDoItem);

        const containerBotoes=document.createElement("div");
        containerItemDaLista.appendChild(containerBotoes);

        const itemData=dataAtualizada(itemDaLista);
        itemDaLista.appendChild(itemData);
        
        const botaoRemover=document.createElement("button");
        botaoRemover.classList.add("botao-acao");
        containerBotoes.appendChild(botaoRemover);

        const imagemRemover=document.createElement("img");
        imagemRemover.src="img/delete.svg";
        imagemRemover.alt="Remover";
        botaoRemover.appendChild(imagemRemover);

        const botaoEditar=document.createElement("button");
        botaoEditar.classList.add("botao-acao");
        containerBotoes.appendChild(botaoEditar);

        const imagemEditar=document.createElement("img");
        imagemEditar.src="img/edit.svg";
        imagemEditar.alt="Editar";
        botaoEditar.appendChild(imagemEditar);

        botaoRemover.addEventListener("click", function () {
            excluirItem(itemDaLista);
        } )

        botaoEditar.addEventListener("click", function () {
            editarItem(itemDaLista);
            itemData=dataAtualizada(itemDaLista);
            itemDaLista.appendChild(itemData);
        } )


        return itemDaLista


}