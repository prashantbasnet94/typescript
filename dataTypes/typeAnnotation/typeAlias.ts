/*
    without writing object types & union types  directly into type annotation.
    But it's common be able to use the same types in multiple places & refer to it by single name

    type alias is a name for any type
*/

type point = {
    x: number,
    y: number
}

type obj = { 
    firstName: string;
    secondName:string;
    age? : number
}

type union = {
    a: point | obj
}