

function createNewUser() {

    let firstName = prompt('Please enter your firstname');
    let lastName = prompt('Please enter your lastname');
    let birthDate = prompt('Please enter your birthday (dd.mm.yyyy)');
    
    
    let newUser =  {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
    };

    newUser.getLogin = function() {
        return firstName.charAt(0).toLowerCase() + lastName.toLowerCase();
    }

    newUser.getAge = function() {
        let currentDate = new Date();
        let dd = currentDate.getDate();
        let mm = currentDate.getMonth() + 1;
        let yy = currentDate.getFullYear();

        const [day, month, year] = birthDate.split(".");
    
        let age = yy - year; 
    
        if (mm < month || (mm === month && dd < day)) {
        age--; 
        }
    
        return age;

    }

    newUser.getPassword = function() {
        return firstName.charAt(0).toLowerCase() + lastName.toLowerCase() + birthDate.substring(6, 11);
    }
    

    console.log("Логін: " + newUser.getLogin());
    console.log("Вік користувача: " + newUser.getAge());
    console.log("Пароль: " + newUser.getPassword());
    
    return newUser;
}
 
createNewUser();



