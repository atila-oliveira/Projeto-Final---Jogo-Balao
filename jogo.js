var timerId = null;

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

   
   var qtd_baloes = 80;
   criaBaloes(qtd_baloes);

   document.getElementById("baloes_inteiros").innerHTML = qtd_baloes;
   document.getElementById("baloes_estourados").innerHTML = 0;

   contagemTempo(tempo_segundos + 1);
}

function contagemTempo(segundos){
    segundos = segundos - 1;

    if(segundos == -1){
        clearTimeout(timerId);
        gameOver();
        return false;
    }


    document.getElementById("cronometro").innerHTML = segundos;
    timerId = setTimeout("contagemTempo("+ segundos+ ")", 1000);

}

function gameOver(){
    remove_eventos_baloes();
    alert("Fim de jogo, você não conseguiu estourar todos os balões a tempo!")
}

function criaBaloes(qtd_baloes){
    for(var i = 1; i <= qtd_baloes; i++){
        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';
        balao.id = 'b' + i;
        balao.onclick = function() {estourar(this)};
        document.getElementById("cenario").appendChild(balao)
    }
}

function estourar(e){
    var idBalao = e.id;
    document.getElementById(idBalao).setAttribute("onclick","")
    document.getElementById(idBalao).src = "imagens/balao_azul_pequeno_estourado.png";
    pontuacao(-1);
}

function pontuacao(acao){
    var baloesInteiros = document.getElementById('baloes_inteiros').innerHTML;
    var baloesEstourados = document.getElementById('baloes_estourados').innerHTML;

    baloesInteiros = parseInt(baloesInteiros);
    baloesEstourados = parseInt(baloesEstourados);

    baloesInteiros = baloesInteiros + acao;
    baloesEstourados = baloesEstourados - acao;

    document.getElementById("baloes_inteiros").innerHTML = baloesInteiros;
    document.getElementById('baloes_estourados').innerHTML = baloesEstourados;

    situacaoJogo(baloesInteiros);
}

function situacaoJogo(baloesInteiros){
    if(baloesInteiros == 0){
        alert("Parabéns, você conseguiu estourar todos os balões a tempo!");
        pararJogo();
    }
}

function pararJogo(){
    clearTimeout(timerId);
}

function remove_eventos_baloes() {
    var i = 1; 
    
    while(document.getElementById('b'+i)) {
      
        document.getElementById('b'+i).onclick = '';
        i++; 
    }
}