

function fibonacci(number) {
    if (number < 2) {
        return number;
    }
    
    return fibonacci(number - 1) + fibonacci(number - 2);
}


let n = parseInt(prompt("Введіть номер елемента Фібоначчі(n):"));


if (isNaN(n) || n < 0) {
    alert("Введіть коректне невід'ємне число");
} else {
    let result = fibonacci(n);
    alert(`Число Фібоначчі для n${n} = ${result}`);
}
