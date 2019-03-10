let num1: number = 6;
let num2: number = 0b0101011;

console.log(num1);
console.log(num2);

let color: string = "blue";
console.log(color);
color = "red";
console.log(color);

// Multiple strings and embedded expressions
const fullName: string = "Anton Glukhov";
const age: number = 34;
const sentense: string = `I'm ${fullName}, soon I'll be ${age}



See you!`;
console.log(sentense);

// Arrays
let list1: number[] = [3, 5, 7];
list1.forEach(element => {
    console.log(element);
});

// Arrays
let list2: Array<number> = [9, 11, 13];
list2.forEach(element => {
    console.log(element);
});

// Tuple
let myTuple: [string, number, boolean];
myTuple = ["Dog", 12, true];
myTuple.forEach(element => {
    console.log(element);
});

console.log(myTuple[0].substring(1));

// Enum
enum Color {Red = 2, Yellow, Blue};
let myColor: Color = Color.Red;

console.log(Color[myColor]);

// Any
let notSure: any = 56;
notSure ="WTF";
notSure = false;

// Void func
function myVoid(): void {
    console.log("Void func");
}
myVoid();

// Object
function create(obj: object | null): void {

};
create({prop: 0, brop: 1});
create(null);

// Type assertions
let anyType: any = "This is string!";
let strLength: number = (<string>anyType).length;
console.log(strLength);
let oneMoreLength: number = (anyType as string).length;
console.log(strLength);