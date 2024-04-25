/* 

 /* inicialice el contenido de la app en 0
 lean los clicks con el boton de incrememnto
 incremento de la variable de conteo de manera que cuando click, sumo gente
 cambio el rencnuentro en el html para reflejar el nuevo recuento de personas */

 
 
 /* 
 function increment(){
    
    console.log("El boton ha sido pulsado")

 }

 increment() */
//Hazme una funcion que se llame cuenta atras y que haga una cuenta atras del 5 al 1

/* function cuentaAtras(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

cuentaAtras() */


/* Cuentame los minutos totales en los que un piloto da vueltas a un circuito.
Tu piloto va a dar de 3 a 5 vueltas, tu eliges. La funcion tiene que calcular ek tiempo que ha gastado en dar esas vueltas */
/* let vuelta1 = 2
let vuelta2 = 3
let vuelta3 = 2.5
let vuelta4 = 4

function  tiempoVuelta(){

    let tiempototal= vuelta1 + vuelta2 + vuelta3 + vuelta4

    console.log(tiempototal)

}


tiempoVuelta()
 */

/* creame una funcion que incrementa su valor en 1 y que se ejecuta 3 veces
trabaja con una variable que previamente se llamae vueltasCompletadas */
/* function incremento(){
let vueltasCompletadas = 0
vueltasCompletadas = vueltasCompletadas + 1
console.log(vueltasCompletadas)
vueltasCompletadas = vueltasCompletadas + 1
console.log(vueltasCompletadas)
vueltasCompletadas = vueltasCompletadas + 1
console.log(vueltasCompletadas)
vueltasCompletadas = vueltasCompletadas + 1
console.log(vueltasCompletadas)

}
incremento()  */



let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment(){

    count = count + 1
    countEl.textContent = count //ponemos textcontent porque indertext da fallos con formato
}

function save (){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}









