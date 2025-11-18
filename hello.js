//it needs some way to strip out or transform any TypeScript-specific code so that you can run it. 
//Most TypeScript-specific code gets erased away, and likewise, here our type annotations were completely erased.
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
