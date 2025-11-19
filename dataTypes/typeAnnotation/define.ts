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

let myName : string = "Bob"
let myNmae = "Prashant"


/*
Function: 

1. Parameter Type Annotationn: we can define type annotation after the param, to declare what type of param the function accepts



return type annotation:
    1. declare the type annotation after the function is typed

    function greet(): string{
        return "hello"
    }
*/


function greet(name: string){
    return `hello` + name
}
/*
define.ts:34:7 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
34 greet(43)
         ~~
Found 1 error in define.ts:34
*/

greet("43")



function printCord(pt : {x: number, y:number}): number {
    return 1
}

function printCord2(pt: {x: number; y: number}) : string {
    return "1"
}

/*

You can use , or ; to separate the properties,

Optional Properties:
    1. Object types can also specify that some or all of it's properties are optional 
    2. to do this add ? after the property name


*/

type obj = {
    firstName: string,
    lastName: string,
    age?: number
}

function process(input: obj): string {
 return `${input.firstName}+ ${input.lastName} + ${input?.age}`
}


let a = process({
    firstName: "prashant",
    lastName: "basnet"
})

console.log(a)