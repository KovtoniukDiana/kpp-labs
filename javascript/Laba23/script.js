

$(window).ready(function(){

    let bomb = $('.fa-solid.fa-bomb');
    let cells = $('.item');
    let selectedDivs = [];
    let buttonRestart = $('.restart');
    let maxRow = 7;
    let maxCol = 7;
    let isGameOver = false;

  
    function putBombs() {

        while (selectedDivs.length < 10) {
            let randomIndex = Math.floor(Math.random() * 64);

            if (!selectedDivs.includes(randomIndex)) {

                selectedDivs.push(randomIndex);

                let clone = bomb.first().clone();
                
                clone.addClass('generated-bomb');
                $(cells[randomIndex]).append(clone);
            }
        }
    }
    putBombs();


    buttonRestart.click(function() {
        selectedDivs.length = 0;

        $('.generated-bomb').remove();
        $('.item').removeClass('active opened-zone').empty();
        putBombs();
        placedFlags = 0;
        updateFlagsCounter();
        isGameOver = false;

    });

   
    function openAllBombs() {

        $('.generated-bomb').each(function() {

            $(this).addClass('active');
        });

        cells.find('.fa-flag').remove();
    }


    cells.click(function() {
        if (isGameOver) return;

        let cell = $(this);

        if (cell.find('.generated-bomb').length > 0) {

            openAllBombs();
            isGameOver = true;

        } else {
            openCell(cell);
        }
    });


    function countBombsAround(cell) {

        let row = parseInt(cell.data('row'));
        let col = parseInt(cell.data('col'));
        let count = 0;

        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = col - 1; c <= col + 1; c++) {

                if (r === row && c === col) continue;

                if (r < 0 || c < 0 || r > maxRow || c > maxCol) continue;

                let neighbor = $(`.item[data-row=${r}][data-col=${c}]`);
                
                if (neighbor.find('.generated-bomb').length > 0) {
                    count++;
                }
            }
        }

        return count;
    }


    function openCell(cell) {
        if (cell.hasClass('active')) return;

        if (cell.find('.fa-flag').length > 0) {
            cell.find('.fa-flag').remove();
            placedFlags--;
            updateFlagsCounter();
        }

        cell.addClass('active opened-zone');

        let count = countBombsAround(cell);

        if (count > 0) {

            cell.text(count);

        } else {
            let row = parseInt(cell.data('row'));
            let col = parseInt(cell.data('col'));

            for (let r = row - 1; r <= row + 1; r++) {
                for (let c = col - 1; c <= col + 1; c++) {
                    if (r === row && c === col) continue;
                    if (r < 0 || c < 0 || r > maxRow || c > maxCol) continue;

                    let neighbor = $(`.item[data-row=${r}][data-col=${c}]`);
                    openCell(neighbor);
                }
            }
        }
    }



    let flag = $('.fa-solid.fa-flag').first().clone();
    let placedFlags = 0;

    
    cells.on('contextmenu', function(event) {
        
        flag.addClass('active');

        event.preventDefault();

        if (isGameOver) return;

        let cell = $(this);

        if ( cell.find('.fa-flag').length > 0 ) {

            cell.find('.fa-flag').remove();
            placedFlags--;
            updateFlagsCounter();
            return;
        }
        else if (!cell.hasClass('active') && placedFlags < 10 ) {

            let cloneFlag = flag.clone();

            cell.append(cloneFlag);
            placedFlags++;
        }
        if (cell.hasClass('active')) return;

        updateFlagsCounter();
    })



    function updateFlagsCounter() {
        $('.flags-count').text(placedFlags);
    }
    updateFlagsCounter();

});



