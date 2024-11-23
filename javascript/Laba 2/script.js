
const getNumber = prompt('Введіть число');

for(let i =  1; i <= getNumber; i++){
    if (i % 5 == 0) {
       console.log(i);
    }
}

if(getNumber < 5){
    console.log('Sorry, no numbers');
}


