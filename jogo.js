function iniciaJogo(){
    var url = window.location.search;
    var nivel_jogo = url.replace('?','');
    var tempo_segundos = 0;

    if(nivel_jogo == 1){//nivel 1 -> facil = 120segundos
        tempo_segundos = 120;
    }
    if(nivel_jogo == 2){ //nivel 2 -> normal = 60segundos
        tempo_segundos = 60;
    }
    if(nivel_jogo == 3){//nivel 3 -> difícil = 30segundos
        tempo_segundos = 30;
    }
    
   document.getElementById("cronometro").innerHTML = tempo_segundos;

   
   var qtd_baloes = 20;
   criaBaloes(qtd_baloes);

   document.getElementById("baloes_inteiros").innerHTML = qtd_baloes;
   document.getElementById("baloes_estourados").innerHTML = 0;
}

function criaBaloes(qtd_baloes){
    for(var i = 1; i <= qtd_baloes; i++){
        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';
        document.getElementById("cenario").appendChild(balao)
    }
}