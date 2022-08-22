let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;


function increment() {
    if (countEl.textContent != count) {
        let value = countEl.textContent;
        count = value;
        count++;
        countEl.textContent = count;
    }else{
        count += 1;
        countEl.textContent = count;
    }
   
}

function save() {
    if (countEl.textContent != count){
        let value = countEl.textContent;
        count = value;
    }
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

function restart(){
count = 0;
countEl.textContent = 0;
saveEl.textContent = "Previous entries: ";
}

function cleanNumber(){
    countEl.textContent = "";
}
