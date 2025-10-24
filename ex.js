// let name = "John";
// let age = 25;
// let person={
//     name,
//     age
// }
// var persons = ["tej", "john", 5];



// console.log(persons[1]);
// // console.log("Hello from ex.js");
// // console.log(person.age);
// let func = (x) => { return persons[2] + x;}
// console.log(func(7));
// let perons = persons.filter(x => typeof x === 'string');
// console.log(perons);
// console.log(persons.concat())
// console.log(persons);


// constructor function
// function employee(inc){
//     name = "John",
//     age= 25;
//     this.salary=5000;
//     this.new_salary = function(){
//             this.salary = this.salary + inc;
//             return this.salary;
//     }
// }
// const emp = new employee(5000);
// console.log(emp.new_salary());

//factory funtion

// function employee1(inc){
//     let salary=5000;
//     return{
//         name: "John",
//         age: 25,
//         new_salary(){salary = salary + inc; return salary;}
//     };
// }
// const emp = employee1(5000)
// console.log(emp.new_salary());

//primitives are copied by thier values,  objects are copied by thier reference.
// let x = {age: 25};

// let y = x;

// function incerment(){
//     x.age++;
// }
// incerment()
// incerment()
// console.log(x,y);


//another example

// function marks(){
//     this.raju = 10;
//     this.bhanu = 80;
//     this.tej = 74;
//     return this;
// }

// delete marks().raju;
// console.log(marks());

// stopwatch practice code for the understanding of closures

// function stopwatch(){
//     let startTime, endTime, running, duration = 0;
//     this.start = function(){
//             if(running){
//                 throw new console.error("stopwatch is already running");
//             }
//             else{
//                 startTime = Date.now();
//                 running = true;
//             }
//         }
//     this.stop = function(){
//         if(!running){
//             throw new console.error("stopwatch is not running");
//         }
//         else{
//                 endTime = Date.now();
//                 running = false;
//         }
//     }
//     this.total = function(){
//         let sec = (endTime - startTime) / 1000;
//         let min = sec / 60;
//         let duration = {min,sec};
//         return duration;
//     }
// }


// practice function for currying
import React from "react";
import ReactDOM from "react-dom/client";


function power(pow){
    return function(base){
        return Math.pow(base,pow);
    }
}

console.log(power(3)(2));
console.log(power(2)(3));



const firstreactElement  = React.createElement("h1", {}, "react is working");

ReactDOM.createRoot(document.getElementById("root")).render(firstreactElement);
