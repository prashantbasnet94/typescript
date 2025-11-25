/*
    1. function are values , just like other values


    Typescript has many ways:    how to write types that define functions?


    

*/


function greet(fn: (a: string) => void) {
    return true
}

// (a:string) => void, is a function that takes string & that doesn't have return type

type GreetFunction = (a: string) => void

function greet2(fn: GreetFunction) { }

type DescribeFunction = {
    description: string,
    (a: number): boolean
}
function doSomething(fn: DescribeFunction) {
    return fn.description + " abc " + fn(6)
}

function myFunc(a: number) {
    return a > 3
}

myFunc.description = "hello world"


console.log(doSomething(myFunc))


/*
 
    now let's implement date 
    new Date(String)
    or date(number)

 */


type CallOrConstruct = {
    // anyone who calls  c("something") will get a string.
    (a: number) : string,
    // anyone who calls new c("something") will get a Date obj.
    new (s: string) : Date

}
function process(c: CallOrConstruct) {
    console.log(c(10))
    console.log(new c("10"))
}

process(Date)

