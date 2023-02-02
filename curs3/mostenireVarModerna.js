class ParentType {
    constructor(a) {
        this.a = a
    }
    doParent () {
        console.log(`doing parent stuff with a ` + this.a)
    }
}

class ChildType extends ParentType {
    //prototipul ob de tip child este un ob de tip parent
    constructor (a, b) {
        super(a)
        this.b = b
    }
    doChild() {
        console.log(`doing child stuff with a and b ` + this.a + ` ` + this.b)
    }
}

const c0 = new ChildType(1, 2)
c0.doChild()
c0.doParent()

//modifcarea comportamentului unui obiect la run time
ChildType.prototype.doNewStuff = function() {
    console.log('doing new stuff')
}
c0.doNewStuff()

//functiile sunt tot obiecte
//functie.length = nr de parametrii
console.log(c0.doParent.length)

let f = c0.doParent
//eroare pt ca functia inceara sa foloseasca this
//f()

//CALL -> asociere temporara
//primul parametru este un this
f.call(c0)

//BIND -> conectare permanenta
let f1 = f.bind(c0)
f1()

let f2 = c0.doChild.bind(c0)
f2()