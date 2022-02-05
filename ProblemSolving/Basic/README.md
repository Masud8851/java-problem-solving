## Basic JS Plan

<br>

<hr>

## Day 1 || Date : 2/2/22

- What is JS, Why JS, When JS?
- Where and how to use JS?
- Chrome Developer Console
- Variable and Data Type
- JS Reserved words
- Concatenation
- typeof
- Data change of a variable
- Comment

<b>In JavaScript you cannot use these reserved words as variables, labels, or function names:</b>

```
abstract ,	        arguments,	        await*,	                boolean,
break,	                byte,   	        case,	                catch,
char,   	        class*, 	        const,	                continue,
debugger,	        default,   	        delete,	                do,
double, 	        else,   	        enum*,	                eval,
export*,                extends*,	        false,	                final,
finally,	        float,  	        for,	                function,
goto,   	        if,     	        implements, 	        import*,
in,             	instanceof, 	        int,        	        interface,
let*,           	long,       	        native,     	        new,
null,           	package,       	        private,    	        protected,
public,         	return,     	        short,      	        static,
super*,         	switch,     	        synchronized,     	this,
throw,          	throws,     	        transient,  	        true,
try,            	typeof,     	        var,        	        void,
volatile,       	while,      	        with,       	        yield
```

<div >
    <b>2 types of Data</b>
    <ol>
    <li>Primitive Data Type</li>
    <li>Non-primitive Data Type</li>
    </ol>
</div>

<b> In Primitive Data Type, value directly stored. </b>

<ol>
    <li>Number</li>
    <li>String</li>
    <li>Boolean</li>
    <li>undefined</li>
    <li>null</li>
</ol>

```
    var number = 10;
    var string = 'Masud';
    var boolean = true;
    var undefined;
    var something = null;
```

<b> `Note:` boolean value must be `true/false` but not to be `TRUE/FALSE` or `True/False` </b>

<b> But in non-primitive Data Type, value not directly stored. It save the reference of value. So these types of data called Object. They have properties. </b>

<ol>
    <li>Array</li>
    <li>Object</li>
    <li>Function</li>
</ol>

<b> Comment </b>

<ol>
<li> Single Line Comment  </li>
<li> Multi-Line Comment </li>
</ol>

<hr>

## Day 2 || Date : 3/2/22

- Operator
- Conditional Statement
- Loop
- Array
- Object
- Function

<b>There are different types of opeartor. Such as -</b>

<ol>
    <li>Arithmetic</li>
    <li>Comparison</li>
    <li>Logical/Relational</li>
    <li>Assignment</li>
    <li>Conditional/Ternary</li>
</ol>

<b> Arithmetic operator</b>

```
+ use to addition
- use to subtraction
* use to multiplication
/ use to devide
++ increment
-- decrement
%  modulus
```

<b> Cpmparison operator which return `true` or `false`.</b>

```
== equal equal
!= not equal
> greater than
< less than
>= grater than or equal
<= less than or equal
```

<b> Although the `most used` comparison operator </b>

```
===
!==
```

<b>Both they check assign value and data types of them </b>

<b> Logical operator `three` types. </b>

```
&& and
|| or
! not
```

<b> Assignment operator</b>

```
=
+=
-=
*=
/=
%=
```

<b> Conditional/Ternary operator</b>

```
? :
```

<b> Conditional Statement</b>

```
if
if...else
if...else if
switch
```

<b> Loop</b>

```
for
do...while
while
break
continue
```

<h5>Accessing Properties</h5>

<p>JavaScript provides two notations for accessing object properties. The first, and most common, is known as dot notation. Under dot notation, a property is accessed by giving the host object’s name, followed by a period (or dot), followed by the property name.The following example shows how dot notation is used to read from and write to a property. If `object.foo` initially held the value one, then its value would become two after executing this statement. Note that if `object.foo` did not already have a value, then it would be `undefined`. </p>

```
object.foo = object.foo + 1;
```

<p>The alternate syntax for accessing object properties is known as bracket notation. In bracket notation, the object name is followed by a set of square brackets. Inside the square brackets, the property name is specified as a string. The previous example of dot notation has been rewritten below to use bracket notation. While the code may look different, it is functionally equivalent to the previous example.</p>

```
object["foo"] = object["foo"] + 1;
```

<p>Bracket notation is more expressive than dot notation because it allows a variable to specify all or part of the property name. This is possible because the JavaScript interpreter automatically converts the expression within the square brackets to a string, and then retrieves the corresponding property. The following example shows how property names can be created on the fly using bracket notation. In the example, the property name `foo` is created by concatenating the contents of variable `f`, with the string `"oo"`.</p>

```
var f = "f";

object[f + "oo"] = "bar";
```

<p>Bracket notation also allows property names to contain characters that are forbidden in dot notation. For example, the following statement is completely legal in bracket notation. However, if you tried to create the same property name in dot notation, you would encounter a syntax error.</p>

```
object["!@#$%^&*()."] = true;
```

<h5>Accessing Nested Properties</h5>

<p>Properties of nested objects can be accessed by chaining dot and/or bracket references together. For example, the following object contains a nested object named `baz`, which contains another object named `foo`, which has a property named `bar` that holds the value five.</p>

```
var object = {
  baz: {
    foo: {
      bar: 5
    }
  }
};
```

<p>The following expressions access the nested property, `bar`. The first expression uses dot notation, while the second expression uses square bracket notation. The third expression combines both notations to achieve the same result.</p>

