console.log('Script file is loaded.');

//Single line comment

/* 
Multiple
lines 
of comment
*/

//First part: 

numberOfLegs = 2
2
let 
VM378:1 Uncaught ReferenceError: let is not defined
    at <anonymous>:1:1
(anonymous) @ VM378:1
let numberOfLegs = 4
undefined
numberOfLegs
4
let name = Emese
VM456:1 Uncaught ReferenceError: Emese is not defined
    at <anonymous>:1:12
(anonymous) @ VM456:1
age / 3
11
anotherAge /3
VM527:1 Uncaught ReferenceError: anotherAge is not defined
    at <anonymous>:1:1
(anonymous) @ VM527:1
let name = 'Emese' 
undefined
name
"Emese"
name ='Egg'
"Egg"
let sentence = "That person's cat."
undefined
sentence = 'He said: "Ok."'
"He said: "Ok.""
let backtick = 'backtick'
undefined
let oldEnoughToDrive = false
undefined
let oldEnoughToDrive = true
undefined
33 + 5
38
'Hello' + name
"HelloEgg"
'Hello,' + name + 43 'another string'
VM1041:1 Uncaught SyntaxError: Unexpected string
'Hello,' + name + 43 + 'another string'
"Hello,Egg43another string"
'19' + '86'
"1986"
true && true
true
true && false
false
false && false
false
true || false
true
false || false
false
"treue && (false ||  (true && false))"
"treue && (false ||  (true && false))"
treue && (false ||  (true && false))
VM1437:1 Uncaught ReferenceError: treue is not defined
    at <anonymous>:1:1
(anonymous) @ VM1437:1
true && (false ||  (true && false))
false
colors [0] 
VM1515:1 Uncaught ReferenceError: colors is not defined
    at <anonymous>:1:1
(anonymous) @ VM1515:1
colors 
VM1534:1 Uncaught ReferenceError: colors is not defined
    at <anonymous>:1:1
(anonymous) @ VM1534:1
let colors = ["orange",  "blue", "green"]
undefined
colors[0]
"orange"
colors[1]
"blue"
colors[2]
"green"
let pickedColors = 2
undefined
colors[pickedColor]
VM1788:1 Uncaught ReferenceError: pickedColor is not defined
    at <anonymous>:1:8
(anonymous) @ VM1788:1
let pickedColor = 2
undefined
colors[pickedColor]
"green"
colors[1] = yellow
VM1885:1 Uncaught ReferenceError: yellow is not defined
    at <anonymous>:1:13
(anonymous) @ VM1885:1
colors[1] = 'yellow'
"yellow"
colors
(3) ["orange", "yellow", "green"]
color.lengts
VM1958:1 Uncaught ReferenceError: color is not defined
    at <anonymous>:1:1
(anonymous) @ VM1958:1
colors.length
3
name
"Egg"
name.length
3
colors[3] = 'lime'
"lime"
colors.push('purple')
5
colors
(5) ["orange", "yellow", "green", "lime", "purple"]
colors[colors.length] = 'cyan'
"cyan"
colors.push(colors)
7
colors
(7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]
let notGoodExample =['text', 123, true]
undefined
let person ={}
undefined
let person = { name: 'Emese', 
              age: 33, 
              favoriteColors: colors, 
              oldEnoughToDrive: true
             }
undefined
person
{name: "Emese", age: 33, favoriteColors: Array(7), oldEnoughToDrive: true}age: 33favoriteColors: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]0: "orange"1: "yellow"2: "green"3: "lime"4: "purple"5: "cyan"6: (7) ["orange", "yellow", "green", "lime", "purple", "cyan", Array(7)]length: 7__proto__: Array(0)name: "Emese"oldEnoughToDrive: true__proto__: Object
person.name = 'Lilla'
"Lilla"
person
{name: "Lilla", age: 33, favoriteColors: Array(7), oldEnoughToDrive: true}
person.food = 'pizza'
"pizza"
person
{name: "Lilla", age: 33, favoriteColors: Array(7), oldEnoughToDrive: true, food: "pizza"}