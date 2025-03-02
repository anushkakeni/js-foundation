function changeText(){
    document.getElementById("myHeading").innerHTML="You clicked me";
}

var name = "Anushka";
var age = 23;
console.log(name, age);

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

console.log("String + int= ", "5" + 9 );
console.log("String - int= ", "5" - 0 );
console.log("String * int= ", "5" * 6 );
console.log("String / int= ", "5" / 8 );
console.log("String / null= ", "5" / null );


//Comparison Operator
console.log("5 == '5' :", 5 == '5'); // Equal to
console.log("5 === '5' :", 5 === '5'); // Strict Equal to
console.log("5 != '5' :", 5 != '5'); //  Not Equal to
console.log("5 !== '5' :", 5 !== '5'); // Strict not Equal to
console.log("7 > '5' :", 7 > '5'); // Greater than
console.log("7 < '5' :", 7 < '5'); // Less than


//Logical Operator
console.log("true && false", true && false)// Logical AND operator
console.log("1 && 2", 1 && 2, "both operands are true then display second operand")// Logical AND operator
console.log("true || false", true || false)// LogicalOR operator
console.log("1 || 2", 1 || 2,"display first true operand")// LogicalOR operator
console.log("!true", !true )//  Logical NOT operator
console.log("!1", !1, "int is considered truthy value")//  Logical NOT operator

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
        // this- In an object method, this refers to the object,, is an undefined
        return this.brand ;  // here this is car{}
    }
};
console.log(car.getinfo());

//or  

var car = {};

car.brand="Tata";
car.model = "Altroz";
car.year = 2020;
console.log(car.brand + car.model);


//Arrays
var colors = ["Red", "Green","Blue", "Yellow"];
console.log("Array: ",colors[2]);



//Functions

function greet(name)   //function Declaration
{
    console.log("Hello" + name);
}
greet("Anushka");    //function Calling


var sayGoodbye = function(name)  //function Expression- assigning function to a variable
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


//function expression- funcion is assigned to a variable
 // syntax- 
 //          var variableName = function() { code to be executed}
//function has no name, called anonymous function
 const functionSum = function (a,b) {return a * b};
 console.log("x(1,2)=", functionSum(1,2));
  console.log("x=",(functionSum));

   let  z= functionSum(4, 3); 
   console.log(z);


//FUNCTION()- function constructor
// Functions can also be defined with a built-in JavaScript function constructor called Function().
// syantax- var variableName = new Function("arg1", "arg2", "function body");

const myFunction = new Function("a", "b", "return a * b");

let c = myFunction(4, 3);


//function hoisting
//function hoisting- a default behavior where variable and function declaration are moved to top of their respective scope during compilation.
// Declarations are hoisted, not initializations.
// Allows calling functions before their declarations.
// All variable and function declarations are processed before any code execution.
// Undeclared variables are implicitly created as global variables when assigned a value.

myFunctionProduct(3);
function myFunctionProduct(y)
{
    console.log("y=",y);      
    console.log("y*y=",y*y);
    return y*y;    //expresions not hoisted
}


//self-invoking functions- function that runs as soon as it is defined
// execute automatically  if  expression followed by ()

(function () {
    let abc = "Hello!!";  // I will invoke myself
    console.log(abc);
  })();
 

//function as a value
function myFunctionAsValue(a, b) {
    return a * b;
  }
  let s = myFunctionAsValue(4, 3) * 2;
  console.log("s=",s);


//Arrow function
//short syntax for wrting functio expression

let b = (x, y) => { return x * y };
console.log("b=",b(4, 3));


//arguments length
function myFunctionArgumentLength(a, b) {
    console.log(arguments.length);
  }
  myFunctionArgumentLength(4, 3, 2, 1, 5, 6, 7, 8, 9, 10);  //output - 10

  





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
        console.log("Nothig is Selected");

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

//now()    Return the number of milliseconds since 1970/01/01:
var n = Date.now();

//1. creating Dates   (we have to create new Date object using "Date" constructor)
     var now = new Date();
     console.log(now); //gives current date and time

     //specific date and time
     //syntax - new Date(year, month(start from 0), day, hour, minute, seconds )
     var specificDate = new Date(2024, 11, 28, 11, 25, 45);
     console.log(specificDate);


     // date string
     var dateString = new Date("October 1, 2024 14:30:26");
     console.log(dateString);

     var dateString1 = new Date("1, October, 2024, 14:30:26");
     console.log(dateString1);


