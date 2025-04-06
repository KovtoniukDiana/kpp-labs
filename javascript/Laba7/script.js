

let myArray = ['hello', 'world', 'Kyiv', 'Kharkiv', 'Odesa', 'Lviv'];

function showArrayList (array) {

    const list = document.getElementById('itemList');

    list.innerHTML = array.map( function(item){
        return `<li>${item}</li>`;
    }).join('');
}

showArrayList(myArray);

