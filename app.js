// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
function operar(num1,op,num2){
    console.log(op)
    switch (op){
        case "add":
            return parseFloat(num1) + parseFloat(num2)
        case "subtract":
            return parseFloat(num1) - parseFloat(num2)
        case "multiply":
            return parseFloat(num1) * parseFloat(num2)
        case "divide":
            return parseFloat(num1) / parseFloat(num2)
        
        default:
            alert("DEU RUIM!")
            display.textContent = "0";
            return null;
    }
}

function arrendodar(num){
    let ponto;

    num = num.toString();
    ponto = num.indexOf(".");

    if (!(ponto === -1)){
        num = num.slice(0,ponto+4);
    }

    return parseFloat(num);
}

const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
var addDecimal = 0;
var calcArray = [];
var isOp = false;
var opPressed;

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        
        

        if (!action) {
            /* um número foi clicado */
            if (addDecimal === 1){
                display.textContent += ".";
            }

            if (displayedNum === "0" || isOp === true) {
                display.textContent = keyContent;
            }
            else {
                display.textContent += keyContent;
            }

            addDecimal = 0;

            
        }
        
        if (
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
            )
            {
                
                /* o botão clicado foi soma, subtração, 
                multiplicação e divisão */
                if (isOp === false){
                    opPressed = key;
                    opPressed.style.backgroundColor = "grey";
                    isOp = true;
                    calcArray.push(displayedNum);
                    calcArray.push(action);
                }


            }

        if (action === "decimal"){
            /** colocar um número decimal */
            if (!(displayedNum.includes("."))){
                addDecimal = 1;
            
            }

        }

        if (action === "clear"){
            
            /**limpar o display */
            display.textContent = "0";
            calcArray = [];
            opPressed.style.backgroundColor = "#eee";
            
        }

        if (action === "calculate"){
            /** Adicionar o último elemento ao cálculo */
            if (isOp){
                calcArray.push(displayedNum)
            }
            
            /** Fazer a primeira operação */
            if (!(calcArray.length < 2)){
                console.log(calcArray)
                resultado = operar(calcArray[0],calcArray[1], calcArray[2])
                display.textContent = arrendodar(resultado)
                calcArray = [];
                isOp = false;
                opPressed.style.backgroundColor = "#eee";

            }

        }

    }
})
