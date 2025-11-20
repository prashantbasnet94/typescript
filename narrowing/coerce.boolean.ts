let log = () =>  console.log('truthy')


let a = 0
if(a) log()


let b = NaN
if(b)log()

let c = ""
if(c)log()

let d = null
if(d)log()

let e = undefined
if(e)log()

/*
let f = 0n
if(f) log()
*/

// if(true)log()


//You can always coerce values to booleans by running them through the Boolean function
if(Boolean("heello"))log()
if(Boolean({}))log()


 
