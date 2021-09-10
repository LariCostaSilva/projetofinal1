    var resposta

    function ananda3Resposta(){

    while(resposta !=1 || resposta !=2){
        resposta = prompt ("O que você acha que ela deve fazer? \n \n 1 - Sair correndo dali  \n 2 - Ir até a pessoa e ouvir o que ela tem a dizer")
    
    
    if (resposta == 1)
    { 
        
        location.replace ("../ananda fase 4/ananda4.html")
            

        break
    }

    else if (resposta== 2){

        document.getElementsByClassName('texto')[0].innerHTML=`<div class="texto">Nem sempre dá para confiar, a pessoa chamando só queria informações sobre aonde encontrar comida, Ananda não quis passar e deu ruim pra ela. GAME OVER!</div><div class="botao"><a href="../index.html"><button class="iniciar">VOLTAR</button></a></div>`;
s
            break
}
 
    else{     

        alert (`Escolha inválida, responda com 1 ou 2`)
        ananda3Resposta();
        break  

    }
}
}