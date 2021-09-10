    var resposta

    function ohana2Resposta(){

    while(resposta !=1 || resposta !=2){
        resposta = prompt ("E agora? Como Ohana deve se locomover \n \n 1 - Pegar o carro  \n 2 - Ir andando mesmo")
    
    
    if (resposta == 1)
    { 
        document.getElementsByClassName('texto')[0].innerHTML=`<div class="texto"> Ohhhhhhhhhhh não, você deveria ter ido andando, o barulho do carro chamou atenção de quem não queríamos!!! GAME OVER!</div><div class="botao"><a href="../index.html"><button class="iniciar">VOLTAR</button></a></div>`;

        break
    }

    else if (resposta== 2){

        location.replace ("../ohana fase 3/ohana3.html")
            
            break
}
 
    else{     

        alert (`Escolha inválida, responda com 1 ou 2`)
        ohana2Resposta();
        break  

    }
}
}