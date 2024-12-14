// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named IIFE
    console.log(`DB connected`);
})();//without semicolon it will throw error

((name) => {
    console.log(`DB connected 2 ${name}`);
})("subhra")//anonymous IIFE 