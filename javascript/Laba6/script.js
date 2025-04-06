

let myArray = ['hello', 'world', 23, '50', null];


 function filterBy(array, type) {

    let resultArray = [];

    for(let i = 0; i<array.length; i++){

        if(typeof array[i] !== type) {
            resultArray = resultArray + array[i];
        }
    }

    return resultArray;
}

console.log(filterBy(myArray, 'string'));   


