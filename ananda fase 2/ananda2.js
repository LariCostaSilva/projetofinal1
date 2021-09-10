    var resposta

    function ananda2Resposta(){

    while(resposta !=1 || resposta !=2){
        resposta = prompt ("O que ela faz? \n \n 1 - Abre a porta e encara  \n 2 - Entra de novo e espera cessar")
    
    
    if (resposta == 1)
    { 
        
        location.replace ("../ananda fase 3/ananda3.html")
            

        break
    }

    else if (resposta== 2){

        document.getElementsByClassName('texto')[0].innerHTML=`<div class="texto"> Opaaaaaaaaaaa, era só um dog do lado de fora da casa, pra que tanto medo assim pequenho gafanhoto!!! GAME OVER!</div><div class="botao"><a href="../index.html"><button class="iniciar">VOLTAR</button></a></div>`;
        
            break
}
 
    else{     

        alert (`Escolha inválida, responda com 1 ou 2`)
        ananda2Resposta();
        break  

    }
}
}