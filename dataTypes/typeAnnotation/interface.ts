/*
1. An interface declaration is another way to name an object type:


*/


interface PointI {
    x: number,
    y: number
}


function coordinate(input: PointI){
    return ' ' + input.x + input.y
}
coordinate({x: 100, y: 200})