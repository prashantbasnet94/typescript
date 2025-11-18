/*
TypeScript has the ability to rewrite code from newer versions of ECMAScript to older ones such as ECMAScript 3 or ECMAScript 5 (a.k.a. ES5).

1. By default TypeScript targets ES5, an extremely old version of ECMAScript. 
2. We could have chosen something a little bit more recent by using the target option.

This process of moving from a newer or “higher” version of ECMAScript down to an older or “lower” one is sometimes called downleveling.

*/
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
