

$(document).ready(function(){

    let openButton = $(".open-modal");
    let closeButton = $(".close-icon");
    let modal = $(".modal");
    let numberInput = $("#numberInput");
    let factorialOutput = $("#factorialOutput");

    openButton.click(function(){
        modal.removeClass("closed");
    });

    closeButton.click(function(){
        modal.addClass("closed")
    });


    numberInput.change(function() {
    let number = parseInt(numberInput.val());

    if (!isNaN(number) && number >= 0) {
        factorialOutput.val(factorial(number));
    } else {
        factorialOutput.val(""); 
    }
});

    function factorial(n) {
        if (n == 0 || n == 1) return 1;
        
        return n * factorial(n - 1);
    }
});