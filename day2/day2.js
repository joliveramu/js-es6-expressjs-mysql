//Using let
// let name = "John Doe";
// //cannot be redeclared
// let name = "Michael Jordan";
// console.log(name);

//Using const
// const PI = 3.14;
// console.log(PI);
// PI = 4.50; 
// console.log(PI);


//Arrow functions
// function x(n)
// {
// 	return n *n ;
// }
//let x = (n) => { return n * n };
//console.log(x(5));

// let y = () => {console.log("hello")};
// y();


//Spread operator
// let firstScore = [10, 9, 10];
// // let secondScore = [10, 20, 30] + firstScore;
// let secondScore = [10, 10, ...firstScore];
// let thirdScore  = [...firstScore, ...secondScore];
// console.log(thirdScore);

//Template literals
// let sentence = `We can do much sentence without worrying.`;
// console.log(sentence);
// let compute = `Square of 5 is ${5 * 5}`;
// console.log(compute);
// console.log(`${sentence}

// ${compute}`);

//for of loop
// let grades = [95,90,88];
// let average = 0;
// for(const item of grades)
// {
// average += item;
// }
// console.log(average / 3);

//Destructuring objects/arrays

// let person = {name: "James", age:25};
// let {name, age} = person;
// console.log(name);
// console.log(age);

// let arrayOfNos = [1203,45,123333,4,5];
// let [one, two, three] = arrayOfNos;
// console.log(one, two, three);

//forEach loop
// let arr = ["Smart", "Globe", "Dito"];
// arr.forEach(function (data){
// 	console.log(data);
// });


//filter()
// let age = [18, 19, 17];
// let greaterThan18 = age.filter(
// 	(data) =>{ 
// 		return data >= 18 
// 	});
// console.log(age);
// console.log(greaterThan18);


//startsWith
// let message = "Hi, Hello!";
// console.log(message.startsWith("Hi, "));//returns true

//includes
// let message = "Hi, Hello!";
// console.log(message.includes("H"));//returns true

//endsWith
// let message = "Hi, Hello!";
// console.log(message.endsWith("!"));//returns true


//Class
// class Person{
// 	constructor(name, age)
// 	{
// 		this.name = name;
// 		this.age = age;
// 	}

// 	display()
// 	{
// 		console.log(this.name, this.age);	
// 	}

// }

// let x = new Person("John Wick", 39);
// x.display();


//default parameter/s
// function add(x, y=1)
// {
// return x + y;
// }
// console.log(add(5));//returns 6
// console.log(add(5,10));//returns 15

//run npm install express (given that you have nodejs installed on your local machine/unit)
//var app = require('express');

