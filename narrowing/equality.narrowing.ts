function example(x: string | number , y: string | boolean){
    if(x === y){
        //string is the only common type that both x and y could take on
        return x.toLowerCase() + y.toUpperCase()
    }else{
        console.log(x , y)
    }
    return false
}


interface Container{
    value: number | null | undefined
}


function test(container: Container, factor: number){
    if(container.value != null){
         container.value *= factor
    }
}


type Bird = {fly: () => {}}
type Fish = {swim: () => {}}

function animal(animal: Bird | Fish){
    if("swim" in animal){
        return animal.swim()
    }
    return animal.fly()
}

// human can do both swim or fly

type Human = {fly?  : () => void, swim? : () => void}

function move(animal: Bird | Fish | Human){
    if('swim' in animal){
        animal
    }else{
        animal
    }
}


function logValue(input : Date | String){
    if(input instanceof Date){
        input.toDateString()
    }else{
        input.toUpperCase()
    }
}