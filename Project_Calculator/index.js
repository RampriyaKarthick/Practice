let input =document.querySelector("input")
function addValue(elementValue){
    input.value += elementValue
}

function clearButton(){

    input.value = ""

}

function deleteLastValue(){
    input.value = input.value.slice(0,-1)
}

function evaluateVal(){
    input.value = eval(input.value)
}