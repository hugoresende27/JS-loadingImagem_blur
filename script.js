const loadTxt = document.querySelector('.loading-text')
const back = document.querySelector('.bg')

let load = 0;
let int = setInterval (blur, 40);/*CONTADOR, blur a cada 0.3segundos*/ 

function blur()
{
    load++;
    if (load>99)
    {
        clearInterval(int)
    }
    //console.log(load);/*Na consola 1,2,3,4,5,6,...infinito 1 console log a cada 30milisegundos*/
    loadTxt.innerText = `${load}%`
    loadTxt.style.opacity = scale( load, 0, 100, 1, 0) /*aqui, ao usar a função load, quando load atingir 100 (de 0 a 100), a opacity vai mudar para 0(de 1 a 0), desaparecendo o 100% na tela */
    back.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`
}
/*ESTA FUNÇAO É PARA MAPEAR NUMA ESCALA DE NUMEROS E COMPARAR COM OUTRA ESCALA */
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers