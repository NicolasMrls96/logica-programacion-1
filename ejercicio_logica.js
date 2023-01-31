alert("Hola :)");

let numeros = [];

for (let i = 0; i < 3; i++) {
    let datoAIngresar = parseInt(prompt(`Ingrese el numero ${i + 1}`));
    numeros[i] = datoAIngresar;
}
if (numeros[0] == numeros[1] || numeros[1] == numeros[2] || numeros[2] == numeros[0]) {
    console.log('Si existen numeros iguales');
} else {
    console.log('No existen numeros iguales')
}

console.log(numeros.sort((a, b) => b - a))
console.log(numeros.reverse());


