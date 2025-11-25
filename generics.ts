/*

    1. write a generis function that return the first eleemnt
*/

function firstElement(arr: any[]){
    return arr[0]
}

/*
    this is bad because, we don't know what the type is & typescrpt cann't help you

        1. return type becomes any
        2. you can actidentally treat arr as string, object or array & ts won't help you



*/
const x = firstElement([1, 2, 3]); // any
// x.toUpperCase(); // no error, but will crash at runtime

// generics is superiror

function gFirstElement <Type>(arr: Type[]) : Type{
    return arr[0]
}


function generics<Banana>(arr: Banana[]) : Banana{
    return arr[1]
}

function test<Prashant>(arr: Prashant[]) : Prashant{
    return arr[0]
}

function a <T>(arr: T[]) : T{
    return arr[0]
}
//“This function works for ANY type. Whatever type you give me, I will remember it and reuse it
function b<Monkey>(arr: Monkey[]): Monkey{
    return arr[0]
}

//function functionName<Generis>(parameters): ReturnType

//firstElement<_____>(arr: ____[])


test([1, 2, 3, 4])
test(['1','2','3'])
test([true, false, true, false])

// we din;t have to specify the type, type was inferred - choosed automatically by ts


function longest1<T>(arr: T[]): T{
    return arr[0]
}

function longest<T extends {length: number}>(a: T, b: T){
    if(a.length < b.length){
        return b
    }else return a
}

console.log(longest("hello", "world"))
console.log(longest([1, 2, 3], [0]))
console.log(longest({length: 20}, {length: 30}))



function smaller <T extends {weight: number}>(a: T, b: T){
    if(a.weight < b.weight){
        return a
    }else return b
}


console.log(smaller({weight: 10}, {weight: 50}))
// console.log(smaller(10, 20))



function combine<T>(arr1: T[], arr2: T[]): T[]{
    return arr1.concat(arr2)
}

//S cannot infer a union on its own here
//Both must be same type T.
const arr = combine([1, 2, 3], ['hello'])


// here we explictly tell ts, let it be string or number
const arr2 = combine<string | number>([1, 2, 3], ['hello'])