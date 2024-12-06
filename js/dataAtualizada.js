

export const dataAtualizada=(elemento)=>{
    

    if (!elemento.querySelector(".item-lista-texto")){
        const itemData=document.createElement("p");
        itemData.innerText=`${new Date().toLocaleDateString("pt-BR", {weekday:"long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR",{hour:"numeric", minute:"numeric"})}`;
        itemData.classList.add("item-lista-texto");
        return itemData;
    } else {
        const itemData=elemento.querySelector(".item-lista-texto");
        itemData.textContent=`${new Date().toLocaleDateString("pt-BR", {weekday:"long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR",{hour:"numeric", minute:"numeric"})}`;
        return itemData;
    }
    
}


