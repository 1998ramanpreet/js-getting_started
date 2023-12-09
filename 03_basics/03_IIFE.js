// Immediately Invoked Function Expressions (IIFE)
// To avoid pollution from global scoped variables anf functions whuch should be immediately invoked

(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB Connected to ${name}`);
})('Raman');