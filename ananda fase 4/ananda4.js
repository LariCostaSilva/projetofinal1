    var resposta

    function ananda4Resposta(){

    while(resposta !=1 || resposta !=2){
        resposta = prompt ("Na sua opinião, ela deve estar lá a noite? \n \n 1 - Sim, afinal era nisso que ela sempre acreditou  \n 2 - Não, com certeza vai dar ruim")
    
    
    if (resposta == 1)
    { 
        
        location.replace ("../ananda fase 5/ananda5.html")
            

        break
    }

    else if (resposta== 2){

        document.getElementsByClassName('texto')[0].innerHTML=`<div class="texto">Acredita um pouco mais né... Se Ananda tinha uma convicção na vida ela deve arriscar!! GAME OVER!</div><div class="botao"><a href="../index.html"><button class="iniciar">VOLTAR</button></a></div>`;
s
            break
}
 
    else{     

        alert (`Escolha inválida, responda com 1 ou 2`)
        ananda4Resposta();
        break  

    }
}
}