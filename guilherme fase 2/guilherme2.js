    var resposta

    function guilherme2Resposta(){

    while(resposta !=1 || resposta !=2){
        resposta = prompt ("Guilherme deve entrar? \n \n 1 - Sim  \n 2 - Não")
    
    
    if (resposta == 1)
    { 
        document.getElementsByClassName('texto')[0].innerHTML=`<div class="texto">Poxa vida, ao entrar no condomínio Guilheme foi surpreendido por um grupo hostil, como ele estava em minoria você já sabe, né?! Não deu pra ele. GAME OVER!</div><div class="botao"><a href="../index.html"><button class="iniciar">VOLTAR</button></a></div>`;

        break
    }

    else if (resposta== 2){

        location.replace ("../guilherme fase 3/guilherme3.html")
            
            break
}
 
    else{     

        alert (`Escolha inválida, responda com 1 ou 2`)
        guilherme2Resposta();
        break  

    }
}
}