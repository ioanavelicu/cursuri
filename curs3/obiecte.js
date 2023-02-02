//js este limbaj prototipic
//toate obiectele de acelasi tip au o referinta comuna
const obiect = {
    name: "jim",
    age: 23,
    //functie = comportament
    printMe: function () {
        console.log(`${this.name} is ${this.age} old`)
    }
}

obiect.printMe()

//constructor
//function invocation pattern
function Person(name, age) {
    this.name = name
    this.age = age
    this.printMe = function() {
        console.log(`${this.name} is ${this.age} old`)
    }
}

let p0 = new Person('Jim', 23)
p0.printMe()

//prototipul unui obiect -> gandita sa fie readonly
console.log(p0.__proto__)