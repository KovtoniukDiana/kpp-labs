
let getFirstNumber = prompt('Введіть перше число');
let getSecondNumber = prompt('Введіть друге число');

let action = prompt('Оберіть арифсметичну дію: + - / *');

const firstNumber = parseFloat(getFirstNumber);
const secondNumber = parseFloat(getSecondNumber);


function numberSum (firstNumber, secondNumber) {
    return firstNumber + secondNumber; 
}

function numberDifference(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function numberDivision(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function numberMultiplication(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}


switch (action) {
    default:
        console.log('Помилка, невідома дія');
        break;

    case '+':
        let sumResult = numberSum (firstNumber, secondNumber);
        console.log(sumResult);
        break;  
        
    case '-':
        let differenceResult = numberDifference (firstNumber, secondNumber);
        console.log(differenceResult);
        break;

    case '/':
        let divisionResult = numberDivision (firstNumber, secondNumber);
        console.log(divisionResult);
        break;

    case '*':
        let multiplicationResult = numberMultiplication (firstNumber, secondNumber);
        console.log(multiplicationResult);
        break;
     
}
        


