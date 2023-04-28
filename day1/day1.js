// alert("Hello, world!"); //popup
// document.write("Hello, world!");//this will rewrite the entire page
// console.log("Hello, world!");//It will just display in the console

//given thatdiv is declared as id
//document.getElementById("thatdiv").innerHTML = "Hello!";

// console.log(150);//Numbers - integer
// console.log(1.5);//numbers - float/double
// console.log(true);//boolean true
// console.log(false);//boolean false
// console.log("Hello, world");//string

//--comments
//declare in javascript
//1st approach
// var name;
// var age;
// name = "John Doe";
// age = 25;
//2nd approach
// var name = "John Doe";
// var age = 25;
// //what ever it is here
// console.log("Name "+name);
// console.log("Age "+age);

//var if;
//incorrect approach to name a variable
//var 0each;
//correct approach
//var _first;
//var first;

// var Name = "this is Name";
// var name = "this is name";

// //console.log("Name:" + Name + " name:" +name);
// //without contcatenation
// console.log("Hello Name");
// //with concatenation
// console.log("Hello " + Name);

// var computation = 12 + 5;
// console.log(computation);
// var age = 21;
// var isLegalAge = age >= 18 ? true : false;
// console.log(isLegalAge);

// //logical and
// console.log(true && true);
// //logical or
// console.log(true || false);
// //not 
// console.log(!false);


//Miscellaneous operators
//var age = 21;
//var isLegalAge = age >= 18 ? "Can drink" : "Cannot drink";
// console.log(isLegalAge);

//typeof operator
// console.log(typeof age);
// console.log(typeof isLegalAge);

//if statement
// if(age >= 18)
// {
// 	console.log("Can drink");
// }

//if-else statement
// if(age >= 18)
// {
// 	console.log("Can drink");
// }else{
// 	console.log("Cannot drink.");
// }

//var gender = "M";

//if-else if-else
// if(gender === "F" && age >= 18)
// {
// 	console.log("Can debut with 18 roses");
// }else if(gender === "M" && age >= 21)
// {
// 	console.log("Can debut with 21 shots");
// }else{
// 	console.log("Still too young!");
// }

//switch
// switch(gender)
// {
// case "M":
// 	console.log("Male");
// 	break;
// case "F":
// 	console.log("Female");
// 	break;
// default:
// 	console.log("None or N/A");
// 	break;
// }

//Part 2

//while
// var i = 0;
// while(i < 5)
// {
// 	console.log(i);
// 	i++;
// }


//do while
// do{
// console.log(i);
// i++;

// }while(i < 5);

//for
// for(var i = 0; i < 5; i++)
// {
// 	console.log(i);
// }

//for in
//using objects
// let obj = {firstName: "John", lastName: "Doe", age: 35, job: "carpenter"};

// for(var x in obj)
// {
// 	console.log(obj[x]);
// }

//continue
// for(var i = 0; i < 5; i++)
// {
// 	if(i === 3)
// 	{
// 		console.log("We've found 3!");
// 		continue;
// 	}
// 	console.log(i);
// }

//break
// for(var i = 0; i < 5; i++)
// {
// 	if(i === 2)
// 	{
// 		console.log("We've found 2!");
// 		break;
// 	}
// 	console.log(i);
// }


//using arrays
// const arrayAge = [23,35,21,20,29];
// for(var age in arrayAge)
// {
// 	console.log(arrayAge[age]);
// 	console.log(age);
// }

//Arrays
//approach 1
var array = ["Toyota", "Honda", "Mitsubishi"];
//approach 2
//var array = new Array("Toyota", "Honda", "Mitsubishi");

//Accessing array element/s
// var value = array[2];
// console.log(array);
// console.log(value);

//Modifying array element/s
// array[1] = "BMW";
// array[0] = "Pagani";
// console.log(array);

//add value using push method
// array.push("Ferrari");
// console.log(array);

//remove values using pop method
//LIFO - Last in, first out
// array.pop();
// console.log("Using pop method: " + array);

//remove values using shift method
//FIFO - First in, first out
// console.log("Array initial: "+array);
// array.shift();
// console.log("after doing shift:"+array)

//functions
// function hello()
// {
// 	console.log("Hello");
// }

// //invoke/call
// hello();

//function with parameters
// function sayHello(name)
// {
// 	console.log("Hello "+name +"!");
// }

// sayHello("John");
// sayHello("Aries");


//function with return statement with paremeter
// function isLegalAge(age)
// {
// 	return age >= 18;
// }

// console.log(isLegalAge(25));

// //function with a return statement without paremeter
// function returnTwenty()
// {
// 	return 20;
// }

// console.log(returnTwenty());