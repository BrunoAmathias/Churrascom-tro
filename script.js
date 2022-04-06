let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando");

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qtdTotalDeCarne = carnepp(duracao) * adultos + (carnepp(duracao)*  criancas/2)
    let qtdTotalDeFrango = frangopp(duracao) * adultos + (frangopp(duracao)*  criancas/2)
    let qtdTotalDePaoDeAlho = paodealhopp(duracao) * adultos + (paodealhopp(duracao)*  criancas/2)
    let qtdTotalDeLinguica = linguicapp(duracao) * adultos + (linguicapp(duracao)*  criancas/2)
    let qtdTotalDeCerveja = cervejapp(duracao) * adultos 
    let qtdTotalDeBebidas = bebidaspp(duracao) * adultos + (bebidaspp(duracao)/2 * criancas)
    
    resultado.innerHTML = `<h3 class="h3" >Você vai precisar de :`
    resultado.innerHTML += `<p class="result"> ${qtdTotalDeCarne/1000}Kg de Carne</p>`
    resultado.innerHTML += `<p class="result"> ${qtdTotalDeFrango/1000}Kg de Frango</p>`
    resultado.innerHTML += `<p class="result"> ${qtdTotalDeLinguica/1000}Kg de Linguiça</p>`    
    resultado.innerHTML += `<p class="result"> ${qtdTotalDePaoDeAlho/1000}Kg de Pão de alho</p>`
    resultado.innerHTML += `<p class="result"> ${Math.ceil(qtdTotalDeCerveja/350)} Latas de cerveja</p>`
    resultado.innerHTML += `<p class="result"> ${Math.ceil(qtdTotalDeBebidas/2000)}Garrafas de refrigerante</p>`
    
    
}
 
function carnepp(duracao){
if( duracao >= 6 ) {return 650*0.4 ;
}else {return 400*0.4;}
}
function frangopp(duracao){
    if(duracao >=6){ return 650*0.25;}
    else {return 400 * 0.25}
}
function linguicapp(duracao){
    if(duracao >=6){ return 650*0.25;}
    else {return 400 * 0.25}
}
function paodealhopp(duracao){
    if(duracao >=6){ return 650*0.10;}
    else {return 400 * 0.10}
}
function cervejapp(duracao){
    if( duracao >= 6 ) {return 2000;
    }else {
        return 1200;}
    } 
    function bebidaspp(duracao){
        if( duracao >= 6 ) {return 1500;
        }else {return 1000;}
        } 