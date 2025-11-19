/*

    1. when we declare a var using
        a. const
        b. let
        c. var
         we can optionally add its type annotation to explictly specify the type of variable

    
    2. typescript does not use type on the left like
        int a = 5
    3. type annotation is always go after the thing being typed

    4. in mostCases this is not needed typescript automatically infer types in the code

*/
var myName = "Bob";
var myNmae = "Prashant";
/*
Function:

1. Parameter Type Annotationn: we can define type annotation after the param, to declare what type of param the function accepts



return type annotation:
    1. declare the type annotation after the function is typed

    function greet(): string{
        return "hello"
    }
*/
function greet(name) {
    return "hello" + name;
}
/*
define.ts:34:7 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
34 greet(43)
         ~~
Found 1 error in define.ts:34
*/
greet("43");
function printCord(pt) {
    return 1;
}
function printCord2(pt) {
    return "1";
}
function process(input) {
    return "".concat(input.firstName, "+ ").concat(input.lastName, " + ").concat(input.age);
}
var a = process({
    firstName: "prashant",
    lastName: "basnet"
});
console.log(a);
