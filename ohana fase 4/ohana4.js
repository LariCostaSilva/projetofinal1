var resposta

function ohana4Resposta(){

while(resposta !=1 || resposta !=2){
    resposta = prompt ("Me diz, o que a Ohana deve fazer?   \n \n 1 - Entrar mesmo assim.  \n 2 - Correr, com certeza já deve ter gente no local.")


if (resposta == 1)
{ 

    location.replace ("../ohana fase 5/ohana5.html")
    

    break
}

else if (resposta== 2){

    document.getElementsByClassName('texto')[0].innerHTML=`<div class="texto">Ué?!!!!!!!!! Você ainda não entendeu? É para arriscar mais, na porta que tinha aquilo que garantiria a sobrevivência de Ohana por mais um tempo, valeu a tentativa... GAME OVER!</div><div class="botao"><a href="../index.html"><button class="iniciar">VOLTAR</button></a></div>`;
      
    break
}

else{     

    alert (`Escolha inválida, responda com 1 ou 2`)
    ohana4Resposta();
    break  

}
}
}