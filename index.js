var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x + y)
};

function solveRect(l, b) {
    console.log("Solving for rec with l" + l + "b" + b)
    if (l < 0 || b < 0) {
        console.log("dimension should be zero")
    } else {
        console.log(`Perimeter of rect is ${rect.perimeter(l,b)}`)
        console.log(`Area is ${rect.area(l,b)}`)
    }
}

solveRect(3, 3);
solveRect(-3, 4);