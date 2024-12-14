function changeText(){
    document.getElementById("myHeading").innerHTML="You clicked me";
}

var name = "Anushka";
var age = 23;
console.log(name, age);


var greeting="hello";
console.log(greeting);

var x = null;
console.log("x is : ", x);

//OPERATORS

//Arithmetic
var sum = 5 + 3;
console.log("5 + 3  : ", sum);

var difference = 3 - 5;;
console.log("3 - 5  : ", difference);

var product = 3 * 5;
console.log("3 * 5  : ", product);

var division = 3 / 5;
console.log("3 / 5  : ", division);

var modulus = 5 % 3;
console.log("3 % 5  : ", modulus);

var increment = 3;
increment++
console.log("3++  : ", increment);

var decrement = 3;
decrement--
console.log("3--  : ", decrement);


//Comparison Operator
console.log("5 == '5' :", 5 == '5'); // Equal to
console.log("5 === '5' :", 5 === '5'); // Strict Equal to
console.log("5 != '5' :", 5 != '5'); //  Not Equal to
console.log("5 !== '5' :", 5 !== '5'); // Strict not Equal to
console.log("7 > '5' :", 7 > '5'); // Greater than
console.log("7 < '5' :", 7 < '5'); // Less than


//Logical Operator
console.log("true && false", true && false)// Logical AND operator
console.log("true || false", true || false)// LogicalOR operator
console.log("!true", !true )//  Logical NOT operator


//Assignment Operator
var x = 5 ;
console.log("x : ", x);

var x = 3;
x += 3 // x = x+3
console.log("x  : ", x);

var x = 3;
x -= 2 // x = x-2
console.log("x  : ", x);

var x = 3;
x *= 3 // x = x*3
console.log("x  : ", x);

var x = 3;
x /= 3 // x = x/3
console.log("x  : ", x);



//Objects

var car = {
    brand : "Toyota",
    model : "Corolla",
    year : 2020,

    getinfo: function()
    {
        return this.brand ; // this 
    }
};
console.log(car.getinfo());



//Arrays
var colors = ["Red", "Green","Blue", "Yellow"];
console.log(colors[2]);



//Functions

function greet(name)   //function Declaration
{
    console.log("Hello" + name);
}
greet("Anushka");    //function Calling


var sayGoodbye = function(name)  //function Expression
{
    console.log("Goodbye" + name);
};
sayGoodbye("Anushka");


function add(a,b)    //a,b Parameters
{
    return a + b;      // return, returns a value from function()
                        // no return, function will give undefined
} 

var sum = add(4,5);
console.log(sum);




//CONTROL FLOW


// Conditional Statements
 
//1. if statement
var age = 20;
if (age > 18)            
{
    console.log("Adult");
}

//2. if-else statement
var age = 16;
if (age > 18)             
{
    console.log("Adult");
}
else
{
    console.log("Minor");
}

//3. if...else if...else statement
var age = 11;
if (age > 18)          
{
    console.log("Adult");
}
else if(age > 11)
{
    console.log("Teenagers");
}

else{
    console.log("Kid");
}

// 4.Switch Case 
var fruit = 'apple';
switch (fruit){                                
    case "apple":
        console.log("Apple is selected");
        break;
        
    case "mango":
        console.log("Mango is selected");
         break;

     default:
        consolelog("Nothig is Selected");

}



//Looping Statement

//1. for loop
for (var i=0; i< 5; i++)
{
    console.log(i);
}


//2. while loop
var i = 0
while ( i < 10)
    {
        console.log(i);
        i++;
    }
 

//3. do...while loop
var i = 0
do
    {
        console.log(i);
        i++;
    }while ( i < 5)





//DATES and TIMES

// ERROR HANDLING( try...catch)
try{                // error occurs in try block
    var x = y;    
} catch (error)
{
    console.log("an error occured:"+ error.message);
}
 


//ARRAYS mETHODS



