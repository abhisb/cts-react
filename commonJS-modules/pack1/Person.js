/**
 * http://usejsdoc.org/
 */



//function Person(name,age){
//	this.name=name;
//	this.age=age;
//}
//
//Person.prototype.sayName=function(){
//	console.log('im '+this.name);
//}


class Person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	sayName(){
		console.log('im '+this.name);
	}
}

//var person=new Person('Nag',32);

module.exports=Person;