//2. Date methods
//getFullYear(),  getMonth(), getDate(), getDay(),  getHours(), getMinutes(), setDate(), setMonth()
//get syntax- now.getmethod()
 var year = now.getFullYear(); 
console.log(year);

var month = now.getMonth(); 
console.log(month);

var date = now.getDate(); 
console.log(date);

var day = now.getDay(); 
console.log(day);

var hours = now.getHours(); 
console.log(hours);

var  minutes= now.getMinutes(); 
console.log(minutes);

//set syntax- now.setMethod()
now.setDate(14);
console.log(now);

now.setMonth(4); 
console.log(now);


//3. Formatting Dates  -  convert date or time to String
// toDateString(), toTimeString(), toLocaleString(),  toLocaleDateString(), toLocaleTimeString(), toISOString() 

//toDateString()
console.log(now.toDateString());

//toTimeString()
console.log(now.toTimeString());

//toLocaleString()  datetime to string using locale convection
console.log(now.toLocaleString());

//toLocaleDateString()
console.log(now.toLocaleDateString());

//toLocaleTimeString()
console.log(now.toLocaleTimeString());

//toISOString()   iso standards to string
console.log(now.toISOString());


//4. date calculation
var oneDay = 24 * 60 * 60 * 1000  //one day in millisecods

var tomorrow = new Date(now.getTime() + oneDay);  //date and time for next day
console.log(tomorrow);



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
var replace = arr.splice(2,1,5);     //syantax- array.splice(indextoReplace, no-of.items to replace , new-replacing-items )
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


//8.forEach()       //list each and every elements in an array

//syntax array.forEach(function(currentElement, index, array))
//item :-displays items of array
// index:- display index of items
//array:- display whole array

var arr = [1,2,3,4,5,6];
arr.forEach(function(item, index, array)   //  OR   arr.forEach(myFunction);
{                           //         function myFunction(item)
    console.log(index +":"+ item + "...." + array);      //          { console.log(item);}
});       



//9.map()    The map() method creates a new array with the results of calling a function for every array element.
//  map() does not execute the function for array elements without values.
//Note: this method does not change the original array.

//syntax- array.map(function(currentValue, index, arr), thisvalue)
//thisvalue- optional
var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunctionMapArray)

function myFunctionMapArray(num) {
  return num * 10;
}
console.log(newarray);


//10.filter()
//creates an array filled with all array elements that pass a test (provided as a function).
//syntax- array.filter(function(currentValue, index, arr), thisValue)

var numbers = [65, 44, 12, 4];
var newarray = numbers.filter(myFunctionFilter)

function myFunctionFilter(num) 
{
  return num > 20;
}
console.log(newarray);


//11.indexOf()      //returns index of an item/element , -1 if not found
var arr = [1,2,3,4,5,6];
var index = arr.indexOf(2);
var index1 = arr.indexOf(7);
console.log(arr); 
console.log("indexOf 2 :",index);
console.log("indexOf 7 :",index1);

//12.reduce()   
//The reduce() method reduces the array to a single value.
//The reduce() method executes a provided function for each value of the array (from left-to-right).
//syntax:- array.reduce(function(total, currentValue/num, currentIndex, array), initalindex)

var numbers = [65, 44, 12, 4];
var sum = numbers.reduce(myFunctionReduce)

function myFunctionReduce(total, num) 
{
  return total + num;
}
console.log(sum);


//13.every()
//14.keys()
//15.enteries()

//append 

//delete element from array
//syntax- delete arr[3];

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
    console.log("Global1 scope : ",name);   //Accessible
}
globalName(); //function calling
console.log("Global2 scope : ",name);    //accessible




//2.Local Scope        
 // var declared in function,  only access in function
 // each new function with same content are new scope
function localScope()
{
    var localVar = "I am local";  
    console.log("local scope:" + localVar);  //accessible
}
localScope(); //function calling
//console.log(surname); // error  



//3.Block Scope
// let and const declared bariables are block scope, i.e only accessible within block/curly braces
// var declared is accessible

if (true)
{
    let letVariable=" block scoped";
    console.log(letVariable);   //accessible
}
//console.log(letVariable);     // error



//4.Lexical Scope
//defines the accessibility of variables and functions depending on their location in the source code.

