"use strict";

// let task = new Task();  // Error : use before declaration

// class Task {

//     constructor() {
//         console.log('constructing Task..');
//         this.taskId = 123;
//     }

//     showId() {
//         console.log("999");
//     }

// }

// console.log(typeof Task);
// let task = new Task();
// console.log(typeof task);
// console.log(task instanceof Task);
//task.showId();


// console.log(task.showId === Task.prototype.showId);

// console.log(task.taskId);


//----------------------------------------------------



// var someClass = class Task {
//     constructor() {
//         console.log('constructing task');
//     }
// };

// new someClass();

//-----------------------------------------------------



// extends  and super

class Project {
    constructor(name) {
        console.log('constructing Project - ' + name);
    }

    getTaskCount() {
        return 50;
    }

    static getDefaultId() {
        return 0;
    }
}

class SoftwareProject extends Project {
    constructor(name) {
        super(name);
        console.log('constructing SoftwareProject - ' + name);
    }
    getTaskCount() {
        return super.getTaskCount() + 500;
    }
}

// let swProj = new SoftwareProject();
// let swProj = new SoftwareProject('Abc');
// console.log(swProj.getTaskCount());


// console.log(Project.getDefaultId());

// var p = new Project();
// console.log(p.getDefaultId());  // not possible


// Project.staVar = 123;
// Project.staMethod = function() {
//     console.log('static method added outside class');
// }

// SoftwareProject.staMethod();