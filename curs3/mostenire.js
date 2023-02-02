function ParentType(a) {
    this.a = a
    this.doParent = function() {
        console.log(`doing parent stuff with a ${this.a}`)
    }
}

function ChildType(b) {
    this.b = b
    this.doChild = function() {
        console.log(`doing child stuff with b ${this.a}`)
    }
}

//fiecare copil are pe post de prototip un ib de tip parent
ChildType.prototype = new ParentType(3)
let c1 = new ChildType(0)
c1.doChild(1)
c1.doParent(2)