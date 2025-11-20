function printAll(strs: string | string[] | null) {
    if (Array.isArray(strs)) {
        for (const s of strs) {

        }
    } else if (typeof strs === 'string') {
        console.log(strs)
    } else {
        // do nothing
    }
}

//vs

function printAll2(strs: string | string[] | null) {
    if (strs && typeof strs === 'object') {
        for (const char of strs) {
            console.log(char)
        }
    } else if (strs === 'string') {
        console.log(strs)
    }
}


//vs

function printAll3(strs: string | string[] | null) {
    //no longer be handling the empty string case correctly.
    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        }else if(typeof strs === 'object'){
            console.log(strs)
        }
    }
}

/*
1. TypeScript can often help you catch bugs early on
if you choose to do nothing with a value

If you want, you can make sure you handle situations like these with a linter.
*/