```
object.baz.foo.bar;
object["baz"]["foo"]["bar"];
object["baz"].foo["bar"];
```

<p>Expressions like the ones shown in the previous example can cause performance to suffer if used improperly. Evaluating each dot or bracket expression takes time. If the same property is used multiple times, then it makes more sense to access the property once, and then store the value in a local variable for all future uses. The following example uses `bar` many times within a loop. However, instead of wasting time computing the same value over and over, `bar` is stored in a local variable.</p>

```
var bar = object.baz.foo.bar;
var count = 0;

for (var i = 0; i < 100000; i++) {
  count += bar;
  // better than count += object.baz.foo.bar;
}
```

<h5>Functions as Methods</h5>

<p>When a function is used as an object property, it is called a method. Like properties, methods can also be specified in object literal notation. The following example shows how this is accomplished.</p>

```
var object = {
  sum: function(foo, bar) {
    return foo + bar;
  }
};
```

<p>Methods can also be invoked using dot and bracket notation. The following example invokes the `sum()` method from the previous example using both notations.</p>

```
object.sum(1, 2);
object["sum"](1, 2);
```

<h5>Adding Properties and Methods</h5>

<p>Object literal notation is useful for creating new objects, but it cannot add properties or methods to existing objects. Fortunately, adding new data to an object is as simple as creating an assignment statement. The following example creates an empty object. Two properties, `foo` and `bar`, and a method, `baz`, are then added using assignment statements. Note, that this example uses dot notation, but bracket notation would work equally as well.</p>

```
var object = {};

object.foo = 1;
object.bar = null;
object.baz = function() {
  return "hello from baz()";
};
```

<h3>JavaScript Objects</h3>

<b>In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.</b>

<p>In real life, a car is an object. <br>

A car has properties like weight and color, and methods like start and stop:</p>

```
Object                      Properties                          Methods
-----------------------------------------------------------------------
                            car.name = Fiat                     car.start()

                            car.model = 500                     car.drive()
Car
                            car.weight = 850kg                  car.brake()

                            car.color = white	                car.stop()

```

<p>All cars have the same properties, but the property values differ from car to car. <br>

All cars have the same methods, but the methods are performed at different times.</p>

```
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName); /*Dot Notation*/
console.log(person["age"]); /*Bracket Notation*/
```

<h3>Function Declaration</h3>
<b> We can define it in two ways. </b>

```
function  functionName(){
    //Statement
}
```

<b>Or</b>

```
var functionName = function (){
    //Statement
}
```

## Day 3 || Date : 4/2/22

- Statement and Expression
- DRY Principal
- ECMAScript
- Hoisting
- Scope
- Closure
- IIFE - Immediately Invoked Functiuon Expressions

<p>The main difference between `Expression` and `Statement` is `Expression` <b>produce value</b> but `Statement` <b>take action</b></p>
<p>Example of Expression- </p>

```
10 + 10
2 + 2
1 + 2 + 3 * (8**3) - Math.sqrt(4.0)
Math.min(2, 22)
Math.max(3, 92)
Math.round(2.52)
'Masud'
'Mim'
'Masudur' + ' ' + 'Rahman'
null
true
false
2
4
5.0
```

<p>But when we `assign those expressions into a variable` those `will be statement`. Normally it take some actions like loop, conditional. Example of Statement- </p>

```
var assignValue = 10 + 10;

if(10<20)
{
  console.log('True'); //it's a expression
}
else{
  console.log('False'); //it's a expression
}
```

<b>Again</b>

```
for(expressions){
  // Some code here
}

do {
  // Some code here
} while (expressions) {
  // Some code here
}
```

<h5>Function Expression</h5>

`Note` When we assign a function into a variable we call it statement. Such as -

```
var someFunction = function(params) {
  // Some code here
}
```

<h5>Function Statement</h5>

```
function someFunction (params) {
  // Some code here
}
```

<h3>DRY</h3>

`DRY` full from `Don't Reapeat Yourself`.

```
function welcomeMsg (name) {
  console.log('Welcome Mr. ' + name);
}

welcomeMsg ('Masud');
welcomeMsg ('Rafiq');
welcomeMsg ('Rifat');
welcomeMsg ('Musfique');
```

<h3>Scope</h3>

<p>Two types scope in JS</p>

<ol>
<li>Local Scope</li>
<li>Global Scope</li>
</ol>

<h5>Local Scope</h5>

```
function localScope (){
  var local = 'It is local scope';
  console.log(local);
}

localScope();
```

<h5>Global Scope</h5>

```
var global = 'It is global scope';
function globalScope (){
  console.log('Inside a function I am a' + global + 'function');
}

globalScope();
console.log('Inside a function', global)
```

<h5>Automatically Global Variable</h5>
<p>It will be access from anywhere.</p>

```
function autoGlobalVar (){
  name = 'Masudur Rahman';
}

autoGlobalVar();
```

<h5>Lexical Scope</h5>

```
function parentFunction (){
  // Some Code Here
  function childFunction () {
    // Some Code Here
  }
  childFunction ()
}
```

```
function parentFunction (){
  var a = 6;
  function childFunction () {
    var b = 4;
    console.log('Sum : ' + (a+b));
  }
  childFunction ()
}
```

## Day 4 || Date : 4/2/22

<p>Revised the previous three day's topics.<p>

<ul>
<li></li>
</ul>