//nested scope - function inside another function
// function can access  variable from parent scope, defined where function is defined not where function is called.
function outerFunction(){
    var outerVar = "I am outer function";

    function innerFunction(){
        console.log(outerVar);   //accessible
    }

    innerFunction();   // function2 calling
}
outerFunction();   //function calling


//5.Closures
// is a function that has access to its own scope, the outer variable, global variables, even after the outer function has finshed executing
//This enables functions to “remember” their variable from parent scope.
// Closures provide a way to encapsulate private data and create public methods to interact with it.

function outer() {
    let outerVar = "I'm in the outer scope!";

    function inner() {
        console.log(outerVar);
    }
    return inner; //returning inner function in outer()
}
const closure = outer(); //assigning function to closure
closure();




//JSON(Javascript Object Notation)

var obj = {name: "Alice", age: 25};

var jsonString = JSON.stringify(obj);
console.log(jsonString);

var parseObj = JSON.parse(jsonString);
console.log(parseObj);




//PROTOTYPES
//in javascript , objects inherit properties from other objects, this managed by prototypes

// syntax- object.prototype.name = value
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




//ADVANCED FUNCTIONS

//JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

//1. Higher-Order Functions
//functions that takes other functions as arguments or return functions as thier result

function greet(name)
{
    return "Hello, " + name;
}

function logMessage(fn, name)
{
    console.log(fn(name));
}

logMessage(greet, "Alice");



//2.Callback Functions
//A callback is a function passed as an argument to another function
//This technique allows a function to call another function

// function mainFunction(callback)  //mainfunction will take "callback" as an argument
// {
//     console.log("Performing operation...");
     
//     setTimeout(function() {
//       callback("Operation complete"); // Use setTimeout to simulate an asynchronous operation
//     }, 1000); // 1000 is 1 second
//   }
  
//   // Define the callback function
//   function callbackFunction(result) {
//     console.log("Result: " + result);
//   }
  
//   // Call the main function with the callback function
//   mainFunction(callbackFunction);




//3.Asynchronous Functions
//Functions running in parallel with other functions are called asynchronous
//example is JavaScript setTimeout()

setTimeout(myFunctionAsync, 3000);   //myFunction ia callback function passed as argument, do not use "()"

function myFunctionAsync() {
  console.log( "I love You !!");
}

//or

setInterval(myFunctionAsyncronous, 1000);   //step1- mainfunction(callback, millisecond);

function myFunctionAsyncronous()             //step2  - define  callback function
{
    let d= new Date();

    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}





//WORKING WITH STRINGS

var str = "Hello World!";
console.log(str);
//length
console.log(str.length);

//charAt(stringIndex)  // return char at speciied index
console.log(str.charAt(4));




//string character/ selected string extraction use substring() or slice().

//substring(index, n)    //n =n-1 index element
console.log(str.substring(-5,1)); // if n < index, no. will swap. eg- (5,2)=> (2,5)
                                //if index or n is -ve, they are treated  as 0.
                                //if n= 0, 1st rule to follow
                                
var str = "Hello World!";
//slice(index,n)      
console.log(str.slice(2,6))   // if n < index, return empty string.
                              // if index = =n, return empty string
                            // if n= 0 , return empty string
                            // index is -ve, return empty string
                           // if (- index), starts from end of string
                           //if n is -ve, starts from end

//substr(index, length)         //extract the character
console.log(str.substr(-1,6));    //if index -ve, counts from end print s in left - right



var str = "  Javascript  ";

//toUpperCase()
console.log(str.toUpperCase()); 

//toLowerCase()
console.log(str.toLowerCase()); 

//trim()                        //remove whitespace from both side of string
console.log(str.trim());        // trimEnd(), trimStart(), 


var str = "Good Morning";

//split()                       //convert string to array
console.log(str.split(" "));    // no space- single character array
                                // 1 space- words/string array
                                // more space- array length reduces


//replace(searchValue, newValue)
var str = "javascript  javascript  house";

console.log(str.replace("javascript", "js"));   //change single string/character

console.log(str.replace(/javascript| house/gi, "js"));         // change every string/characters





//WORKING WITH NUMBERS

//1. Math Object

//Math.abs()        //returns absolute value of number
console.log(Math.abs(3.5)); 
console.log(Math.abs(-3.5)); 
console.log(Math.abs(null)); 
console.log(Math.abs("hello")); 
console.log(Math.abs(3-7)); 

