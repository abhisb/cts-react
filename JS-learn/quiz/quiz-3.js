function Person(name, age) {
    this.name = name;
    this.age = age;
    var self = this;
    setInterval(function() {
        self.age++;
        console.log(self.name + "-->" + self.age); // Ria --> ..
    }, 1000);

}


var p1 = new Person('Ria', 0);