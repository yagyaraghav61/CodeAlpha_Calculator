const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}
function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

document.addEventListener("keydown",(e)=>{

    if(!isNaN(e.key) || ['+','-','*','/','.'].includes(e.key)){
        display.value += e.key;
    }

    if(e.key==="Enter"){
        calculate();
    }

    if(e.key==="Backspace"){
        display.value = display.value.slice(0,-1);
    }
    

    if(e.key==="Escape"){
        clearDisplay();
    }

});