//Math.floor()
console.log(Math.floor(3.5)); 

//Math.ceil()
console.log(Math.ceil(1.4));

//Math.round()
console.log(Math.round(2.5));

//Math.sqrt()
console.log(Math.sqrt(9));

//Math.PI
console.log(Math.PI);

//Mth.pow(num, power)
console.log(Math.pow(4, 3));

//Math.max()
console.log(Math.max(0, 150, 30, 20, 38));

//Math.min()
console.log(Math.min(-5, 10));



//2.Number Method

var num = 2.88686;

//toFixed()
console.log(num.toFixed(4));

//toPrecsison()
console.log(num.toPrecision(4));      //print given length, dot is included

//parseInt()     //parse string and return first integer
console.log(parseInt("10.5"));

//parseFloat      //parse string and return first float
console.log(parseFloat("10.99"));

//toString()        // convert number to string
console.log(num.toString());





//REGULAR EXPRESSION
    // used for searching and replacing matching pattern
    // methods- test(),  exec(), match(), search()

    var text = " Good Morning, How are you!"
 //1.simple regular expression
    //syntax- /pattern/
    var pattern = /or/;

    console.log(pattern.test(text));        //test()-true/ false
    console.log(pattern.exec(text));        //exec()-pattern location

    console.log(text.match(pattern));       //match()
    console.log(text.search(pattern));      //search()


 //2.modifier- g(global), i(case-insensitive), d(checks start & end pattern), m(multiline)
    //synatx- /pattern/modifier
    //use match() or search()

     var pattern = /o/g;   //case-sentive
     console.log(text.match(pattern)); 

 
     var pattern = /oD/i;   
     console.log(text.match(pattern)); 

    
     var pattern = /o/d;   //case-sensitive
     console.log(text.match(pattern)); 


     var pattern = /o/g;   
     console.log(text.match(pattern)); 


     var pattern = /o/g;   
     console.log(text.match(pattern)); 





//DOM MANIPULATION

//1.Selecting Elements
//getElementById(),  getElementsByClass(),  querySelector(), querySelectorAll()

    // example:-
    // var element = document.getElementById("header");
    // var items = document.getElementsByClassName(item);

    // var firstItem = document.querySelector(".item");// by classname, class="item" 
                //  or document.querySelector("p");  // by tag name

    // var allItems = document.querySelectorAll(".item"); 
                     //  or document.querySelector("p");

    // difference is .querySelectorAll selects every element in document but .querySelector selects first element only


//2. Changing Content
//innerHTML(),  innerText(),  textContent()

    //example:-
    // var element = document.getElementById("header");
    // element.innerHTML = "new Header";

    // 


//3. Modifying Attributes
// setAttribute(),  getAttribute(),  removeAttribute()

//setAttribute()
//syntax-  element.setAttribute(attributename, attributevalue)
//existing attribute
//eg element.style.backgroundColor = "red"; 


//4. Adding/Removing Elements 
//createElement(), appendChild(),  removeChild(),  

//createElement() 
//



//5.Event Handling - used to handle events such as clicks, changes and more
//addEventListener()
//syntax- element.addEventListener(event, function, useCapture);

// eg- document.getElementById("button").addEventListener("click", function()
//    {
//       console.log("Button clicked");
//    });





//BROWSER API

// 1. localStorage  and  sessionStorage

//  localStorage.setItem("key", "value");
//  console.log(localStorage.getItem("key"));
//  sessionStorage.setItem("sessionKey", "sessionValue");


//2.Cookies
//cookies are small  pieces of data.
//stored insmall text files 
// stored in name-value pair

//syntax create cookie- document.cookie="username=name; expires=Thu, 28 Dec 2024  12:00:00 UTC; path=/";
//name is mandotary
//expire is an optional
//path is an optional, tells browser what path the cookie belongs to , bydefault to current page 


// read cookie- 
//eg - let x = document.cookie


//change/ update cookie
  //same sytax as create
  //document.cookie = "username=name; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";


//Deleta cookie
   // same syntax as create
   // document.cookie = "username=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
   //no name,just expire


//3.GeoLocation API
//allows to access the user location
//getCurrentPosition() is used

//synatx- navigator.geolocation.getCurrentPosition(position)

//syntax to show location-  position.coords.latitude/longitude

/* <script>
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 
}
</script> */
