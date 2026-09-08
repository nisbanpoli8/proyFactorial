function factorial(n) {
    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado = resultado * i;
    }

    return resultado;
}

let numero = parseInt(prompt("Ingresa un número: "));

