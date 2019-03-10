var num1 = 6;
var num2 = 43;
console.log(num1);
console.log(num2);
var color = "blue";
console.log(color);
color = "red";
console.log(color);
// Multiple strings and embedded expressions
var fullName = "Anton Glukhov";
var age = 34;
var sentense = "I'm " + fullName + ", soon I'll be " + age + "\n\n\nSee you!";
console.log(sentense);
// Arrays
var list1 = [3, 5, 7];
list1.forEach(function (element) {
    console.log(element);
});
// Arrays
var list2 = [9, 11, 13];
list2.forEach(function (element) {
    console.log(element);
});
// Tuple
var myTuple;
myTuple = ["Dog", 12, true];
myTuple.forEach(function (element) {
    console.log(element);
});
console.log(myTuple[0].substring(1));
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Yellow"] = 3] = "Yellow";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var myColor = Color.Red;
console.log(Color[myColor]);
// Any
var notSure = 56;
notSure = "WTF";
notSure = false;
// Void func
function myVoid() {
    console.log("Void func");
}
myVoid();
// Object
function create(obj) {
}
;
create({ prop: 0, brop: 1 });
create(null);
// Type assertions
var anyType = "This is string!";
var strLength = anyType.length;
console.log(strLength);
var oneMoreLength = anyType.length;
console.log(strLength);
