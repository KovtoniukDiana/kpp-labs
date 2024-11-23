

const userAge = prompt('How old are you?');

    if (userAge < 18){
        alert('You are not allowed to visit this website');
    }
    else if (userAge >= 18 && userAge <= 22){
       const isConfirmed = confirm ('Are you sure you want to continue?');

       if (isConfirmed) {
        let userName = prompt('What is your name?');
        alert ( 'Welcome, ' + userName);
       }
       else{
        alert('You are not allowed to visit this website');
       }
    }   
    
    else if (userAge > 22) {
        let userName = prompt('What is your name?');
        alert ( 'Welcome, ' + userName);
    }
 



