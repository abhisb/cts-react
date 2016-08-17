function Person(name, age) {
    this.name = name;
    this.age = age;
    var self = this;

    setInterval(function() { // async
        self.age++;
        console.log(self.name + "-->" + self.age); // Ria --> ..
    }, 5000);

}


var p1 = new Person('Ria', 0);