//1.push()
var arr=[1,2,3];
arr.push(4);
console.log(arr);

//2. pop()
var arr=[1,2,3];
arr.pop();
console.log(arr);

//3.shift()
var arr=[1,2,3];
arr.shift();
console.log(arr);

//4.unshift()
var arr=[1,2,3];
arr.unshift(4);
console.log(arr);

//5.slice()
var arr=[3,4,9,1,7,8];
var sliced = arr.slice(2,5);      //output from index  m to n-1
console.log(sliced);



//6.splice()                        //add or remove or replace array item

//replacing 9 with 5
var arr=[3,4,9,1,7,8];
var replace = arr.splice(2,1,5);     //syantax- array.splice(indexToStart_with, no-of.items to replace , new-replacing-items )
console.log(replace);           // shows removed/replaced item
console.log(arr);

//adding new item c
var arr = ["a","b","d","e","f"];
var add = arr.splice(2,0, "c");      // syntax array.splice(indexWhereToAdd, 0 , "neww-item")
console.log(arr);

//removing  item
var arr = ["a","b","c", "d","e","f"];
var remove = arr.splice(2,1);      // syntax array.splice(indexWhereStart, no-of items to remove/replace )
console.log(arr);
console.log(remove);



//7.concat()
var arr1 = [2,3];
var arr2 = [6,7];

var combined1 = arr1.concat(arr2);
console.log(combined1);

var combined2 = arr2.concat(arr1);
console.log(combined2);


//8.forEach()       //calls a function for each and every elements in an array

//syntax array.forEach(function(currentElement, index, array))
//currentElement :-
// index:-
//array:-

var arr = [1,2,3,4,5,6];
arr.forEach(function(item)   //  OR   arr.forEach(myFunction);
{                           //         function myFunction(item)
    console.log(item);      //          { console.log(item);}
});       



//9.map()
//10.filter()
//11.indexOf()      //returns index of an item/element , -1 if not found
var arr = [1,2,3,4,5,6];
var index = arr.indexOf(2);
var index1 = arr.indexOf(7);
console.log(arr); 
console.log("indexOf 2 :",index);
console.log("indexOf 7 :",index1);

//12.reduce()   //executes a reducer function on each element to produce single accumulated value
//syntax:- array.reduce(function(total, currentValue/num, currentIndex, array), initalindex)


//13.every()
//14.keys()
//15.enteries()


//STRICT MODE
//var x =3;  //valid
// y= 3;  // error: y is not declared


//SCOPE and CLOSURE
//scope- accessibility of variables, function , objects in different parts
//closure- 


//1.Global Scope       // var declared outside function,can access anywhere
var name = "Anushka";

function globalName()
{
    console.log("Global scope : ",name);   //Accessible
}
globalName();
console.log("Global scope : ",name);    //accessible




//2.Local Scope         // var declared in function,  only access in function
function localScope()
{
    var localVar = "I am local";  
    console.log(localVar);  //accessible
}
localScope();
//console.log(surname); // error




//3.Block Scope
// let and const declared bariables are block scope, i.e only accessible within block/curly braces

if (true)
{
    let letVariable=" block scoped";
    console.log(letVariable);   //accessible
}
//console.log(letVariable);     // error



//4.Lexical Scope
//function can acces  variable from parent scope, defined where function is defined not where function is called.
function outerFunction(){
    var outerVar = "I am outer function";

    function innerFunction(){
        console.log(outerVar);   //accessible
    }

    innerFunction();
}
outerFunction();


//5.Closures





//JSON(Javascript Object Notation)

var obj = {name: "Alice", age: 25};

var jsonString = JSON.stringify(obj);
console.log(jsonString);

var parseObj = JSON.parse(jsonString);
console.log(parseObj);




//PROTOTYPES
//in javascript , objects inherit properties from other objects, this managed by prototypes

function Person (name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function()
{
    return "Hello, " + this.name;
};

var personal = new Person("John", 30);
console.log(personal.greet());
