    var resposta

    function guilherme4Resposta(){

    while(resposta !=1 || resposta !=2){
        resposta = prompt ("E aí?! Guilherme deve ir ou não? \n \n 1 - Vai, confia  \n 2 - Sai fora, é cilada Bino")
    
    
    if (resposta == 1)
    { 
        location.replace ("../guilherme fase 5/guilherme5.html")

        break
    }

    else if (resposta== 2){
        document.getElementsByClassName('texto')[0].innerHTML=`<div class="texto">Por mais que o mundo atual não nos dê tanta esperança nas pessoas, quem sabe talvez em um cenário como esse elas possam enxergar que só unidos chegaremos né?! No meio de muita maldade há sempre a esperaça de que o bem prevaleça. GAME OVER! Acredite mais que o ser humano pode sim melhorar e evoluir.</div><div class="botao"><a href="../index.html"><button class="iniciar">VOLTAR</button></a></div>`;
       
            break
}
 
    else{     

        alert (`Escolha inválida, responda com 1 ou 2`)
        guilherme4Resposta();
        break  

    }
}
}