/*
 * Crea un programa que sea capaz de solicitarte un número y se
 * encargue de imprimir su tabla de multiplicar entre el 1 y el 10.
 * - Debe visualizarse qué operación se realiza y su resultado.
 *   Ej: 1 x 1 = 1
 *       1 x 2 = 2
 *       1 x 3 = 3
 *       ... 
 */

function tabla(num, rang) {
    let result = []
    for (let i = 1; i <= rang; i++) {
        const mult = num * i
        result.push(`${num} * ${i} = ${mult}`)
    }
    console.log(result)

    return result
}
function multiplicacion() {
    document.getElementById('resultado').innerHTML = ""
    const num = document.getElementById('number').value
    const rang = document.getElementById('ranger').value
    if (rang > 0) {
        const resultados = tabla(num, rang)
        resultados.forEach(result => {
            document.getElementById('resultado').innerHTML += `${result} <br>`
        });
    } else {
        document.getElementById('resultado').innerHTML = "Debe ingresar el rango"
    }
}

