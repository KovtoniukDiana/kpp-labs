

document.addEventListener('keydown', function(event) {

    const buttons = document.querySelectorAll('.btn');


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected-btn');
      }

    for (let i = 0; i < buttons.length; i++) {

        let buttonText = buttons[i].textContent.toUpperCase();
        let keyPressed = event.key.toUpperCase();
    
       
        if (buttonText == keyPressed) {
          buttons[i].classList.add('selected-btn'); 
          break; 
        }
      }
    
})
    