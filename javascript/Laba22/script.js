
let input = $('<input>', {
    type: 'number',
    placeholder: 'Діаметр кола'
})


let circleContainer = $('<div>', {
    class: 'circle-container'
})


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createCircle(diameter) {
    let circle = $('<div>', {
        'class': 'circle'
    })

    circle.css({
        'border-radius': '50%',
        'min-width': diameter,
        'min-height': diameter,
        'background-color': getRandomColor()
    })

    circleContainer.append(circle);
}


$('body').append(input);
$('body').append(circleContainer);


const button = $('button');
button.click(function() {

    input.addClass('active');

    let value = input.val();
    
    let diameter = parseInt(value);

    let circlesNumber = diameter * 10;

    circleContainer.empty();

    for (let i = 0; i <=  circlesNumber; i++) {
        createCircle(diameter);
    };
});

circleContainer.on('click', '.circle', function() {
    $(this).css({
        'display': 'none'
    });
});

