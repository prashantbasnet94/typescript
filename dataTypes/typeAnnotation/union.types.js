/*

    1. union type is a type formed from two or more typesy
    2. representing value that may be any one of those types
    3. we refer to this constructing types are a union member

    4. The seperator "|" of the union member is allowed before the first member
*/
function printId(id) {
    return id;
}
console.log(printId(101), printId("202"));
/*
union.types.ts:17:9 - error TS2345: Argument of type '{ myID: number; }' is not assignable to parameter of type 'a'.

17 printId({ myID: 22342 });
           ~~~~~~~~~~~~~~~
Found 1 error in union.types.ts:17

printId({ myID: 22342 });
*/
function test(textOrNumberorBoolean) {
    return false;
}
test(1);
test('2');
test(false);
/*
    it's easy to provide a value matching union typea, simply provide a type matching any of unions members

    if you have a value of union type how would you work with it?
        1. typescript will only allow an operation if it's valid for every member of the union
    
    if you have a union type of string | number
    you cannot use .toLowerCase on the input, as it's on;y available on the string

    function printId(input: string | number ){
        input.toLowerCase()

  Property 'toUpperCase' does not exist on type 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'.


    }



    so what's the solution?
        the solution is to narrow the union with code

*/
function narrow(id) {
    if (typeof id === 'string') {
        id.toLocaleLowerCase();
    }
    else if (typeof id === 'number') {
        id += 1;
    }
}
function example(input) {
    if (Array.isArray(input)) {
        return "Welcome lone traveler " + input.join('-');
    }
    else {
        return "Welcome lone traveler " + input;
    }
}
console.log(example(["prashant", "basnet"]), example("prashantBasnet"));
