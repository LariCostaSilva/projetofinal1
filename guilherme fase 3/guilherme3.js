    var resposta

    function guilherme3Resposta(){

    while(resposta !=1 || resposta !=2){
        resposta = prompt ("Ele deve responder a mensagem? \n \n 1 - Responde na hora  \n 2 - Deixa a pessoa lá chamando")
    
    
    if (resposta == 1)
    { 
        location.replace ("../guilherme fase 4/guilherme4.html")

        break
    }

    else if (resposta== 2){
        document.getElementsByClassName('texto')[0].innerHTML=`<div class="texto">Olha, olha... Essa pessoa tinha algo muito importante a dizer hein, e você agora ficará sem saber porque não foi curioso. GAME OVER!</div><div class="botao"><a href="../index.html"><button class="iniciar">VOLTAR</button></a></div>`;
       
            break
}
 
    else{     

        alert (`Escolha inválida, responda com 1 ou 2`)
        guilherme3Resposta();
        break  

    }
}
}