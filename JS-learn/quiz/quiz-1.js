function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log('im ' + this.name)
    };
}

/*
    best-practice:-

    never invoke constructor-funcions without 'new' keyword

*/

// Person('Abc', 100);  // dont

var p1 = new Person('Abc', 100);