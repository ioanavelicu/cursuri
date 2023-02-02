let o = {
    name: "ioana",
    age: 23
}

//o functie isi ia this din locul in care a fost invocata
o.printMe = function () {
    //SOLUTIE 1
    //const this = this
    const f = function() {
        console.log(this.name + ' ' + this.age)
    }
    //in interiorul lui f nu stim cine e this -> undefined
    f()
}

o.printMe()

//SOLUTIA 2
o.printMe2 = function() {
    const f = function() {
        console.log(this.name + ' ' + this.age)
    }.bind(this)
    f()
}
o.printMe2()

//Arrow functions isi iau this din locul unde au fost DECLARATE
o.printMe3 = function() {
    const f = () => {
        console.log(this.name + ' ' + this.age)
    }
    f()
}
o.printMe3()