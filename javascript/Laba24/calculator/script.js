

$(document).ready(function() {

    let calcDisplay = $(".calculator-display");
    let operator;
    let firstNumber;
    let memory = 0;
    let memoryUsed = false;


    function calculate(num1, num2, operator) {
        switch (operator) {
            case "+": return num1 + num2;
            case "-": return num1 - num2;
            case "*": return num1 * num2;

            case "/": 
                if(num2 !== 0 ){
                    return num1 / num2;
                } else {
                    return "Помилка"; 
                }
        }
    }
    

    $(".button").click(function() {

        let value = $(this).val();

        switch(true) {

            case !isNaN(value) || value == ".":
                calcDisplay.val(calcDisplay.val() + value);
            break;

            case ["+", "-", "*", "/"].includes(value):
                firstNumber = parseFloat(calcDisplay.val());
                operator = value;
                calcDisplay.val("");
            break;

            case value == "=":
                if (firstNumber !== undefined) {
                    let secondNumber = parseFloat(calcDisplay.val());
                    let result = calculate(firstNumber, secondNumber, operator);
                    calcDisplay.val(result);
                    firstNumber = result;
                }
            break;

            case value == "C":
                calcDisplay.val("");
                firstNumber = undefined;
                operator = undefined;
            break;


            case value == "m+":
                $(".memory-indicator").addClass("active");

                if (calcDisplay.val() !== "") {
                    memory = (memory ?? 0) + parseFloat(calcDisplay.val());
                    memoryUsed = true;
                }
                break;

            case value === "m-":
                $(".memory-indicator").addClass("active");

                if (calcDisplay.val() !== "") {
                    memory = (memory ?? 0) - parseFloat(calcDisplay.val());
                    memoryUsed = true;
                }
                break;

                case value === "mrc":
                    if (memoryUsed) {
                        if (calcDisplay.val() !== memory.toString()) { 
                            calcDisplay.val(memory);

                        } else {
                            calcDisplay.val(""); 
                            memoryUsed = false;
                            memory = null;
                            $(".memory-indicator").remove();
                        }
                    }
            break;
    
        }
    });
});