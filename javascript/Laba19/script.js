
function deepClone(obj) {

    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    
    let clone;

    if (Array.isArray(obj)) {
        clone = [];
    } else {
        clone = {};
    }

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}


const original = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "knitting"],
    favoriteFood: {
        sweet: "ice-cream",
        salt: "pasta"
    }
};

const copy = deepClone(original);

copy.name = "Lolita";
copy.favoriteFood.sweet = "chocolate";
copy.hobbies = "swimming, running";

console.log(original);
console.log(copy);