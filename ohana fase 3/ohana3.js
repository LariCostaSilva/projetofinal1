var resposta

function ohana3Resposta(){

while(resposta !=1 || resposta !=2){
    resposta = prompt ("O que você acha que ela deve fazer? \n \n 1 - Seguir as instruções do mapa.  \n 2 - Abandona o local e volta pra casa.")


if (resposta == 1)
{ 

    location.replace ("../ohana fase 4/ohana4.html")
    

    break
}

else if (resposta== 2){

    document.getElementsByClassName('texto')[0].innerHTML=`<div class="texto">Você poderia arriscar um pouco mais, nem sempre o mais duvidoso é o incorreto... GAME OVER!</div><div class="botao"><a href="../index.html"><button class="iniciar">VOLTAR</button></a></div>`;
      
    break
}

else{     

    alert (`Escolha inválida, responda com 1 ou 2`)
    ohana3Resposta();
    break  

}
}
}