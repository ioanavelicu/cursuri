class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    printMe() {
        console.log(`${this.name} is ${this.age} old`)
    }
}

let p0 = new Person('Jim', 23)
p0.printMe()
console.log(p0)