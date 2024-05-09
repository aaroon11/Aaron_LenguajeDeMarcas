let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment(){
    count = count + 1
    countEl.textContent = count
}

function restar(){
    if (count > 0) {
        count = count - 1
        countEl.textContent = count
    }
    else{
        alert('No puedes restar personas que no hay')
    }
}

function save (){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}






