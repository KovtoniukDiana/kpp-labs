

function createNewUser() {

    let firstName = prompt('Please enter your firstname');
    let lastName = prompt('Please enter your lastname');
    
    
    let newUser =  {
        firstName: firstName,
        lastName: lastName,
    };

    newUser.getLogin = function() {
        return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
    }
    
    console.log(newUser.getLogin());
    
    return newUser;
}
 
createNewUser();


