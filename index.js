let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment(){
    if (count2 < 100) {
        count = count + 1
        countEl.textContent = count
    }
    else {
        alert('La etacion esta llena')
    }
    
    
}

function restar(){
    if (count > 0) {
        count = count - 1
        countEl.textContent = count
    }
    else{
        alert('No puede haber personas en negativo')
    }
}

function save (){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


let saveEl1 = document.getElementById("save-el1")
let countEl1 = document.getElementById("count-el1")
console.log(countEl1)

let count1 = 0

function increment1(){
    if (count2 <= 0){
        alert('A quien vas a sacar de la estacion si esta vacía')
    }
   else{
    count1 = count1 + 1
    countEl1.textContent = count1
   }
}

function restar1(){
    
    if (count1 > 0) {
        count1 = count1 - 1
        countEl1.textContent = count1
    }
    else{
        alert('No puede haber personas en negativo')
    }
}

function save1(){
    let countStr = count1 + " - "
    saveEl1.textContent += countStr
    countEl1.textContent = 0
    count1 = 0
  
}



let countEl2 = document.getElementById("count-el2")
console.log(countEl2)

let count2 = 0
function increment2(){
    if (count2 < 100){
        count2 = count2 + 1
        countEl2.textContent = count2
    }
    else{
        alert('No hay mas capacidad en la estación')
    }
  
}

function  restar2(){

   if (count2 > 0) {
        count2 = count2 - 1
        countEl2.textContent = count2
    }
    else{
        alert('No puede haber personas en negativo')
    }
}

