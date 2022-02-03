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
- Objecy
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
<b>JavaScript provides two notations for accessing object properties. The first, and most common, is known as dot notation. Under dot notation, a property is accessed by giving the host object’s name, followed by a period (or dot), followed by the property name.The following example shows how dot notation is used to read from and write to a property. If `object.foo` initially held the value one, then its value would become two after executing this statement. Note that if `object.foo` did not already have a value, then it would be `undefined`. </b>
```
object.foo = object.foo + 1;
```
<b>The alternate syntax for accessing object properties is known as bracket notation. In bracket notation, the object name is followed by a set of square brackets. Inside the square brackets, the property name is specified as a string. The previous example of dot notation has been rewritten below to use bracket notation. While the code may look different, it is functionally equivalent to the previous example.</b>
```
object["foo"] = object["foo"] + 1;
```
<b>Bracket notation is more expressive than dot notation because it allows a variable to specify all or part of the property name. This is possible because the JavaScript interpreter automatically converts the expression within the square brackets to a string, and then retrieves the corresponding property. The following example shows how property names can be created on the fly using bracket notation. In the example, the property name `foo` is created by concatenating the contents of variable `f`, with the string `"oo"`.</b>
