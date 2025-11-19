/*
 any:
    if you don't want particular value to cause type error we can use any

1. call it as function
2. assign it a value of any type
3. pretty much anything that is syntatically legal


it's useful to convice the typescript that particallar data type is okay, without having to write a long data type
*/

let data: any = {x: 0}

data()
data.fun()
data()
data.y = 2
data = false


const n : number = data

