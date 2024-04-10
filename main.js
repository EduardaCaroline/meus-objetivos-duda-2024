const botoes = documet.querySelectorA11(".botao");
const textos = document.querySelectorA11(".aba-conteudo")

for( let i=0; i<botoes.length; i++ ){
    botoes[i].onclick = function(){

        for(let i=0; i<botoes.length; i++){
            botoes[j].classlist.remove("ativo");
            textos[j].classlist.remove("ativo");
        }

        botoes[i].classlist.add("ativo");
        textos[i].classlist.add("ativo");
    }
}

const contadores = document.querySelectorA11 (".contador");
const tempoObjetivo1 = new Date("2024-12-01T00:00:00");
const tempoObjetivo2 = new Date("2024-04-01T00:00:00");
const tempoObjetivo3 = new Date("2024-05-05T00:00:00");
const tempoObjetivo4 = new Date("2024-10-05T00:00:00");
const tempoObjetivo5 = new Date("2024-10-05T00:00:00");
const tempoObjetivo6 = new Date("2024-10-05T00:00:00");
 const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4,tempoObjetivo5,tempoObjetivo6]
contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %+ 24;

    if (tempoFinal > 0){
        return [dias,horas,minutos,segundo];
    } else {
        return [0,0,0,0];
    }


}
 function atualizaCronometro(){
    for(let i=0; i<contadores.length;i++){
    document.getElementById ("dias"+i).textContent = calculaTempo(tempos0[1])[0];
    document.getElementById ("horas"+i).textContent = calculaTempo(tempos[1])[1];
    document.getElementById ("min"+i).textContent = calculaTempo(tempos[1])[2];
    document.getElementById ("seg"+i).textContent = calculaTempo(tempos[1])[3];
   
      
    }
 }
 function comecaCronometro(){
 atualizaCronometro();
 setInterval(atualizaCronometro,1000); 
}

comecaCronometro();